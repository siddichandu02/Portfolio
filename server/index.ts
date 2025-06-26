import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import path from "path";
import { fileURLToPath } from "url"; // ✅ NEW

const __filename = fileURLToPath(import.meta.url); // ✅ NEW
const __dirname = path.dirname(__filename); // ✅ NEW

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: any;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  const server = createServer(app);

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // ✅ Serve Vite frontend from /dist/client
    const distPath = path.join(__dirname, "../dist/client"); // ✅ correct
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const port = process.env.PORT || 5000;
  server.listen(Number(port), "0.0.0.0", () => {
    log(`🚀 Server is listening on http://0.0.0.0:${port}`);
  });
})();
