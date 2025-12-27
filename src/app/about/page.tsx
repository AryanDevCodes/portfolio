'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Zap, Code2, Database, Shield } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TechBadge } from "@/components/TechBadge";

import { skillCategories, certifications } from "@/lib/skills";
import {
  personalInfo,
  education,
  experience,
  aboutSections
} from "@/lib/portfolio-data";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* Hero with Gradient Overlay */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16 items-center">
            {/* TEXT — LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
              >
                <Zap size={16} className="text-blue-400" />
                <span className="font-mono text-blue-400 text-sm tracking-wide">
                  About Me
                </span>
              </motion.div>

              <h1 className="mb-8 font-black leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block text-5xl md:text-7xl bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                >
                  Backend Engineer.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block ml-8 md:ml-12 text-4xl md:text-6xl text-slate-400"
                >
                  System Thinker.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="block ml-16 md:ml-24 text-3xl md:text-5xl text-slate-500"
                >
                  Builder.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                I design and build{" "}
                <span className="text-blue-400 font-semibold">secure</span>,{" "}
                <span className="text-purple-400 font-semibold">high-performance</span>,{" "}
                <span className="text-cyan-400 font-semibold">real-time</span> web
                applications with clean architecture and production-grade systems.
              </motion.p>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex gap-6 mt-8"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="text-blue-400" size={20} />
                  <span className="text-slate-400">Full Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="text-purple-400" size={20} />
                  <span className="text-slate-400">Database Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-cyan-400" size={20} />
                  <span className="text-slate-400">Security First</span>
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGE — RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.5 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="relative justify-self-center md:justify-self-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-20"></div>
                
                {/* Image container */}
                <div className="relative w-[280px] h-[280px] rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story / Journey */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              >
                {aboutSections.storyHeading}
              </motion.h3>

              <div className="flex flex-col gap-12">
                {personalInfo.story.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    {/* Hover glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>
                    
                    <div className="relative">
                      <h4 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-6">
                        {section.category.replace(/^[^\w]+\s*/, "")}
                      </h4>

                      <div className="space-y-6">
                        {section.entries.map((entry, i) => (
                          <div key={i} className="pl-6 border-l-2 border-blue-500/30">
                            <p className="text-xl font-bold text-white mb-2">
                              {entry.heading}
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                              {entry.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {aboutSections.skillsHeading}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <h4 className="font-mono text-blue-400 text-sm mb-4 uppercase tracking-wider relative z-10">
                    {category.category}
                  </h4>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map(skill => (
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h3 className="text-4xl font-black mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {aboutSections.experienceHeading}
            </h3>

            <div className="max-w-4xl mx-auto">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-12 pb-16 border-l-2 border-blue-500/30 last:pb-0"
                >
                  {/* Timeline dot with pulse */}
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Briefcase size={14} className="text-white" />
                  </div>
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-blue-500 animate-ping opacity-20"></div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-blue-400 font-semibold text-lg mb-3">{exp.company}</p>

                    <p className="text-sm text-slate-400 flex items-center gap-2 mb-4">
                      <Calendar size={14} />
                      {exp.duration}
                    </p>

                    <ul className="space-y-3">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="text-blue-400 font-bold mt-1">▸</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-4xl font-black mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {aboutSections.educationHeading}
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <GraduationCap className="text-blue-400" size={32} />
                </div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">{education.degree}</h4>
                  <p className="text-blue-400 font-semibold text-lg">
                    {education.institution}
                  </p>
                  <p className="text-slate-400 mb-4">({education.university})</p>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-blue-400" />
                      {education.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-blue-400" />
                      {education.duration}
                    </span>
                  </div>

                  <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <span className="text-white font-bold">CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h3 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {aboutSections.certificationsHeading}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group flex items-center gap-3 p-5 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Award className="text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-sm text-slate-300 font-medium">{cert}</span>
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