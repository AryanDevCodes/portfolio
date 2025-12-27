import BlogEditor from "@/pages/BlogEditor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Blog Post | Admin",
  description: "Create a new blog post",
};

export default function NewBlogPage() {
  return <BlogEditor />;
}
