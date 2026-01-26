# Quick Start Guide - SHIFA DIGITAL SOLUTION

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Up Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Your Firebase client configuration is already set in `.env.example`. You just need to add:

**Firebase Admin SDK Credentials** (for server-side operations):

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `shifa-digital-solution`
3. Go to **Project Settings** > **Service accounts**
4. Click **"Generate new private key"**
5. Download the JSON file
6. Open the JSON file and copy these values to `.env.local`:

```env
FIREBASE_PROJECT_ID=shifa-digital-solution
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@shifa-digital-solution.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n
```

**Important**: For `FIREBASE_PRIVATE_KEY`, copy the entire `private_key` value from the JSON file, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines, and replace all actual newlines with `\n`.

### Step 3: Enable Firebase Services

#### Enable Authentication
1. Go to Firebase Console > **Authentication**
2. Click **"Get started"**
3. Enable **Email/Password** provider
4. Click **"Save"**

#### Create Firestore Database
1. Go to Firebase Console > **Firestore Database**
2. Click **"Create database"**
3. Start in **production mode**
4. Choose a location (closest to your users)
5. Click **"Enable"**

#### Add Security Rules
1. Go to **Firestore Database** > **Rules**
2. Copy the contents from `firestore.rules` in this project
3. Paste and click **"Publish"**

#### Enable Storage (Optional but Recommended)
1. Go to **Storage**
2. Click **"Get started"**
3. Start in production mode
4. Use default security rules

### Step 4: Create Admin User

```bash
npm run seed:admin
```

This creates an admin user:
- **Email**: `admin@shifadigital.com`
- **Password**: `Admin@123`

⚠️ **IMPORTANT**: Change the password immediately after first login!

### Step 5: Run the Development Server

```bash
npm run dev
```

### Step 6: Access the Website

- **Public Site**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login

## 📋 Environment Variables Checklist

Make sure your `.env.local` has:

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
✅ `EMAIL_HOST` (for contact form emails)  
✅ `EMAIL_PORT`  
✅ `EMAIL_USER`  
✅ `EMAIL_PASS`  
✅ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (optional, for contact page map)  

## 🎯 Next Steps

1. **Customize Content**: Update text, images, and branding
2. **Add Projects**: Go to Admin Panel > Projects
3. **Add Blog Posts**: Go to Admin Panel > Blog
4. **Add Testimonials**: Go to Admin Panel > Testimonials
5. **Configure Settings**: Go to Admin Panel > Settings

## 🐛 Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Check that all `NEXT_PUBLIC_FIREBASE_*` variables are set in `.env.local`
- Restart the dev server after adding environment variables

### "Permission denied" errors
- Make sure Firestore security rules are published
- Check that the admin user has the correct role

### Admin login not working
- Run `npm run seed:admin` to create the admin user
- Check Firebase Console > Authentication to verify user exists

### Contact form not sending emails
- Configure email settings in `.env.local`
- For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833)

## 📚 Documentation

- Full setup guide: `FIREBASE_SETUP.md`
- Firebase Docs: https://firebase.google.com/docs

## 🎉 You're All Set!

Your premium digital agency website is ready to go! Start customizing and adding your content.
