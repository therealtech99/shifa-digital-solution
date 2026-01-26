# Environment Variables Setup

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Your Firebase client configuration is already set!** ✅

3. **You only need to add Firebase Admin SDK credentials:**

   Go to [Firebase Console](https://console.firebase.google.com/) → Your Project → Project Settings → Service accounts

   Click **"Generate new private key"** and download the JSON file.

   Then add these to your `.env.local`:

   ```env
   FIREBASE_PROJECT_ID=shifa-digital-solution
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@shifa-digital-solution.iam.gserviceaccount.com
   FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour actual private key here\n-----END PRIVATE KEY-----\n
   ```

   **Important**: For `FIREBASE_PRIVATE_KEY`, copy the entire `private_key` value from the JSON file (including the BEGIN/END lines) and replace all newlines with `\n`.

## Complete .env.local Template

```env
# Firebase Configuration (Already configured ✅)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyA8lUMh4hDw3FTkWJTvvt7n0Pxg4jLoGhk
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=shifa-digital-solution.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=shifa-digital-solution
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=shifa-digital-solution.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=836448388080
NEXT_PUBLIC_FIREBASE_APP_ID=1:836448388080:web:97d9381bd61da71799d335
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-YR9T5BB5KC

# Firebase Admin SDK (Add these from Service Account JSON)
FIREBASE_PROJECT_ID=shifa-digital-solution
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@shifa-digital-solution.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n

# Google Maps API (Optional - for contact page map)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Email Configuration (For contact form notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Next Steps

1. ✅ Firebase client config - **DONE**
2. ⏳ Add Firebase Admin SDK credentials (see above)
3. ⏳ Enable Firebase Authentication (Email/Password)
4. ⏳ Create Firestore Database
5. ⏳ Add Firestore security rules
6. ⏳ Run `npm run seed:admin` to create admin user

See `QUICK_START.md` for detailed instructions!
