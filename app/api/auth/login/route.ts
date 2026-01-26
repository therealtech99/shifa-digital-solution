import { NextRequest, NextResponse } from 'next/server'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase/config'
import { getUserById } from '@/lib/firebase/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Note: Firebase Auth login should be done on the client side
    // This endpoint will verify the token sent from client
    // For server-side login, we need to use Firebase Admin SDK
    // For now, we'll return instructions to use client-side auth
    
    return NextResponse.json(
      { error: 'Please use Firebase Auth on the client side' },
      { status: 400 }
    )
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
