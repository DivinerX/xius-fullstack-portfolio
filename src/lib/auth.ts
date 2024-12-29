import { env } from '@/env'
import type { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

declare module 'next-auth' {
  /**
   * The session object.
   */
  interface Session {
    /**
     * The user object.
     */
    user: {
      /**
       * The user's id.
       */
      id: string
      /**
       * The user's email.
       */
      email: string
      /**
       * The user's name.
       */
      name: string | null
      /**
       * The user's picture.
       */
      picture: string | null
    }
  }
}

export const config: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: env.OAUTH_CLIENT_KEY,
      clientSecret: env.OAUTH_CLIENT_SECRET
    })
  ],

  session: {
    strategy: 'jwt'
  }
}

const handler = NextAuth(config)
export { handler as GET, handler as POST }
