import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cafe 98 | Coffee in the Mountains",
  description: "Handmade coffee, pastries, and mountain-town warmth at Cafe 98.",
  openGraph: {
    title: "Cafe 98 | Coffee in the Mountains",
    description: "Handmade coffee, pastries, and mountain-town warmth at Cafe 98.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cafe 98 in the mountains" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe 98 | Coffee in the Mountains",
    description: "Handmade coffee, pastries, and mountain-town warmth at Cafe 98.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
