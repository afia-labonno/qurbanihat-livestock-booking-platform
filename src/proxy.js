import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';


export async function proxy(request) {

  // getting current pathname.
  const pathname = request.nextUrl.pathname;

  if (pathname !== '/animals') {

    const session = await auth.api.getSession({
      headers: await headers()
    })

    if (!session) {
      return NextResponse.redirect(
        new URL('/signin', request.url)
      )
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/animals/:path*']
}