
import NextAuth, { AuthOptions } from 'next-auth'
import Github from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'
import prismadb from '@/lib/prisma'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        Github({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        }),
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
              email: {
                label: 'Email',
                type: 'text',
              },
              password: {
                label: 'Password',
                type: 'passord'
              }
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials?.password) {
                throw new Error('Email and password required');
              }
      
              const user = await prismadb.user.findUnique({ where: {
                email: credentials.email
              }});
      
              if (!user || !user.hashedPassword) {
                throw new Error('Email does not exist');
              }
      
              const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
      
              if (!isCorrectPassword) {
                throw new Error('Incorrect password');
              }
      
              return user;
            }
          })

    ],
    pages: {
        signIn: '/auth'
    },
    debug: process.env.NODE_ENV === 'development',
    session: { strategy: 'jwt' },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }