# Portfolio Website Setup Instructions

## What's Included

This portfolio website features:
- Modern neuromorphic design with soft shadows and 3D effects
- Colorful theme (purple, mint, orange, coral) - no pink as requested
- Interactive project cards that open detailed modals when clicked
- Contact form with email functionality
- Skills section with animated progress bars
- Experience timeline
- Education and certifications sections
- Dark/light theme toggle
- Fully responsive design

## Getting Started

1. **Extract the files** to your desired location

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5000`

## Customizing Your Content

### Personal Information
Edit `client/src/pages/home.tsx` and update:
- Your name (currently "Alex Chen")
- Location
- Bio and introduction text
- Profile photo URL

### Projects
In the `projects` array, add your real projects with:
- Title and descriptions
- Technology stack
- GitHub and live demo URLs
- Challenges and solutions you faced

### Skills
Update the `skills` array with your actual technical skills and proficiency levels (0-100).

### Experience
Replace the `experiences` array with your work history.

### Education & Certifications
Update the `certifications` array with your actual credentials.

## Project Card Interaction

When users click on project cards, they see a detailed modal with:
- Full project description
- Technology stack badges with colors
- Challenges you faced
- Solutions you implemented
- GitHub and live demo buttons

This provides much more information than just showing everything on the main page.

## Email Setup (Optional)

To enable contact form emails, set these environment variables:
```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
FROM_EMAIL=noreply@yoursite.com
TO_EMAIL=your-contact-email
```

## Color Customization

The website uses a vibrant color palette. To modify colors, edit `client/src/index.css`:
- `--primary`: Purple theme color
- `--mint`: Green accent
- `--orange`: Orange highlights  
- `--coral`: Red-orange accent

## Deployment

This is a full-stack application that can be deployed to:
- Vercel
- Netlify Functions
- Railway
- Any Node.js hosting platform

The build process creates optimized production files ready for deployment.

## Support

If you need help customizing the website, the code is well-structured and commented. The main sections are clearly separated in the home page component.