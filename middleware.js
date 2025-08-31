import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  const token = await getToken({req:request, secret: process.env.NEXTAUTH_SECRET})
  const publicRoute = ["/signin", "/signup","/contact/:path*"]
  const privateRoute = ["/agent:path*"]

  if(publicRoute.includes(pathname)){
    if(token){
      return NextResponse.redirect(new URL("/", request.url))
    }
    return NextResponse.next()
  }
  if(privateRoute){
    if(token){
      if(token.role === 'USER'){
        return NextResponse.redirect(new URL("/", request.url))
      }
      return NextResponse.next()
    }else{
       return NextResponse.redirect(new URL("/", request.url))
    }
  }
}

 
export const config = {
  matcher: ['/signin','/signup','/agent/:path*','/contact/:path*'],
}