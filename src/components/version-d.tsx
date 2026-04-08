import Link from "next/link";
import VentureCard from "./venture-card";
import type { Venture } from "./venture-card";
import GlowField from "./glow-field";

const ventures: Venture[] = [
  {
    title: "ConversationLens",
    summary: "AI-driven platform analyzing couples' conversations to deliver relationship insights.",
    link: "https://conversationlens.com",
    status: "LIVE",
    why: "I noticed a gap in accessible couple therapy — most options are expensive, hard to schedule, or feel too clinical. I wanted to create something that meets couples where they already are: in their everyday conversations. The idea was to use AI to surface patterns and insights that would normally take months of therapy to uncover.",
    description: "ConversationLens analyzes text-based conversations between partners to identify communication patterns, emotional dynamics, and areas of friction. It delivers personalized insights and actionable suggestions. The platform covers everything from product architecture and voice features to monetization and compliance. Live with active users since November 2025.",
    media: [
      // Add screenshots/gifs here, e.g.:
      // { type: "image", src: "/ventures/conversationlens-1.png", alt: "ConversationLens dashboard" },
    ],
  },
  {
    title: "ThreadLift",
    summary: "Social listening and engagement platform — discovers conversations on Reddit and Quora, generates AI draft replies.",
    link: "https://www.threadlift.io",
    status: "LIVE",
    why: "Brands struggle to show up authentically in online communities. Traditional social media management tools focus on posting, not listening and engaging. I saw an opportunity to help brands discover relevant conversations already happening and respond in a way that adds genuine value — without coming across as spam.",
    description: "ThreadLift monitors Reddit and Quora for conversations relevant to your brand or expertise. It uses AI to generate context-aware draft replies that you review and approve before posting. The platform never auto-posts — you stay in full control. It's built for founders, marketers, and brands who want to grow their presence one authentic comment at a time.",
    media: [
      // Add screenshots/gifs here, e.g.:
      // { type: "image", src: "/ventures/threadlift-1.png", alt: "ThreadLift conversation discovery" },
    ],
  },
  {
    title: "Life Made Easy",
    summary: "iOS app turning biometric data from Apple Health, Oura Ring, and Google Calendar into actionable health insights.",
    link: null,
    status: "QA",
    why: "Society is increasingly obsessed with longevity — from Bryan Johnson to Andrew Huberman to the booming market for biometric trackers. The apps I tried were either overwhelming with data or too shallow to be useful. None connected the dots between daily habits and how you actually feel. I built Life Made Easy to fill that gap: genuinely simple UX that does the hard analytical work under the hood.",
    description: "The app pulls data from Apple Health, Oura Ring, and Google Calendar, then runs statistical correlation analysis to surface cause-and-effect relationships in your health. It finds patterns like how your meetings affect your heart rate, whether your workouts improve your sleep, and which activities correlate with higher HRV. An AI assistant lets you log activities conversationally and ask questions about your own trends. A timeline view presents your life as a continuous canvas of events and metrics you can explore and annotate.",
    media: [
      // Add screenshots/gifs here, e.g.:
      // { type: "image", src: "/ventures/lifemadeeasy-1.png", alt: "Life Made Easy timeline" },
    ],
  },
];

const experience = [
  {
    role: "Principal Product Manager",
    company: "Inmar Intelligence",
    period: "2025 —",
    scope: "CPG Enterprise Solutions",
    description: "Leading unified personalized solutions for consumers and CPG clients across multiple Martech roadmaps.",
  },
  {
    role: "Senior Product Manager",
    company: "Inmar Intelligence",
    period: "2022 — 2025",
    scope: "Consumer Engagement",
    description: "Built chatbot and website shopping experiences. Lifted incremental sales and delivered program insights.",
  },
  {
    role: "Product Manager",
    company: "Bazaarvoice",
    period: "2019 — 2022",
    scope: "Influenster Division",
    description: "Redesigned consumer data collection UX. Built internal tools enabling scale through automation.",
  },
];

const capabilities = [
  { label: "Product Strategy", category: "CORE" },
  { label: "Continuous Discovery", category: "CORE" },
  { label: "Go-to-Market", category: "CORE" },
  { label: "Cross-team Leadership", category: "CORE" },
  { label: "User Research & UX", category: "METHODS" },
  { label: "Data Analysis", category: "METHODS" },
  { label: "Solution Architecture", category: "METHODS" },
  { label: "Customer Journeys", category: "METHODS" },
  { label: "SaaS", category: "DOMAINS" },
  { label: "AI / ML Products", category: "DOMAINS" },
  { label: "Martech", category: "DOMAINS" },
  { label: "Agile / Scrum", category: "DOMAINS" },
];

const grouped = capabilities.reduce((acc, c) => {
  if (!acc[c.category]) acc[c.category] = [];
  acc[c.category].push(c.label);
  return acc;
}, {} as Record<string, string[]>);

