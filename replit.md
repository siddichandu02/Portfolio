# Portfolio Website

## Overview

This is a modern full-stack portfolio website built with React and Express.js. The application features a sleek frontend showcasing skills, projects, and experience, with a contact form backend powered by Node.js. The project uses contemporary web technologies including Drizzle ORM for database management, shadcn/ui for component styling, and TanStack Query for API state management.

## System Architecture

The application follows a monorepo structure with clear separation between client and server components:

- **Frontend**: React-based SPA with Vite build tooling
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM (via Neon serverless)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Deployment**: Replit autoscale with production builds

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with development HMR
- **UI Library**: shadcn/ui (Radix UI primitives + Tailwind)
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for API calls
- **Styling**: Tailwind CSS with custom design system

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database ORM**: Drizzle with PostgreSQL
- **Email Service**: Nodemailer for contact form notifications
- **Validation**: Zod schemas shared between client/server
- **Session Storage**: In-memory storage (fallback to PostgreSQL)
- **Development**: Hot reload with tsx

### Database Schema
- **Contacts Table**: Stores contact form submissions
  - Fields: id, name, email, subject, message, created_at
  - Validation: Shared Zod schemas for type safety

### Component System
- **Design System**: Based on shadcn/ui with custom theme
- **Theme Support**: Light/dark mode with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA compliant components from Radix UI

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form with validation
   - Form data validated with Zod schema
   - POST to `/api/contact` endpoint
   - Server validates and stores in database
   - Email notification sent via Nodemailer
   - Success/error feedback to user

2. **Portfolio Display**:
   - Static content rendered from component data
   - Skills, projects, and experience sections
   - Modal overlays for detailed project views
   - Theme switching with localStorage persistence

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Environment variable `DATABASE_URL`
- **ORM**: Drizzle with TypeScript code generation

### Email Service
- **SMTP Configuration**: Configurable via environment variables
- **Fallback Behavior**: Contact form works without email service
- **Variables**: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, `TO_EMAIL`

### UI Components
- **Radix UI**: Headless component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide Icons**: Consistent icon library

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Port**: 5000 (configurable)
- **Features**: Hot reload, error overlay, development logging

### Production Build
- **Client Build**: Vite production build to `dist/public`
- **Server Build**: esbuild bundle to `dist/index.js`
- **Static Assets**: Served from Express for SPA routing
- **Environment**: PostgreSQL module enabled in Replit

### Environment Configuration
- **Development**: Uses Vite dev server with Express API
- **Production**: Serves built React app from Express static middleware
- **Database**: Drizzle migrations with `npm run db:push`

## Changelog
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.