import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JapaneseBackdrop from "@/components/decorative/JapaneseBackdrop";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — 日本の自然素材スキンケア`,
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
      <body className="bg-background text-text antialiased relative">
        <JapaneseBackdrop />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
