import { adminDb } from '../admin'
import { COLLECTIONS } from '../collections'
import { FieldValue } from 'firebase-admin/firestore'

export interface BlogPost {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  category: string
  tags: string[]
  published: boolean
  publishedAt?: Date
  views: number
  createdAt?: Date
  updatedAt?: Date
}

export async function createBlogPost(data: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt' | 'views'>): Promise<string> {
  const postRef = adminDb.collection(COLLECTIONS.BLOG).doc()
  await postRef.set({
    ...data,
    views: 0,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  })
  return postRef.id
}

export async function getBlogPosts(published?: boolean): Promise<BlogPost[]> {
  let query = adminDb.collection(COLLECTIONS.BLOG).orderBy('createdAt', 'desc')
  
  if (published !== undefined) {
    query = query.where('published', '==', published) as any
  }
  
  const snapshot = await query.get()
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    publishedAt: doc.data().publishedAt?.toDate(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  })) as BlogPost[]
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const doc = await adminDb.collection(COLLECTIONS.BLOG).doc(id).get()
  if (!doc.exists) return null
  
  return {
    id: doc.id,
    ...doc.data(),
    publishedAt: doc.data()?.publishedAt?.toDate(),
    createdAt: doc.data()?.createdAt?.toDate(),
    updatedAt: doc.data()?.updatedAt?.toDate(),
  } as BlogPost
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const snapshot = await adminDb
    .collection(COLLECTIONS.BLOG)
    .where('slug', '==', slug)
    .limit(1)
    .get()
  
  if (snapshot.empty) return null
  
  const doc = snapshot.docs[0]
  return {
    id: doc.id,
    ...doc.data(),
    publishedAt: doc.data().publishedAt?.toDate(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  } as BlogPost
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>): Promise<void> {
  const updateData: any = {
    ...data,
    updatedAt: FieldValue.serverTimestamp(),
  }
  
  if (data.published && !data.publishedAt) {
    updateData.publishedAt = FieldValue.serverTimestamp()
  }
  
  await adminDb.collection(COLLECTIONS.BLOG).doc(id).update(updateData)
}

export async function deleteBlogPost(id: string): Promise<void> {
  await adminDb.collection(COLLECTIONS.BLOG).doc(id).delete()
}

export async function incrementBlogViews(id: string): Promise<void> {
  await adminDb.collection(COLLECTIONS.BLOG).doc(id).update({
    views: FieldValue.increment(1),
  })
}
