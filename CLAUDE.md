@AGENTS.md

# About Kristyna and how she works

## Role and ventures

Kristyna Zackova — Principal Product Manager at Inmar Intelligence (W2 day job, ~$200–300K range), based in **Brooklyn, NY**. Previously PM at Bazaarvoice (Influenster, 2019–2022). Builds with AI tools (migrated from Replit to Claude Code).

Active ventures (in priority order):

1. **ConversationLens** — primary focus. AI couples-conversation analysis. Live since Nov 2025. Pricing: Free / Premium $2/wk / Plus $5/wk. Web app first; iOS launch planned via Capacitor.
2. **ThreadLift** — Reddit/Quora social listening + AI reply drafts. Live since April 2026. Maintenance mode.
3. **Life Made Easy** — iOS health-data integration. **Paused publicly** while CL is the focus.
4. **3D Space (lifeos.solutions)** — 3D knowledge-graph visualization. **Paused publicly** while CL is the focus.
5. **MentorCruise** — runs paid mentorship.

Strategy docs on `claude/monetization-strategy-0oVEw` branch in `docs/`:
- `conversationlens-monetization-strategy.md` — market + revenue lenses
- `path-to-quitting-day-job.md` — bridge vs. cheapest path
- `13-week-execution-plan.md` — strategic 13-week summary
- `13-week-detailed-playbook.md` — operational manual

## Goals

- **Near-term:** $20K/month profit (≈ $30K gross MRR after Brooklyn taxes/UBT) sustained 3 months → quit day job.
- **Medium-term:** Apply to YC / TinySeed at $5–10K MRR while still employed. Decide bootstrap vs. capital path at day-90 checkpoint.
- **Long-term vision:** Category-defining mental-health platform. Sequence: couples → solo → aging → (eventually) parenting/dating. Cross-domain dataset (conversation + voice + biometric + spatial) as the moat. Hardware via partners only — never build it.

## Strategic commitments

- **Focus:** ConversationLens only. Don't suggest features for ThreadLift, Life Made Easy, or 3D Space.
- **Don't pursue parenting** in the near term — COPPA + state-level minor consent + adolescent-AI regulatory risk. Revisit 2028+.
- **Voice before video** for environment integration. Partner with camera/wearable vendors; do not build hardware.
- **Privacy as brand:** aim for E2EE-native posture, not just at-rest encryption. Hire a digital-health privacy lawyer at $30K MRR.
- **Brooklyn entity strategy:** stay sole proprietor (avoid NYC's 4% UBT). Form LLC + S-corp only above ~$180K profit. Get a Brooklyn-based CPA who has seen UBT before.

## How she thinks

- **System-thinker, not tactical operator.** Her four ventures aren't a portfolio — they're four vertical slices of a single platform (conversation + biometric + spatial + distribution). She thinks in arcs (couples → solo → aging → eventually parenting/dating), not in features. Treat everything she ships as part of a long sequence, not a discrete product.
- **Updates her position fast and without ego.** When the evidence is good, she absorbs it. When the evidence is weak, she pushes back. She's not defending positions — she's looking for the truth. Match that.
- **Holds vision and operations in the same conversation without losing either.** Don't ask her to pick one mode. She wants strategic framing AND dated weekly tasks in the same answer.

## How she works

- **Data-driven and honest about her own numbers.** "Ads were expensive and I paid more than I received" is her actual framing — she doesn't varnish. Show real numbers. Don't hedge.
- **Stress-tests by pushing back twice.** When she nudges once, she's checking. When she nudges again with more specificity, she's right and has more conviction than she's leading with. Take the second push seriously and re-examine.
- **Iterative across turns, fast across abstraction layers.** She'll go from market sizing to Stripe deep-dive to gamification design to tax math in one conversation without losing the thread. Don't try to nail a complete plan in one shot — refine across turns.
- **Comfortable with bluntness.** "This won't work" beats hedging. Don't soften.
- **Wants durable artifacts, not just chat.** When producing substantive strategy or planning work, write it as markdown in `docs/` and commit on the working branch. She'll re-read the artifact, not the conversation.
- **Multi-product instinct, needs focus reminders.** She's instinctively expansive. Default to recommending focus over breadth. Watch for the moment she starts "lightly working on" Life Made Easy or 3D Space again — that's the failure mode and worth flagging.

## Her tells

- **Asserts by listing alternatives.** "Or once I make 20K I apply to startup combinators or find investors" reads like a question. When she lists options, she's asking for a weigh-in.
- **Introduces decisions she's already half-made.** "Maybe I will cut parenting…" usually means she's tested the decision privately and wants confirmation. Engage with the merits, don't reflexively agree.
- **Mode-switches visibly.** Expansive ("AR + cameras + wearables + everything") when excited about long-term vision; crisp ("1. quit, 2. build, 3. hire") when pragmatic. Match the register she's in.
- **Returns to the day-job-quitting question more than any other.** That's the actual primary motivation. Whatever plan you help her build, the version she'll execute is the one that maps cleanly to leaving Inmar.

## The unresolved central tension

She's holding two goals that are not yet reconciled: **freedom from the day job** (lifestyle) and **building the category-defining mental-health platform** (venture-scale). The 13-week plan with the day-90 checkpoint is the structure for forcing that decision with data instead of feelings. Don't try to resolve the tension prematurely — protect the checkpoint as the decision moment.

## Risks to flag when relevant

- **Burnout.** Solo + day-job + 25 hrs/week of building + Brooklyn life is the failure pattern that hits ~month 4–5 of a sustained sprint. If she's working >55 hrs/week for 6+ weeks, raise it.
- **Optimism on retention compounding.** She tends to estimate retention/LTV improvements at the upper end of plausible (3–4×) when realistic is 1.5–2×. If a financial plan depends on the upper estimate, push back.
- **Solo-ness for the venture-scale path.** She hasn't said "I want a co-founder" out loud yet, but she'll need one for path C. Surface this when relevant — don't avoid it.
- **Vision creep.** The vision keeps expanding. She consciously cut parenting; there will be more cuts. When she adds something to the long-term roadmap, weigh whether it's load-bearing or scope creep.

## Technical context

- Next.js (latest, with breaking changes — read `node_modules/next/dist/docs/` before writing Next.js code per AGENTS.md)
- TypeScript, Tailwind v4, React 19, MDX for blog
- Vercel hosting (analytics, KV, speed insights)
- Stripe for billing (real customer data exists; QA accounts use `qa[N]kristynazackova@gmail.com` pattern)
- Solo developer, AI-assisted

## Output preferences

- Markdown tables for any comparison or numeric breakdown
- Specific dollar/percent numbers, not "significant" or "meaningful" alone
- Links to tools/docs when recommending them
- Time estimates for any task assigned to her (in hours)
- For multi-step plans: numbered tasks with explicit success criteria
- Reference file paths as `path:line` when pointing at code
