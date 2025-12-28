
import type { Metadata } from 'next';
import Blogs from '@/pages/Blogs';

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
