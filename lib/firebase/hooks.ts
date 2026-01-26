'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from './config'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}

export function useFirebaseToken() {
  const [token, setToken] = useState<string | null>(null)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      user.getIdToken().then(setToken)
    } else {
      setToken(null)
    }
  }, [user])

  return token
}
