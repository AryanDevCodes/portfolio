// app/blog/page.tsx
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Dynamically import the client-side Blogs component
// to avoid "use client" errors in the server component
const Blogs = dynamic(() => import('@/pages/Blogs'), { ssr: false });

export const metadata: Metadata = {
  title: "Blog | Aryan Raj - Backend Engineering Insights",
  description:
    "Technical articles about backend development, Java, Spring Boot, system architecture, and software engineering best practices.",
  openGraph: {
    title: "Blog - Aryan Raj",
    description:
      "Technical insights on backend engineering, Java, Spring Boot, and scalable systems.",
    type: "website",
  },
};

export default function BlogsPage() {
  return <Blogs />;
}
