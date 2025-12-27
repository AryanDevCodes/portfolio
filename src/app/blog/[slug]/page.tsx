import BlogDetail from "@/pages/BlogDetail";
import { blogs } from "@/lib/blogs";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};


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

export default function BlogDetailPage() {
  return <BlogDetail />;
}
