import Link from "next/link";
import VentureCard from "./venture-card";
import type { Venture } from "./venture-card";
import FloatingObject from "./floating-object";

const ventures: Venture[] = [
  {
    title: "ConversationLens",
    summary: "AI-driven platform analyzing couples' conversations to deliver relationship insights.",
    link: "https://conversationlens.com?utm_source=kristynazackova.com&utm_medium=portfolio",
    status: "LIVE",
    why: "I saw a consistent gap in how people understand and improve their relationships. While therapy can be valuable, it is often expensive, difficult to access, and not embedded in the day-to-day interactions where most relationship dynamics actually play out. I wanted to build a system that brings more clarity to those everyday moments — helping people better understand how they communicate, how patterns form, and where friction emerges.",
    description: "ConversationLens analyzes real conversations (text, audio, or transcripts) to identify communication patterns, emotional dynamics, and recurring points of tension. The goal is not to replace therapy, but to complement it by providing structured, objective insight into how people communicate, visibility into patterns across time (not just isolated moments), and practical, evidence-informed suggestions for improving interactions. The platform combines conversation analysis, AI-guided reflection, and voice-based sessions into a single system designed to make relationship insight more continuous and accessible. Live with active users since November 2025.",
    media: [
      { type: "image", src: "/ventures/IMG_6681.jpeg", alt: "Dashboard" },
      { type: "image", src: "/ventures/IMG_6682.jpeg", alt: "Relationship Journey" },
      { type: "image", src: "/ventures/IMG_6674.jpeg", alt: "Health Score & Metrics" },
      { type: "image", src: "/ventures/IMG_6676.jpeg", alt: "AI Therapist Chat" },
      { type: "image", src: "/ventures/IMG_6677.jpeg", alt: "Features Overview" },
      { type: "image", src: "/ventures/IMG_6678.jpeg", alt: "Shared Dashboards" },
      { type: "image", src: "/ventures/IMG_6679.jpeg", alt: "Plans & Pricing" },
    ],
  },
  {
    title: "ThreadLift",
    summary: "Social listening and engagement platform — discovers conversations on Reddit and Quora, generates AI draft replies.",
    link: "https://www.threadlift.io?utm_source=kristynazackova.com&utm_medium=portfolio",
    status: "LIVE",
    why: "Customer acquisition is difficult, especially for early-stage companies. Paid advertising is fast but expensive, while organic growth and word of mouth are more authentic but take significant time and effort to build. I saw an opportunity to make this middle ground more efficient — helping companies participate in real conversations at scale, without losing authenticity. Platforms like Reddit and Quora already contain high-intent discussions, but finding the right ones and responding thoughtfully is time-consuming. ThreadLift was built to make this process faster, more structured, and easier to scale.",
    description: "ThreadLift identifies relevant conversations across platforms like Reddit and Quora and helps you engage in them effectively. For each thread, it generates context-aware reply drafts that you review and refine before posting. The goal is not to automate engagement, but to make high-quality participation more efficient. ThreadLift helps teams reduce the time required to find and engage in relevant discussions, contribute in a way that feels natural to each platform, and build awareness through consistent, credible participation rather than paid campaigns. It is designed for founders, marketers, and teams who want a more scalable approach to organic distribution. Live since April 2026.",
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
    why: "There is growing interest in personal health optimization, driven by figures like Bryan Johnson and Andrew Huberman, as well as the rapid adoption of wearable devices. In practice, most tools either overwhelm users with raw data or simplify the problem to the point where the insights are not actionable. What felt consistently missing was a clear connection between everyday behavior and how you actually feel over time. I built LifeMadeEasy to focus on that gap — making it easier to understand how daily actions, routines, and context influence personal health, without requiring users to interpret complex data themselves.",
    description: "LifeMadeEasy integrates data from sources such as Apple Health, Oura Ring, and calendar activity to build a unified view of your day. It analyzes this data to identify relationships between behavior and physiological signals — for example, how different types of days or meetings correlate with heart rate and stress, whether specific routines are associated with better sleep or recovery, and which activities tend to align with higher or lower HRV over time. The system focuses on surfacing patterns and correlations in a way that is interpretable and useful, rather than presenting raw metrics alone. An AI assistant allows users to log activities conversationally and explore their own data through questions, while a timeline interface presents daily life as a continuous sequence of events and signals that can be reviewed and annotated.",
    media: [
      // Add screenshots/gifs here, e.g.:
      // { type: "image", src: "/ventures/lifemadeeasy-1.png", alt: "Life Made Easy timeline" },
    ],
  },
  {
    title: "3D Space",
    summary: "3D interactive visualization platform for system architecture, timelines, and knowledge graphs.",
    link: "https://lifeos.solutions",
    status: "BETA",
    why: "I wanted to see the systems I build and the knowledge I accumulate as living, spatial structures I can walk through — not flat documents or scattered notes. This is a personal exploration, not a product, but it's live and anyone curious can try it.",
    description: "A 3D interactive visualization environment for system architecture, timelines, and knowledge graphs. Map a microservices architecture and watch data flow across layers, plot project history on a spiral timeline synced to Google Calendar, or build a knowledge graph connecting projects, skills, people, and ideas in 3D space. An AI assistant lets you build and modify visualizations through natural conversation. Every space is embeddable publicly with granular admin controls — all configurable via chat. You can also train the AI on your own knowledge and essentially chat with yourself — a personal thinking partner that mirrors how you reason. Next up: letting these \"clones\" take on real work autonomously. Built with raw Three.js, Next.js, and PostgreSQL. AI features powered by Claude; developed end-to-end with Claude Code. Live at lifeos.solutions.",
    media: [],
  },
];

