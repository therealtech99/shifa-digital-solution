import { adminAuth } from './admin'
import { adminDb } from './admin'
import { COLLECTIONS } from './collections'

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor'
  createdAt?: Date
  updatedAt?: Date
}

export async function verifyIdToken(token: string): Promise<User | null> {
  try {
    const decodedToken = await adminAuth.verifyIdToken(token)
    
    // Get user data from Firestore
    const userDoc = await adminDb.collection(COLLECTIONS.USERS).doc(decodedToken.uid).get()
    
    if (!userDoc.exists) {
      return null
    }
    
    const userData = userDoc.data()
    return {
      id: decodedToken.uid,
      email: decodedToken.email || '',
      name: userData?.name || '',
      role: userData?.role || 'editor',
      createdAt: userData?.createdAt?.toDate(),
      updatedAt: userData?.updatedAt?.toDate(),
    }
  } catch (error) {
    console.error('Error verifying token:', error)
    return null
  }
}

export async function createUser(email: string, password: string, name: string, role: 'admin' | 'editor' = 'editor'): Promise<string> {
  // Create user in Firebase Auth
  const userRecord = await adminAuth.createUser({
    email,
    password,
    displayName: name,
  })
  
  // Create user document in Firestore
  await adminDb.collection(COLLECTIONS.USERS).doc(userRecord.uid).set({
    email,
    name,
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  
  return userRecord.uid
}

export async function getUserById(uid: string): Promise<User | null> {
  const userDoc = await adminDb.collection(COLLECTIONS.USERS).doc(uid).get()
  
  if (!userDoc.exists) {
    return null
  }
  
  const userData = userDoc.data()
  return {
    id: userDoc.id,
    email: userData?.email || '',
    name: userData?.name || '',
    role: userData?.role || 'editor',
    createdAt: userData?.createdAt?.toDate(),
    updatedAt: userData?.updatedAt?.toDate(),
  }
}
