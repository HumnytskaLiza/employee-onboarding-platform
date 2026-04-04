import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user;
    //   const isOnKnowledge = nextUrl.pathname.startsWith("/knowledge");
    //   if (isOnKnowledge) {
    //     if (isLoggedIn) return true;
    //     return false;
    //   } else if (isLoggedIn) {
    //     return Response.redirect(new URL("/knowledge", nextUrl));
    //   }
    //   return true;
    // },
  },
  providers: [],
} satisfies NextAuthConfig;
