'use client';

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Send, Download, Sparkles, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { contactPage } from "@/lib/portfolio-data";

const iconMap = {
  Mail,
  Github,
  Linkedin,
  Phone
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* Hero Section with Enhanced Design */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            >
              <Sparkles size={16} className="text-blue-400" />
              <span className="font-mono text-blue-400 text-sm tracking-wide uppercase">
                {contactPage.heading}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            >
              {contactPage.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-slate-300 leading-relaxed"
            >
              {contactPage.description}
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              <div className="flex items-center gap-2">
                <Zap className="text-blue-400" size={20} />
                <span className="text-slate-400">Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-purple-400" size={20} />
                <span className="text-slate-400">Remote Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-cyan-400" size={20} />
                <span className="text-slate-400">Open to Relocation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards with Premium Design */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {contactPage.links.map((link, index) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                    
                    {/* Card content */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                      {/* Top corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex items-start gap-5 relative z-10">
                        {/* Icon container */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:border-blue-400/50 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/30"
                        >
                          <Icon className="text-blue-400" size={28} />
                        </motion.div>

                        {/* Text content */}
                        <div className="flex-1">
                          <p className="font-mono text-xs text-blue-400 mb-2 uppercase tracking-wider">
                            {link.label}
                          </p>
                          <p className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                            {link.value}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-blue-400 mt-1"
                        >
                          <Send size={18} />
                        </motion.div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Section with Enhanced Design */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-2 border-slate-700/50">
                {/* Icon with pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
                >
                  <MapPin size={28} className="text-blue-400" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">Based in India</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Open to <span className="text-blue-400 font-semibold">remote opportunities</span> and <span className="text-purple-400 font-semibold">relocation</span> for the right role.
                </p>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section with Premium Buttons */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              >
                Let's build something together.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-slate-400 mb-10"
              >
                Ready to start your next project? Get in touch today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {/* Primary CTA */}
                <motion.a
                  href="mailto:rajaryan.codes@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-70 blur group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                    <Send size={20} />
                    <span>Send Email</span>
                  </div>
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-800 border-2 border-slate-700 text-white font-bold text-lg hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300">
                    <Download size={20} />
                    <span>Download Resume</span>
                  </div>
                </motion.a>
              </motion.div>

              {/* Quick contact hint */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 text-sm text-slate-500"
              >
                Average response time: <span className="text-blue-400 font-semibold">24 hours</span>
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}