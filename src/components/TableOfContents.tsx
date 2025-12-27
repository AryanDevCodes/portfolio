'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from content
    const lines = content.split('\n\n');
    const extractedHeadings: Heading[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('#')) {
        const level = trimmed.match(/^#+/)?.[0].length || 1;
        const text = trimmed.replace(/^#+\s*/, '');
        const id = `heading-${index}`;
        
        if (level <= 3) { // Only show h1, h2, h3
          extractedHeadings.push({ id, text, level });
        }
      }
    });

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden xl:block fixed right-8 top-32 w-64"
      style={{ maxHeight: 'calc(100vh - 120px)', overflow: 'hidden' }}
    >
      <div className="bg-card border rounded-lg p-4 shadow-sm h-full flex flex-col" style={{height: '100%', maxHeight: 'inherit'}}>
        <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
          <List className="w-4 h-4" />
          Table of Contents
        </div>
        <nav className="overflow-y-auto flex-1 pr-1" style={{maxHeight: 'calc(100vh - 200px)'}}>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
              >
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left text-sm transition-colors hover:text-primary ${
                    activeId === heading.id
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground'
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
