# Deploy to shifadigitalsolution.in

Complete step-by-step guide to deploy your website to **shifadigitalsolution.in**

## 🚀 Quick Deployment (Vercel - Recommended)

### Step 1: Prepare Your Code

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment to shifadigitalsolution.in"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/shifa-digital-solution.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Go to https://vercel.com
   - Sign up with GitHub (free account)

2. **Import Your Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**:
   
   Go to **Project Settings → Environment Variables** and add:

   ```env
   # Firebase Client Configuration
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
   FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTd5Ba38Wj/q9g\nV4N1oWaIqLolbz6TvXvkiO0Xh9u1XQoAoAcqMpMoF43VMxw8oGT90OReVJPi8GC4\nV0lj0lDR1hlwqB1utcJSWO5vezARYJDXK7oD96o0/sPce0JQQTxvhLuo1bYiJhhp\nhk65fml7yL1pZBpLA1ErCaGHdSf1zsDYwbrkdIC3GhQhKZmMkB05SApnNgZMa1Oa\nB3JAGGYrzQfkGhvE7oun3SoSkamK2uru4wpKr+KCLP8mOCWZ0pXZn7nl7WvLjDtO\n0fAC4HirmnhbISy+C6FaKTI9Z+8hHwZvg4aqGRtosCm8QGW9rzdDcO0Sty/mDIMS\nVdgJgoz9AgMBAAECggEAEk+fpWURY8xxZu9e87mLo4799D2EwfAepPFKrWgRhErt\n/cdhNGBszObl1fIfgLiy6aBpZvwuE9kgzWsLQiGgpvmklYxOgUuA+lwwGTgs7w90\nVL+JfMohQKzc0bEdeh0rnbZX3f5RfBqKX/oNJvPXMcdqm55SNHvQNZ2fyNPnlxo5\nr5mnXNUhm7p+0NrVN/NRONsxYWsEcnKBI18yDMebeh5mCCwS1aMgYw3i7df5iQSA\nKBe3+nUdf6aCVeDHtoW7LHKk3ibA82r5+R3abV65eHEdMgl61Ij4xvbC70OJbogK\nGwIdrLA2QSr+UBIjxJSwMQDbwjxtaP0lx7j4a6YsKQKBgQDDanr0GhfygvLkLFAZ\nbPMot/xB6sOR8VHsdtBVdxM2PjZ0/gEz1DSYktdnUfcpAOXgveeUTCA+fTQ9liqM\n94fGmxzjFN6KuEbuDnQkHxCD/HwAyChdwjZkkYsfpZDorUKI/YPCBbCN5LgBMMAe\n+5411bP1my+iJBjMQkGzcxmpBQKBgQDBL4myiiO6VhflriBpwWz9z69bZqBHHrFi\nG62qZUrb/XqCHRNEU6n91c5nCUZ5DVN24H4AvFyp8uYN+H26AHDeMm3Qpj1Q+53I\nH+4yV7c8DMaRdaWxIx1qpuSW9AeLJEPHdRc89/cdqU13UooWrsyxcJlrGtDi6Ptr\nudJn/7y1mQKBgGNJbKMtxtEOu343DZN9iaY8pMyRDUDPjcJJM9zYnUhIH78dd1rw\nDLEgmpUCTkPlEuc3VbxBWXimgK5x57ir466DDRBLgC6XJmK5sUTRC8EjvZVgHTJW\nBPDgCgHQS2oM7etQc2tXHLdbaCoirNqRGXdc1wyJBpCpKnhNibg1WOpJAoGBAK79\nRJl5D8vl2FewVqP1FakCyzDb0Ssa3kqkD7ddcWW8QZBCjgVCU6UeWoxylmdobsYr\nq3c3KCi5YTIeeKRXaeWbgGWTb88/XDi+06C+W7gFSojQLHo7+JV2/3DNM1gSTWMK\n6TXM1wcDKKyBE5xgUgIYoJ+n9rbTm4qFE9YojONhAoGAGz0Q861zxlcd8ykXHmj+\n+oAhcDU5C+HBYx27jo1/UQWLCiQioJyYy5YdVf3C0lia1gpHN12zbgHRvVxoDMdC\nQZ2zJ9u25ENScxTXhPM75GW2VHMVf4RmqTxuYabyD2B8XukRKeZ1xkLEauUawr7g\nmyoA3T90r/6uQ70fqfa7Eek=\n-----END PRIVATE KEY-----\n

   # Site URL (YOUR DOMAIN)
   NEXT_PUBLIC_SITE_URL=https://shifadigitalsolution.in

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Google Maps API (Optional)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

   **Important**: 
   - Select "Production", "Preview", and "Development" for each variable
   - Make sure `FIREBASE_PRIVATE_KEY` includes the entire key with `\n` for newlines

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-5 minutes for build
   - Your site will be live at: `your-project.vercel.app`

### Step 3: Connect Your Domain (shifadigitalsolution.in)

1. **In Vercel Dashboard**:
   - Go to your project → **Settings** → **Domains**
   - Click **"Add Domain"**
   - Enter: `shifadigitalsolution.in`
   - Click **"Add"**

2. **Add www subdomain** (optional but recommended):
   - Click **"Add Domain"** again
   - Enter: `www.shifadigitalsolution.in`
   - Vercel will automatically redirect www to main domain

3. **Configure DNS at Your Domain Registrar**:

   Go to your domain registrar (where you bought shifadigitalsolution.in) and add these DNS records:

   **For Root Domain (shifadigitalsolution.in)**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: Auto (or 3600)
   
   Type: A
   Name: @
   Value: 76.223.126.88
   TTL: Auto (or 3600)
   ```

   **For www subdomain (www.shifadigitalsolution.in)**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Auto (or 3600)
   ```

   **OR** (if your registrar supports it, use Vercel's nameservers):
   - Vercel will show you nameservers like:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
   - Update nameservers at your registrar

4. **Wait for DNS Propagation**:
   - Usually takes 5 minutes to 48 hours
   - Check status in Vercel dashboard (shows "Valid Configuration" when ready)
   - You can check DNS propagation: https://dnschecker.org

5. **SSL Certificate**:
   - Vercel automatically provides SSL (HTTPS)
   - No additional configuration needed
   - Will be active once DNS is configured

### Step 4: Update Firebase Settings

**CRITICAL**: After deployment, update Firebase:

1. **Go to Firebase Console**:
   - https://console.firebase.google.com
   - Select your project: `shifa-digital-solution`

2. **Add Authorized Domains**:
   - Go to **Authentication** → **Settings** → **Authorized domains**
   - Click **"Add domain"**
   - Add: `shifadigitalsolution.in`
   - Add: `www.shifadigitalsolution.in`
   - Add: `your-project.vercel.app` (Vercel preview URL)

3. **Verify**:
   - Admin login should work
   - Contact form should work
   - All Firebase features should work

### Step 5: Test Your Website

Visit: **https://shifadigitalsolution.in**

Test:
- [ ] Homepage loads
- [ ] All pages work
- [ ] Logo displays
- [ ] Contact form works
- [ ] Admin login works (https://shifadigitalsolution.in/admin/login)
- [ ] Phone number works (+91 9234578836)
- [ ] WhatsApp links work
- [ ] HTTPS is active (green lock icon)

---

## 📋 DNS Configuration by Registrar

### If using GoDaddy:
1. Login to GoDaddy
2. Go to "My Products" → "DNS"
3. Add A records (for root domain)
4. Add CNAME record (for www)

### If using Namecheap:
1. Login to Namecheap
2. Go to "Domain List" → "Manage" → "Advanced DNS"
3. Add A records
4. Add CNAME record

### If using Google Domains:
1. Login to Google Domains
2. Go to "DNS" settings
3. Add A records
4. Add CNAME record

### If using Cloudflare:
1. Login to Cloudflare
2. Go to DNS settings
3. Add A records (set proxy to "DNS only" initially)
4. Add CNAME record
5. After DNS propagates, you can enable Cloudflare proxy

---

## ✅ Post-Deployment Checklist

- [ ] Domain is connected and working
- [ ] HTTPS/SSL is active
- [ ] Firebase authorized domains updated
- [ ] Admin login works
- [ ] Contact form works
- [ ] All pages load correctly
- [ ] Logo displays properly
- [ ] Phone/WhatsApp links work
- [ ] Mobile responsive
- [ ] Sitemap accessible: https://shifadigitalsolution.in/sitemap.xml

---

## 🎉 Success!

Your website is now live at:
- **https://shifadigitalsolution.in**
- **https://www.shifadigitalsolution.in** (redirects to main)

---

## 🆘 Troubleshooting

### Domain Not Working?
1. Wait 24-48 hours for DNS propagation
2. Check DNS records are correct
3. Verify in Vercel dashboard (should show "Valid Configuration")
4. Use https://dnschecker.org to check DNS propagation globally

### Firebase Errors?
1. Make sure authorized domains are added
2. Check environment variables are set correctly
3. Verify Firestore security rules are published

### Build Errors?
1. Check build logs in Vercel
2. Verify all environment variables are set
3. Make sure Firebase credentials are correct

---

## 📞 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Check Firebase Console
3. Verify DNS records
4. Test locally first: `npm run build`

---

**Your website will be live at: https://shifadigitalsolution.in** 🚀
