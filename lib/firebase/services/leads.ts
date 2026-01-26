import { adminDb } from '../admin'
import { COLLECTIONS } from '../collections'
import { FieldValue } from 'firebase-admin/firestore'

export interface Lead {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  notes?: string
  createdAt?: Date
  updatedAt?: Date
}

export async function createLead(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const leadRef = adminDb.collection(COLLECTIONS.LEADS).doc()
  await leadRef.set({
    ...data,
    status: 'new',
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  })
  return leadRef.id
}

export async function getLeads(status?: string): Promise<Lead[]> {
  let query = adminDb.collection(COLLECTIONS.LEADS).orderBy('createdAt', 'desc')
  
  if (status && status !== 'all') {
    query = query.where('status', '==', status) as any
  }
  
  const snapshot = await query.get()
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  })) as Lead[]
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const doc = await adminDb.collection(COLLECTIONS.LEADS).doc(id).get()
  if (!doc.exists) return null
  
  return {
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data()?.createdAt?.toDate(),
    updatedAt: doc.data()?.updatedAt?.toDate(),
  } as Lead
}

export async function updateLead(id: string, data: Partial<Lead>): Promise<void> {
  await adminDb.collection(COLLECTIONS.LEADS).doc(id).update({
    ...data,
    updatedAt: FieldValue.serverTimestamp(),
  })
}

export async function deleteLead(id: string): Promise<void> {
  await adminDb.collection(COLLECTIONS.LEADS).doc(id).delete()
}
