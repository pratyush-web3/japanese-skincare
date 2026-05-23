import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} - 京都発のプレミアムスキンケア`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-background text-text antialiased min-h-screen">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
