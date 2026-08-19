import type { Metadata } from "next";
import { Jost, Anton } from "next/font/google";
import Header from "./shared/components/Header";
import CustomCursor from "./shared/components/CustomCursor";
import Preloader from "./shared/components/Preloader";
import "./globals.css";
import Footer from "./shared/components/Footer";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
});

const jost = Jost({
  variable: "--font-jost",
});


export const metadata: Metadata = {
  title: "Rosalie Fashion",
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
      className={`${jost.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background">
        <Preloader />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
