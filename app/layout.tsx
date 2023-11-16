import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { AppProviders } from "./providers";
import Header from "./header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
            fontSans.variable,
            ""
          )}
        >
          <Header />
          {children}
        </body>
      </AppProviders>
    </html>
  );
}
