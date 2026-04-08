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
    default: "Kristyna Zackova — Product Leader & Founder",
    template: "%s — Kristyna Zackova",
  },
  description:
    "Principal Product Manager at Inmar Intelligence. Building consumer-centric SaaS solutions for CPG brands. Founder of ConversationLens and ThreadLift.",
  keywords: [
    "Kristyna Zackova",
    "Product Manager",
    "Product Leader",
    "CPG",
    "SaaS",
    "Martech",
    "AI Products",
    "ConversationLens",
    "ThreadLift",
    "Inmar Intelligence",
  ],
  authors: [{ name: "Kristyna Zackova" }],
  creator: "Kristyna Zackova",
  metadataBase: new URL("https://kristynazackova.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kristyna Zackova — Product Leader & Founder",
    description:
      "Principal Product Manager at Inmar Intelligence. Building consumer-centric SaaS solutions for CPG brands. Founder of ConversationLens and ThreadLift.",
    url: "https://kristynazackova.com",
    siteName: "Kristyna Zackova",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristyna Zackova — Product Leader & Founder",
    description:
      "Principal Product Manager at Inmar Intelligence. Building consumer-centric SaaS solutions for CPG brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
