import Link from "next/link";

const ventures = [
  {
    title: "ConversationLens",
    description:
      "AI-driven platform analyzing couples' conversations to deliver relationship insights. Identified a market gap in accessible couple therapy, crafted the product and business strategy, and designed the UX. Live with active users.",
    link: "https://conversationlens.com",
    status: null,
  },
  {
    title: "ThreadLift",
    description:
      "Social listening and engagement platform that discovers relevant conversations on Reddit and Quora, generates AI-powered draft replies, and lets you review before posting.",
    link: "https://www.threadlift.io",
    status: null,
  },
  {
    title: "Life Made Easy",
    description:
      "iOS app that turns raw biometric data from Apple Health, Oura Ring, and Google Calendar into actionable insights. Finds patterns between daily habits and how you actually feel.",
    link: null,
    status: "In QA",
  },
];

const experience = [
  {
    role: "Principal Product Manager",
    company: "Inmar Intelligence",
    period: "2025 —",
    note: "CPG enterprise solutions, multi-roadmap prioritization",
  },
  {
    role: "Senior Product Manager",
    company: "Inmar Intelligence",
    period: "2022 — 2025",
    note: "Chatbot and website shopping experiences for CPG brands",
  },
  {
    role: "Product Manager",
    company: "Bazaarvoice",
    period: "2019 — 2022",
    note: "Influenster — consumer UX and internal tooling at scale",
  },
];

export default function VersionB() {
  return (
    <div
      data-theme="b"
      className="min-h-full flex flex-col"
      style={{ background: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/?version=b" className="text-sm font-medium hover:opacity-60 transition-opacity">
            Kristyna Zackova
          </Link>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-muted hover:text-foreground transition-colors">Work</a>
            <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">Writing</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-6">
          {/* Intro */}
          <section className="pt-20 pb-16">
            <h1 className="text-3xl font-semibold tracking-tight mb-4">Kristyna Zackova</h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              Product leader building consumer-centric SaaS that solves complex advertising and incentives challenges for large CPG brands. Currently at{" "}
              <span className="text-foreground">Inmar Intelligence</span>. Finding efficiencies and personalizing experiences with AI.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/k-zackova/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground">LinkedIn</a>
              <a href="mailto:hello@kristynazackova.com" className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground">Email</a>
            </div>
          </section>

          <hr className="border-border" />

          {/* Ventures */}
          <section id="work" className="py-16">
            <h2 className="text-xs font-medium tracking-widest uppercase text-muted mb-10">Things I&apos;m building</h2>
            <div className="space-y-12">
              {ventures.map((v) => (
                <div key={v.title}>
                  <div className="flex items-baseline gap-3 mb-2">
                    {v.link ? (
                      <a href={v.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:opacity-60 transition-opacity">
                        {v.title}<span className="text-muted ml-1.5">&nearr;</span>
                      </a>
                    ) : (
                      <span className="text-lg font-medium">{v.title}</span>
                    )}
                    {v.status && <span className="text-xs text-muted border border-border rounded-full px-2 py-0.5">{v.status}</span>}
                  </div>
                  <p className="text-muted leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-border" />

          {/* Experience */}
          <section className="py-16">
            <h2 className="text-xs font-medium tracking-widest uppercase text-muted mb-10">Experience</h2>
            <div className="space-y-8">
              {experience.map((e, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0">
                  <span className="text-sm text-muted w-32 shrink-0 font-mono">{e.period}</span>
                  <div>
                    <p className="font-medium">{e.role}<span className="text-muted font-normal"> at {e.company}</span></p>
                    <p className="text-sm text-muted mt-0.5">{e.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-border" />

          {/* Mentorship */}
          <section className="py-16">
            <h2 className="text-xs font-medium tracking-widest uppercase text-muted mb-4">Mentorship</h2>
            <p className="text-muted mb-4">Product strategy, AI, systems thinking, career growth. 7-day free trial.</p>
            <a href="https://mentorcruise.com/mentor/kristynazackova/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-60 transition-opacity">Book a session &rarr;</a>
          </section>

          <hr className="border-border" />

          {/* Writing */}
          <section className="py-16">
            <h2 className="text-xs font-medium tracking-widest uppercase text-muted mb-4">Writing</h2>
            <p className="text-muted mb-4">Occasional thoughts on product, technology, and building things.</p>
            <Link href="/blog" className="text-sm font-medium hover:opacity-60 transition-opacity">Read the blog &rarr;</Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted">
          <p>&copy; {new Date().getFullYear()}</p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/k-zackova/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:hello@kristynazackova.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
