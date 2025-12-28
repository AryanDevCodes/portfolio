'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Blog } from '@/lib/blogs';

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <motion.article
        className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Featured Badge */}
        {blog.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="aspect-video overflow-hidden bg-secondary">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
              />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
            {blog.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time>{new Date(blog.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="text-xs text-muted-foreground self-center">
                +{blog.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Read More */}
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            <span>Read article</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.article>
    </Link>
  );
}

interface BlogGridProps {
  blogs: Blog[];
}

export function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}
