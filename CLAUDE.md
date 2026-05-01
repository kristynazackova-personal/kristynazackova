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

## Working style — what works for her

- **Data-driven and honest.** Show real numbers. Push back when assumptions are weak. She'll push back when she has more context — that's good, follow her lead.
- **Iterative and fast.** She refines plans across multiple turns. Don't try to nail it in one shot.
- **Wants both strategy and execution.** Big-picture analysis paired with concrete, dated, hour-blocked tasks. The strategy docs and the playbook serve different purposes — keep them both.
- **Comfortable with bluntness.** "This won't work" beats hedging. Don't soften.
- **Commits strategic work to the repo.** When producing substantive strategy or planning docs, write them as markdown in `docs/` and commit on the working branch.
- **Multi-product instinct, needs focus reminders.** She has 4 ventures. She's instinctively expansive. Default to recommending focus over breadth.

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
