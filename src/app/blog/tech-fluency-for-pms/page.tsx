import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import GuideContent from "./GuideContent";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--pm-font-serif",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "700", "900"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--pm-font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--pm-font-mono",
});

export const metadata: Metadata = {
  title: "Tech Fluency for PMs — A Pocket Guide",
  description:
    "A field manual for non-technical product managers: the vocabulary, patterns, and habits that earn you credibility in a room full of engineers.",
  openGraph: {
    title: "Tech Fluency for PMs — A Pocket Guide",
    description:
      "A field manual for non-technical product managers: the vocabulary, patterns, and habits that earn you credibility in a room full of engineers.",
    type: "article",
    publishedTime: "2026-04-23",
  },
};

export default function Page() {
  return (
    <GuideContent
      fontClass={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    />
  );
}
