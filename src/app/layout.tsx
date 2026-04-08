import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-border">
          <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Kristyna Zackova
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/#work"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Writing
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <div className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted">
            <p>&copy; {new Date().getFullYear()}</p>
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/k-zackova/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@kristynazackova.com"
                className="hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
