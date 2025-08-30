
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { prisma } from "@/lib/PrismaProvider";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email
            }
          })
          if (!user) {
            return null
          }
          const comparePassword = await bcrypt.compare(credentials.password, user.password)
          if (!comparePassword) {
            return null
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }

        } catch (error) {
          return null
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id,
          token.name = user.name,
          token.email = user.email,
          token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id,
          session.user.email = token.email,
          session.user.name = token.name,
          session.user.role = token.role
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }