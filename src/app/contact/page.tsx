'use client';

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Send, Download } from "lucide-react";
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
            <h1 className="font-mono text-primary text-sm mb-4">{contactPage.heading}</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {contactPage.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {contactPage.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {contactPage.links.map((link, index) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-subtle"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-muted-foreground mb-1">{link.label}</p>
                        <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <MapPin size={18} />
                <span>Based in India</span>
              </div>
              <p className="text-muted-foreground">
                Open to remote opportunities and relocation for the right role.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's build something together.
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-mono">
                  <a href="mailto:rajaryan.codes@gmail.com">
                    <Send className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-mono">
                  <a href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
