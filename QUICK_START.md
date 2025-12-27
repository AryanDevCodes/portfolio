# Quick Start - Blog Admin

## 🚀 Setup (2 minutes)

### 1. Set Your Password
```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local and change the password
# NEXT_PUBLIC_ADMIN_PASSWORD=YourStrongPasswordHere123!
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Access Admin Panel
1. Open browser: `http://localhost:3000/admin`
2. Enter your password from `.env.local`
3. Start creating blogs!

## 🔑 Default Credentials

**URL:** `/admin`  
**Password:** `MySecureP@ssw0rd2024!` (change this in `.env.local`!)

## 🛡️ Security Features

✅ **Rate Limiting:** 5 failed attempts → 15 min lockout  
✅ **Session Timeout:** 2 hours auto-logout  
✅ **Environment Variables:** Password not in code  
✅ **Attempt Tracking:** Failed logins are logged  

## 📝 Quick Create Blog

1. Login at `/admin`
2. Click "Create New Blog Post"
3. Fill in:
   - Title (auto-generates URL)
   - Description
   - Content (markdown supported)
   - Tags (at least one)
4. Upload images (optional)
5. Set as Featured (optional)
6. Save!

## 🖼️ Image Upload

- Max 5MB per image
- Stored in browser (base64)
- Use "Copy URL" then paste in content
- Or click "Insert" for auto-markdown

## ⚠️ Important

- **Change password** in `.env.local` before deploying
- Data stored in **localStorage** (development only)
- For production: Use backend API + database
- Session expires after 2 hours

## 📚 Full Documentation

See `BLOG_ADMIN_README.md` for complete features and production setup.

## 🔧 Troubleshooting

**Can't login?**
- Check password in `.env.local`
- Wait 15 min if locked out
- Clear localStorage: `localStorage.clear()`

**Images not working?**
- Check file size (max 5MB)
- Supported: JPG, PNG, GIF, WebP
- Clear localStorage if quota exceeded

**Session expired?**
- Sessions last 2 hours
- Just login again
- No data is lost
