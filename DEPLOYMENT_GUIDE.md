# Deployment Guide - SHIFA DIGITAL SOLUTION

Complete guide to deploy your website to your own domain.

## 🚀 Recommended: Vercel (Easiest for Next.js)

Vercel is the recommended platform for Next.js applications. It's free, fast, and handles everything automatically.

### Step 1: Prepare Your Code

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/shifa-digital-solution.git
   git push -u origin main
   ```

2. **Create `.env.production` file** (for production environment variables):
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyA8lUMh4hDw3FTkWJTvvt7n0Pxg4jLoGhk
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=shifa-digital-solution.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=shifa-digital-solution
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=shifa-digital-solution.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=836448388080
   NEXT_PUBLIC_FIREBASE_APP_ID=1:836448388080:web:97d9381bd61da71799d335
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-YR9T5BB5KC

   # Firebase Admin SDK
   FIREBASE_PROJECT_ID=shifa-digital-solution
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@shifa-digital-solution.iam.gserviceaccount.com
   FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n

   # Site URL (Update with your domain)
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Google Maps API (Optional)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**: https://vercel.com
   - Use your GitHub account for easy integration

2. **Import Your Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.production`
   - Make sure to select "Production", "Preview", and "Development"

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-5 minutes)
   - Your site will be live at: `your-project.vercel.app`

### Step 3: Connect Your Domain

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `shifadigital.com`)

2. **Configure DNS** (at your domain registrar):
   
   **Option A: Root Domain (shifadigital.com)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: A
   Name: @
   Value: 76.223.126.88
   ```

   **Option B: Subdomain (www.shifadigital.com)**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **Option C: Both (Recommended)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation**:
   - Usually takes 5 minutes to 48 hours
   - Check status in Vercel dashboard

4. **SSL Certificate**:
   - Vercel automatically provides SSL (HTTPS)
   - No additional configuration needed

### Step 4: Update Firebase Settings

1. **Add Your Domain to Firebase**:
   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add: `yourdomain.com` and `www.yourdomain.com`

2. **Update Environment Variables**:
   - Update `NEXT_PUBLIC_SITE_URL` in Vercel to your actual domain

---

## 🌐 Alternative: Other Hosting Options

### Option 2: AWS (Amazon Web Services)

#### Using AWS Amplify:
1. Sign up at https://aws.amazon.com
2. Go to AWS Amplify Console
3. Connect your GitHub repository
4. Configure build settings (auto-detected for Next.js)
5. Add environment variables
6. Deploy and connect domain

#### Using EC2 + PM2:
1. Launch EC2 instance (Ubuntu)
2. Install Node.js, PM2, Nginx
3. Clone your repository
4. Build and start with PM2
5. Configure Nginx as reverse proxy
6. Set up SSL with Let's Encrypt

### Option 3: DigitalOcean

1. Create a Droplet (Ubuntu)
2. Install Node.js, PM2, Nginx
3. Clone repository
4. Build and deploy
5. Configure Nginx
6. Set up SSL

### Option 4: Netlify

Similar to Vercel:
1. Sign up at https://netlify.com
2. Connect GitHub repository
3. Configure build settings
4. Add environment variables
5. Deploy and connect domain

---

## 📋 Pre-Deployment Checklist

### Before Deploying:

- [ ] All environment variables are set
- [ ] Firebase project is configured
- [ ] Firestore security rules are published
- [ ] Firebase Authentication is enabled
- [ ] Admin user is created (`npm run seed:admin`)
- [ ] Logo is in `public/logo.png`
- [ ] All phone numbers are correct (+91 9234578836)
- [ ] WhatsApp links are working
- [ ] Test the website locally (`npm run dev`)
- [ ] Build works locally (`npm run build`)

### Production Environment Variables:

Make sure these are set in your hosting platform:

✅ `NEXT_PUBLIC_FIREBASE_API_KEY`  
✅ `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`  
✅ `NEXT_PUBLIC_FIREBASE_PROJECT_ID`  
✅ `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`  
✅ `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`  
✅ `NEXT_PUBLIC_FIREBASE_APP_ID`  
✅ `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`  
✅ `FIREBASE_PROJECT_ID`  
✅ `FIREBASE_CLIENT_EMAIL`  
✅ `FIREBASE_PRIVATE_KEY`  
✅ `NEXT_PUBLIC_SITE_URL` (your domain)  
✅ `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`  

---

## 🔧 Post-Deployment Steps

### 1. Update Firebase Authorized Domains

1. Go to Firebase Console → Authentication → Settings
2. Add your domain to "Authorized domains":
   - `yourdomain.com`
   - `www.yourdomain.com`
   - `your-project.vercel.app` (if using Vercel)

### 2. Update Sitemap

Update `public/sitemap.xml` with your actual domain:
```xml
<loc>https://yourdomain.com/</loc>
```

### 3. Test Everything

- [ ] Homepage loads
- [ ] All pages work
- [ ] Contact form submits
- [ ] Admin login works
- [ ] Phone number links work
- [ ] WhatsApp links work
- [ ] Images load correctly
- [ ] Logo displays properly

### 4. SEO Setup

1. **Google Search Console**:
   - Add your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google Analytics**:
   - Already configured via Firebase Analytics
   - Check Firebase Console → Analytics

3. **Meta Tags**:
   - Already configured in `app/layout.tsx`
   - Update with your actual domain

---

## 🚨 Troubleshooting

### Build Fails
- Check environment variables are set
- Verify Firebase credentials
- Check build logs for errors

### Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check domain status in hosting dashboard

### Firebase Errors
- Verify authorized domains are added
- Check environment variables match Firebase config
- Ensure Firestore rules are published

### Images Not Loading
- Check logo is in `public/logo.png`
- Verify image paths are correct
- Check file permissions

---

## 📞 Need Help?

If you encounter any issues during deployment, check:
1. Build logs in your hosting platform
2. Browser console for errors
3. Firebase Console for authentication issues
4. DNS propagation status

---

## 🎉 Success!

Once deployed, your website will be live at your domain with:
- ✅ HTTPS/SSL (secure connection)
- ✅ Fast global CDN
- ✅ Automatic deployments on git push
- ✅ Analytics tracking
- ✅ Professional appearance
