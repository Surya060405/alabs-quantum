# Quantum Labs - Quantum Computing Solutions Platform

A modern web platform showcasing Adyakshar Laboratories' quantum computing solutions and services, including QuantaForge™ - our comprehensive suite of quantum development tools.

## About

This platform serves as the digital presence for Quantum Labs, featuring our flagship products:
- **QuantaForge Compiler Studio**: Advanced quantum circuit compilation and optimization
- **QuantaForge Secured Tokenization**: Enterprise-grade quantum security solutions
- **QuantaForge Simulation & AI**: High-performance quantum simulation tools

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── assets/          # Images, logos, and static assets
├── components/      # Reusable UI components
│   ├── quantaforge/ # QuantaForge-specific components
│   └── ui/          # Base UI components (shadcn)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── pages/           # Page components and routes
│   ├── features/    # Feature-specific pages
│   └── quantaforge/ # QuantaForge product pages
└── main.tsx         # Application entry point
```

## Key Features

- Responsive design optimized for all devices
- Modern UI with smooth animations and transitions
- SEO-optimized with proper meta tags and semantic HTML
- Accessible components following WCAG guidelines
- Dark mode support
- Performance optimized with code splitting

## Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` directory.

## Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **AWS S3 + CloudFront**: Upload build files to S3 bucket
- **GitHub Pages**: Use with appropriate base path configuration

The project includes a `vercel.json` configuration for seamless Vercel deployment with proper routing support.

## Environment Configuration

For production deployments, ensure proper environment variables are configured for:
- API endpoints (if applicable)
- Analytics tracking
- Third-party integrations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

**Adyakshar Laboratories**  
Email: info@adyaksharlabs-quantum.com

## License

Proprietary - All rights reserved by Adyakshar Laboratories
