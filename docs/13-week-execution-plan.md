# 13-Week Execution Plan

*May 4 – August 2, 2026*

## Operating constraints

- ~20–25 focused hours/week outside the day job
- One person, one product (ConversationLens). Life Made Easy and 3D Space are paused publicly.
- Goal at day 90: $5–10K MRR, 8-week retention >25%, iOS app live, YC application submitted
- Decision at day 90: bootstrap path (A) or push for capital path (C)

## Weekly cadence

- **Mondays (1 hr):** Review prior week's metrics, set this week's top-3 priorities
- **Tues/Thurs nights (3 hrs each):** Deep build work on the week's main task
- **Saturday (8 hrs):** Largest contiguous block — primary shipping day
- **Sunday (4 hrs):** Outreach, content, admin, planning
- Reserve Friday + Wednesday nights for life

---

## Phase 1 — Funnel + foundation (Weeks 1–4)

The biggest revenue lever you have is fixing signup → paid. Do this *before* shipping iOS or scaling ads.

### Week 1 (May 4–10) — Instrumentation + focus reset

- [ ] Update portfolio site: pause Life Made Easy & 3D Space publicly, frame ConversationLens as the focus
- [ ] Set up PostHog or Mixpanel on web app (free tier is enough)
- [ ] Define event taxonomy: `signup`, `first_conversation_uploaded`, `first_insight_viewed`, `paywall_viewed`, `paywall_dismissed`, `subscription_started`, `subscription_canceled`
- [ ] Email the 3 currently active customers (jfordxx9, scribblednsin2, kristynamihmanli) asking for a 20-min feedback call
- [ ] Block 3 customer interview slots for week 2
- [ ] Write down current funnel numbers as baseline (signup→paid 1.4%, 8-wk retention ~12%)

**Success criteria:** Analytics live, baseline numbers documented, 3 calls booked.

### Week 2 (May 11–17) — Tier rework + customer interviews

- [ ] Run 3 customer feedback calls; write up patterns
- [ ] Design new tier matrix: give Premium one *unique* feature (proposed: partner-sharing/shared dashboard moves to Premium+; longitudinal trends >30 days locked to Plus)
- [ ] Ship the new tier matrix as A/B test (50/50 split)
- [ ] Start Couples Plan SKU build (one bill, both partners, ~25% discount vs 2× individual)
- [ ] First batch of therapist DMs: 5 LMFTs on LinkedIn, personalized

**Success criteria:** New tier matrix live for new signups, Couples Plan in dev, 5 therapist conversations opened.

### Week 3 (May 18–24) — Couples Plan + funnel diagnosis

- [ ] Ship Couples Plan SKU
- [ ] Funnel data review (2 weeks of analytics): identify single biggest drop-off step
- [ ] Fix the #1 drop-off (likely paywall placement or first-insight moment)
- [ ] 5 more therapist DMs (10 cumulative)
- [ ] Customer interview round 2: book 3 more calls with churned customers (use Stripe data)

**Success criteria:** Couples Plan live, one funnel fix shipped, 10 therapist conversations open.

### Week 4 (May 25–31) — Paywall iteration + first-insight fix

- [ ] Run 3 churned-customer calls; identify why they didn't renew
- [ ] Iterate on first-insight moment (the screen a user sees after their first conversation upload — this is where week-1 churn is decided)
- [ ] Paywall iteration v2 based on funnel data
- [ ] 5 more therapist DMs (15 cumulative)
- [ ] **Phase 1 review:** Is signup→paid moving toward 2.5%+? If yes, proceed to phase 2. If no, extend phase 1 by 2 weeks and skip iOS until conversion is fixed.

**Success criteria:** Signup→paid conversion ≥ 2% on new cohorts, 1+ therapist agreed to pilot.

---

## Phase 2 — iOS app + retention features (Weeks 5–8)

Native iOS is the dominant retention lever for this category. Don't ship it until phase 1 conversion is moving.

### Week 5 (June 1–7) — iOS scaffolding

- [ ] Decide iOS approach: Capacitor wrapper (fastest), React Native (medium), or native Swift (slowest, best UX). Recommend Capacitor for speed.
- [ ] Set up Apple Developer account if not already ($99/year)
- [ ] Project skeleton + auth flow + main navigation
- [ ] Smart push notification spec: 3x/week max, *triggered* not scheduled (e.g., partner activity, streak risk, pattern shift)
- [ ] 5 more therapist DMs (20 cumulative)

**Success criteria:** iOS app builds and runs locally, push spec written.

### Week 6 (June 8–14) — Email + iOS core flow

- [ ] Set up email infrastructure (Postmark or Resend; free tier is enough)
- [ ] Design personalized weekly email: each couple gets *their* data ("Your communication score shifted +4 this week, here's what changed")
- [ ] Ship email v1 to existing users
- [ ] iOS app: conversation upload + insight view working
- [ ] ThreadLift on Reddit: 10 thoughtful comments in r/relationships, r/marriage, r/couples (use your own product)

**Success criteria:** Personalized weekly email sending, iOS core flow working in TestFlight build.

### Week 7 (June 15–21) — Paired gamification + push

