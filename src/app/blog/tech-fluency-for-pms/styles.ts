export const GUIDE_STYLES = `
.pm-guide {
  --ink: #1a1614;
  --ink-soft: #4a4340;
  --paper: #f5f0e6;
  --paper-deep: #ebe4d4;
  --rule: #d4cbb8;
  --accent: #b8442a;
  --accent-soft: #e8c9b8;
  --gold: #8a6d3b;

  color-scheme: light only;
  font-family: var(--pm-font-sans), "IBM Plex Sans", system-ui, sans-serif;
  background: var(--paper);
  color: var(--ink);
  line-height: 1.55;
  font-size: 16px;
  background-image:
    radial-gradient(circle at 20% 10%, rgba(184, 68, 42, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(138, 109, 59, 0.04) 0%, transparent 50%);
  min-height: 100vh;
  position: relative;
}

.pm-guide *,
.pm-guide *::before,
.pm-guide *::after {
  box-sizing: border-box;
}

.pm-guide .wrapper {
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 32px 120px;
}

/* ===== Top bar ===== */
.pm-guide .top-bar {
  margin-bottom: 24px;
}
.pm-guide .top-back {
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  text-decoration: none;
  border-bottom: 1px dotted transparent;
  transition: color 0.2s, border-color 0.2s;
}
.pm-guide .top-back:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

/* ===== Masthead ===== */
.pm-guide .masthead {
  border-top: 3px double var(--ink);
  border-bottom: 1px solid var(--ink);
  padding: 18px 0 22px;
  margin-bottom: 48px;
  text-align: center;
}
.pm-guide .masthead-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 14px;
}
.pm-guide h1 {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-weight: 400;
  font-size: clamp(38px, 6vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.02em;
  font-style: italic;
  margin: 0;
}
.pm-guide h1 .amp {
  color: var(--accent);
  font-weight: 300;
}
.pm-guide .tagline {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-size: 15px;
  font-style: italic;
  color: var(--ink-soft);
  margin: 12px 0 0;
  letter-spacing: 0.01em;
}

/* ===== Intro ===== */
.pm-guide .intro {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-size: 18px;
  line-height: 1.65;
  color: var(--ink);
  margin: 0 0 40px;
  padding: 0 0 32px;
  border-bottom: 1px solid var(--rule);
}
.pm-guide .intro p { margin: 0; }
.pm-guide .intro p + p { margin-top: 14px; }
.pm-guide .intro .dropcap::first-letter {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-size: 56px;
  font-weight: 500;
  float: left;
  line-height: 0.9;
  padding: 6px 10px 0 0;
  color: var(--accent);
  font-style: normal;
}

/* ===== Study controls ===== */
.pm-guide .study-controls {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 0 0 48px;
  flex-wrap: wrap;
}
.pm-guide .study-btn {
  background: var(--paper);
  border: 1px solid var(--ink);
  padding: 8px 16px;
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--ink);
  transition: all 0.2s;
}
.pm-guide .study-btn:hover,
.pm-guide .study-btn.active {
  background: var(--ink);
  color: var(--paper);
}

/* ===== TOC ===== */
.pm-guide .toc {
  background: var(--paper-deep);
  border: 1px solid var(--rule);
  padding: 24px 28px;
  margin: 0 0 64px;
  position: relative;
}
.pm-guide .toc::before {
  content: "CONTENTS";
  position: absolute;
  top: -10px;
  left: 20px;
  background: var(--paper);
  padding: 0 10px;
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--ink-soft);
}
.pm-guide .toc ol {
  list-style: none;
  columns: 2;
  column-gap: 32px;
  margin: 0;
  padding: 0;
}
@media (max-width: 600px) {
  .pm-guide .toc ol { columns: 1; }
}
.pm-guide .toc li {
  padding: 6px 0;
  font-size: 14px;
  break-inside: avoid;
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.pm-guide .toc li a {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px dotted transparent;
  transition: all 0.2s;
  font-weight: 500;
}
.pm-guide .toc li a:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
.pm-guide .toc .num {
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 11px;
  color: var(--accent);
  font-weight: 500;
}

/* ===== Sections ===== */
.pm-guide section { margin-bottom: 72px; }
.pm-guide .section-head {
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--ink);
  position: relative;
}
.pm-guide .section-label {
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 6px;
  text-transform: uppercase;
}
.pm-guide h2 {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin: 0;
}
.pm-guide .section-blurb {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-style: italic;
  font-size: 15px;
  color: var(--ink-soft);
  margin: 10px 0 0;
  max-width: 620px;
  line-height: 1.5;
}

/* ===== Term cards ===== */
.pm-guide .terms {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.pm-guide .term {
  background: #fbf8f0;
  border: 1px solid var(--rule);
  padding: 22px 26px;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
}
.pm-guide .term:hover { border-color: var(--accent); }
.pm-guide .term-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.pm-guide .term-name {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: -0.01em;
}
.pm-guide .term-alias {
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 11px;
  color: var(--gold);
  letter-spacing: 0.05em;
}
.pm-guide .term-def {
  font-size: 15px;
  color: var(--ink);
  margin-bottom: 12px;
}
.pm-guide .term-context {
  display: flex;
  gap: 12px;
  padding: 12px 14px;
  background: var(--paper-deep);
  border-left: 2px solid var(--accent);
  font-size: 13.5px;
  color: var(--ink-soft);
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  line-height: 1.5;
}
.pm-guide .term-context .tag {
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--accent);
  font-weight: 500;
  white-space: nowrap;
  padding-top: 3px;
  flex-shrink: 0;
}
.pm-guide .term-context em { font-style: italic; color: var(--ink); }

/* ===== Callout ===== */
.pm-guide .callout {
  margin: 48px 0;
  padding: 32px;
  background: var(--ink);
  color: var(--paper);
  position: relative;
}
.pm-guide .callout::before {
  content: "\\2767";
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-size: 32px;
  color: var(--accent-soft);
  position: absolute;
  top: 12px;
  left: 20px;
}
.pm-guide .callout h3 {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  margin: 0 0 16px;
  padding-left: 36px;
  letter-spacing: -0.01em;
}
.pm-guide .callout ul {
  list-style: none;
  padding-left: 36px;
  margin: 0;
}
.pm-guide .callout li {
  padding: 8px 0;
  font-size: 15px;
  border-bottom: 1px dashed rgba(245, 240, 230, 0.2);
  line-height: 1.55;
}
.pm-guide .callout li:last-child { border-bottom: none; }
.pm-guide .callout li strong {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  color: var(--accent-soft);
}

/* ===== Red flags ===== */
.pm-guide .flags {
  background: #fef6ed;
  border: 2px solid var(--accent);
  padding: 28px;
  margin-top: 8px;
}
.pm-guide .flag {
  padding: 14px 0;
  border-bottom: 1px dashed var(--rule);
}
.pm-guide .flag:last-child { border-bottom: none; }
.pm-guide .flag-bad {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-style: italic;
  color: #a53b22;
  font-size: 15px;
  display: block;
  margin-bottom: 4px;
}
.pm-guide .flag-bad::before {
  content: "\\2717 ";
  font-weight: 700;
  font-style: normal;
}
.pm-guide .flag-good {
  font-size: 14.5px;
  color: var(--ink);
}
.pm-guide .flag-good::before {
  content: "\\2713 ";
  color: #2d6a3e;
  font-weight: 700;
}

/* ===== Colophon ===== */
.pm-guide .colophon {
  margin-top: 96px;
  padding-top: 32px;
  border-top: 3px double var(--ink);
  text-align: center;
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-style: italic;
  font-size: 14px;
  color: var(--ink-soft);
}
.pm-guide .colophon .mark {
  font-family: var(--pm-font-serif), "Fraunces", Georgia, serif;
  font-size: 24px;
  color: var(--accent);
  margin-bottom: 10px;
  display: block;
  font-style: normal;
}

/* ===== Back to top ===== */
.pm-guide .back-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--paper);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  box-shadow: 0 4px 12px rgba(26, 22, 20, 0.25);
  border: none;
  cursor: pointer;
  z-index: 50;
}
.pm-guide .back-top.visible {
  opacity: 1;
  pointer-events: auto;
}

/* ===== Flashcard mode ===== */
.pm-guide.flashcard .term-def,
.pm-guide.flashcard .term-context {
  filter: blur(6px);
  transition: filter 0.2s;
  cursor: pointer;
  user-select: none;
}
.pm-guide.flashcard .term.revealed .term-def,
.pm-guide.flashcard .term.revealed .term-context {
  filter: blur(0);
}
.pm-guide.flashcard .term::after {
  content: "tap to reveal";
  position: absolute;
  top: 22px;
  right: 22px;
  font-family: var(--pm-font-mono), "IBM Plex Mono", monospace;
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--accent);
  text-transform: uppercase;
}
.pm-guide.flashcard .term.revealed::after { content: ""; }

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .pm-guide .wrapper { padding: 24px 20px 80px; }
  .pm-guide h1 { font-size: 40px; }
  .pm-guide .term { padding: 18px 20px; }
  .pm-guide .term-context { flex-direction: column; gap: 6px; }
}
`;
