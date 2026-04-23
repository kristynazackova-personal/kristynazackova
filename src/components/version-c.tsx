import Link from "next/link";

const ventures = [
  {
    title: "ConversationLens",
    description:
      "AI-driven platform analyzing couples' conversations to deliver relationship insights. Identified a market gap in accessible couple therapy, crafted the product and business strategy, and designed the UX. Live with active users.",
    link: "https://conversationlens.com",
    status: "Live",
  },
  {
    title: "ThreadLift",
    description:
      "Social listening and engagement platform that discovers relevant conversations on Reddit and Quora, generates AI-powered draft replies, and lets you review before posting.",
    link: "https://www.threadlift.io",
    status: "Live",
  },
  {
    title: "Life Made Easy",
    description:
      "iOS app that turns raw biometric data from Apple Health, Oura Ring, and Google Calendar into actionable insights. Finds patterns between daily habits and how you actually feel — correlating meetings with heart rate, workouts with sleep, activities with HRV.",
    link: null,
    status: "In QA",
  },
];

const experience = [
  {
    role: "Principal Product Manager",
    company: "Inmar Intelligence",
    period: "2025 —",
    description:
      "Leading CPG enterprise solutions. Connecting Inmar products into unified, personalized experiences for consumers and clients. Prioritizing across multiple Martech roadmaps.",
  },
  {
    role: "Senior Product Manager",
    company: "Inmar Intelligence",
    period: "2022 — 2025",
    description:
      "Built engaging website and chatbot shopping experiences connecting CPG manufacturers with consumers. Lifted incremental sales and delivered program insights.",
  },
  {
    role: "Product Manager",
    company: "Bazaarvoice (Influenster)",
    period: "2019 — 2022",
    description:
      "Improved program success rates by redesigning consumer data collection UX. Developed internal tools enabling the company to scale through automation.",
  },
];

const skills = [
  "Product Strategy",
  "Continuous Discovery",
  "Go-to-Market",
  "User Research & UX",
  "Data Analysis & Analytics",
  "AI / ML Products",
  "SaaS",
  "Cross-team Leadership",
  "Solution Architecture",
  "Customer Journeys",
  "Agile / Scrum",
  "Martech",
];

