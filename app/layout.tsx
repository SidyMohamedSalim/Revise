import { cn } from "@/lib/utils";
import "./globals.css";
import { AppProviders } from "./providers";
import Header from "./header";
import { inconsolata } from "@/src/theme/font";
import { getAuthSession } from "@/lib/authConfig";

export default async function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  const session = await getAuthSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <AppProviders>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
            inconsolata.className
          )}
        >
          <Header
            userName={session?.user.name}
            userId={session?.user.id}
            userImage={session?.user.image}
          />
          {children}
        </body>
      </AppProviders>
    </html>
  );
}
