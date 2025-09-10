import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  const token = await getToken({req:request, secret: process.env.NEXTAUTH_SECRET})
 
  const publicRoute = ["/signin", "/signup"]
  const privateRoute = ["/agent:path*"]
  const adminRoute = ["/admin"]

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
  if(adminRoute.includes(pathname)){
    if(token.role === 'ADMIN'){
      return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
  }
}

 
export const config = {
  matcher: ['/signin','/signup','/agent/:path*','/admin'],
}