export default function VersionC() {
  return (
    <div
      data-theme="c"
      className="min-h-full flex flex-col relative"
      style={{ background: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      {/* Nav */}
      <nav className="relative z-10 border-b border-border/60">
        <div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/?version=c" className="text-sm font-semibold tracking-tight hover:text-accent transition-colors duration-250">
            Kristyna Zackova
          </Link>
          <div className="flex items-center gap-8">
            <a href="#ventures" className="text-sm text-muted hover:text-accent transition-colors duration-250">Ventures</a>
            <a href="#experience" className="text-sm text-muted hover:text-accent transition-colors duration-250">Experience</a>
            <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors duration-250">Writing</Link>
            <a href="mailto:kristynazackova@gmail.com" className="text-sm px-4 py-2 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-250">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 relative z-10">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Hero */}
          <section className="pt-24 pb-20 fade-up fade-up-1">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-medium tracking-wide mb-5">
                Product Leader &middot; Founder
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.15] mb-6">
                Building products that connect brands with people
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-10">
                I&apos;m Kristyna — a product leader creating consumer-centric SaaS solutions that solve complex advertising and incentives challenges for the world&apos;s largest CPG brands. Currently at{" "}
                <span className="text-foreground font-medium">Inmar Intelligence</span>. Finding efficiencies and personalizing experiences with AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#ventures" className="px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-accent/90 transition-all duration-250">
                  See what I&apos;m building
                </a>
                <a href="https://www.linkedin.com/in/k-zackova/" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-border text-sm font-medium rounded-xl hover:border-accent hover:text-accent transition-all duration-250">
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="py-20 fade-up fade-up-2">
            <div className="grid md:grid-cols-5 gap-16">
              <div className="md:col-span-3">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-accent mb-8">About</h2>
                <div className="space-y-4 text-muted leading-[1.7] text-base">
                  <p>I believe the best products come from deeply understanding the people who use them. My work sits at the intersection of product strategy, user research, and technology — translating complex business problems into solutions that feel simple.</p>
                  <p>
                    Beyond my day job, I build my own products. I founded{" "}
                    <a href="https://conversationlens.com" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors duration-250">ConversationLens</a>{" "}
                    to bring AI-powered relationship insights to couples, and{" "}
                    <a href="https://www.threadlift.io" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors duration-250">ThreadLift</a>{" "}
                    to help brands engage authentically in online communities.
                  </p>
                  <p>Originally from the Czech Republic, I studied international management through the CEMS program in Prague and Calcutta before making my way to New York.</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-accent mb-8">Expertise</h2>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3.5 py-1.5 bg-surface border border-border rounded-lg text-sm text-muted hover:text-foreground hover:border-accent/40 transition-all duration-250 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Ventures */}
          <section id="ventures" className="py-20 fade-up fade-up-3">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Ventures</h2>
            <p className="text-muted mb-12 max-w-lg">Products I&apos;ve built from the ground up — from identifying the opportunity to shipping to real users.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {ventures.map((v) => {
                const card = (
                  <div className="group h-full p-7 bg-surface border border-border rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 ease-in-out flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-250">{v.title}</h3>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${v.status === "Live" ? "bg-accent-bg text-accent" : "bg-surface border border-border text-muted"}`}>
                        {v.status}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed flex-1">{v.description}</p>
                    {v.link && <p className="mt-5 text-sm font-medium text-accent">Visit {"\u2197"}</p>}
                  </div>
                );
                return v.link ? (
                  <a key={v.title} href={v.link} target="_blank" rel="noopener noreferrer">{card}</a>
                ) : (
                  <div key={v.title}>{card}</div>
                );
              })}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-20 fade-up fade-up-4">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Experience</h2>
            <p className="text-muted mb-12 max-w-lg">Building products across consumer tech, Martech, and SaaS.</p>
            <div className="space-y-0">
              {experience.map((e, i) => (
                <div key={i} className="group py-7 border-t border-border/60 last:border-b">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0">
                    <span className="text-sm text-muted font-mono w-36 shrink-0">{e.period}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-0.5">{e.role}</h3>
                      <p className="text-accent text-sm font-medium mb-2">{e.company}</p>
                      <p className="text-muted text-sm leading-relaxed max-w-xl">{e.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mentorship */}
          <section className="py-20">
            <div className="p-10 bg-surface border border-border rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Mentorship</h2>
              <p className="text-foreground text-lg font-medium mb-2">Work with me 1-on-1</p>
              <p className="text-muted mb-6">Product strategy, AI product management, systems thinking, and career growth. 2 calls/month, unlimited async Q&A. 7-day free trial.</p>
              <div className="flex flex-wrap items-center gap-6">
                <a href="https://mentorcruise.com/mentor/kristynazackova/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-accent/90 transition-all duration-250">
                  Book a session
                </a>
                <a
                  href="https://mentorcruise.com/mentor/kristynazackova/?source=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.mentorcruise.com/img/banner/sky-mentoring-badge.svg"
                    width="180"
                    alt="MentorCruise"
                  />
                </a>
              </div>
            </div>
          </section>

          {/* Writing */}
          <section className="py-20">
            <div className="p-10 bg-accent-bg rounded-2xl border border-accent/10">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Writing</h2>
              <p className="text-foreground text-lg font-medium mb-2">Occasional thoughts on product, technology, and building things.</p>
              <p className="text-muted mb-6">Where I think out loud about lessons learned and ideas worth exploring.</p>
              <Link href="/blog" className="inline-block px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-accent/90 transition-all duration-250">
                Read the blog
              </Link>
            </div>
          </section>

          {/* Contact */}
          <section className="py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Let&apos;s connect</h2>
            <p className="text-muted text-lg mb-8 max-w-md mx-auto">Interested in product, AI, or building something together?</p>
            <a href="mailto:kristynazackova@gmail.com" className="inline-block px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-accent/90 transition-all duration-250">
              Get in touch
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60">
        <div className="max-w-[1140px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Kristyna Zackova</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/k-zackova/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-250">LinkedIn</a>
            <a href="https://conversationlens.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-250">ConversationLens</a>
            <a href="https://www.threadlift.io" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-250">ThreadLift</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
