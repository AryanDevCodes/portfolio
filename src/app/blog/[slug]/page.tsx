import React from "react";
import { blogs } from "@/lib/blogs";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const BlogDetail = ({ slug }: { slug: string }) => {
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  return {
    title: blog ? `${blog.title} | Aryan Raj` : "Blog | Aryan Raj",
    description: blog?.description ?? "Read the latest blog posts",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}
