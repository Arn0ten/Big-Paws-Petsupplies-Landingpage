import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingElements from "./components/FloatingElements";
import type React from "react";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Big Paws Pet Hotel - Luxury Pet Care Services",
  description:
    "Big Paws Pet Hotel provides luxury accommodation and grooming services for your beloved pets. Professional care in a comfortable environment.",
  generator: "v0.dev",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BigPawsLogoBig-QEuBX7LEMcYoQTMrjMOPnGFkVuwmrA.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <FloatingElements />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
