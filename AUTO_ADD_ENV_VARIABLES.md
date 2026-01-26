# 🚀 Automated Environment Variables Setup for Vercel

This guide will help you automatically add all environment variables to Vercel in **seconds** instead of manually adding them one by one.

## ⚡ Quick Method (Recommended)

### Option 1: Using Vercel CLI (Easiest)

1. **Install Vercel CLI** (if not already installed):
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```powershell
   vercel login
   ```
   - This will open your browser to authenticate

3. **Link your project** (if not already linked):
   ```powershell
   cd "d:\new app\ShifaDigitalSolution"
   vercel link
   ```
   - Select your team: `the-real-tech`
   - Select your project: `shifa-digital-solution99`

4. **Run the automated script**:
   ```powershell
   node scripts/add-vercel-env.js
   ```

   **OR** use the PowerShell script:
   ```powershell
   .\scripts\add-vercel-env.ps1
   ```

---

### Option 2: Using Vercel API (Fully Automated)

This method uses the Vercel API to add all variables programmatically.

#### Step 1: Get Your Vercel API Token

1. Go to: **https://vercel.com/account/tokens**
2. Click **"Create Token"**
3. Give it a name: `env-setup`
4. Click **"Create"**
5. **Copy the token** (you'll only see it once!)

#### Step 2: Get Your Project Details

1. Go to your Vercel Dashboard
2. Click on your project: `shifa-digital-solution99`
3. Go to **Settings** → **General**
4. Note your **Project ID** (or use the project name)

#### Step 3: Set Environment Variables

Create a `.env.local` file or set these in your terminal:

```powershell
# In PowerShell
$env:VERCEL_TOKEN="your-token-here"
$env:VERCEL_TEAM_ID="the-real-tech"
$env:VERCEL_PROJECT_ID="shifa-digital-solution99"
```

Or add to `.env.local`:
```
VERCEL_TOKEN=your-token-here
VERCEL_TEAM_ID=the-real-tech
VERCEL_PROJECT_ID=shifa-digital-solution99
```

#### Step 4: Run the Script

```powershell
cd "d:\new app\ShifaDigitalSolution"
node scripts/add-vercel-env.js
```

The script will:
- ✅ Add all 15 environment variables automatically
- ✅ Set them for Production, Preview, and Development
- ✅ Show you a summary of what was added

---

## 📋 What Gets Added

The script automatically adds these 15 variables:

### Firebase Client (7 variables)
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

### Firebase Admin (3 variables)
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

### Site & Email (5 variables)
- `NEXT_PUBLIC_SITE_URL`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER` (⚠️ Update with your email)
- `EMAIL_PASS` (⚠️ Update with your app password)

---

## ⚠️ Important Notes

1. **Email Variables**: After running the script, update `EMAIL_USER` and `EMAIL_PASS` in Vercel Dashboard with your actual email credentials.

2. **Verification**: After the script completes, verify in Vercel Dashboard:
   - Go to **Settings** → **Environment Variables**
   - Check that all 15 variables are present

3. **Redeploy**: After adding variables, trigger a new deployment:
   - Go to **Deployments** tab
   - Click **"Redeploy"** on the latest deployment
   - Or push a new commit to trigger automatic deployment

---

## 🐛 Troubleshooting

### Error: "VERCEL_TOKEN is required"
- Make sure you've set the `VERCEL_TOKEN` environment variable
- Get your token from: https://vercel.com/account/tokens

### Error: "Project not found"
- Check your `VERCEL_PROJECT_ID` matches your project name in Vercel
- Or use the actual Project ID from Settings → General

### Error: "Unauthorized"
- Your Vercel token might be expired or invalid
- Create a new token and try again

### Some variables failed to add
- Check the error message in the script output
- Some variables might already exist (that's okay!)
- You can manually add the failed ones in Vercel Dashboard

---

## ✅ After Setup

1. ✅ All environment variables are added
2. ✅ Update `EMAIL_USER` and `EMAIL_PASS` if needed
3. ✅ Trigger a new deployment
4. ✅ Your website should work perfectly!

---

## 🎯 Quick Start (Copy & Paste)

```powershell
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Link project
cd "d:\new app\ShifaDigitalSolution"
vercel link

# 4. Get API Token from: https://vercel.com/account/tokens
# 5. Set token
$env:VERCEL_TOKEN="paste-your-token-here"

# 6. Run script
node scripts/add-vercel-env.js
```

That's it! All variables will be added automatically. 🎉
