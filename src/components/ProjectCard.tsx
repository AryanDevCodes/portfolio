import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, Zap } from "lucide-react";
import { TechBadge } from "./TechBadge";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Multi-layer glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700"></div>
      
      {/* Card container with enhanced depth */}
      <article className="relative p-6 md:p-7 rounded-3xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-2 border-slate-700/60 group-hover:border-blue-400/60 transition-all duration-700 overflow-hidden backdrop-blur-md shadow-2xl group-hover:shadow-blue-500/20">
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Top corner accent with animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        ></motion.div>
        
        {/* Animated particles - enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-24 w-3 h-3 bg-blue-400/40 rounded-full blur-md"
          ></motion.div>
          <motion.div
            animate={{
              y: [30, -30, 30],
              x: [15, -15, 15],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-32 left-24 w-3 h-3 bg-purple-400/40 rounded-full blur-md"
          ></motion.div>
          <motion.div
            animate={{
              y: [-20, 40, -20],
              x: [20, -20, 20],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400/30 rounded-full blur-sm"
          ></motion.div>
        </div>

        {/* Project Number - Ultra large watermark with gradient */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <motion.span
            initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
            whileInView={{ scale: 1, opacity: 0.08, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[10rem] md:text-[12rem] font-black bg-gradient-to-br from-blue-400/50 to-purple-400/50 bg-clip-text text-transparent select-none leading-none"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with enhanced design */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              {/* Featured badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-2"
              >
                <Zap size={12} className="text-blue-400" />
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Project</span>
              </motion.div>

              <Link href={`/projects/${project.slug}`} className="block group/title">
                <motion.h3
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl md:text-3xl font-black text-white mb-1 group-hover/title:text-transparent group-hover/title:bg-gradient-to-r group-hover/title:from-blue-400 group-hover/title:via-purple-400 group-hover/title:to-cyan-400 group-hover/title:bg-clip-text transition-all duration-300 cursor-pointer leading-tight"
                >
                  {project.title}
                </motion.h3>
              </Link>
            </div>

            {/* Enhanced action buttons */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.15, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3.5 rounded-2xl bg-slate-800 border-2 border-slate-700/70 text-slate-400 hover:text-white hover:border-blue-400/70 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                aria-label="View on GitHub"
              >
                <Github size={22} />
              </motion.a>
              
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-400/40 text-blue-300 hover:from-blue-500/40 hover:to-purple-500/40 hover:border-blue-300/60 transition-all duration-300 shadow-lg shadow-blue-500/30"
                >
                  <ArrowUpRight size={22} />
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Description with enhanced typography */}
          <Link href={`/projects/${project.slug}`}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              className="text-slate-300 text-base mb-5 leading-relaxed cursor-pointer group-hover:text-white transition-colors duration-300"
            >
              {project.description}
            </motion.p>
          </Link>

          {/* Tech Stack with premium design */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <Sparkles size={16} className="text-blue-400" />
              </div>
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.slice(0, 5).map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <TechBadge tech={tech} variant="outline" />
                </motion.div>
              ))}
              {project.tech.length > 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700/60 text-slate-300 text-sm font-bold hover:border-blue-500/50 transition-all duration-300"
                >
                  +{project.tech.length - 5} more
                </motion.div>
              )}
            </div>
          </div>

          {/* Highlights with premium design */}
          <div className="space-y-2 mb-5">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-start gap-4 group/highlight"
              >
                <div className="flex-shrink-0 mt-1.5">
                  <motion.div
                    whileHover={{ scale: 2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg shadow-blue-400/50"
                  ></motion.div>
                </div>
                <span className="text-slate-400 text-sm leading-relaxed group-hover/highlight:text-slate-200 transition-colors duration-300">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA button */}
          <Link href={`/projects/${project.slug}`}>
            <motion.div
              whileHover={{ x: 6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/40 text-blue-300 font-bold text-sm hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-300/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/40"
            >
              <span>View Full Project</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.div>
          </Link>
        </div>

        {/* Enhanced bottom accent with pulse */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        ></motion.div>
      </article>
    </motion.div>
  );
}