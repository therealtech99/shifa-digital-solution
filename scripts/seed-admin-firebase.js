const admin = require('firebase-admin')
require('dotenv').config({ path: '.env.local' })

// Initialize Firebase Admin
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID,
  })
}

const db = admin.firestore()
const auth = admin.auth()

async function seedAdmin() {
  try {
    const adminEmail = 'admin@shifadigital.com'
    const adminPassword = 'Admin@123'
    const adminName = 'Admin User'

    // Check if admin user already exists
    let userRecord
    try {
      userRecord = await auth.getUserByEmail(adminEmail)
      console.log('Admin user already exists in Firebase Auth')
    } catch (error) {
      // User doesn't exist, create it
      userRecord = await auth.createUser({
        email: adminEmail,
        password: adminPassword,
        displayName: adminName,
      })
      console.log('Admin user created in Firebase Auth')
    }

    // Check if user document exists in Firestore
    const userDoc = await db.collection('users').doc(userRecord.uid).get()
    
    if (userDoc.exists) {
      console.log('Admin user document already exists in Firestore')
      process.exit(0)
    }

    // Create user document in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email: adminEmail,
      name: adminName,
      role: 'admin',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    })

    console.log('✅ Admin user created successfully!')
    console.log('Email:', adminEmail)
    console.log('Password:', adminPassword)
    console.log('\n⚠️  IMPORTANT: Change the password after first login!')
    console.log('⚠️  IMPORTANT: Update the password in Firebase Console if needed!')

    process.exit(0)
  } catch (error) {
    console.error('Error seeding admin:', error)
    process.exit(1)
  }
}

seedAdmin()
