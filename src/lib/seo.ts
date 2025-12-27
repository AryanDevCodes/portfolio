import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Aryan Raj - Backend Engineer',
  description: 'Backend Engineer specializing in Java, Spring Boot, and scalable system architecture. Building secure, production-grade systems with modern cloud infrastructure.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aryanraj.dev',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/AryanDevCodes',
    linkedin: 'https://www.linkedin.com/in/rajaryanse',
    email: 'mailto:rajaryan.codes@gmail.com',
  },
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
  ],
  author: 'Aryan Raj',
};

export function generateSEOMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: type,
      locale: 'en_US',
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
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
    alternates: {
      canonical: metaUrl,
    },
  };
}
