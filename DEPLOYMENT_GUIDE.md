# Sof Mebel - Vercel Deployment Guide

## 📋 Pre-Deployment Checklist

✅ **Completed:**
- [x] Next.js project verified (v14.2.30)
- [x] package.json configured with build scripts
- [x] TypeScript configured (tsconfig.json)
- [x] Tailwind CSS configured
- [x] vercel.json created with optimal settings
- [x] .gitignore properly configured
- [x] Git repository initialized
- [x] All code committed to GitHub
- [x] Production build tested locally

---

## 🚀 Quick Deployment (Easiest)

### Option 1: Vercel GitHub Integration (Recommended)

1. **Go to Vercel**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Click "Select a Repository from GitHub"
   - Find and select: `Sarvardev035/Sofmebel`

3. **Configure Project**:
   - **Project Name**: `sofmebel` (or your preference)
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` ✅ (auto-detected)
   - **Output Directory**: `.next` ✅ (auto-detected)
   - **Install Command**: `npm install` ✅ (auto-detected)

4. **Environment Variables** (Optional):
   - `NEXT_PUBLIC_APP_URL`: `https://sofmebel.vercel.app`
   - `NEXT_PUBLIC_APP_NAME`: `Sof Mebel`

5. **Click "Deploy"** 🎉
   - Vercel will auto-build and deploy
   - You'll get a live URL in ~2-3 minutes

---

### Option 2: Vercel CLI (Command Line)

For developers who prefer CLI:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd /home/sarvarbek/sofmebel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## 📊 Project Configuration Summary

**Framework**: Next.js 14.2.30  
**Language**: TypeScript  
**Styling**: Tailwind CSS 3.4.17  
**Node Version**: 20.x  
**Build Command**: `npm run build`  
**Start Command**: `npm start`  
**Output Directory**: `.next`  

---

## 🔧 Vercel Configuration (vercel.json)

Your project includes an optimized `vercel.json`:

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "cleanUrls": true,
  "framework": "nextjs",
  "nodeVersion": "20.x",
  "env": {
    "NEXT_PUBLIC_APP_NAME": "Sof Mebel",
    "NEXT_PUBLIC_APP_URL": "https://sofmebel.vercel.app"
  },
  "regions": ["iad1"],
  "headers": [
    // Security headers included
  ]
}
```

---

## 🌐 Expected URLs After Deployment

- **Preview URL**: `https://<branch-name>.sofmebel.vercel.app`
- **Production URL**: `https://sofmebel.vercel.app`
- **Custom Domain**: You can add your domain in Vercel dashboard

---

## ✅ What Happens During Deployment

1. **Code Push**: Latest commit from GitHub is deployed
2. **Install**: `npm install` runs (dependencies installed)
3. **Build**: `npm run build` compiles your Next.js app
4. **Optimize**: Vercel optimizes images and code
5. **Deploy**: Your app goes live globally on CDN
6. **Monitor**: Real-time logs available in dashboard

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Run `npm run build` locally to test
- View errors: `npm run lint`

### 404 on Routes
- Ensure `cleanUrls: true` in vercel.json ✅ (already set)
- Trailing slashes handled automatically

### Images Not Loading
- Check `/public/images/real/` folder exists
- Verify image paths in components

### Slow Performance
- Already optimized with:
  - Image optimization enabled
  - CSS minification
  - JavaScript code splitting
  - Vercel CDN caching

---

## 🔒 Security

Your deployment includes:
- ✅ X-Content-Type-Options header
- ✅ X-Frame-Options (DENY)
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ HTTPS only
- ✅ Secure environment variables

---

## 📈 Post-Deployment

After deployment:

1. **Check Live Site**: Visit your Vercel URL
2. **Test Features**:
   - Navigation and links
   - Product carousel
   - AR visualizer
   - Contact form
   - Testimonials

3. **Monitor Performance**:
   - Vercel Dashboard: https://vercel.com/dashboard
   - Analytics available free
   - Real-time logs

4. **Setup Custom Domain** (Optional):
   - Add your domain in Vercel Project Settings
   - Update DNS records
   - Free SSL certificate auto-generated

5. **Enable Git Deployment**:
   - Push to `main` branch = auto-deploy production
   - Push to other branches = preview URLs

---

## 🎯 Next Steps

1. **Go to**: https://vercel.com/new
2. **Import**: Your GitHub repository
3. **Configure**: Use settings above
4. **Deploy**: Click deploy button
5. **Share**: Your live URL!

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: https://github.com/Sarvardev035/Sofmebel/issues

---

## 🎉 Deployment Checklist

- [x] Project verified working locally
- [x] Git repository ready
- [x] Code committed and pushed
- [x] vercel.json configured
- [x] Build command tested
- [x] Environment ready
- [ ] **→ Deploy to Vercel** (Your turn!)
- [ ] Test production deployment
- [ ] Share live URL

---

**Ready to go live? Visit https://vercel.com/new and deploy now!** 🚀
