import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "./prisma";

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (user.id) {
        session.user.id = user.id;
      }
      return session;
    },
  },
} satisfies NextAuthOptions;

export const getAuthSession = () => getServerSession(authConfig);
