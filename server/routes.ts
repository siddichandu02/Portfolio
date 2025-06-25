import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Save to storage
      const contact = await storage.createContact(contactData);
      
      // Send email notification (if email service is configured)
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "localhost",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.FROM_EMAIL || "noreply@portfolio.com",
          to: process.env.TO_EMAIL || "hello@example.com",
          subject: `Portfolio Contact: ${contactData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message.replace(/\n/g, '<br>')}</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, id: contact.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ error: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