- [ ] Implement push notifications in iOS app (APNs)
- [ ] Design paired streaks: streak counts only when *both* partners engage (this is the killer retention feature)
- [ ] Ship paired streaks v1
- [ ] Daily action design: 30-second check-in question (NOT "upload a conversation")
- [ ] 10 more Reddit comments (20 cumulative)
- [ ] Apple Search Ads account setup (don't spend yet)

**Success criteria:** Push notifications working, paired streak v1 functional.

### Week 8 (June 22–28) — TestFlight + ASO prep

- [ ] iOS app to TestFlight, invite the 3 active customers + 5–10 friends as beta testers
- [ ] ASO setup: keyword research (App Radar, Sensor Tower free tier), 5 screenshot variants, compelling app description
- [ ] Apple Entrepreneur Camp application (free, prestigious, supports iOS founders — apply if eligible)
- [ ] Compile real Stripe + analytics data for YC application draft
- [ ] 5 more therapist DMs (25 cumulative); first Therapist Console pilot conversation

**Success criteria:** TestFlight build live with 8+ testers, ASO assets ready, YC draft started.

---

## Phase 3 — Launch + validate (Weeks 9–13)

### Week 9 (June 29 – July 5) — App Store submission + accelerator apps

- [ ] iOS app: App Store submission (allow 1–2 weeks for review)
- [ ] Submit **YC Fall 2026 application** (deadline typically mid-September; apply early for visibility)
- [ ] Submit **TinySeed application** (rolling intake, more bootstrap-friendly)
- [ ] Begin co-founder search: 5 outreach messages to technical founders in your network
- [ ] Press list draft: 10 publications relevant to relationship/wellness/AI

**Success criteria:** iOS app submitted, 2 accelerator applications in.

### Week 10 (July 6–12) — Launch

- [ ] iOS app: live on App Store (assuming approval)
- [ ] Apple Search Ads: $500 first-week test on top 5 keywords
- [ ] Press push: pitch 5 publications with launch story (founder + AI + relationships angle)
- [ ] Email all signed-up couples announcing iOS launch
- [ ] Founder brand: 1 thread on X/LinkedIn explaining the journey + iOS launch

**Success criteria:** App live, ASA running, 5 press pitches sent.

### Week 11 (July 13–19) — Scale what's working

- [ ] If ASA CAC < $15: scale to $1K/week
- [ ] If ASA CAC > $20: pause, analyze, iterate creative
- [ ] Cohort comparison: pre-iOS vs post-iOS retention curves (early read)
- [ ] Therapist Console MVP scoping (don't build yet, just specify)
- [ ] 5 more therapist DMs (30 cumulative)

**Success criteria:** Working channel identified, retention lift visible in early iOS cohort.

### Week 12 (July 20–26) — Compound + B2B

- [ ] Continue scaling working channels
- [ ] First Therapist Console pilot conversations: offer 4-week free pilot to 5 LMFTs in exchange for case-study material
- [ ] Press follow-up: any responses from week 10 pitches
- [ ] Founder brand: 1 essay-length post on the iOS migration / paired gamification story (this becomes content marketing fuel)

**Success criteria:** 1+ therapist pilot active, 1 substantive content piece published.

### Week 13 (July 27 – August 2) — 90-day decision

- [ ] Compile full 90-day metrics dashboard:
  - MRR (current vs day 0)
  - 8-week retention by cohort
  - Signup → paid conversion
  - CAC by channel
  - LTV/CAC
- [ ] Compare to targets:
  - **Pass:** MRR > $5K, 8-wk retention > 25%, LTV/CAC > 0.6 → push capital path (YC interview prep, finalize co-founder search)
  - **Marginal:** MRR $1–5K, retention 15–25% → another 8-week iteration; reassess at week 21
  - **Fail:** MRR < $1K or retention < 15% → product pivot or wedge change required
- [ ] Write up findings in `docs/90-day-checkpoint.md`
- [ ] Decision recorded with date and rationale

**Success criteria:** Honest assessment done, path A/C decision made, next 90 days planned.

---

## Standing weekly tasks (every week, 2–3 hrs total)

- 5 therapist LMFT DMs on LinkedIn
- 10 thoughtful Reddit comments via ThreadLift in relevant subs
- 1 X/LinkedIn post (founder voice — building in public, AI relationship intelligence niche)
- 1 SEO blog post (couples/communication/conflict topics)
- Customer support: respond to all support emails within 24 hours
- Friday 30-min review: what shipped, what didn't, why

## What NOT to do in these 13 weeks

- Build any feature on Life Made Easy or 3D Space
- Run Google Performance Max ads (they're broken until funnel is fixed)
- Take on freelance/consulting work (this plan assumes you're holding the day job, not the bridge path)
- Write any new strategy docs (this plan IS the strategy; execute it)
- Add a third or fourth tier to pricing (the binary choice between Premium and Plus is the right structure)
- Pursue parenting product (regulatory minefield; revisit in 2028+)

## Capital allocation (estimated total spend over 13 weeks)

| Item | Cost |
|---|---|
| Apple Developer account | $99 |
| PostHog/Mixpanel | $0 (free tier) |
| Postmark/Resend | $0–15/mo |
| ASO tools (App Radar) | $0 (free tier) or $30/mo |
| Apple Search Ads test | ~$500 (week 10) |
| Apple Search Ads scale | ~$2,000 (weeks 11–13) if working |
| Misc tools/freelance | $200 |
| **Total** | **~$3,000** |

This is the cheapest realistic path. If at week 4 the funnel isn't moving, pause ad spend planned for weeks 10+ and extend phase 1.

## What this plan deliberately does not include

- A second product line (focus is the constraint)
- Hiring (premature; revisit at month 6 post-quit)
- Building hardware integrations (partner only, and not until v2)
- Building the parenting/dating products (vision-stage, not execution-stage)
- Daily push notifications (smart 3x/week is better)
- A general newsletter (personalized weekly email is better)

## After day 90

This plan ends August 2, 2026. The next plan will be written based on the day-90 data, not in advance. Two likely templates:

- **If "Pass":** YC interview prep + co-founder onboarding + raise prep + scale ASA
- **If "Marginal":** another 8 weeks of phase 1/2 iteration + retention experiments + decision at week 21
- **If "Fail":** wedge analysis, possible pivot, or shift to bridge path
