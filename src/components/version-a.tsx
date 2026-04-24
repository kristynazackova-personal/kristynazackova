import Link from "next/link";

const experience = [
  {
    title: "Principal Product Manager, CPG Enterprise Solutions",
    company: "Inmar Intelligence",
    period: "Jan 2025 – Present",
    description:
      "Leading initiatives that connect Inmar products into unified, personalized solutions for consumers and CPG clients. Prioritizing across multiple Martech roadmaps.",
  },
  {
    title: "Senior Product Manager",
    company: "Inmar Intelligence",
    period: "Dec 2022 – Jan 2025",
    description:
      "Built engaging website and chatbot shopping experiences connecting CPG manufacturers with consumers. Lifted incremental sales and delivered program insights.",
  },
  {
    title: "Product Manager",
    company: "Bazaarvoice (Influenster)",
    period: "Apr 2019 – Dec 2022",
    description:
      "Improved program success rates by redesigning consumer data collection UX. Developed internal tools enabling the company to scale through automation.",
  },
];

const ventures = [
  {
    title: "ConversationLens",
    description:
      "AI-driven platform analyzing couples' conversations to deliver relationship insights. Live with active users.",
    link: "https://conversationlens.com",
  },
  {
    title: "ThreadLift",
    description:
      "Social listening and engagement platform — discovers conversations on Reddit and Quora, generates AI draft replies.",
    link: "https://www.threadlift.io",
  },
  {
    title: "Life Made Easy",
    description:
      "iOS app turning biometric data from Apple Health, Oura Ring, and Google Calendar into actionable health insights.",
    link: null,
  },
];

const skills = [
  "Product Strategy",
  "Continuous Discovery",
  "Go-to-Market",
  "Agile / Scrum",
  "User Research & UX",
  "Data Analysis",
  "SaaS",
  "AI / ML Products",
  "Cross-team Leadership",
  "Solution Architecture",
  "Customer Journeys",
  "Martech",
];

export default function VersionA() {
  return (
    <div
      data-theme="a"
      className="min-h-full flex flex-col"
      style={{ background: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border" style={{ background: "rgba(10,10,10,0.8)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/?version=a" className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)] hover:text-accent transition-colors">
            KZ
          </Link>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-muted hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted hover:text-foreground transition-colors">Experience</a>
            <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-3/5 rounded-full blur-3xl" />
          <div className="absolute top-32 right-[20%] w-4 h-4 bg-accent rotate-45 animate-float opacity-60" />
          <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-accent-2 rounded-full animate-float-delayed opacity-60" />
          <div className="absolute top-[40%] left-[10%] w-5 h-5 border-2 border-accent-3 rotate-12 animate-float-delayed opacity-40" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <p className="text-accent font-mono text-sm mb-6 tracking-wider uppercase">
                Product Leader &middot; Founder
              </p>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-8 font-[family-name:var(--font-heading)]">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Kristyna</span>
                <span className="text-accent">.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted leading-relaxed mb-12 max-w-2xl">
                I build consumer-centric SaaS products that solve complex advertising and incentives challenges for the world&apos;s largest CPG brands.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#experience" className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all hover:scale-105">
                  See my experience
                </a>
                <Link href="/blog" className="px-8 py-3 border border-border hover:border-accent text-foreground font-semibold rounded-lg transition-all hover:scale-105">
                  Read my writing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-4">About</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-[family-name:var(--font-heading)]">
                  A bit about <span className="gradient-text">me</span>
                </h3>
                <div className="space-y-4 text-muted leading-relaxed text-lg">
                  <p>I&apos;m a product leader with a passion for building solutions that connect brands with consumers in meaningful ways. Currently at Inmar Intelligence, I lead CPG enterprise product strategy across multiple Martech roadmaps.</p>
                  <p>I also founded <a href="https://conversationlens.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-2 transition-colors underline underline-offset-4">ConversationLens.com</a> and <a href="https://www.threadlift.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-2 transition-colors underline underline-offset-4">ThreadLift.io</a>.</p>
                  <p>Originally from the Czech Republic, I studied international management through the CEMS program in Prague and Calcutta before making my way to New York.</p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-lg font-semibold mb-4">What I do best</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-surface border border-border rounded-lg text-sm text-muted hover:text-foreground hover:border-accent/50 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ventures */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-4">Ventures</h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 font-[family-name:var(--font-heading)]">
              What I&apos;m <span className="gradient-text">building</span>
            </h3>
            <div className="grid gap-8">
              {ventures.map((v) => {
                const content = (
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{v.title}</h4>
                        {!v.link && <span className="px-2 py-0.5 text-xs font-mono bg-accent-2/20 text-accent-2 rounded-full">Coming soon</span>}
                      </div>
                      <p className="text-muted max-w-xl">{v.description}</p>
                    </div>
                    {v.link && <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all text-2xl">&rarr;</span>}
                  </div>
                );
                return v.link ? (
                  <a key={v.title} href={v.link} target="_blank" rel="noopener noreferrer" className="group block p-8 bg-surface border border-border rounded-2xl hover:border-accent/50 transition-all hover:scale-[1.01]">{content}</a>
                ) : (
                  <div key={v.title} className="group block p-8 bg-surface border border-border rounded-2xl">{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-4">Experience</h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 font-[family-name:var(--font-heading)]">
              Where I&apos;ve <span className="gradient-text">worked</span>
            </h3>
            <div className="space-y-12">
              {experience.map((role, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-border hover:border-accent/50 transition-colors">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 bg-accent rounded-full" />
                  <p className="text-sm font-mono text-accent mb-1">{role.period}</p>
                  <h4 className="text-xl font-bold mb-1">{role.title}</h4>
                  <p className="text-accent-2 text-sm font-semibold mb-3">{role.company}</p>
                  <p className="text-muted max-w-2xl leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-4">Mentorship</h2>
            <div className="p-8 bg-surface border border-border rounded-2xl">
              <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-heading)]">
                Work with <span className="gradient-text">me</span>
              </h3>
              <p className="text-muted max-w-xl mb-6">Product strategy, AI product management, systems thinking, career growth. 2 calls/month, unlimited async Q&A. 7-day free trial.</p>
              <a
                href="https://mentorcruise.com/mentor/kristynazackova/?source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://cdn.mentorcruise.com/img/banner/sky-mentoring-badge.svg"
                  width="120"
                  alt="MentorCruise"
                />
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Let&apos;s <span className="gradient-text">connect</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-lg mx-auto">Interested in product, AI, or building something together? I&apos;d love to hear from you.</p>
            <a href="mailto:kristynazackova@gmail.com" className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all hover:scale-105">
              Get in touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Kristyna Zackova</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/k-zackova/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://conversationlens.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">ConversationLens</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
