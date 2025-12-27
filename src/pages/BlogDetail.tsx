'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Github, X, ZoomIn } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { blogs as defaultBlogs } from '@/lib/blogs';
import { getStoredBlogs } from '@/lib/blog-storage';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SocialShare } from '@/components/SocialShare';
import { CodeBlock } from '@/components/CodeBlock';
import { QuoteShare } from '@/components/QuoteShare';
import { ReadingProgress } from '@/components/ReadingProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { TableOfContents } from '@/components/TableOfContents';
import { RelatedPosts } from '@/components/RelatedPosts';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function BlogDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  
  // Merge default and stored blogs for use throughout component
  const storedBlogs = getStoredBlogs();
  const allBlogs = [...storedBlogs, ...defaultBlogs];

  useEffect(() => {
    const foundBlog = allBlogs.find((b) => b.slug === slug);
    setBlog(foundBlog);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  // Split content into sections for progressive rendering
  const sections = blog.content.split('\n\n').filter((line: string) => line.trim());
  
  // Extract all images from content
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const images: { alt: string; url: string }[] = [];
  let match;
  while ((match = imageRegex.exec(blog.content)) !== null) {
    images.push({ alt: match[1] || 'Blog image', url: match[2] });
  }

  return (
    <>
      <ReadingProgress />
      <ScrollToTop />
      <TableOfContents content={blog.content} />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-7xl xl:pr-72">
        {/* Back Button */}
        <AnimatedSection>
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-8 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </AnimatedSection>

        {/* Article Header */}
        <AnimatedSection delay={0.1}>
          <article className="mb-8">
            {/* Featured Badge */}
            {blog.featured && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block mb-4"
              >
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  ★ Featured
                </span>
              </motion.div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
              <span>•</span>
              <span className="font-medium">{blog.author}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <Separator className="mb-8" />

            {/* Social Share & Description */}
            <div className="flex items-start justify-between gap-4 mb-8">
              <p className="text-xl text-muted-foreground leading-relaxed flex-1">
                {blog.description}
              </p>
              <SocialShare 
                url={`/blog/${blog.slug}`}
                title={blog.title}
                description={blog.description}
              />
            </div>
          </article>
        </AnimatedSection>

        {/* Two Column Layout: Content + Images */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Text Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Quote Share Feature */}
              <QuoteShare blogTitle={blog.title} blogUrl={`/blog/${blog.slug}`} />
            {sections.map((section: string, index: number) => {
              const trimmedSection = section.trim();
              
              // Check if it's a heading
              if (trimmedSection.startsWith('#')) {
                const level = trimmedSection.match(/^#+/)?.[0].length || 1;
                const text = trimmedSection.replace(/^#+\s*/, '');
                
                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                const className = level === 1 
                  ? 'text-3xl font-bold mt-8 mb-4 text-foreground'
                  : level === 2
                  ? 'text-2xl font-bold mt-6 mb-3 text-foreground'
                  : 'text-xl font-semibold mt-4 mb-2 text-foreground';
                
                return (
                  <HeadingTag
                    key={index}
                    id={`heading-${index}`}
                    className={className + ' scroll-mt-24'}
                  >
                    {text}
                  </HeadingTag>
                );
              }
              
              // Check if it's a code block
              if (trimmedSection.startsWith('```')) {
                const lines = trimmedSection.split('\n');
                const language = lines[0].replace('```', '').trim();
                const code = lines.slice(1, -1).join('\n');
                
                return (
                  <CodeBlock key={index} code={code} language={language} />
                );
              }
              
              // Check if it's a bullet list
              if (trimmedSection.startsWith('- ') || trimmedSection.startsWith('• ')) {
                const items = trimmedSection.split('\n').map((item: string) => item.replace(/^[•-]\s*/, ''));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
                    {items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              
              // Skip image markdown - images are displayed in right column
              const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
              if (imageRegex.test(trimmedSection)) {
                // Don't render images inline, skip them
                return null;
              }
              
              // Check if it's bold text (for section headers)
              if (trimmedSection.startsWith('**') && trimmedSection.endsWith('**')) {
                const text = trimmedSection.replace(/\*\*/g, '');
                return (
                  <p key={index} className="font-semibold text-lg mt-4 mb-2 text-foreground">
                    {text}
                  </p>
                );
              }
              
              // Regular paragraph
              return (
                <p key={index} className="text-muted-foreground leading-relaxed my-4">
                  {trimmedSection}
                </p>
              );
            })}
            </div>

            {/* Right Column: Images */}
            <div className="lg:sticky lg:top-24 space-y-6 h-fit">
              {images.length > 0 ? (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Article Images
                  </h3>
                  {images.map((image, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-lg overflow-hidden border bg-secondary/20 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-contain transition-transform group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Zoom overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      {image.alt && (
                        <p className="text-sm text-muted-foreground text-center p-3 bg-secondary/30">
                          {image.alt}
                        </p>
                      )}
                    </div>
                  ))}
                </>
              ) : blog.coverImage ? (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Cover Image
                  </h3>
                  <div 
                    className="group relative rounded-lg overflow-hidden border bg-secondary/20 cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage({ url: blog.coverImage, alt: blog.title })}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-contain transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center border border-dashed rounded-lg">
                  <p className="text-muted-foreground">No images in this article</p>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 overflow-auto"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close button */}
              <button
                className="fixed top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Scrollable Container */}
              <div className="min-h-screen flex items-center justify-center p-8">
                {/* Enlarged Image at Double Size with Same Aspect Ratio (4:3) */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-[800px] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-black/30">
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {selectedImage.alt && (
                    <div className="mt-4 text-white text-center p-4 bg-black/50 backdrop-blur-sm rounded-lg max-w-[800px]">
                      <p className="text-lg">{selectedImage.alt}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <AnimatedSection delay={0.3}>
          <Separator className="my-12" />
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Found this article helpful? Check out my other projects and articles!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  <Github className="w-4 h-4 mr-2" />
                  View Projects
                </Link>
              </Button>
              <Button asChild>
                <Link href="/blog">More Articles</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Posts */}
        <RelatedPosts currentBlog={blog} allBlogs={allBlogs} />
        </div>
      </div>
    </>
  );
}