export default function VersionD() {
  return (
    <div
      data-theme="d"
      className="min-h-full flex flex-col"
      style={{ background: "#F8F8F7", color: "#000000" }}
    >
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1100px] mx-auto px-6 h-12 flex items-center justify-between">
          <Link href="/?version=d" className="text-xs font-bold tracking-widest uppercase" style={{ color: "#000" }}>
            KZ
          </Link>
          <div className="flex items-center gap-6">
            <a href="#systems" className="text-xs font-medium uppercase tracking-wider hover:underline transition-all duration-100" style={{ color: "#4B5563" }}>Ventures</a>
            <a href="#experience" className="text-xs font-medium uppercase tracking-wider hover:underline transition-all duration-100" style={{ color: "#4B5563" }}>Experience</a>
            <Link href="/blog" className="text-xs font-medium uppercase tracking-wider hover:underline transition-all duration-100" style={{ color: "#4B5563" }}>Writing</Link>
            <a href="mailto:kristynazackova@gmail.com" className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-md transition-all duration-100 hover:bg-black/5" style={{ color: "#000" }}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 relative z-10">
        <div className="max-w-[1100px] mx-auto px-6">

          {/* Hero */}
          <section
            className="pt-28 pb-24 mb-24 relative grid grid-cols-12"
            style={{ background: "radial-gradient(circle at 30% 40%, #ffffff 0%, #f7f7f7 60%, #f3f3f3 100%)" }}
          >
            {/* Text block */}
            <div className="col-span-12 md:col-span-7 ml-0 max-w-[680px]">
              <h1
                className="text-[64px] leading-[1.05] tracking-[-0.02em] font-bold text-black animate-[fadeSlideIn_400ms_ease-out_both]"
                style={{ transform: "translateX(-4px)" }}
              >
                Turning fragmented products into unified systems.
              </h1>
              <div className="mt-5 space-y-1 flex items-start gap-4 animate-[fadeSlideIn_400ms_ease-out_100ms_both]">
                <img
                  src="/kristyna.png"
                  alt="Kristyna Zackova"
                  className="w-11 h-11 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300 shrink-0 mt-0.5"
                  style={{ border: "2px solid rgba(0,0,0,0.06)" }}
                />
                <div className="space-y-1">
                  <div className="text-[16px] font-medium text-black/80">
                    Kristyna Zackova
                  </div>
                  <div className="text-[14px] text-gray-500">
                    Principal Product Manager @ Inmar Intelligence
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-6 animate-[fadeSlideIn_400ms_ease-out_150ms_both]">
                <a href="https://www.linkedin.com/in/k-zackova/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors duration-150">
                  LinkedIn {"\u2197"}
                </a>
                <a href="#systems" className="text-sm text-gray-500 hover:text-black transition-colors duration-150">
                  View Work &darr;
                </a>
              </div>
            </div>

            {/* Background visual */}
            <div className="absolute right-[-10%] top-[10%] w-[60%] pointer-events-none opacity-[0.2]" style={{ filter: "blur(24px)" }}>
              <GlowField />
            </div>
          </section>

          {/* Ventures */}
          <section id="systems" className="py-14">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4B5563" }}>
                Ventures
              </h2>
              <span className="text-xs font-mono" style={{ color: "#4B5563" }}>{ventures.length} projects</span>
            </div>
            <div className="space-y-3">
              {ventures.map((v) => (
                <VentureCard key={v.title} venture={v} />
              ))}
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Experience */}
          <section id="experience" className="py-14">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#4B5563" }}>
              Experience
            </h2>
            <div className="space-y-0">
              {experience.map((e, i) => (
                <div key={i} className="py-5 border-t first:border-t-0 grid md:grid-cols-12 gap-4 items-baseline" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                  <div className="md:col-span-2">
                    <span className="text-xs font-mono font-semibold" style={{ color: "#4B5563" }}>{e.period}</span>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-sm font-bold">{e.role}</p>
                    <p className="text-xs font-medium" style={{ color: "#800020" }}>{e.company}</p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-xs font-mono mb-1" style={{ color: "#4B5563" }}>{e.scope}</p>
                    <p className="text-sm" style={{ color: "#4B5563" }}>{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Writing */}
          <section className="py-14">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4B5563" }}>Writing</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>Thoughts on product, systems, and technology.</p>
              </div>
              <Link href="/blog" className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-100 hover:bg-black/5" style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}>
                Read &rarr;
              </Link>
            </div>
          </section>

          {/* Mentorship */}
          <section className="py-14">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4B5563" }}>Mentorship</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>Product strategy, AI, systems thinking, career growth. 7-day free trial.</p>
              </div>
              <a href="https://mentorcruise.com/mentor/kristynazackova/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-100 hover:bg-black/5" style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}>
                Book {"\u2197"}
              </a>
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Capabilities */}
          <section className="py-14">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#4B5563" }}>
              Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-mono font-bold mb-3" style={{ color: "#800020" }}>{category}</p>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full" style={{ background: "#000" }} />
                        <span className="text-sm" style={{ color: "#4B5563" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Contact */}
          <section className="py-14">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold mb-1">Get in touch</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>Interested in product, AI, or building something together.</p>
              </div>
              <a href="mailto:kristynazackova@gmail.com" className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-100 hover:bg-black/5" style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}>
                Email &rarr;
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-6 flex items-center justify-between text-xs" style={{ color: "#4B5563" }}>
          <span>&copy; {new Date().getFullYear()} Kristyna Zackova</span>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/k-zackova/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-100 hover:text-black">LinkedIn</a>
            <a href="https://mentorcruise.com/mentor/kristynazackova/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-100 hover:text-black">Mentorship</a>
            <a href="https://conversationlens.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-100 hover:text-black">ConversationLens</a>
            <a href="https://www.threadlift.io" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-100 hover:text-black">ThreadLift</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
