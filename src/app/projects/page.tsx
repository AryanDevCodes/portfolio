'use client';

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { TechBadge } from "@/components/TechBadge";
import { projects, additionalProjects } from "@/lib/projects";
import { projectsPage } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="font-mono text-primary text-sm mb-4">{projectsPage.heading}</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {projectsPage.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {projectsPage.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <h3 className="font-mono text-muted-foreground text-sm mb-8">{projectsPage.featuredHeading}</h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <h3 className="font-mono text-muted-foreground text-sm mb-8">{projectsPage.otherHeading}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <TechBadge key={t} tech={t} variant="outline" />
                  ))}
                </div>
                <p className="text-sm text-primary font-mono">{project.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
