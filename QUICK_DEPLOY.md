# Quick Deployment Guide

## 🚀 Deploy to Your Domain in 5 Steps

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/yourusername/shifa-digital-solution.git
git push -u origin main
```

### Step 2: Sign up for Vercel
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your repository

### Step 3: Add Environment Variables
In Vercel Dashboard → Your Project → Settings → Environment Variables:

Add all variables from your `.env.local` file:
- All `NEXT_PUBLIC_FIREBASE_*` variables
- All `FIREBASE_*` variables
- `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`
- Email configuration variables

### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-5 minutes
3. Your site is live at `your-project.vercel.app`

### Step 5: Connect Your Domain
1. In Vercel → Settings → Domains
2. Add your domain (e.g., `shifadigital.com`)
3. Follow DNS instructions shown
4. Wait for DNS propagation (5 min - 48 hours)

## ✅ Done!

Your website is now live at your domain!

## 📝 Important: Update Firebase

After deployment, add your domain to Firebase:
1. Firebase Console → Authentication → Settings
2. Add to "Authorized domains":
   - `yourdomain.com`
   - `www.yourdomain.com`

## 🔧 Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions.
