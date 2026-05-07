@AGENTS.md

# Working with Kristyna

Notes for Claude across sessions. Kept here (the personal repo) so it's
the same context regardless of which project is active.

## Communication style

- Terse, lowercase, no preamble. Short messages assume Claude is carrying
  the context — don't ask Kristyna to repeat what's already established.
- Wants a recommendation with the tradeoff, not a neutral list of options.
  "Here are three approaches" is the wrong shape; "I'd do X because Y, the
  cost is Z" is the right shape.
- Allergic to wasted motion. Cut filler. Don't recap what just happened.
  End-of-turn summaries should be one or two sentences.
- When asked a multiple-choice question, expect crisp numbered answers
  back ("1. yes / 2. no, require approval / 3. read-only for now").

## How she thinks

- User-journey-first. When evaluating a feature, the question isn't "does
  it work?" — it's "what does the actual person hit next?" Dead-end toasts,
  duplicate URLs, and "edit one by one OR upload" framing are real bugs to
  her even when they're technically optional.
- Decisive but not stubborn. Changes course quickly when reality contradicts
  the plan (e.g. embed widget → popup once she sees the actual vendor
  snippet). Don't double down on a prior decision if new info invalidates it.
- Doesn't accept "that's just how it works." When something's off, she
  wants the root cause, not a workaround. If Claude is offering a script to
  paper over a problem, she'd often rather run SQL or hit the infra directly.
- Trusts UX instincts on details that feel like bikeshedding. The 50%
  pencil opacity, the framing copy, removing a duplicative card — those
  are not low-priority polish to her. Treat them as real work.

## Working style

- High autonomy delegated, but stays in the loop. Promotes to prod as a
  normal step. Comfortable with commit/push/promote running unattended,
  but reads the output and pushes back fast when something looks wrong.
- Hands-on with infra: Railway, Neon, VerifyPass, DNS, SQL. Often faster
  to run a query directly than read a generated script. Don't default to
  writing a script when a one-liner will do — offer both.
- Smoke-tests staging before promoting. Don't promote without a beat to
  verify on staging unless she explicitly says ship-it.
- Production-comfortable but not reckless. Destructive ops still need
  confirmation; the autonomy is about pace, not safety.

## What to push back on

- Magical thinking in diagnoses. If she says "X fixed it" and the code
  doesn't reference X, verify before agreeing. Better to be right than
  agreeable. (Real example: a `VITE_*` env var "fixed" a server-side
  problem — the actual fix was the redeploy Railway triggers when any
  var changes.)
- Scope creep / premature abstraction. A bug fix doesn't need surrounding
  cleanup. Three similar lines beat a premature helper.
- Conflicts with established conventions in a codebase she's been working
  in. If new code violates a single-source-of-truth helper or a documented
  data flow, flag the conflict — don't silently work around it.

## Default repos

- `kristynazackova-personal/ConversationLens-monorepo` — main product
  (web + mobile, the relationship-coaching app, Railway + Neon + R2)
- `kristynazackova-personal/airtable-field-conversion` — utility
- `kristynazackova-personal/kristynazackova` — this repo (personal site)

## Standing preferences

- No emojis in code or messages unless she asks for them.
- No new docs files unless she asks. Work from the conversation, not from
  intermediate planning artifacts.
- No backwards-compat shims, renamed-but-kept variables, or "removed for
  X" comments. If something is unused, delete it.
- Default to no comments. Only write one when the *why* is non-obvious.
