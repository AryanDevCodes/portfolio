import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { TechBadge } from "./TechBadge";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <article className="group relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-subtle">
        {/* Project Number */}
        <span className="absolute top-6 right-6 font-mono text-6xl font-bold text-muted/20 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-4">
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </a>
              <Link href={`/projects/${project.slug}`} className="p-2 text-muted-foreground group-hover:text-primary transition-colors">
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <Link href={`/projects/${project.slug}`}>
            <p className="text-muted-foreground mb-6 leading-relaxed cursor-pointer">
              {project.description}
            </p>
          </Link>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 5).map((tech) => (
              <TechBadge key={tech} tech={tech} variant="outline" />
            ))}
            {project.tech.length > 5 && (
              <TechBadge tech={`+${project.tech.length - 5}`} variant="ghost" />
            )}
          </div>

          {/* Highlights */}
          <ul className="space-y-2">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">▸</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </motion.div>
  );
}
