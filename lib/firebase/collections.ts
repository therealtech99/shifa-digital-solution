// Collection names constants
export const COLLECTIONS = {
  USERS: 'users',
  LEADS: 'leads',
  PROJECTS: 'projects',
  BLOG: 'blog',
  TESTIMONIALS: 'testimonials',
  SETTINGS: 'settings',
} as const

// Helper types
export interface FirestoreTimestamp {
  seconds: number
  nanoseconds: number
}

export interface BaseDocument {
  id: string
  createdAt: FirestoreTimestamp | Date
  updatedAt: FirestoreTimestamp | Date
}
