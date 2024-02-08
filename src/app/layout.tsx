import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google';
import { Caveat } from "next/font/google";
import "./globals.css";

const inter = Caveat({ subsets: ["latin"] });
const roboto_Mono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cache Ho!",
  description: "Cache Ho!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
