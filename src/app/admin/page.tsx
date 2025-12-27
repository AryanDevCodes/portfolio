import AdminDashboard from "@/pages/AdminDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Blog Management | Aryan Raj",
  description: "Admin panel for managing blog posts",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
