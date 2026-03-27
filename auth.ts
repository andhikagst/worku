import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./features/auth/schemas/auth.schemas";
import { loginUser } from "./features/auth/services/auth.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("parsing")
        const parsed = loginSchema.safeParse(credentials);
      console.log(parsed)
        if (!parsed.success) {
          return null;
        }
        
        try {
          console.log("trying fetch data")
          const data = await loginUser(parsed.data);
          if (!data) {
            console.log(data)
            return null
          };
          
          console.log("trying return")
          return {
            id: data.payload.id,
            name: data.payload.name,
            email: data.payload.email,
            accessToken: data.token,
          };
        } catch(error) {
          console.log("error trying:", error)
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.accessToken = token.accessToken as string;
      return session;
    },
  },
   session: {
    strategy: "jwt",
  },
});
