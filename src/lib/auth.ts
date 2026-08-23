import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { rateLimitAuth, getClientKey } from "./rateLimit";
import { db } from "./db";

const config = {
  session: { strategy: "jwt" as const },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, unknown> | null) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = (credentials.email as string).toLowerCase().trim();

        // Anti brute-force: max 5 percobaan login per IP+email per 5 menit.
        try {
          const hdrs = await headers();
          const fakeReq = new Request("http://local", { headers: hdrs });
          await rateLimitAuth(`login:${getClientKey(fakeReq)}:${email}`);
        } catch {
          throw new Error("Terlalu banyak percobaan login. Coba lagi nanti.");
        }

        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user) return null;

        const valid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        return valid
          ? { id: user.id, email: user.email, name: user.name }
          : null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: Record<string, unknown>; user?: { id: string } }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }: { session: { user: { id: string } }; token: { id: string } }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

// @ts-expect-error NextAuth v5 default export type issue with bundler moduleResolution
export const { handlers, signIn, signOut, auth } = NextAuth(config);

// Sumber kebenaran tunggal untuk guard halaman terproteksi.
// Layout (main) dan semua server action memakai ini; session terjamin non-null.
export async function requireSession() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  return session;
}
