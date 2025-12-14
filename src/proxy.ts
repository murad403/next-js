import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublic = path.startsWith("/auth");
    const token = request.cookies.get("token")?.value;

    if(isPublic && token){
        return NextResponse.redirect(new URL('/', request.url));
    }
    if(!isPublic && !token){
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    return NextResponse.redirect(new URL('/home', request.url))
}


export const config = {
    matcher: [
        '/',
        '/auth/:path*',
        '/profile',
        '/users',
        '/orders',
        '/wishlist',
    ],
}