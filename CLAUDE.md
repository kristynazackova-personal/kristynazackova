@AGENTS.md

## About the user (Kristyna)

Kristyna Zackova owns this repo and is the only person working on it. The notes
below describe how she works so that you (Claude, in future sessions) can be
useful without re-learning her style each time.

### Background

- **Day job**: Principal-level Product Manager at Inmar Intelligence (officially
  titled Senior; doing Principal-scope work on new verticals — picks new vertical
  bets, frames the problem, sketches V1 architecture, prioritizes with product
  owners and hands off). 3.5 years at Inmar.
- **Before Inmar**: Influenster (acquired by Bazaarvoice). Rebuilt the surveying
  system and consumer-selection logic for programs; also worked on UX and growth.
  ~3.5 years there. Total PM experience ≈ 7 years.
- **Side project**: Conversation Lens (`kristynazackova-personal/conversationlens-monorepo`),
  which she intends to take full-time eventually. Side projects are not hobbies —
  they're future jobs. Treat scope decisions there with the same seriousness as
  day-job decisions.
- **Czech**. Bilingual EN/CS is a real product decision, not an afterthought.

### How she works

- **Ships fast.** Accepts rough first-pass quality (e.g. rough Czech translations,
  deferred edges) as a deliberate trade-off for velocity. Polishes later.
- **AI as force multiplier.** Uses AI to substitute for engineers — bulk type
  fixes, i18n passes, merge resolutions. The limiting factor is her evening
  hours, not money. Don't propose flows that need a teammate.
- **Mac terminal.** Doesn't run local dev servers — ships to staging and QAs
  there. Don't assume `.env` files exist locally without checking.
- **Git basics, not rescue maneuvers.** Comfortable with checkout/commit/push;
  less comfortable with vim merge editors, complex rebases, or partial conflict
  resolution. When a manual fix gets fiddly, give her a paste-able terminal
  script (Python here-doc, sed) rather than instructions to edit conflict
  markers by hand.
- **Thinks in deployments, not branches.** Reaches for `npm run promote` rather
  than `git push origin main`. Speaks in "staging" / "prod" rather than git refs.
- **Learns new domains fast.** Went horizontal across Inmar's data flows in
  3.5 years. Doesn't need exhaustive explanations of unfamiliar tech — a
  sketch is enough; she'll absorb the rest as needed.

### Communication style

- **Short messages.** Often one sentence or pasted terminal output.
- **Course-corrects without preamble.** "After home, you can do /profile" is the
  full instruction — don't ask for justification, just adjust.
- **Doesn't over-specify scope.** Trusts the executor on implementation details.
  If she says "do X first," do X first.
- **Pushes back fast when the model is wrong.** If she says "I can't find this,"
  the doc or instructions are wrong — adjust, don't insist.
- **Doesn't ask permission for product-level scope calls.** She owns those.
  Don't ask her to confirm decisions she's already made.

### What she values

- **The product working for real users.** She notices UX-completeness gaps faster
  than engineering ones (e.g. "I switched to Czech but everything else is in
  English"). Surface user-facing remnants proactively.
- **Velocity.** Don't slow the cadence with unnecessary checkpoints.
- **Honesty about scope.** Flag known gaps at hand-off ("X is out of scope, Y
  needs restructuring") rather than burying them. She'd rather know the
  unfinished edges than discover them in QA.

### Defaults that work for her

- **Merging**: when she says "merge it," she's already done the risk math —
  proceed (unless the diff is unusually risky, in which case flag it once).
- **Branching**: default to a new branch off the integration branch (`staging`
  or `main` as appropriate) for new work, unless told otherwise.
- **Translations**: never ship a key in only one locale; EN and CS together,
  always.
- **Bulk edits**: prefer terminal automation (Python script via here-doc) over
  asking her to edit many files by hand.
