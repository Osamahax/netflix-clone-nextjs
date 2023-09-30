import {NextRequest, NextResponse, NextMiddleware} from "next/server"
import { useSession } from 'next-auth/react'
import { jwtVerify } from "jose";
export async function middleware (request:NextRequest) {
    const {data:session, status} = useSession()
    const {pathname, origin} = request.nextUrl;
    const jwt = request.cookies.get("next-auth.session-token")?.value;
    if(pathname === '/auth'){
        if(jwt) return NextResponse.redirect(`${origin}`);
        return NextResponse.next()
    }
    console.log("next-auth.session-token", jwt)
    const secret = new TextEncoder().encode(
        process.env.JWT_SECRET
    )
    console.log("🎉✨ middleware secret", secret)
    if(!jwt){
        return NextResponse.redirect(`${request.nextUrl}/auth`)
    }else {
        const {payload, protectedHeader} = await jwtVerify(jwt,secret);
        const headers = new Headers(request.headers);
        headers.set("user",JSON.stringify(payload.email));
        return NextResponse.next({
            request:{
                headers:headers,
            }
        })
    }
    
}