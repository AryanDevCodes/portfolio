# Blog Admin Panel

A secure admin panel to create and manage blog posts for your portfolio.

## 🔐 Access

Navigate to: `/admin`

**Default Password:** `MySecureP@ssw0rd2024!`

⚠️ **IMPORTANT:** Change the password in `.env.local` before deploying!

### Security Features:
- **Rate Limiting:** 5 login attempts before 15-minute lockout
- **Session Timeout:** 2-hour automatic logout
- **Environment Variables:** Password stored in .env.local
- **Attempt Tracking:** Failed login attempts are tracked

## ✨ Features

- **Secure Login:** Password-protected with rate limiting and lockout
- **Create Posts:** Rich blog editor with markdown support
- **Edit Posts:** Modify existing blog posts
- **Delete Posts:** Remove unwanted posts
- **Image Upload:** Upload and manage images (max 5MB)
- **Cover Images:** Add featured cover images to posts
- **Image Gallery:** View all uploaded images with quick actions
- **Preview:** Live preview before publishing
- **Auto-save:** Posts saved to browser localStorage
- **Tags Management:** Add/remove tags easily
- **Featured Posts:** Mark important posts as featured
- **Auto Read Time:** Calculates reading time from content

## 📝 How to Use

### 1. Login
1. Go to `/admin`
2. Enter password (default: "password")
3. Click Login

### 2. Create a Blog Post
1. Click "Create New Blog Post"
2. Fill in:
   - **Title** (required) - Auto-generates URL slug
   - **Description** (required) - Brief summary for cards
   - **Content** (required) - Full blog content with markdown
   - **Tags** (required) - At least one tag
   - **Date** - Publication date
   - **Cover Image** - Optional featured image URL
   - **Featured** - Toggle to show in featured section
3. Upload images using the "Upload" button
4. Click "Save Post"

### 3. Upload Images
1. Click "Upload" button in the Images section
2. Select an image (max 5MB)
3. Image will appear in your gallery
4. Use the action buttons:
   - **Copy** - Copy image URL to clipboard
   - **Insert** - Add image to content automatically
   - **Delete** - Remove image from storage

### 4. Add Images to Content
**Option 1: Manual**
```markdown
![Image description](paste-url-here)
```

**Option 2: Quick Insert**
1. Upload image
2. Click the image icon button
3. Image markdown automatically added to content

### 5. Set Cover Image
1. Upload an image first
2. Click "Copy URL" on the image
3. Paste the URL in "Cover Image URL" field
4. Cover image will show on blog cards and detail page

### 3. Edit a Blog Post
1. From admin dashboard, click Edit icon on any post
2. Make your changes
3. Upload/manage images as needed
4. Click "Save Post"
5. Note: Slug cannot be changed after creation

### 4. Delete a Blog Post
1. From admin dashboard, click Trash icon
2. Confirm deletion

### 5. Preview Posts
- Click Eye icon to preview in new tab
- Or click "Preview" button while editing

## 📖 Content Formatting

The editor supports markdown-style formatting:

### Headings
```
# Main Heading
## Subheading
### Small Heading
```

### Bold Text
```
**This text will be bold**
```

### Bullet Lists
```
• Point one
• Point two
- Also works with dash
```

### Code Blocks
````
```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```
````

### Paragraphs
Separate paragraphs with blank lines.

### Images
```markdown
![Alt text for accessibility](image-url-here)
```

Or use the quick insert button after uploading an image.

## 🖼️ Image Management

### Upload Images
- Click "Upload" in the Images section
- Max file size: 5MB
- Supported formats: JPG, PNG, GIF, WebP
- Images stored as base64 in localStorage

### Image Actions
- **Copy URL:** Get the image URL to use anywhere
- **Insert:** Automatically add `![](url)` to content
- **Delete:** Remove image from storage (cannot be undone)

### Cover Images
- Set a featured image for blog cards
- Shows at top of blog detail page
- Paste any uploaded image URL or external URL

## 🔧 Storage

- Posts are stored in **browser localStorage**
- Images stored as **base64 data URLs** in localStorage
- Data persists across sessions
- Stored posts merge with default blog posts
- Each post needs a unique slug
- Images can be reused across multiple posts

## ⚠️ Important Notes

### For Production:
1. **Change Password:** Set strong password in `.env.local` or hosting environment variables
2. **Backend Auth:** Implement proper backend authentication with Next.js API routes
3. **Database:** Replace localStorage with PostgreSQL, MongoDB, or Supabase
4. **Password Hashing:** Use bcrypt/argon2 for password storage
5. **JWT Tokens:** Implement token-based authentication
6. **HTTPS:** Ensure all traffic is encrypted
7. **Server Validation:** Add server-side input validation
8. **Rate Limiting:** Use rate-limit libraries or Vercel Edge Config
9. **Monitoring:** Add logging and alerting for security events

### Current Limitations:
- No multi-user support
- Images stored as base64 (increases localStorage usage)
- Max 5MB per image
- No draft/publish workflow
- Data lost if localStorage cleared
- No server-side rendering for dynamic posts
- localStorage has ~5-10MB limit (varies by browser)

## 🔒 Security

### Change Admin Password

**Method 1: Environment Variable (Recommended)**
1. Create/edit `.env.local` file in project root
2. Set: `NEXT_PUBLIC_ADMIN_PASSWORD=YourStrongPassword123!`
3. Restart dev server

**Method 2: Direct Edit (Development Only)**
1. Open `src/lib/blog-storage.ts`
2. Find `ADMIN_PASSWORD` constant
3. Replace the fallback value

### Security Features Implemented

✅ **Rate Limiting**
- Max 5 failed login attempts
- 15-minute account lockout after limit
- Automatic reset on successful login

✅ **Session Management**
- 2-hour session timeout
- Auto-logout on expiration
- Session ID tracking

✅ **Environment Variables**
- Password stored in `.env.local` (not in code)
- `.env.local` ignored by git
- Easy to change without code modification

✅ **Error Messages**
- Shows remaining attempts
- Displays lockout duration
- Clear security feedback

### Production Security Recommendations

⚠️ **This is still client-side auth for demo purposes!**

For production, implement:
1. **Backend API:** Move authentication to server
2. **Password Hashing:** Use bcrypt, argon2, or scrypt
3. **JWT Tokens:** Secure, stateless authentication
4. **HTTPS Only:** Encrypt all traffic
5. **CSRF Protection:** Prevent cross-site attacks
6. **2FA/MFA:** Add two-factor authentication
7. **IP Whitelisting:** Restrict admin access by IP
8. **Audit Logs:** Track all admin actions
9. **CAPTCHA:** Add reCAPTCHA on login
10. **WAF:** Use Web Application Firewall

## 🚀 Future Enhancements

Consider adding:
- Backend API with database
- Cloud image storage (AWS S3, Cloudinary)
- Image optimization and compression
- Multiple image sizes (thumbnails, responsive)
- Drag-and-drop image upload
- Rich text editor (TipTap, Quill)
- Draft/publish states
- SEO metadata editor
- Social media preview cards
- Analytics integration
- Multi-author support
- Comments system

## 📱 URLs

- **Admin Dashboard:** `/admin`
- **Create Post:** `/admin/blog/new`
- **Edit Post:** `/admin/blog/edit/[slug]`
- **View Posts:** `/blog`
- **View Single Post:** `/blog/[slug]`
