import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Contexta
   */
  interface Session {
    user: DefaultSession["user"] & {
      /** The user's postal address. */
      id?: string;
    };
  }
}