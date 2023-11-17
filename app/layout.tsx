import { cn } from "@/lib/utils";
import "./globals.css";
import { AppProviders } from "./providers";
import Header from "./header";
import { inconsolata } from "@/src/theme/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <AppProviders>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inconsolata.className
          )}
        >
          <Header />
          {children}
        </body>
      </AppProviders>
    </html>
  );
}
