import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect admin routes (except login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    // Token verification will be handled in API routes
    // For now, just allow access - Firebase Auth will handle it client-side
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
