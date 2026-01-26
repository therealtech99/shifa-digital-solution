# 🚀 Deploy to shifadigitalsolution.in - Step by Step

## Current Step: Vercel Project Creation

You're on the Vercel "New Project" page. Here's what to do:

### Step 1: Complete Vercel Project Setup (You're Here!)

**On the Vercel page you're seeing:**

1. **Git Scope**: Leave as default (or select your account)
2. **Private Repository Name**: Change from "my-repository" to:
   ```
   shifa-digital-solution
   ```
   (Or keep it as "my-repository" - it's just the Vercel project name)
3. **Toggle**: Keep "Private Repository" ON (recommended)
4. **Click "Create"** button

### Step 2: Wait for Initial Deployment

- Vercel will automatically:
  - Detect Next.js
  - Install dependencies
  - Build your project
  - Deploy to a preview URL (like `shifa-digital-solution.vercel.app`)

**⏳ Wait 2-5 minutes for the build to complete**

### Step 3: Add Environment Variables (CRITICAL!)

After deployment, you MUST add environment variables:

1. **Go to**: Project → **Settings** → **Environment Variables**
2. **Click**: "Add New"
3. **Add each variable** from `VERCEL_ENV_VARIABLES.md`:

   **Copy these one by one:**

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY
   Value: AIzaSyA8lUMh4hDw3FTkWJTvvt7n0Pxg4jLoGhk
   Environments: Production, Preview, Development
   ```

   ```
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   Value: shifa-digital-solution.firebaseapp.com
   Environments: Production, Preview, Development
   ```

   ```
   NEXT_PUBLIC_FIREBASE_PROJECT_ID
   Value: shifa-digital-solution
   Environments: Production, Preview, Development
   ```

   ```
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   Value: shifa-digital-solution.firebasestorage.app
   Environments: Production, Preview, Development
   ```

   ```
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   Value: 836448388080
   Environments: Production, Preview, Development
   ```

   ```
   NEXT_PUBLIC_FIREBASE_APP_ID
   Value: 1:836448388080:web:97d9381bd61da71799d335
   Environments: Production, Preview, Development
   ```

   ```
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
   Value: G-YR9T5BB5KC
   Environments: Production, Preview, Development
   ```

   ```
   FIREBASE_PROJECT_ID
   Value: shifa-digital-solution
   Environments: Production, Preview, Development
   ```

   ```
   FIREBASE_CLIENT_EMAIL
   Value: firebase-adminsdk-fbsvc@shifa-digital-solution.iam.gserviceaccount.com
   Environments: Production, Preview, Development
   ```

   ```
   FIREBASE_PRIVATE_KEY
   Value: -----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTd5Ba38Wj/q9g\nV4N1oWaIqLolbz6TvXvkiO0Xh9u1XQoAoAcqMpMoF43VMxw8oGT90OReVJPi8GC4\nV0lj0lDR1hlwqB1utcJSWO5vezARYJDXK7oD96o0/sPce0JQQTxvhLuo1bYiJhhp\nhk65fml7yL1pZBpLA1ErCaGHdSf1zsDYwbrkdIC3GhQhKZmMkB05SApnNgZMa1Oa\nB3JAGGYrzQfkGhvE7oun3SoSkamK2uru4wpKr+KCLP8mOCWZ0pXZn7nl7WvLjDtO\n0fAC4HirmnhbISy+C6FaKTI9Z+8hHwZvg4aqGRtosCm8QGW9rzdDcO0Sty/mDIMS\nVdgJgoz9AgMBAAECggEAEk+fpWURY8xxZu9e87mLo4799D2EwfAepPFKrWgRhErt\n/cdhNGBszObl1fIfgLiy6aBpZvwuE9kgzWsLQiGgpvmklYxOgUuA+lwwGTgs7w90\nVL+JfMohQKzc0bEdeh0rnbZX3f5RfBqKX/oNJvPXMcdqm55SNHvQNZ2fyNPnlxo5\nr5mnXNUhm7p+0NrVN/NRONsxYWsEcnKBI18yDMebeh5mCCwS1aMgYw3i7df5iQSA\nKBe3+nUdf6aCVeDHtoW7LHKk3ibA82r5+R3abV65eHEdMgl61Ij4xvbC70OJbogK\nGwIdrLA2QSr+UBIjxJSwMQDbwjxtaP0lx7j4a6YsKQKBgQDDanr0GhfygvLkLFAZ\nbPMot/xB6sOR8VHsdtBVdxM2PjZ0/gEz1DSYktdnUfcpAOXgveeUTCA+fTQ9liqM\n94fGmxzjFN6KuEbuDnQkHxCD/HwAyChdwjZkkYsfpZDorUKI/YPCBbCN5LgBMMAe\n+5411bP1my+iJBjMQkGzcxmpBQKBgQDBL4myiiO6VhflriBpwWz9z69bZqBHHrFi\nG62qZUrb/XqCHRNEU6n91c5nCUZ5DVN24H4AvFyp8uYN+H26AHDeMm3Qpj1Q+53I\nH+4yV7c8DMaRdaWxIx1qpuSW9AeLJEPHdRc89/cdqU13UooWrsyxcJlrGtDi6Ptr\nudJn/7y1mQKBgGNJbKMtxtEOu343DZN9iaY8pMyRDUDPjcJJM9zYnUhIH78dd1rw\nDLEgmpUCTkPlEuc3VbxBWXimgK5x57ir466DDRBLgC6XJmK5sUTRC8EjvZVgHTJW\nBPDgCgHQS2oM7etQc2tXHLdbaCoirNqRGXdc1wyJBpCpKnhNibg1WOpJAoGBAK79\nRJl5D8vl2FewVqP1FakCyzDb0Ssa3kqkD7ddcWW8QZBCjgVCU6UeWoxylmdobsYr\nq3c3KCi5YTIeeKRXaeWbgGWTb88/XDi+06C+W7gFSojQLHo7+JV2/3DNM1gSTWMK\n6TXM1wcDKKyBE5xgUgIYoJ+n9rbTm4qFE9YojONhAoGAGz0Q861zxlcd8ykXHmj+\n+oAhcDU5C+HBYx27jo1/UQWLCiQioJyYy5YdVf3C0lia1gpHN12zbgHRvVxoDMdC\nQZ2zJ9u25ENScxTXhPM75GW2VHMVf4RmqTxuYabyD2B8XukRKeZ1xkLEauUawr7g\nmyoA3T90r/6uQ70fqfa7Eek=\n-----END PRIVATE KEY-----\n
   Environments: Production, Preview, Development
   ```

   ```
   NEXT_PUBLIC_SITE_URL
   Value: https://shifadigitalsolution.in
   Environments: Production, Preview, Development
   ```

   ```
   EMAIL_HOST
   Value: smtp.gmail.com
   Environments: Production, Preview, Development
   ```

   ```
   EMAIL_PORT
   Value: 587
   Environments: Production, Preview, Development
   ```

   ```
   EMAIL_USER
   Value: your-email@gmail.com
   Environments: Production, Preview, Development
   ```

   ```
   EMAIL_PASS
   Value: your-app-password
   Environments: Production, Preview, Development
   ```

4. **After adding all variables**, click **"Redeploy"** (or it will auto-redeploy)

### Step 4: Connect Your Domain (shifadigitalsolution.in)

1. **Go to**: Project → **Settings** → **Domains**
2. **Click**: "Add Domain"
3. **Enter**: `shifadigitalsolution.in`
4. **Click**: "Add"
5. **Add www subdomain** (optional):
   - Click "Add Domain" again
   - Enter: `www.shifadigitalsolution.in`
   - Vercel will auto-redirect www to main domain

### Step 5: Configure DNS at Your Domain Registrar

Vercel will show you DNS instructions. Add these records at your domain registrar:

**A Records** (for root domain):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: A
Name: @
Value: 76.223.126.88
TTL: 3600
```

**CNAME Record** (for www):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Where to add:**
- Go to your domain registrar (where you bought shifadigitalsolution.in)
- Find "DNS Management" or "DNS Settings"
- Add the records above
- Save changes

### Step 6: Wait for DNS Propagation

- Usually takes 5 minutes to 48 hours
- Check status in Vercel dashboard
- When it shows "Valid Configuration" = Ready!

### Step 7: Update Firebase (CRITICAL!)

**After DNS is configured:**

1. **Go to**: Firebase Console → https://console.firebase.google.com
2. **Select**: `shifa-digital-solution` project
3. **Go to**: Authentication → Settings → Authorized domains
4. **Click**: "Add domain"
5. **Add**:
   - `shifadigitalsolution.in`
   - `www.shifadigitalsolution.in`
   - `your-project.vercel.app` (Vercel preview URL)

### Step 8: Test Your Website

Visit: **https://shifadigitalsolution.in**

Test:
- [ ] Homepage loads
- [ ] All pages work
- [ ] Logo displays
- [ ] Contact form works
- [ ] Admin login: https://shifadigitalsolution.in/admin/login
- [ ] Phone number works
- [ ] WhatsApp works
- [ ] HTTPS is active (green lock)

---

## ✅ Permanent Deployment Complete!

Your website is now:
- ✅ Live at https://shifadigitalsolution.in
- ✅ Automatically deploys on every Git push
- ✅ Has SSL/HTTPS (automatic)
- ✅ Fast global CDN
- ✅ Production-ready

---

## 🔄 Future Updates

To update your website:
1. Make changes locally
2. Commit: `git add . && git commit -m "Update"`
3. Push: `git push`
4. Vercel automatically deploys (2-5 minutes)

---

## 🆘 Troubleshooting

**Build fails?**
- Check environment variables are all set
- Check build logs in Vercel

**Domain not working?**
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check Vercel dashboard for status

**Firebase errors?**
- Make sure authorized domains are added
- Verify environment variables match Firebase

---

**You're almost there! Click "Create" on Vercel and follow the steps above!** 🚀
