import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIMBARA XIII",
  description: "Utopian Visionary Quest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <SpeedInsights />
      <Analytics />
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
