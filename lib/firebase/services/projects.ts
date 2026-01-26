import { adminDb } from '../admin'
import { COLLECTIONS } from '../collections'
import { FieldValue } from 'firebase-admin/firestore'

export interface Project {
  id?: string
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
  order: number
  createdAt?: Date
  updatedAt?: Date
}

export async function createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const projectRef = adminDb.collection(COLLECTIONS.PROJECTS).doc()
  await projectRef.set({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  })
  return projectRef.id
}

export async function getProjects(): Promise<Project[]> {
  const snapshot = await adminDb
    .collection(COLLECTIONS.PROJECTS)
    .orderBy('order', 'asc')
    .orderBy('createdAt', 'desc')
    .get()
  
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  })) as Project[]
}

export async function getProjectById(id: string): Promise<Project | null> {
  const doc = await adminDb.collection(COLLECTIONS.PROJECTS).doc(id).get()
  if (!doc.exists) return null
  
  return {
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data()?.createdAt?.toDate(),
    updatedAt: doc.data()?.updatedAt?.toDate(),
  } as Project
}

export async function updateProject(id: string, data: Partial<Project>): Promise<void> {
  await adminDb.collection(COLLECTIONS.PROJECTS).doc(id).update({
    ...data,
    updatedAt: FieldValue.serverTimestamp(),
  })
}

export async function deleteProject(id: string): Promise<void> {
  await adminDb.collection(COLLECTIONS.PROJECTS).doc(id).delete()
}
