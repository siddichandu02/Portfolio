# Portfolio Website

A modern full-stack portfolio website with neuromorphic design, built for software engineers.

## Features

- **Neuromorphic Design**: Soft shadows and elevated elements creating a tactile, 3D appearance
- **Colorful Theme**: Vibrant color palette with purple, mint, orange, and coral accents
- **Interactive Projects**: Click on project cards to view detailed information in modals
- **Contact Form**: Functional contact form with email notifications
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach works on all devices
- **Smooth Animations**: Skill progress bars, hover effects, and transitions

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with custom neuromorphic utilities

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (optional for email):
   ```
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email
   SMTP_PASS=your-password
   FROM_EMAIL=noreply@yoursite.com
   TO_EMAIL=your-contact-email
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and configuration
├── server/                # Backend Express server
├── shared/                # Shared types and schemas
└── components.json        # shadcn/ui configuration
```

## Customization

### Colors
Edit `client/src/index.css` to modify the color scheme:
- `--primary`: Main brand color (purple)
- `--mint`: Success/accent color
- `--orange`: Warning/highlight color
- `--coral`: Secondary accent color

### Content
Update your personal information in `client/src/pages/home.tsx`:
- Skills array
- Projects array
- Experience array
- Certifications array

### Project Modal Content
When users click on project cards, they see:
- Full project description
- Technology stack badges
- Challenges faced
- Solutions implemented
- Links to GitHub and live demo

## Email Configuration

The contact form supports email notifications through SMTP. Configure your email service:

1. **Gmail**: Use App Passwords with SMTP settings
2. **SendGrid**: Use API key authentication
3. **Custom SMTP**: Any SMTP service

## Deployment

This project is designed for deployment on platforms that support Node.js:
- Vercel
- Netlify
- Railway
- Replit

## License

MIT License - feel free to use this template for your own portfolio!