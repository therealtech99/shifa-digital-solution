# 🔧 Fix NEXT_PUBLIC_SITE_URL Error in Vercel

## ❌ Error Message
```
Environment Variable "NEXT_PUBLIC_SITE_URL" references Secret "next_public_site_url", which does not exist.
```

## ✅ Solution: Update Environment Variable in Vercel Dashboard

### Step 1: Go to Vercel Environment Variables

1. Go to: **Vercel Dashboard** → **shifa-digital-solution99** → **Settings** → **Environment Variables**

### Step 2: Find NEXT_PUBLIC_SITE_URL

1. Look for `NEXT_PUBLIC_SITE_URL` in the list
2. Check if it shows a value or references a secret

### Step 3: Fix It

**Option A: If it exists but references a secret**
1. Click **"Edit"** (or the pencil icon) on `NEXT_PUBLIC_SITE_URL`
2. **Delete** the secret reference
3. Enter the **direct value**: `https://shifadigitalsolution.in`
4. Make sure **Production**, **Preview**, and **Development** are all checked
5. Click **"Save"**

**Option B: If it doesn't exist or you need to recreate it**
1. Click **"Add New"**
2. **Key**: `NEXT_PUBLIC_SITE_URL`
3. **Value**: `https://shifadigitalsolution.in`
4. Select: **Production**, **Preview**, and **Development** (check all three)
5. Click **"Save"**

### Step 4: Redeploy

After fixing the environment variable:

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **"Redeploy"**
4. Or wait for the next automatic deployment

---

## 🎯 Quick Fix (Copy-Paste)

1. **Vercel Dashboard** → **Settings** → **Environment Variables**
2. Find: `NEXT_PUBLIC_SITE_URL`
3. **Edit** → Change value to: `https://shifadigitalsolution.in`
4. **Save**
5. **Redeploy**

---

## ✅ Verification

After updating, the variable should show:
- **Key**: `NEXT_PUBLIC_SITE_URL`
- **Value**: `https://shifadigitalsolution.in` (direct value, not a secret reference)
- **Environments**: Production, Preview, Development (all checked)

---

## 🆘 Still Not Working?

If you still see the error after updating:

1. **Delete** the `NEXT_PUBLIC_SITE_URL` variable completely
2. **Add it again** with the direct value
3. **Redeploy**

This will clear any cached secret references.
