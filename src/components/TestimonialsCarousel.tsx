'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="p-8 md:p-12 rounded-2xl bg-card border border-border relative"
        >
          <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12" />
          
          <div className="relative z-10">
            <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
              "{current.content}"
            </p>

            <div className="flex items-center gap-4">
              {current.image && (
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <img 
                    src={current.image} 
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <h4 className="font-semibold text-foreground">{current.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {current.role} at {current.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < current.rating ? 'text-primary' : 'text-muted-foreground/30'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
