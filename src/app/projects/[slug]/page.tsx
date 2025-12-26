import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { ProjectDetailClient } from "@/components/ProjectDetailClient";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Button asChild>
            <Link href="/projects">Back to projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