const experience = [
  {
    role: "Founder",
    company: "ConversationLens",
    period: "2025 — Present",
    scope: "AI Relationship Intelligence",
    description: "Built an AI platform that analyzes real conversations to uncover patterns in relationships and communication. Identified a gap in accessible, structured relationship insight and designed a product that translates unstructured human interaction into measurable signals. Defined product strategy, system architecture, and core experience end-to-end. Launched in November 2025. The platform is live with active users and ongoing iteration across analytics, voice-based therapy, and insight generation.",
  },
  {
    role: "Senior \u2192 Principal Product Manager",
    company: "Inmar Intelligence",
    period: "2022 — Present",
    scope: "CPG Enterprise Solutions",
    description: "Defined and led the transition from fragmented products to unified, cross-channel systems for large CPG clients. Designed system-level solutions connecting incentives, media, and consumer data into cohesive experiences. Partnered directly with enterprise clients to identify high-impact problems and translate them into scalable product strategies. Drove alignment across multiple product teams, prioritizing initiatives that increased personalization and improved conversion across the consumer journey.",
  },
  {
    role: "Product Manager",
    company: "Bazaarvoice",
    period: "2019 — 2022",
    scope: "Influenster Division",
    description: "Improved product performance and scalability by redesigning core user flows and building internal systems. Led UX improvements for consumer data collection across mobile and web, increasing program success rates and reducing time to delivery. Built internal tools that automated workflows and enabled the platform to scale efficiently.",
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
      <div className="relative z-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

          {/* Hero */}
          <section
            className="pt-16 sm:pt-28 pb-16 sm:pb-24 mb-12 sm:mb-24 relative"
            style={{ background: "radial-gradient(circle at 30% 40%, #ffffff 0%, #f7f7f7 60%, #f3f3f3 100%)" }}
          >
            <div className="relative grid grid-cols-12 items-center">
              {/* Text block */}
              <div className="col-span-12 md:col-span-7 ml-0 max-w-[680px]">
                <h1
                  className="text-[36px] sm:text-[48px] md:text-[64px] leading-[1.08] tracking-[-0.02em] font-bold text-black animate-[fadeSlideIn_400ms_ease-out_both]"
                  style={{ transform: "translateX(-4px)" }}
                >
                  Turning complex reality into simple products.
                </h1>
                <div className="mt-5 flex items-start gap-3 sm:gap-4 animate-[fadeSlideIn_400ms_ease-out_100ms_both]">
                  <img
                    src="/kristyna.png"
                    alt="Kristyna Zackova"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300 shrink-0 mt-0.5"
                    style={{ border: "2px solid rgba(0,0,0,0.06)" }}
                  />
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="text-[15px] sm:text-[16px] font-medium text-black/80">
                      Kristyna Zackova
                    </div>
                    <div className="text-[13px] sm:text-[14px] text-gray-500">
                      Principal Product Manager @ Inmar Intelligence & Founder of <a href="https://conversationlens.com?utm_source=kristynazackova.com&utm_medium=portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-150">ConversationLens</a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-6 animate-[fadeSlideIn_400ms_ease-out_150ms_both]">
                  <a href="https://www.linkedin.com/in/k-zackova/?utm_source=kristynazackova.com&utm_medium=portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors duration-150" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://x.com/zackovak?utm_source=kristynazackova.com&utm_medium=portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors duration-150">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#systems" className="text-sm text-gray-500 hover:text-black transition-colors duration-150">
                    View Work &darr;
                  </a>
                </div>
              </div>

              {/* Floating 3D object */}
              <div className="hidden md:flex col-span-5 relative justify-center items-center">
                <FloatingObject />
              </div>
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
                <div key={i} className="py-5 border-t first:border-t-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 md:items-baseline" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                  <div className="md:col-span-2">
                    <span className="text-xs font-mono font-semibold" style={{ color: "#4B5563" }}>{e.period}</span>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-sm font-bold">{e.role}</p>
                    <p className="text-xs font-medium" style={{ color: "#800020" }}>{e.company}</p>
                  </div>
                  <div className="md:col-span-6 mt-1 md:mt-0">
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4B5563" }}>Writing</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>Thoughts on product, systems, and technology.</p>
              </div>
              <Link href="/blog" className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-100 hover:bg-black/5 self-start sm:self-auto shrink-0" style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}>
                Read &rarr;
              </Link>
            </div>
          </section>

          {/* Mentorship */}
          <section className="py-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4B5563" }}>Mentorship</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>Product strategy, AI, systems thinking, career growth. 7-day free trial.</p>
              </div>
              <a
                href="https://mentorcruise.com/mentor/kristynazackova/?source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto shrink-0"
              >
                <img
                  src="https://cdn.mentorcruise.com/img/banner/sky-mentoring-badge.svg"
                  width="120"
                  alt="MentorCruise"
                />
              </a>
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Capabilities */}
          <section className="py-14">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#4B5563" }}>
              Capabilities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-bold mb-1">Get in touch</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>Interested in product, AI, or building something together.</p>
              </div>
              <a href="mailto:kristynazackova@gmail.com" className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-100 hover:bg-black/5 self-start sm:self-auto shrink-0" style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}>
                Email &rarr;
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
