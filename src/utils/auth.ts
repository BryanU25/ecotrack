import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// SERVICES
import { fetcher } from "./httpClient";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(
        credentials: Record<"email" | "password", string> | undefined | any,
        req: any
      ): Promise<any> {
        const userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        const session = await fetcher("/auth/login", userCredentials);

        if (session) {
          const { data } = session;
          const { usuario, rol } = data.user;

          return {
            id: usuario.id,
            token: data.accessToken,
            name: usuario.nombre,
            username: usuario.nombre,
            email: usuario.email,
            rol: rol.rol,
          };
        }

        return false;
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    async session({ session, token }) {
      if (session) {
        session.user = token.user as any;
      }

      return session;
    },

    async signIn({ user }: any) {
      if (user) {
        return true;
      }

      return false;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;
