# Firebase Setup Guide

This guide will help you set up Firebase for the SHIFA DIGITAL SOLUTION website.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `shifa-digital-solution` (or your preferred name)
4. Enable Google Analytics (optional but recommended)
5. Click "Create project"

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get started"
3. Enable **Email/Password** provider
4. Click "Save"

## Step 3: Create Firestore Database

1. Go to **Firestore Database**
2. Click "Create database"
3. Start in **production mode** (we'll add security rules)
4. Choose a location (closest to your users)
5. Click "Enable"

## Step 4: Add Security Rules

1. Go to **Firestore Database** > **Rules**
2. Copy the contents of `firestore.rules` from this project
3. Paste into the rules editor
4. Click "Publish"

## Step 5: Get Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click the **Web** icon (`</>`)
4. Register app with nickname: "Shifa Digital Web"
5. Copy the Firebase configuration object

## Step 6: Get Service Account Key (for Admin SDK)

1. Go to **Project Settings** > **Service accounts**
2. Click "Generate new private key"
3. Download the JSON file
4. **IMPORTANT**: Keep this file secure and never commit it to Git

## Step 7: Configure Environment Variables

1. Copy `.env.example` to `.env.local`
2. Fill in the following values:

```env
# Firebase Client Configuration (from Step 5)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Firebase Admin SDK (from Step 6 - service account JSON)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n
```

**Note**: For `FIREBASE_PRIVATE_KEY`, copy the entire private key from the service account JSON file, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines, and replace newlines with `\n`.

## Step 8: Install Dependencies

```bash
npm install
```

## Step 9: Create Admin User

```bash
npm run seed:admin
```

This will create an admin user with:
- Email: `admin@shifadigital.com`
- Password: `Admin@123`

**⚠️ IMPORTANT**: Change the password immediately after first login!

## Step 10: Enable Storage (Optional but Recommended)

1. Go to **Storage** in Firebase Console
2. Click "Get started"
3. Start in production mode
4. Use default security rules
5. Choose a location

## Step 11: Test the Setup

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000/admin/login`
3. Login with the admin credentials
4. You should see the admin dashboard

## Troubleshooting

### Authentication Errors
- Make sure Email/Password provider is enabled
- Check that environment variables are set correctly
- Verify the Firebase project ID matches

### Firestore Permission Errors
- Check that security rules are published
- Verify the user has the correct role in Firestore

### Admin SDK Errors
- Ensure the private key is correctly formatted with `\n` for newlines
- Verify the service account email and project ID are correct

## Security Best Practices

1. **Never commit** `.env.local` or service account keys to Git
2. **Use environment variables** for all sensitive data
3. **Enable Firebase App Check** for production
4. **Set up Firebase Monitoring** to track usage
5. **Regularly review** Firestore security rules
6. **Use Firebase Hosting** for production deployment

## Next Steps

- Set up Firebase Hosting for production
- Configure custom domain
- Enable Firebase Analytics
- Set up backup and restore procedures
- Configure email templates for notifications

## Support

For Firebase documentation, visit:
- [Firebase Docs](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
