'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Blog } from '@/lib/blogs';

interface RelatedPostsProps {
  currentBlog: Blog;
  allBlogs: Blog[];
}

export function RelatedPosts({ currentBlog, allBlogs }: RelatedPostsProps) {
  // Find related posts based on shared tags
  const relatedPosts = allBlogs
    .filter((blog) => blog.slug !== currentBlog.slug)
    .map((blog) => {
      const sharedTags = blog.tags.filter((tag) =>
        currentBlog.tags.includes(tag)
      );
      return { blog, sharedTags: sharedTags.length };
    })
    .filter((item) => item.sharedTags > 0)
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .slice(0, 3)
    .map((item) => item.blog);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Related Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${blog.slug}`}>
                <Card className="group h-full p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  {blog.featured && (
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded mb-3">
                      Featured
                    </span>
                  )}
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
