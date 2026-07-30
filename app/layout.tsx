import type { Metadata } from "next";
import { Alan_Sans } from "next/font/google";
import Header from "./shared/components/Header";
import "./globals.css";

const alanSans = Alan_Sans({
  variable: "--font-main",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Rosalie Shopping",
  description: "Shop your favorite products at unbeatable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alanSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white before:content-[''] before:fixed before:inset-0 before:z-[-1] before:bg-[url('/images/bg-1.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-50">
        <Header />
        {children}
      </body>
    </html>
  );
}
