import { adminDb } from '../admin'
import { COLLECTIONS } from '../collections'
import { FieldValue } from 'firebase-admin/firestore'

export interface Testimonial {
  id?: string
  name: string
  role: string
  company: string
  image?: string
  rating: number
  text: string
  featured: boolean
  order: number
  createdAt?: Date
  updatedAt?: Date
}

export async function createTestimonial(data: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const testimonialRef = adminDb.collection(COLLECTIONS.TESTIMONIALS).doc()
  await testimonialRef.set({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  })
  return testimonialRef.id
}

export async function getTestimonials(featured?: boolean): Promise<Testimonial[]> {
  let query = adminDb.collection(COLLECTIONS.TESTIMONIALS).orderBy('order', 'asc').orderBy('createdAt', 'desc')
  
  if (featured !== undefined) {
    query = query.where('featured', '==', featured) as any
  }
  
  const snapshot = await query.get()
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  })) as Testimonial[]
}

export async function getTestimonialById(id: string): Promise<Testimonial | null> {
  const doc = await adminDb.collection(COLLECTIONS.TESTIMONIALS).doc(id).get()
  if (!doc.exists) return null
  
  return {
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data()?.createdAt?.toDate(),
    updatedAt: doc.data()?.updatedAt?.toDate(),
  } as Testimonial
}

export async function updateTestimonial(id: string, data: Partial<Testimonial>): Promise<void> {
  await adminDb.collection(COLLECTIONS.TESTIMONIALS).doc(id).update({
    ...data,
    updatedAt: FieldValue.serverTimestamp(),
  })
}

export async function deleteTestimonial(id: string): Promise<void> {
  await adminDb.collection(COLLECTIONS.TESTIMONIALS).doc(id).delete()
}
