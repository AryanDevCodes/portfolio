'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, LogOut, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { isAuthenticated, verifyAdminPassword, logout, getStoredBlogs, deleteBlog } from '@/lib/blog-storage';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const auth = await isAuthenticated();
      setIsAuth(auth);
      setLoading(false);
      if (auth) {
        loadBlogs();
      }
    })();
  }, []);

  const loadBlogs = () => {
    setBlogs(getStoredBlogs());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    verifyAdminPassword(password)
      .then((isValid) => {
        if (isValid) {
          setIsAuth(true);
          loadBlogs();
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setPassword('');
      });
  };

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setBlogs([]);
  };

  const handleDelete = (slug: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      deleteBlog(slug);
      loadBlogs();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8"
        >
          <Card className="p-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-6">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
            <p className="text-muted-foreground text-center mb-6">
              Enter password to access blog management
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
                {error && <p className="text-sm text-destructive mt-2">{error}</p>}
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Home
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Blog Management</h1>
            <p className="text-muted-foreground">Create and manage your blog posts</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Create New Blog Button */}
        <div className="mb-8">
          <Button onClick={() => router.push('/admin/blog/new')} size="lg">
            <Plus className="w-4 h-4 mr-2" />
            Create New Blog Post
          </Button>
        </div>

        {/* Blog List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Your Blog Posts ({blogs.length})</h2>
          
          {blogs.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No blog posts yet</p>
              <Button onClick={() => router.push('/admin/blog/new')}>
                Create Your First Post
              </Button>
            </Card>
          ) : (
            <div className="grid gap-4">
              {blogs.map((blog) => (
                <Card key={blog.slug} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{blog.title}</h3>
                        {blog.featured && (
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {blog.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                        <span>•</span>
                        <span className="font-mono">/{blog.slug}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push(`/admin/blog/edit/${blog.slug}`)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(blog.slug)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Info Card */}
        <Card className="p-6 mt-8 bg-primary/5 border-primary/20">
          <h3 className="font-semibold mb-2">🔒 Security Status</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>✓ Rate limiting enabled (5 attempts, 15min lockout)</p>
            <p>✓ Session timeout: 2 hours</p>
            <p>✓ Password protected with environment variables</p>
            <p className="mt-3 pt-3 border-t">
              <strong>⚠️ Production Note:</strong> Blog posts are stored in browser localStorage. 
              For production, implement backend API with database storage and server-side authentication.
              Change password in <code className="text-xs bg-secondary px-1 py-0.5 rounded">.env.local</code>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
