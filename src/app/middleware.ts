import { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const pathName = request.nextUrl.pathname;
    console.log("pathName", pathName)
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*']
}