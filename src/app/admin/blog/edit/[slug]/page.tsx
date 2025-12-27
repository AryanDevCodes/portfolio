import BlogEditor from "@/pages/BlogEditor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog Post | Admin",
  description: "Edit an existing blog post",
};

export default function EditBlogPage() {
  return <BlogEditor />;
}
