import React from "react";

type BlogDetailProps = {
  slug: string;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ slug }) => {
  // Your component logic here
  return (
    <div>
      {/* Render blog details using the slug */}
      <h1>Blog Detail for: {slug}</h1>
    </div>
  );
};
import { blogs } from "@/lib/blogs";
import type { Metadata } from "next";



export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
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

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return <BlogDetail slug={params.slug} />;
}
