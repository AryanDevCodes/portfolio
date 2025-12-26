'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { TechBadge } from "@/components/TechBadge";
import { HeroIllustration } from "@/components/HeroIllustration";
import { projects } from "@/lib/projects";
import { skillCategories } from "@/lib/skills";
import { personalInfo, ctaSection, homeSections } from "@/lib/portfolio-data";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-primary mb-4"
              >
                {personalInfo.heroTitle}
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-foreground mb-4"
              >
                {personalInfo.name}.
              </motion.h1>

              {/* Tagline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6"
              >
                {personalInfo.heroSubtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                {personalInfo.heroDescription}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
              <Button asChild size="lg" className="font-mono group">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono">
                <a href={personalInfo.resumeUrl} target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6 mt-12"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right: Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <HeroIllustration />
          </motion.div>
        </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs font-mono">Scroll</span>
            <div className="w-px h-8 bg-border relative overflow-hidden">
              <motion.div
                className="w-full h-2 bg-primary"
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-mono text-primary text-sm mb-4">{homeSections.aboutHeading}</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {homeSections.aboutSubtitle}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {homeSections.aboutShortBio}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  <Button asChild variant="ghost" className="mt-6 font-mono group text-primary hover:text-primary">
                    <Link href="/about">
                      {homeSections.aboutReadMore}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  {skillCategories.slice(0, 4).map((category) => (
                    <div key={category.category}>
                      <h4 className="font-mono text-xs text-muted-foreground mb-2">
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.slice(0, 4).map((skill) => (
                          <TechBadge key={skill} tech={skill} variant="outline" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-mono text-primary text-sm mb-4">{homeSections.featuredProjectsHeading}</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {homeSections.featuredProjectsSubtitle}
                </h3>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex font-mono text-muted-foreground hover:text-primary">
                <Link href="/projects">
                  {homeSections.allProjectsButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Button asChild variant="outline" className="w-full font-mono">
              <Link href="/projects">{homeSections.allProjectsButton}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-mono text-primary text-sm mb-4">{homeSections.ctaHeading}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {ctaSection.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {ctaSection.description}
              </p>
              <Button asChild size="lg" className="font-mono">
                <a href={ctaSection.buttonLink}>
                  <Mail className="mr-2 h-4 w-4" />
                  {ctaSection.buttonText}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
