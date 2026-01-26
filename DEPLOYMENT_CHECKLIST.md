# Deployment Checklist

Use this checklist before deploying to your domain.

## ✅ Pre-Deployment

### Code Preparation
- [ ] All code is committed to Git
- [ ] Repository is pushed to GitHub/GitLab
- [ ] Logo file is in `public/logo.png`
- [ ] All phone numbers are correct (+91 9234578836)
- [ ] WhatsApp links are working
- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm run build && npm start`

### Environment Variables
- [ ] All Firebase client variables ready
- [ ] Firebase Admin SDK credentials ready
- [ ] Email configuration ready
- [ ] Google Maps API key (if using)
- [ ] Site URL set to your domain

### Firebase Setup
- [ ] Firebase project created
- [ ] Authentication enabled (Email/Password)
- [ ] Firestore database created
- [ ] Security rules published
- [ ] Storage enabled (optional)
- [ ] Admin user created (`npm run seed:admin`)

### Domain Preparation
- [ ] Domain purchased
- [ ] Domain registrar account access
- [ ] DNS access available

## 🚀 Deployment Steps

### Step 1: Choose Hosting Platform
- [ ] Vercel (Recommended) - https://vercel.com
- [ ] OR Netlify - https://netlify.com
- [ ] OR AWS - https://aws.amazon.com
- [ ] OR Other platform

### Step 2: Deploy Application
- [ ] Sign up/Login to hosting platform
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Add all environment variables
- [ ] Deploy application
- [ ] Verify deployment successful

### Step 3: Connect Domain
- [ ] Add domain in hosting dashboard
- [ ] Get DNS configuration instructions
- [ ] Update DNS records at domain registrar
- [ ] Wait for DNS propagation
- [ ] Verify domain is connected
- [ ] SSL certificate is active (automatic on Vercel/Netlify)

### Step 4: Firebase Configuration
- [ ] Add domain to Firebase Authorized Domains
  - Go to: Firebase Console → Authentication → Settings
  - Add: `yourdomain.com`
  - Add: `www.yourdomain.com`
- [ ] Test admin login works
- [ ] Test contact form works

### Step 5: Final Testing
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Logo displays properly
- [ ] Contact form submits successfully
- [ ] Admin panel login works
- [ ] Phone number links work (tel:+919234578836)
- [ ] WhatsApp links work with pre-filled message
- [ ] All images load
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] HTTPS/SSL is active

### Step 6: SEO & Analytics
- [ ] Update sitemap.xml with your domain
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics is tracking
- [ ] Check meta tags are correct
- [ ] Test social media sharing (Open Graph)

## 📝 Post-Deployment

### Monitoring
- [ ] Set up error monitoring (optional)
- [ ] Check website speed (PageSpeed Insights)
- [ ] Monitor Firebase usage
- [ ] Set up backup strategy

### Documentation
- [ ] Document admin login credentials (securely)
- [ ] Save environment variables (securely)
- [ ] Document domain and hosting details

## 🎉 Success!

Your website is now live at your domain!

## 🆘 Troubleshooting

If something doesn't work:
1. Check build logs in hosting dashboard
2. Verify all environment variables are set
3. Check Firebase Console for errors
4. Verify DNS records are correct
5. Check browser console for errors

---

**Quick Reference:**
- Deployment Guide: `DEPLOYMENT_GUIDE.md`
- Quick Deploy: `QUICK_DEPLOY.md`
- Environment Variables: `.env.production.example`
