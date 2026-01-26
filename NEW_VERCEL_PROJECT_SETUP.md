# 🆕 Create New Vercel Project - Step by Step

## ✅ Step 1: Create New Project in Vercel

1. Go to: **Vercel Dashboard** → **Add New** → **Project**
2. Select your GitHub repository: `therealtech99/shifa-digital-solution`
3. Click **"Import"**

## ✅ Step 2: Configure Project

1. **Project Name**: `shifa-digital-solution` (or any name you prefer)
2. **Framework Preset**: Should auto-detect **Next.js** ✅
3. **Root Directory**: Leave as `.` (default)
4. **Build Command**: Should be `npm run build` (auto-detected)
5. **Output Directory**: Leave as default (`.next`)
6. **Install Command**: Should be `npm install` (auto-detected)

**DO NOT CLICK DEPLOY YET!** ⚠️

## ✅ Step 3: Add Environment Variables FIRST

Before deploying, add all environment variables:

1. Click **"Environment Variables"** (on the right side or in the project setup)
2. Add each variable one by one:

### Firebase Client (7 variables):
```
NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyA8lUMh4hDw3FTkWJTvvt7n0Pxg4jLoGhk
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = shifa-digital-solution.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID = shifa-digital-solution
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = shifa-digital-solution.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 836448388080
NEXT_PUBLIC_FIREBASE_APP_ID = 1:836448388080:web:97d9381bd61da71799d335
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G-YR9T5BB5KC
```

### Firebase Admin (3 variables):
```
FIREBASE_PROJECT_ID = shifa-digital-solution
FIREBASE_CLIENT_EMAIL = firebase-adminsdk-fbsvc@shifa-digital-solution.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY = -----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTd5Ba38Wj/q9g\nV4N1oWaIqLolbz6TvXvkiO0Xh9u1XQoAoAcqMpMoF43VMxw8oGT90OReVJPi8GC4\nV0lj0lDR1hlwqB1utcJSWO5vezARYJDXK7oD96o0/sPce0JQQTxvhLuo1bYiJhhp\nhk65fml7yL1pZBpLA1ErCaGHdSf1zsDYwbrkdIC3GhQhKZmMkB05SApnNgZMa1Oa\nB3JAGGYrzQfkGhvE7oun3SoSkamK2uru4wpKr+KCLP8mOCWZ0pXZn7nl7WvLjDtO\n0fAC4HirmnhbISy+C6FaKTI9Z+8hHwZvg4aqGRtosCm8QGW9rzdDcO0Sty/mDIMS\nVdgJgoz9AgMBAAECggEAEk+fpWURY8xxZu9e87mLo4799D2EwfAepPFKrWgRhErt\n/cdhNGBszObl1fIfgLiy6aBpZvwuE9kgzWsLQiGgpvmklYxOgUuA+lwwGTgs7w90\nVL+JfMohQKzc0bEdeh0rnbZX3f5RfBqKX/oNJvPXMcdqm55SNHvQNZ2fyNPnlxo5\nr5mnXNUhm7p+0NrVN/NRONsxYWsEcnKBI18yDMebeh5mCCwS1aMgYw3i7df5iQSA\nKBe3+nUdf6aCVeDHtoW7LHKk3ibA82r5+R3abV65eHEdMgl61Ij4xvbC70OJbogK\nGwIdrLA2QSr+UBIjxJSwMQDbwjxtaP0lx7j4a6YsKQKBgQDDanr0GhfygvLkLFAZ\nbPMot/xB6sOR8VHsdtBVdxM2PjZ0/gEz1DSYktdnUfcpAOXgveeUTCA+fTQ9liqM\n94fGmxzjFN6KuEbuDnQkHxCD/HwAyChdwjZkkYsfpZDorUKI/YPCBbCN5LgBMMAe\n+5411bP1my+iJBjMQkGzcxmpBQKBgQDBL4myiiO6VhflriBpwWz9z69bZqBHHrFi\nG62qZUrb/XqCHRNEU6n91c5nCUZ5DVN24H4AvFyp8uYN+H26AHDeMm3Qpj1Q+53I\nH+4yV7c8DMaRdaWxIx1qpuSW9AeLJEPHdRc89/cdqU13UooWrsyxcJlrGtDi6Ptr\nudJn/7y1mQKBgGNJbKMtxtEOu343DZN9iaY8pMyRDUDPjcJJM9zYnUhIH78dd1rw\nDLEgmpUCTkPlEuc3VbxBWXimgK5x57ir466DDRBLgC6XJmK5sUTRC8EjvZVgHTJW\nBPDgCgHQS2oM7etQc2tXHLdbaCoirNqRGXdc1wyJBpCpKnhNibg1WOpJAoGBAK79\nRJl5D8vl2FewVqP1FakCyzDb0Ssa3kqkD7ddcWW8QZBCjgVCU6UeWoxylmdobsYr\nq3c3KCi5YTIeeKRXaeWbgGWTb88/XDi+06C+W7gFSojQLHo7+JV2/3DNM1gSTWMK\n6TXM1wcDKKyBE5xgUgIYoJ+n9rbTm4qFE9YojONhAoGAGz0Q861zxlcd8ykXHmj+\n+oAhcDU5C+HBYx27jo1/UQWLCiQioJyYy5YdVf3C0lia1gpHN12zbgHRvVxoDMdC\nQZ2zJ9u25ENScxTXhPM75GW2VHMVf4RmqTxuYabyD2B8XukRKeZ1xkLEauUawr7g\nmyoA3T90r/6uQ70fqfa7Eek=\n-----END PRIVATE KEY-----\n
```

### Site & Email (5 variables):
```
NEXT_PUBLIC_SITE_URL = https://shifadigitalsolution.in
EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-app-password
```

**Important**: 
- For each variable, select: **Production**, **Preview**, and **Development** (check all three)
- **DO NOT** create any secrets - just add as regular environment variables
- For `NEXT_PUBLIC_SITE_URL`, add it as a **direct value**, NOT as a secret reference

## ✅ Step 4: Deploy

1. After adding all 15 environment variables
2. Click **"Deploy"**
3. Wait 5-15 minutes for the first build

## ✅ Step 5: Connect Your Domain

After deployment succeeds:

1. Go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `shifadigitalsolution.in`
4. Add DNS records at Hostinger (as we did before)
5. Wait for DNS propagation

---

## 🎯 Quick Checklist

- [ ] Create new Vercel project
- [ ] Connect to GitHub repo: `therealtech99/shifa-digital-solution`
- [ ] Add all 15 environment variables (BEFORE deploying)
- [ ] Make sure `NEXT_PUBLIC_SITE_URL` is a direct value (not secret)
- [ ] Click Deploy
- [ ] Wait for build to complete
- [ ] Connect domain `shifadigitalsolution.in`

---

## ⚠️ Important Notes

1. **Add environment variables BEFORE deploying** - this prevents errors
2. **Do NOT create secrets** - just regular environment variables
3. **Select all environments** (Production, Preview, Development) for each variable
4. **The code is already fixed** - `next.config.js` doesn't reference env variables anymore

---

## 🎉 After Deployment

Your website will be live at:
- Vercel URL: `your-project-name.vercel.app`
- Your domain: `https://shifadigitalsolution.in` (after DNS setup)

Good luck! 🚀
