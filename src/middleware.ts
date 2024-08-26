import { auth } from '@/lib/auth'
import { PUBLIC_ROUTES } from './constants'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export default auth((req) => {
  if (!req.auth && !PUBLIC_ROUTES.includes(req.nextUrl.pathname)) {
    const newUrl = new URL('/login', req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})
