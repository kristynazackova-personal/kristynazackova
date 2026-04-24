import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
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
      <body className="min-h-full flex flex-col" style={{ background: "#F8F8F7", color: "#000000" }}>
        {/* Nav */}
        <nav style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
            <Link href="/" className="text-xs font-bold tracking-widest uppercase" style={{ color: "#000" }}>
              KZ
            </Link>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/#systems" className="hidden sm:inline text-xs font-medium uppercase tracking-wider hover:underline transition-all duration-100" style={{ color: "#4B5563" }}>Ventures</Link>
              <Link href="/#experience" className="hidden sm:inline text-xs font-medium uppercase tracking-wider hover:underline transition-all duration-100" style={{ color: "#4B5563" }}>Experience</Link>
              <Link href="/blog" className="text-xs font-medium uppercase tracking-wider hover:underline transition-all duration-100" style={{ color: "#4B5563" }}>Writing</Link>
              <a href="mailto:kristynazackova@gmail.com" className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-md transition-all duration-100 hover:bg-black/5" style={{ color: "#000" }}>
                Contact
              </a>
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="mt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "#4B5563" }}>
            <span>&copy; {new Date().getFullYear()} Kristyna Zackova</span>
            <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-5">
              <a href="https://www.linkedin.com/in/k-zackova/?utm_source=kristynazackova.com&utm_medium=portfolio&utm_campaign=footer" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all duration-100" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/zackovak?utm_source=kristynazackova.com&utm_medium=portfolio&utm_campaign=footer" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all duration-100 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://mentorcruise.com/mentor/kristynazackova/?utm_source=kristynazackova.com&utm_medium=portfolio&utm_campaign=footer" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-100 hover:text-black">Mentorship</a>
              <a href="https://conversationlens.com?utm_source=kristynazackova.com&utm_medium=portfolio&utm_campaign=footer" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-100 hover:text-black">ConversationLens</a>
              <a href="https://www.threadlift.io?utm_source=kristynazackova.com&utm_medium=portfolio&utm_campaign=footer" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-100 hover:text-black">ThreadLift</a>
            </div>
          </div>
        </footer>

        <Analytics />
        <SpeedInsights />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(e,c){if(!c.__SV){var l,h;window.mixpanel=c;c._i=[];c.init=function(q,r,f){function t(d,a){var g=a.split(".");2==g.length&&(d=d[g[0]],a=g[1]);d[a]=function(){d.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";b.people=b.people||[];b.toString=function(d){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);d||(a+=" (stub)");return a};b.people.toString=function(){return b.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<l.length;h++)t(b,l[h]);var n="set set_once union unset remove delete".split(" ");b.get_group=function(){function d(p){a[p]=function(){b.push([g,[p].concat(Array.prototype.slice.call(arguments,0))])}}for(var a={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<n.length;m++)d(n[m]);return a};c._i.push([q,r,f])};c.__SV=1.2;var k=e.createElement("script");k.type="text/javascript";k.async=!0;k.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=e.getElementsByTagName("script")[0];e.parentNode.insertBefore(k,e)}})(document,window.mixpanel||[]);mixpanel.init("5c7e2c366cb1a1ecd821091bf3dbc138",{autocapture:true,record_sessions_percent:100,track_pageview:"full-url"});mixpanel.register({"referrer":document.referrer||"direct","referring_domain":document.referrer?new URL(document.referrer).hostname:"direct","landing_page":window.location.href,"utm_source":new URLSearchParams(window.location.search).get("utm_source")||undefined,"utm_medium":new URLSearchParams(window.location.search).get("utm_medium")||undefined,"utm_campaign":new URLSearchParams(window.location.search).get("utm_campaign")||undefined});`,
          }}
        />
      </body>
    </html>
  );
}
