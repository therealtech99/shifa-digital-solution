# GitHub Repository Setup

## Step 1: Create Repository on GitHub

1. **Go to GitHub**: https://github.com
2. **Login** with your account: `therealtech99`
3. **Click** the **"+"** icon (top right) → **"New repository"**
4. **Repository name**: `shifa-digital-solution`
5. **Description**: "Premium Digital Agency Website for SHIFA DIGITAL SOLUTION"
6. **Visibility**: Choose **Private** (recommended) or **Public**
7. **DO NOT** check "Initialize with README" (we already have code)
8. **Click** **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
cd "d:\new app\ShifaDigitalSolution"
git remote set-url origin https://github.com/therealtech99/shifa-digital-solution.git
git add .
git commit -m "Ready for deployment to shifadigitalsolution.in"
git branch -M main
git push -u origin main
```

## Alternative: If Repository Already Exists

If the repository already exists with a different name, update the remote:

```bash
git remote set-url origin https://github.com/therealtech99/YOUR-REPO-NAME.git
git push -u origin main
```

---

## Quick Commands (Copy & Paste)

```bash
# Update remote URL
git remote set-url origin https://github.com/therealtech99/shifa-digital-solution.git

# Add all files
git add .

# Commit
git commit -m "Ready for deployment to shifadigitalsolution.in"

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

---

**After pushing to GitHub, proceed with Vercel deployment!**
