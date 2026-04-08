import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kristyna Zackova",
    template: "%s — Kristyna Zackova",
  },
  description:
    "Product leader building consumer-centric SaaS solutions for CPG brands. Founder of ConversationLens.com.",
  metadataBase: new URL("https://kristynazackova.com"),
  openGraph: {
    title: "Kristyna Zackova",
    description:
      "Product leader building consumer-centric SaaS solutions for CPG brands. Founder of ConversationLens.com.",
    url: "https://kristynazackova.com",
    siteName: "Kristyna Zackova",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${playfair.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
