'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Save, ArrowLeft, Eye, Plus, X, Upload, Image as ImageIcon, Copy, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { isAuthenticated, saveBlog, getStoredBlogs } from '@/lib/blog-storage';
import { uploadImage, getStoredImages, deleteImage, formatFileSize, type StoredImage } from '@/lib/image-storage';
import type { Blog } from '@/lib/blogs';
import Link from 'next/link';
import Image from "next/image";

export default function BlogEditor() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const isEditMode = slug !== 'new';

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<Blog>({
    slug: '',
    title: '',
    description: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read',
    tags: [],
    author: 'Aryan Raj',
    featured: false,
    coverImage: '',
    images: [],
  });
  const [newTag, setNewTag] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [images, setImages] = useState<StoredImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
      return;
    }

    // Load stored images
    setImages(getStoredImages());

    if (isEditMode && slug) {
      const blogs = getStoredBlogs();
      const existingBlog = blogs.find(b => b.slug === slug);
      if (existingBlog) {
        setFormData(existingBlog);
      } else {
        router.push('/admin');
        return;
      }
    }
    setLoading(false);
  }, [isEditMode, slug, router]);

  const handleChange = (field: keyof Blog, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (title: string) => {
    handleChange('title', title);
    if (!isEditMode) {
      handleChange('slug', generateSlug(title));
    }
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      handleChange('tags', [...formData.tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    handleChange('tags', formData.tags.filter(tag => tag !== tagToRemove));
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSave = () => {
    // Validation
    if (!formData.title.trim()) {
      alert('Please enter a title');
      return;
    }
    
    // Auto-generate slug if empty
    let finalSlug = formData.slug.trim();
    if (!finalSlug) {
      finalSlug = generateSlug(formData.title);
      if (!finalSlug) {
        alert('Could not generate slug from title. Please enter a valid title.');
        return;
      }
    }
    
    if (!formData.description.trim()) {
      alert('Please enter a description');
      return;
    }
    if (!formData.content.trim()) {
      alert('Please enter content');
      return;
    }
    if (formData.tags.length === 0) {
      alert('Please add at least one tag');
      return;
    }

    setIsSaving(true);
    
    // Auto-update read time based on content and ensure slug is set
    const updatedFormData = {
      ...formData,
      slug: finalSlug,
      readTime: estimateReadTime(formData.content),
    };

    try {
      saveBlog(updatedFormData);
      setTimeout(() => {
        setIsSaving(false);
        router.push('/admin');
      }, 500);
    } catch (error) {
      setIsSaving(false);
      alert('Failed to save blog post');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImage(true);
    try {
      const file = files[0];
      const uploadedImage = await uploadImage(file);
      setImages(prev => [uploadedImage, ...prev]);
      alert('Image uploaded! Click "Copy URL" to use it in your blog.');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to upload image');
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const copyImageUrl = (image: StoredImage) => {
    navigator.clipboard.writeText(image.dataUrl);
    alert('Image URL copied! Paste it in your content using:\n![Alt text](' + image.dataUrl + ')');
  };

  const handleDeleteImage = (imageId: string) => {
    if (confirm('Delete this image? This cannot be undone.')) {
      deleteImage(imageId);
      setImages(prev => prev.filter(img => img.id !== imageId));
    }
  };

  const insertImageMarkdown = (imageUrl: string) => {
    const markdown = `\n![Image description](${imageUrl})\n`;
    handleChange('content', formData.content + markdown);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">
                {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {formData.slug && (
              <Button
                variant="outline"
                onClick={() => window.open(`/blog/${formData.slug}`, '_blank')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            )}
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? 'Saving...' : 'Save Post'}
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card className="p-6">
              <Label htmlFor="title" className="text-sm font-medium mb-2 block">
                Title *
              </Label>
              <Input
                id="title"
                placeholder="Enter blog post title..."
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="text-xl font-semibold"
              />
            </Card>

            {/* Description */}
            <Card className="p-6">
              <Label htmlFor="description" className="text-sm font-medium mb-2 block">
                Description *
              </Label>
              <Textarea
                id="description"
                placeholder="Brief description for preview cards and SEO..."
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={3}
              />
            </Card>

            {/* Content */}
            <Card className="p-6">
              <Label htmlFor="content" className="text-sm font-medium mb-2 block">
                Content * (Markdown supported)
              </Label>
              <Textarea
                id="content"
                placeholder={`# Main Heading

Write your blog content here using markdown syntax:

## Subheading

Regular paragraph text...

**Key Points:**
• Bullet point one
• Bullet point two

\`\`\`java
// Code example
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
\`\`\`

## Another Section

More content...`}
                value={formData.content}
                onChange={(e) => handleChange('content', e.target.value)}
                rows={20}
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Estimated read time: {estimateReadTime(formData.content)}
              </p>
            </Card>

            {/* Image Upload */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Images</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingImage}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploadingImage ? 'Uploading...' : 'Upload'}
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Cover Image */}
              <div className="mb-4">
                <Label htmlFor="coverImage" className="text-sm font-medium mb-2 block">
                  Cover Image URL (optional)
                </Label>
                <Input
                  id="coverImage"
                  placeholder="https://... or paste uploaded image URL"
                  value={formData.coverImage || ''}
                  onChange={(e) => handleChange('coverImage', e.target.value)}
                  className="text-sm"
                />
              </div>

              {/* Image Gallery */}
              {images.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground mb-2">
                    Your uploaded images ({images.length}):
                  </p>
                  <div className="max-h-96 overflow-y-auto space-y-2">
                    {images.map((image) => (
                      <div
                        key={image.id}
                        className="flex items-center gap-2 p-2 border rounded-lg hover:bg-secondary/50"
                      >
                        <img
                          src={image.dataUrl}
                          alt={image.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <Image
                          src={image.dataUrl}
                          alt={image.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{image.name}</p>
                          <p className="text-xs text-muted-foreground">{formatFileSize(image.size)}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => insertImageMarkdown(image.dataUrl)}
                            className="h-8 px-2 text-xs font-medium"
                            title="Insert into content"
                          >
                            <ImageIcon className="w-3 h-3 mr-1" />
                            Insert
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyImageUrl(image)}
                            className="h-8 w-8 p-0"
                            title="Copy URL"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteImage(image.id)}
                            className="h-8 w-8 p-0 text-destructive"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {images.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">
                  No images uploaded yet
                </p>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Metadata */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Metadata</h3>
              <div className="space-y-4">
                {/* Slug */}
                <div>
                  <Label htmlFor="slug" className="text-sm font-medium mb-2 block">
                    URL Slug * {!isEditMode && '(auto-generated from title)'}
                  </Label>
                  <Input
                    id="slug"
                    placeholder="url-friendly-slug"
                    value={formData.slug}
                    onChange={(e) => handleChange('slug', e.target.value)}
                    disabled={isEditMode}
                    className="font-mono text-sm"
                  />
                  {!isEditMode && formData.slug && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Preview: /blog/{formData.slug}
                    </p>
                  )}
                  {isEditMode && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Slug cannot be changed in edit mode
                    </p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <Label htmlFor="date" className="text-sm font-medium mb-2 block">
                    Publication Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                  />
                </div>

                {/* Author */}
                <div>
                  <Label htmlFor="author" className="text-sm font-medium mb-2 block">
                    Author
                  </Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleChange('author', e.target.value)}
                  />
                </div>

                {/* Featured */}
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured" className="text-sm font-medium">
                    Featured Post
                  </Label>
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => handleChange('featured', checked)}
                  />
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Tags *</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button onClick={addTag} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                {formData.tags.length === 0 && (
                  <p className="text-xs text-muted-foreground">Add at least one tag</p>
                )}
              </div>
            </Card>

            {/* Help */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2 text-sm">💡 Formatting Tips</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Use # for headings (##, ###)</li>
                <li>• **bold** for emphasis</li>
                <li>• Bullet points with • or -</li>
                <li>• Code blocks with ```language</li>
                <li>• Separate paragraphs with blank lines</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
