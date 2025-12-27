import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Aryan Raj - Backend Engineer & System Architect',
    template: '%s | Aryan Raj',
  },
  description: 'Backend Engineer specializing in Java, Spring Boot, and scalable system architecture. Building secure, production-grade systems with modern cloud infrastructure.',
  keywords: [
    'Backend Engineer',
    'Java Developer',
    'Spring Boot',
    'System Architecture',
    'REST API',
    'Microservices',
    'Cloud Computing',
    'Software Engineer',
    'Full Stack Developer',
    'Web Development',
    'PostgreSQL',
    'Docker',
    'AWS',
    'WebSockets',
    'Real-time Systems',
  ],
  authors: [{ name: 'Aryan Raj', url: 'https://github.com/AryanDevCodes' }],
  creator: 'Aryan Raj',
  publisher: 'Aryan Raj',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Aryan Raj - Backend Engineer & System Architect',
    description: 'Backend Engineer specializing in Java, Spring Boot, and scalable system architecture.',
    siteName: 'Aryan Raj Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aryan Raj - Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Raj - Backend Engineer',
    description: 'Backend Engineer specializing in Java, Spring Boot, and scalable systems.',
    images: ['/og-image.png'],
    creator: '@aryandevcodes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};
