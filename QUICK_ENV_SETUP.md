# ⚡ QUICK SETUP - Add All Environment Variables in 2 Minutes

## 🎯 Step-by-Step (Copy & Paste)

### 1. Get Vercel API Token
- Go to: **https://vercel.com/account/tokens**
- Click **"Create Token"**
- Name: `env-setup`
- **Copy the token**

### 2. Run This Command

Open PowerShell in your project folder and run:

```powershell
# Set your token (replace YOUR_TOKEN_HERE with the token you copied)
$env:VERCEL_TOKEN="YOUR_TOKEN_HERE"

# Run the automated script
npm run vercel:add-env
```

**That's it!** All 15 variables will be added automatically! 🎉

---

## 📝 Alternative: Manual One-Time Setup

If the script doesn't work, you can also:

1. **Install Vercel CLI**:
   ```powershell
   npm install -g vercel
   ```

2. **Login**:
   ```powershell
   vercel login
   ```

3. **Link your project**:
   ```powershell
   vercel link
   ```
   - Select: `the-real-tech` (team)
   - Select: `shifa-digital-solution99` (project)

4. **Add variables one by one** (but faster with copy-paste):
   - Keep `VERCEL_ENV_VARIABLES.md` open
   - For each variable, run:
   ```powershell
   vercel env add VARIABLE_NAME production preview development
   ```
   - Paste the value when prompted
   - Press Enter

---

## ✅ After Adding Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify all 15 variables are there
3. Update `EMAIL_USER` and `EMAIL_PASS` with your actual email
4. Go to **Deployments** tab → Click **"Redeploy"**

---

## 🆘 Need Help?

If you get errors, share the error message and I'll help fix it!
