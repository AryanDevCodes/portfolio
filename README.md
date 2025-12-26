# Aryan's Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Technologies Used

This project is built with:

- **Next.js 15** - React framework with server-side rendering
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd aryan-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Next.js app directory (pages and routes)
│   ├── layout.tsx    # Root layout with providers
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   ├── projects/     # Projects pages
│   └── contact/      # Contact page
├── components/       # Reusable UI components
├── lib/              # Utility functions and data
└── hooks/            # Custom React hooks
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `.next` directory. Deploy to Vercel, Netlify, or any platform that supports Next.js.
