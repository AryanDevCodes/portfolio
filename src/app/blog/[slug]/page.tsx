import React from "react";
import { blogs } from "@/lib/blogs";
import type { Metadata } from "next";

// 1️⃣ BlogDetail component
type BlogDetailProps = {
  slug: string;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ slug }) => {
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

// 2️⃣ Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog | Aryan Raj",
      description: "Read the latest blog posts and articles",
    };
  }

  return {
    title: `${blog.title} | Aryan Raj`,
    description: blog.description,
  };
}

// 3️⃣ Page component
type BlogPageProps = {
  params: { slug: string };
};

export default function BlogDetailPage({ params }: BlogPageProps) {
  return <BlogDetail slug={params.slug} />;
}
