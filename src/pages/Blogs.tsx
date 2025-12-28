'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { BlogCard } from '@/components/BlogCard';
import { blogs as defaultBlogs } from '@/lib/blogs';
import { getStoredBlogs } from '@/lib/blog-storage';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function Blogs() {
  // --- State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allBlogs, setAllBlogs] = useState(defaultBlogs);

  // --- Merge default and stored blogs ---
  useEffect(() => {
    const storedBlogs = getStoredBlogs();
    const merged = [...storedBlogs, ...defaultBlogs];

    // Remove duplicates by slug
    const unique = merged.filter(
      (blog, index, self) => index === self.findIndex((b) => b.slug === blog.slug)
    );

    setAllBlogs(unique);
  }, []);

  // --- Tags ---
  const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags))).sort();

  // --- Filtered blogs ---
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch =
      searchQuery === '' ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === null || blog.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  // --- Render ---
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
            >
              <BookOpen className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing insights on backend development, system design, and software engineering
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filters */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant={selectedTag === null ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">★</span> Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredBlogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Regular Blogs */}
        {regularBlogs.length > 0 && (
          <AnimatedSection delay={0.3}>
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {featuredBlogs.length > 0 ? 'More Articles' : 'All Articles'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularBlogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <AnimatedSection delay={0.2}>
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
