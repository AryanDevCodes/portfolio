'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className={`flex items-center gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:flex-row`}>
              {/* Content */}
              <div className={`flex-1 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              } pl-12 md:pl-0`}>
                <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full mb-2">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-primary font-medium mb-3">{item.subtitle}</p>
                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center icon */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                {item.icon || (
                  <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                )}
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
