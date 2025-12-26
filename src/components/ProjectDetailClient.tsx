'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Layers, Zap, Shield, BookOpen, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TechBadge } from "@/components/TechBadge";
import { Project } from "@/lib/projects";

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background theme-transition">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              <span className="font-mono text-sm">Back to projects</span>
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {project.longDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="font-mono">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
              {project.live && (
                <Button asChild variant="outline" className="font-mono">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechBadge key={tech} tech={tech} size="md" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      {project.overview && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.overview}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Achievements */}
      {project.achievements && project.achievements.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Trophy className="text-primary" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Key Achievements</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-card border border-border text-center"
                    >
                      <p className="text-foreground font-medium">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Core Features */}
      {project.coreFeatures && project.coreFeatures.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-5xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="text-primary" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Core Features</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.coreFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      {feature.icon && (
                        <span className="text-2xl mb-3 block">{feature.icon}</span>
                      )}
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Tech Categories */}
      {project.techCategories && project.techCategories.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layers className="text-primary" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.techCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-card border border-border"
                    >
                      <h3 className="font-mono text-primary text-sm mb-4">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <TechBadge key={item} tech={item} variant="outline" size="sm" />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Roles */}
      {project.roles && project.roles.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="text-primary" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">User Roles</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.roles.map((role, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-card border border-border"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{role.role}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Problem */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.problem}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Layers className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Architecture</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.architecture}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features (Highlights) */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Key Highlights</h2>
              </div>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary font-mono text-lg">▸</span>
                    <span className="text-muted-foreground text-lg">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-primary font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-muted-foreground">{challenge}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">What I Learned</h2>
              </div>
              <ul className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary font-mono text-lg">→</span>
                    <span className="text-muted-foreground text-lg">{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="font-mono">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Projects
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
