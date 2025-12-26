'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TechBadge } from "@/components/TechBadge";
import { skillCategories, certifications } from "@/lib/skills";
import { personalInfo, education, experience, aboutSections } from "@/lib/portfolio-data";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl transition-shadow hover:shadow-2xl hover:border-primary/40">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <h1 className="font-mono text-primary text-sm mb-4">// About Me</h1>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {personalInfo.aboutTitle}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {personalInfo.aboutDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h3 className="text-2xl font-bold text-foreground mb-8">{aboutSections.storyHeading}</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {personalInfo.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-foreground mb-8">{aboutSections.skillsHeading}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h4 className="font-mono text-primary text-sm mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechBadge key={skill} tech={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-foreground mb-8">{aboutSections.experienceHeading}</h3>
            <div className="max-w-3xl">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Briefcase size={12} className="text-primary-foreground" />
                  </div>
                  <div className="pb-8">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                      <span className="px-2 py-0.5 text-xs font-mono bg-secondary rounded text-secondary-foreground">
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.duration}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-foreground mb-8">{aboutSections.educationHeading}</h3>
            <div className="max-w-3xl">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {education.degree}
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      {education.institution} ({education.university})
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {education.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {education.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      <span className="text-foreground font-medium">CGPA: {education.cgpa}</span>
                    </p>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {education.coursework.map((course) => (
                          <TechBadge key={course} tech={course} variant="outline" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-foreground mb-8">{aboutSections.certificationsHeading}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <Award className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm text-foreground">{cert}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
