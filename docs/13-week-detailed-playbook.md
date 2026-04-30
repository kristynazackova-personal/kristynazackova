# 13-Week Detailed Playbook

*Operational manual for the May 4 – August 2, 2026 plan. Read alongside `13-week-execution-plan.md`.*

## How to use this playbook

Each week below has:
- **Theme** (the headline)
- **Tasks** (numbered, with detail, tools, links, time estimate)
- **Templates** referenced from the Templates section
- **Success criteria** (what "done" looks like)

If a week is taking longer than 25 hours, drop the lowest-priority numbered task. Do not push tasks into the next week — that's how plans collapse.

---

## Pre-Week 0 — Setup (do before May 4)

~6 hours total. Do on a Saturday.

### Accounts to create

1. **Apple Developer Program** — $99/year. https://developer.apple.com/programs/. Required 7+ days before iOS submission. Unlocks TestFlight, Apple Search Ads, Apple Entrepreneur Camp.
2. **PostHog** — free up to 1M events/mo. https://posthog.com. Product analytics.
3. **Resend** — free up to 3,000 emails/mo. https://resend.com. Transactional + lifecycle email.
4. **Loops.so** — free up to 1,000 contacts. https://loops.so. Backup if Resend's lifecycle features aren't enough.
5. **Calendly** — free tier. https://calendly.com. Customer interview booking.
6. **Loom** — free tier. https://loom.com. Record interviews and demo videos.
7. **Notion or Linear** — pick one. https://notion.so or https://linear.app. Don't use both.
8. **Psychology Today** — free directory access. https://www.psychologytoday.com. Therapist sourcing.

### Project setup

1. Create a Notion/Linear workspace: "ConversationLens 13-week plan."
2. Copy this playbook in. Check off tasks as you go.
3. Calendar blocks (recurring):
   - **Mon 8–9am:** Weekly metrics review
   - **Tue + Thu 9pm–12am:** Deep build sessions
   - **Wed 8:30–9:30pm:** Outreach hour
   - **Sat 9am–5pm:** Primary shipping day
   - **Sun 1–5pm:** Content + admin
   - **Fri 5–5:30pm:** Week wrap-up
4. Create three Notion tables:
   - **Weekly metrics** (week, MRR, signups, paid converts, signup→paid %, retention by cohort, ad spend, CAC)
   - **Therapist pipeline** (name, role, source, status, last contact, next step)
   - **Customer interviews** (email, date, theme tags, willingness-to-pay quote, retention quote)

## Templates (referenced throughout)

### Template A — Therapist LinkedIn DM (LMFT outreach)

```
Hi [Name],

I'm Kristyna — Principal PM at Inmar Intelligence and founder of ConversationLens, an AI tool that analyzes couples' actual conversations to surface communication patterns over time.

I'm building a Therapist Console companion that gives LMFTs between-session visibility into pattern shifts in their couples — not to replace clinical judgment, but to surface what's hard to see across weekly sessions.

I'm offering 5 LMFTs a free 4-week pilot in exchange for case-study material (anonymized). Worth a quick call to see if it fits how you work?

— Kristyna
```

Send 5/week. Personalize the opening line with something from their LinkedIn (specialization, recent post). Source LMFTs:
- Psychology Today directory: https://www.psychologytoday.com (search "couples therapy" + city)
- LinkedIn: search "LMFT couples" + filter by location
- AAMFT directory: https://www.aamft.org/Directories/Find_a_Therapist.aspx

### Template B — Active customer interview script (20 min)

Pay $20 Amazon gift card. Record with consent (Loom).

1. "Walk me through how you found ConversationLens."
2. "What was happening in your relationship when you signed up?"
3. "What's the single most useful thing you've gotten out of it?"
4. "When did you first feel it was worth paying for?"
5. "What's frustrating about the product right now?"
6. "If we doubled the price tomorrow, what would you do?"
7. "Would you tell a friend? What would you say?"
8. "What are we NOT doing that you wish we did?"

### Template C — Churned customer interview script (15 min)

Pay $20 Amazon gift card.

1. "I noticed you signed up [date] and canceled [date]. Walk me through that."
2. "What were you hoping the product would do for you?"
3. "Did it deliver, partially deliver, or not deliver?"
4. "Was the price a factor?"
5. "What would have made you stay?"
6. "Would you ever come back? Under what circumstances?"

### Template D — Personalized weekly email

Sent Sunday 7pm local time. Open-rate target: 40%+.

Subject line variants (A/B test):
- "Your communication patterns this week"
- "What changed in your relationship — week of [date]"
- "[Partner name] + you: a quick read"

Body structure:
1. One-sentence headline finding from their data ("Your conversations were 18% longer this week than last.")
2. One specific pattern with example ("You both did more 'asking' than 'telling' on Thursday night.")
3. One micro-insight ("This pattern correlates with higher relationship-health scores in similar couples.")
4. CTA: "See full insight in app →" (deep link).

### Template E — Reddit comment guidelines

Subreddits (in priority order):
- r/relationships, r/relationship_advice, r/CouplesTherapy
- r/marriage, r/Marriage
- r/datingoverthirty, r/AskWomenOver30 (occasional)

Rules to avoid being banned:
- Read each sub's rules. r/relationships has strict no-promo rules.
- 80% pure-value comments, 20% soft mentions ("a tool I built" — no links).
- Use ThreadLift to find high-relevance threads efficiently.

Format for value comments:
- 2–4 paragraphs
- Specific, not generic ("In Gottman's research this is called 'kitchen-sinking'..." not "communication is hard")
- End with a question to invite reply

### Template F — Press pitch email

```
Subject: AI that analyzes how couples actually talk — quiet launch from a Brooklyn PM-founder

Hi [Reporter],

[Three lines about you and why I'm pitching specifically.]

I'm Kristyna Zackova, a Principal PM building ConversationLens — an AI tool that analyzes couples' real conversations to surface communication patterns over time. We launched to ~30 paying users in November 2025; the iOS app launched [date] and we just shipped paired-streak gamification that's lifting 8-week retention by [X%].

Story angle for [publication]:
- [Specific: e.g., "consumer AI that's not a chatbot"]
- [E.g., "Brooklyn solo founder, AI-built end-to-end"]
- [E.g., "the privacy posture for personal-AI products"]

Happy to demo or share data. 15 min this week or next?

— Kristyna
```

Pitch order: TechCrunch, The Information, Verywell Mind, Well+Good, Mindbodygreen, IndieHackers, Hacker News (Show HN).

### Template G — X/LinkedIn post format

Pick one voice per week:
- **Lessons-learned:** "I spent $7K on Google Performance Max and got 26 paying customers. Here's what I learned about cost-per-signup vs cost-per-paid..."
- **Building-in-public:** "Week 5 of the iOS launch sprint. Today I shipped paired streaks. The math behind why couples-paired streaks beat solo streaks: ..."
- **Strong opinion:** "Most relationship apps are wrong about gamification. Here's the version that actually works for couples..."

Soft CTA at the end: "Building this at conversationlens.com" or "If you're working on something similar, DM me."

## Standing weekly tasks (every week, ~3 hrs total)

### Mon 8–9am — Metrics review (1 hr)

1. **Stripe** (https://dashboard.stripe.com): new paid this week, churned this week, current MRR
2. **PostHog** (https://posthog.com): signups, signup→paid %, paywall-view→subscription %
3. **ASA dashboard** (https://searchads.apple.com) if running: spend, installs, paid converts, CAC
4. Update one row in your "Weekly metrics" Notion table
5. Set this week's top-3 priorities

### Tue + Thu nights, 9pm–12am — Deep build (3 hrs each)

Phase work for the current week. Do-not-disturb on. No meetings, no Slack, no email.

### Wed 8:30–9:30pm — Outreach (1 hr)

1. Send 5 therapist DMs (Template A). Personalize each.
2. Reply to therapist responses from prior weeks.
3. Update therapist-pipeline tracker.

### Sat 9am–5pm — Primary shipping day (8 hrs)

Whatever the week's biggest task is, do it Saturday.

### Sun 1–5pm — Content + admin (4 hrs)

1. Write 1 SEO blog post (45 min). Topics in the bank:
   - "Why does my partner shut down during arguments?"
   - "Communication exercises for couples that actually work"
   - "What Gottman research means for everyday couples"
   - "How to fight fair when you're already exhausted"
   - "What to do when you don't feel heard"
2. Write 1 X/LinkedIn post (20 min). Use Template G.
3. Comment on 10 Reddit threads (60 min). Use Template E.
4. Send weekly check-in email (15 min). Use Template D once set up.
5. Process inbox + customer support (45 min).
6. Plan next week's top-3 (15 min).

### Fri 5–5:30pm — Week wrap-up (30 min)

1. What shipped this week?
2. What didn't, and why?
3. Anything to escalate (blocker, decision needed)?
4. Move incomplete tasks to next week ONLY if still the right priority.

---

## Phase 1 — Funnel + foundation (Weeks 1–4)

### Week 1 (May 4–10) — Instrumentation + focus reset

**Theme:** Stop iterating strategy. Start measuring reality.

#### Task 1.1 — Update portfolio site (1 hr, Sat)
- Edit `src/components/version-d.tsx`: change Life Made Easy and 3D Space `status` to `PAUSED` and add a sentence to each `description` saying "Paused while focusing on ConversationLens."
- Edit hero copy if needed to make CL the obvious focus.
- Deploy.

#### Task 1.2 — PostHog setup (2 hrs, Sat)
- Sign up at https://posthog.com.
- Install JS snippet in CL web app (docs: https://posthog.com/docs/libraries/js).
- Define event taxonomy. Implement events:
  - `signup`
  - `email_verified`
  - `first_conversation_uploaded`
  - `first_insight_viewed`
  - `paywall_viewed`
  - `paywall_dismissed`
  - `subscription_started` (with `plan` property: "premium" | "plus")
  - `subscription_canceled` (with `reason` if collectable)
- Verify events fire correctly. Test with your own account.

#### Task 1.3 — Customer interviews booked (30 min, Mon)
- Email jfordxx9, scribblednsin2, kristynamihmanli with a Calendly link for a 20-min call. Offer $20 Amazon gift card.
- Subject: "Quick favor — 20 min about your ConversationLens experience?"
- Body: short, no marketing. "I'm building the next version and your feedback would shape it."

#### Task 1.4 — Baseline metrics document (30 min, Mon)
- Create `docs/baseline-metrics-may-2026.md` in the repo. Document:
  - Real customers ever: 26
  - Currently active: 3
  - MRR: ~$48
  - Signup→paid: 1.4%
  - 8-wk retention: ~12%
  - Total ad spend to date: ~$7,000
- This is your reference for measuring progress.

#### Task 1.5 — Reddit/ThreadLift first run (1 hr, Sun)
- Open ThreadLift, set up monitoring for: r/relationships, r/relationship_advice, r/CouplesTherapy, r/marriage.
- Make 10 value-only comments per Template E. No mentions of CL yet.

**Success criteria week 1:**
- [ ] Site updated with focus message
- [ ] PostHog firing 8 events correctly in production
- [ ] 3 interviews booked
- [ ] Baseline metrics doc committed

---

### Week 2 (May 11–17) — Tier rework + customer interviews

**Theme:** Premium needs a unique reason to exist.

#### Task 2.1 — Run 3 customer interviews (3 hrs across week)
- Use Template B. Record (with consent), take notes in Notion table.
- After each: write 3-sentence summary, tag themes.

#### Task 2.2 — Design new tier matrix (2 hrs, Sat)
- Current Premium and Plus differ on caps + insight depth. Premium has no unique feature.
- New proposal:
  - **Free:** 1 conversation upload total, basic insights, no partner sharing
  - **Premium ($2/wk):** 1 upload/day, basic insights, **partner-sharing/shared dashboard included**
  - **Plus ($5/wk):** unlimited uploads, **full-depth insights**, **longitudinal trends >30 days**, voice therapy unlimited
- Document this in `docs/tier-rework-may-2026.md` with rationale.

#### Task 2.3 — Ship new tier matrix as A/B test (4 hrs, Sat)
- Implement new matrix server-side flag (50/50 split for new signups).
- New control variant = old matrix; treatment = new matrix.
- Track which signups get which (PostHog group property).
- Plan 4-week A/B run.

#### Task 2.4 — Couples Plan SKU build start (3 hrs, Tue + Thu)
- Stripe pricing: one subscription, both partners get Plus, ~25% off vs 2× individual ($7.50/wk).
- Schema: link two user accounts as a "household." One billing source.
- Don't ship yet — just set up Stripe price + DB schema.

#### Task 2.5 — Therapist DMs (1 hr, Wed) — 5 sent

**Success criteria week 2:**
- [ ] 3 interviews completed and summarized
- [ ] New tier matrix live for 50% of new signups
- [ ] Couples Plan in dev (not shipped)
- [ ] 5 therapist DMs sent (5 cumulative)

---

### Week 3 (May 18–24) — Couples Plan + funnel diagnosis

**Theme:** What's the single biggest drop-off?

#### Task 3.1 — Ship Couples Plan SKU (5 hrs, Sat)
- Complete the build from week 2.
- Add invite-partner UX: "Add your partner — both of you get Plus for the price of 1.5"
- Trigger Couples Plan upsell at the moment a user invites their partner.
- Test end-to-end with a test couple (use 2 of your QA accounts).

#### Task 3.2 — Funnel data review (2 hrs, Mon + Sat)
- Open PostHog → Funnels.
- Build funnel: signup → first_conversation_uploaded → first_insight_viewed → paywall_viewed → subscription_started.
- Identify the single biggest drop-off step.
- Write findings in 1-page memo.

#### Task 3.3 — Fix the #1 drop-off (4 hrs, Tue + Thu + Sun)
- If the leak is signup → first_conversation_uploaded: the onboarding ask is too heavy. Fix: make the first action a 30-second prompt instead of "upload a conversation."
- If the leak is first_conversation_uploaded → paywall_viewed: the insight is good but the paywall isn't shown at the right moment. Fix: show paywall *immediately* after the first insight, with social proof.
- If the leak is paywall_viewed → subscription_started: the paywall isn't compelling. Fix: A/B test pricing display ($2/wk vs $9/mo vs $99/yr framing), add 3 testimonials, add money-back guarantee.

#### Task 3.4 — Book 3 churned customer interviews (30 min, Mon)
- Email churned customers from Stripe data. Offer $20 gift card.
- Pick a mix: 1 who churned in week 1, 1 in week 2–4, 1 in week 5+.

#### Task 3.5 — Therapist DMs (1 hr, Wed) — 5 sent

**Success criteria week 3:**
- [ ] Couples Plan live and tested end-to-end
- [ ] Funnel diagnosis memo written
- [ ] 1 funnel fix shipped
- [ ] 3 churned-customer interviews booked
- [ ] Therapist count: 10 cumulative

---

### Week 4 (May 25–31) — Paywall iteration + first-insight fix

**Theme:** Earn week-1 retention.

#### Task 4.1 — Run 3 churned-customer interviews (2 hrs across week)
- Template C. Identify common failure pattern.

#### Task 4.2 — First-insight moment iteration (5 hrs, Sat)
- The screen a user sees after their first conversation upload is the highest-intent moment in the app.
- Make it visually compelling: clear pattern callout, specific example from THEIR data, "look at this" wow moment.
- Add immediate paywall right after first insight (the moment they're most excited).

#### Task 4.3 — Paywall iteration v2 (3 hrs, Tue + Thu)
- Based on funnel data and interviews.
- Likely changes: weekly pricing more prominent than monthly, "first 7 days for $1" trial offer, social proof.
- Ship as A/B variant on top of new tier matrix.

#### Task 4.4 — Therapist DMs (1 hr, Wed) — 5 sent. Follow up with first-batch responders.

#### Task 4.5 — Phase 1 review (2 hrs, Sun)
- Open PostHog. Check signup→paid for new cohorts since week 2.
- **Decision gate:**
  - If signup→paid is trending toward 2%+: proceed to Phase 2 (iOS).
  - If still ~1.5%: extend Phase 1 by 2 weeks. Skip iOS until conversion is moving.
- Write phase 1 review in `docs/phase-1-review.md`.

**Success criteria week 4:**
- [ ] 3 churned interviews complete
- [ ] First-insight moment redesigned and shipped
- [ ] Paywall v2 shipped
- [ ] Phase 1 review committed
- [ ] Therapist count: 15 cumulative
- [ ] Signup→paid on new cohorts: ≥2%

---

## Phase 2 — iOS app + retention features (Weeks 5–8)

### Week 5 (May 25 – June 7) — iOS scaffolding

**Theme:** Build the right foundation, fast.

#### Task 5.1 — iOS approach decision (1 hr, Mon)
- Recommend: **Capacitor** (https://capacitorjs.com). Wraps your existing Next.js app as iOS, adds native push + biometric. Fastest path. ~2 weeks vs 8 weeks for native Swift.
- Alternative: React Native (more work, better UX).
- Document choice in `docs/ios-stack-decision.md`.

#### Task 5.2 — Apple Developer setup verification (30 min, Mon)
- Confirm Apple Developer enrollment from pre-week 0 is fully provisioned.
- Generate signing certificate, provisioning profile.
- App Store Connect: create the app record (name, bundle ID, basic metadata).

#### Task 5.3 — Capacitor + project scaffold (4 hrs, Sat)
- Run `npm install @capacitor/core @capacitor/cli @capacitor/ios` per https://capacitorjs.com/docs/getting-started.
- `npx cap init` and `npx cap add ios`.
- Build, sync, open in Xcode. Verify it builds.
- Commit to a new branch in the CL repo.

#### Task 5.4 — Auth + main flow in iOS shell (3 hrs, Tue + Thu)
- Verify login works on the iOS wrapper.
- Verify conversation upload works (or document gaps for next week).
- Verify insights view renders.

#### Task 5.5 — Push notification spec (1 hr, Sun)
- Document the rules in `docs/push-notification-strategy.md`:
  - Max 3/week per user.
  - **Triggered, not scheduled.** Examples:
    - "Sarah just logged today's check-in. Your turn?"
    - "You and Sarah are 1 day from a 2-week paired streak. Don't break it."
    - "Your communication score shifted +6 this week — see what changed."
  - Quiet hours: 9pm–9am local time. No push.
  - User control: in-app toggle, granular per category.

#### Task 5.6 — Therapist DMs (1 hr, Wed) — 5 sent (20 cumulative). Schedule first 2 pilot calls.

**Success criteria week 5:**
- [ ] iOS stack chosen and committed
- [ ] App builds and runs locally
- [ ] Auth + main flow verified
- [ ] Push spec documented
- [ ] First therapist pilot call booked

---

### Week 6 (June 8–14) — Email + iOS core flow

**Theme:** Personalized email is the killer app of relationship products.

#### Task 6.1 — Resend setup (2 hrs, Sat)
- Sign up, verify domain (https://resend.com/docs/dashboard/domains/introduction).
- Configure SPF, DKIM, DMARC for kristynazackova.com or conversationlens.com.
- Send a test email to yourself.

#### Task 6.2 — Personalized weekly email v1 (5 hrs, Sat)
- Server-side cron job: every Sunday 6pm Eastern, generate personalized emails for all paid users.
- For each couple, pull last week's data: number of conversations, sentiment trend, top pattern detected, score change.
- Render Template D email with that data.
- Send via Resend.
- Track open/click via Resend webhooks → PostHog.

#### Task 6.3 — iOS app: conversation upload working (4 hrs, Tue + Thu)
- Test conversation upload flow on iOS wrapper.
- Fix any iOS-specific bugs (file picker, camera permission for transcription).
- Verify insights view renders correctly.

#### Task 6.4 — ThreadLift Reddit run (1 hr, Sun)
- 10 thoughtful comments per Template E.
- Track which threads → DMs received.

#### Task 6.5 — Therapist DMs + first pilot call (2 hrs, Wed + Sun)
- 5 new DMs (25 cumulative).
- Run first therapist pilot call. Onboard them to a free 4-week trial. Get them set up on the (web) Therapist Console mockup or just the consumer dashboard.

**Success criteria week 6:**
- [ ] Resend domain verified
- [ ] First personalized weekly email sent
- [ ] iOS app: conversation upload + insights working
- [ ] Therapist count: 25, 1 pilot active

---

### Week 7 (June 15–21) — Paired gamification + push

**Theme:** Paired streaks are the killer retention feature.

#### Task 7.1 — Push notifications working in iOS (4 hrs, Sat)
- Implement APNs via Capacitor Push Notifications plugin: https://capacitorjs.com/docs/apis/push-notifications.
- Backend: send push for the 3 trigger types from week 5 spec.
- Test end-to-end with TestFlight build on your phone.

#### Task 7.2 — Paired streak design (2 hrs, Sat)
- Document in `docs/paired-streaks-design.md`:
  - Streak counts only when *both* partners complete daily action within 24 hours.
  - Streak shown to both partners in shared dashboard.
  - Streak risk push at 22 hours.
  - Visual: simple counter ("You + Sarah: 14 days").
  - No punitive language. Tone is supportive, not anxious.

#### Task 7.3 — Daily action: 30-second check-in (4 hrs, Tue + Thu)
- Replace "upload a conversation" as the daily ask.
- New: a single rotating question ("Rate today 1–5," "What was today's high?", "Any unspoken thing?").
- Logged to user history. Available as data source for analysis.

#### Task 7.4 — Ship paired streaks v1 (3 hrs, Sun)
- DB schema for paired streaks.
- API for paired-streak status.
- UI in shared dashboard.

#### Task 7.5 — ASA account setup (30 min, Sun)
- Set up at https://searchads.apple.com.
- Don't spend yet — just configure, link App Store Connect.

#### Task 7.6 — Therapist DMs + Reddit (2 hrs, Wed + Sun)
- 5 DMs (30 cumulative).
- 10 Reddit comments.

**Success criteria week 7:**
- [ ] Push notifications working in TestFlight build
- [ ] Paired streaks v1 functional (DB + UI)
- [ ] Daily check-in question replaces conversation-upload as daily ask
- [ ] ASA account set up

---

### Week 8 (June 22–28) — TestFlight + ASO prep

**Theme:** Get it in front of real users before App Store review.

#### Task 8.1 — TestFlight beta launch (3 hrs, Sat)
- Build production iOS app, upload to App Store Connect.
- Add 10 testers via TestFlight (https://developer.apple.com/testflight): the 3 active customers + 5–10 friends/family.
- Send onboarding email with TestFlight link + 5 things to test.
- Expect 3–5 actual responses; that's normal.

#### Task 8.2 — ASO assets (5 hrs, Sat + Sun)
- Keyword research: App Radar (https://appradar.com) free tier or Sensor Tower (https://sensortower.com).
  - Target keywords: "couples therapy app," "relationship insights," "communication tracker," "couples journal," "couples counseling app"
- App Store screenshots: 5 variants, with text overlay showing key value prop. Use Figma or AppMockUp.
- App description: 4,000 chars max, lead with strongest hook (paired streaks + AI insights), keyword-rich but readable.
- App preview video: 30-second Loom-style walkthrough (optional but lifts conversion).

#### Task 8.3 — Apple Entrepreneur Camp application (2 hrs, Sun)
- Apply at https://developer.apple.com/entrepreneur-camp/.
- Free, prestigious, focused on women-founded iOS startups (note: there's a women-founded specific track — eligible for you).
- Application includes a short founder story + product video.

#### Task 8.4 — YC application draft started (2 hrs, Sun)
- Open https://www.ycombinator.com/apply.
- Pull current data into draft answers:
  - "What does your company do?" (one sentence)
  - "Why is your team well-suited for this problem?"
  - "What's the most impressive thing you've built or done?"
  - "What's your single most important goal in the next 90 days?"
- Don't submit yet — refine over weeks 9–10.

#### Task 8.5 — Therapist DMs + 1 more pilot call (2 hrs, Wed + later)
- 5 DMs (35 cumulative).
- Onboard a second therapist pilot.

**Success criteria week 8:**
- [ ] TestFlight build live with 8+ testers
- [ ] ASO assets uploaded to App Store Connect
- [ ] Apple Entrepreneur Camp application submitted
- [ ] YC application draft started
- [ ] Therapist count: 35, 2 pilots active

---

## Phase 3 — Launch + validate (Weeks 9–13)

### Week 9 (June 29 – July 5) — App Store submission + accelerator apps

**Theme:** Ship it and apply for capital paths.

#### Task 9.1 — App Store submission (4 hrs, Sat)
- Final build, version 1.0.0.
- Submit for review via App Store Connect. Allow 24h–7 days for review.
- Common rejection causes: missing privacy policy, login behind paywall, broken links. Pre-check using Apple's review guidelines.

#### Task 9.2 — Submit YC Fall 2026 application (3 hrs, Sat + Sun)
- Refine answers from week 8 draft.
- Founder video: 1 minute, you on camera, no slides. Scripts:
  - 0–10s: who you are, what CL is in one sentence
  - 10–40s: traction (real numbers — be honest), retention story, paired streaks
  - 40–60s: vision (couples → solo mental health → aging → eventually parenting)
- Submit at https://www.ycombinator.com/apply.

#### Task 9.3 — Submit TinySeed application (2 hrs, Sun)
- Apply at https://tinyseed.com/apply.
- More bootstrap-friendly than YC. Solo founders accepted. No SF requirement.
- Same data, slightly different framing (lean toward profitability and capital efficiency).

#### Task 9.4 — Co-founder search outreach (2 hrs, Sun)
- 5 personalized LinkedIn DMs to technical founders/ex-founders in your network.
- Frame: "I'm building [vision]. I'd love to meet someone with ML/CV background to potentially partner. Worth a coffee?"
- Don't sell hard yet — these are exploratory.

#### Task 9.5 — Press list draft (1 hr, Sun)
- 10 publications + 1 reporter contact at each (find via Twitter or publication's "about" page).
- Save to Notion table for week 10 push.

#### Task 9.6 — Therapist DMs (1 hr, Wed) — 5 sent (40 cumulative)

**Success criteria week 9:**
- [ ] iOS app submitted to App Store
- [ ] YC application submitted
- [ ] TinySeed application submitted
- [ ] 5 co-founder exploratory DMs sent
- [ ] Press list (10 contacts) ready

---

### Week 10 (July 6–12) — Launch

**Theme:** All channels firing.

#### Task 10.1 — iOS app live on App Store (1 hr, when approved)
- Verify everything works on launch day.
- Update website to "Now on iOS" with App Store badge.
- Update LinkedIn, X bios with App Store link.

#### Task 10.2 — Apple Search Ads first-week test (3 hrs, Sat)
- Budget: $500 for the week.
- Campaign type: Search Match + 5 manual keyword campaigns.
- Keywords: "couples therapy app," "relationship app," "couples counseling," "communication tracker," "couples journal"
- Max CPT bid: $2 (will likely settle at $0.80–$1.50).
- Track in PostHog: `install_source = ASA`.

#### Task 10.3 — Press push (3 hrs, Sat + Sun)
- Send Template F to 10 reporters from week 9 list.
- Personalize each (1 hour total for personalization).
- Schedule send: Tuesday morning (best open rates for press).

#### Task 10.4 — Email all subscribers + signups (1 hr, Sun)
- Announcement email: "ConversationLens is on iOS today."
- Include App Store link, what's new (paired streaks, push, daily check-in).
- Drive existing free signups to download.

#### Task 10.5 — Founder brand launch post (2 hrs, Sun)
- Long X thread or LinkedIn post: "We launched our iOS app today. Here's the journey from a Replit prototype to here in 6 months..."
- Cross-post to Hacker News (Show HN: ConversationLens — AI relationship insights).
- Soft CTA + App Store link.

#### Task 10.6 — Therapist DMs (1 hr, Wed) — 5 sent (45 cumulative)

**Success criteria week 10:**
- [ ] iOS app live on App Store
- [ ] ASA running with $500 spend
- [ ] 10 press pitches sent
- [ ] Launch post live, 1+ HN/Reddit launch thread

---

### Week 11 (July 13–19) — Scale what's working

**Theme:** Listen to data; double down on the working channel.

#### Task 11.1 — ASA scale decision (1 hr, Mon)
- Pull week-1 ASA data: spend, installs, CAC, signup→paid for ASA cohort.
- If CAC < $15 and signup→paid ≥ 2%: scale to $1,000/week.
- If CAC > $20 or signup→paid < 1.5%: pause, iterate creative + keywords, re-test next week.

#### Task 11.2 — Cohort retention comparison (2 hrs, Mon + Sat)
- PostHog cohorts: pre-iOS users vs post-iOS users.
- Compare 2-wk retention (early signal). If post-iOS is 1.5×+ pre-iOS, the iOS bet is paying off.
- Document in `docs/ios-cohort-comparison.md`.

#### Task 11.3 — Therapist Console MVP scoping (3 hrs, Sat)
- Don't build yet. Just spec it.
- What does a therapist need to see between sessions?
  - List of their clients
  - For each client: pattern shift since last session (positive/concerning), session-prep summary, recommended discussion topics
- Document scope, build estimate, in `docs/therapist-console-spec.md`.

#### Task 11.4 — Iterate on iOS app based on early feedback (4 hrs, Tue + Thu)
- Likely: bug fixes, onboarding tweaks, paywall refinement.
- Ship a 1.0.1 patch.

#### Task 11.5 — Reddit + content (2 hrs, Sun)
- 10 comments (continuing standing).
- 1 SEO blog post.
- 1 X/LinkedIn post.

#### Task 11.6 — Therapist DMs (1 hr, Wed) — 5 sent (50 cumulative). Schedule any new pilot calls.

**Success criteria week 11:**
- [ ] ASA decision made + executed
- [ ] iOS cohort comparison documented
- [ ] Therapist Console MVP spec written
- [ ] iOS 1.0.1 shipped

---

### Week 12 (July 20–26) — Compound + B2B

**Theme:** Therapist channel + content compound.

#### Task 12.1 — Continue scaling working channels (2 hrs, ongoing)
- ASA at established budget.
- Reddit and SEO continue.

#### Task 12.2 — Therapist Console pilot kickoff (3 hrs, Sat)
- For the 2–4 therapists already piloting + any new from cumulative outreach: kick off the Therapist Console preview.
- Even if it's just a Notion-based dashboard reflecting their clients' data — call it the Console v0.
- Schedule 30-min weekly check-ins for 4 weeks.

#### Task 12.3 — Press follow-up (1 hr, Mon + Wed)
- Follow up with reporters who didn't reply. One nudge max.
- For any reporter who replied: schedule, prep, demo.

#### Task 12.4 — Founder brand essay (3 hrs, Sun)
- Long-form post (~1,000 words) on the iOS migration + paired gamification story.
- Publish on kristynazackova.com/blog and cross-post to LinkedIn.
- Link strategically to App Store + CL.

#### Task 12.5 — Day-90 metrics dashboard build (2 hrs, Sat)
- Build a single-page summary in Notion or a simple React dashboard:
  - Current MRR + week-over-week
  - Real customer count (paid + ever-paid)
  - 8-week retention by cohort (Dec, Jan, Feb, Mar, Apr, May, Jun)
  - Signup→paid % by month
  - CAC by channel
  - LTV by month
  - Cumulative ad spend
- This becomes your decision input for week 13.

**Success criteria week 12:**
- [ ] Therapist Console v0 active for 2–4 therapists
- [ ] Press follow-ups sent
- [ ] Long-form founder essay published
- [ ] Day-90 dashboard built

---

### Week 13 (July 27 – August 2) — 90-day decision

**Theme:** Honest assessment. Make the call.

#### Task 13.1 — Compile day-90 metrics (3 hrs, Mon + Sat)
- Pull final numbers from PostHog, Stripe, ASA.
- Update day-90 dashboard.

#### Task 13.2 — Decision against pre-set criteria (2 hrs, Sat)
- **Pass:** MRR > $5K, 8-wk retention > 25%, LTV/CAC > 0.6 → push capital path.
  - Action: schedule YC interview prep (if invited), finalize co-founder conversations, set quit-day-job date.
- **Marginal:** MRR $1–5K, retention 15–25% → another 8-week iteration.
  - Action: write Phase 4 plan focused on 2 highest-leverage levers from interviews + data.
- **Fail:** MRR < $1K or retention < 15% → wedge analysis.
  - Action: 2-week sabbatical from building. Talk to 10 new potential customers. Decide: pivot, persevere, or shutter CL and pick a new wedge.

#### Task 13.3 — Write `docs/90-day-checkpoint.md` (3 hrs, Sun)
- Sections:
  - What we shipped (concrete list)
  - Numbers vs targets
  - What worked (channels, features)
  - What didn't (be honest)
  - Decision + rationale
  - Next 90 days plan summary
- Commit and push.

#### Task 13.4 — Communicate the decision (1 hr, Sun)
- If Pass: tell network, schedule next-step calls.
- If Marginal: keep it private until next checkpoint.
- If Fail: take the weekend. Then talk to 2–3 trusted advisors.

#### Task 13.5 — Therapist DMs (1 hr, Wed) — 5 sent (55 cumulative). Continue therapist console pilots.

**Success criteria week 13:**
- [ ] Day-90 metrics compiled
- [ ] Decision made against pre-set criteria
- [ ] `docs/90-day-checkpoint.md` committed
- [ ] Decision communicated appropriately
- [ ] Therapist channel: 55 DMs cumulative, 4+ pilots active

---

## Resource library

### Tools (with pricing)

- **Apple Developer Program:** https://developer.apple.com/programs/ — $99/yr
- **PostHog:** https://posthog.com — free up to 1M events/mo
- **Resend:** https://resend.com — free up to 3,000 emails/mo
- **Loops.so:** https://loops.so — free up to 1,000 contacts (lifecycle email alternative)
- **Calendly:** https://calendly.com — free tier
- **Loom:** https://loom.com — free tier (5-min limit, fine for interviews)
- **Notion:** https://notion.so — free for personal
- **Linear:** https://linear.app — free up to 10 users
- **Capacitor:** https://capacitorjs.com — open source
- **App Radar (ASO):** https://appradar.com — free tier
- **Sensor Tower (ASO):** https://sensortower.com — free signup, paid for deep data
- **Apple Search Ads:** https://searchads.apple.com — pay per tap, no monthly minimum
- **Apple Entrepreneur Camp:** https://developer.apple.com/entrepreneur-camp/ — free (acceptance required)

### Accelerators / capital sources

- **Y Combinator:** https://www.ycombinator.com/apply — $500K/7%, batches Winter/Spring/Summer/Fall
- **TinySeed:** https://tinyseed.com/apply — $160K/~10%, bootstrap-friendly, rolling intake
- **Earnest Capital / Calm Company Fund:** https://earnestcapital.com — Shared Earnings Agreement (rev share, no equity)
- **Lighter Capital:** https://www.lightercapital.com — revenue-based financing, requires existing MRR
- **Capchase:** https://capchase.com — revenue-based financing
- **Pipe:** https://pipe.com — capital against recurring revenue

### Therapist outreach sources

- **Psychology Today:** https://www.psychologytoday.com — search "couples therapy" + city
- **AAMFT directory:** https://www.aamft.org/Directories/Find_a_Therapist.aspx
- **TheraNest community:** https://www.theranest.com
- **GoodTherapy:** https://www.goodtherapy.org

### Content / SEO research

- **Google Search Console:** https://search.google.com/search-console — what's already ranking
- **AnswerThePublic:** https://answerthepublic.com — question-based content ideas
- **Reddit Keyword Research:** https://www.gummysearch.com — paid but great for finding pain points
- **Ahrefs Free Keyword Generator:** https://ahrefs.com/keyword-generator
- **Ubersuggest:** https://neilpatel.com/ubersuggest — free tier

### Press / launch platforms

- **Hacker News:** https://news.ycombinator.com — Show HN posts; Tuesday/Wednesday best
- **Product Hunt:** https://www.producthunt.com — launch on Tuesday for max visibility
- **IndieHackers:** https://www.indiehackers.com — community + product showcase
- **BetaList:** https://betalist.com — pre-launch / new launch
- **Reddit r/SideProject:** good launch channel for indie products

### Subreddits worth knowing

- r/relationships (no direct promo)
- r/relationship_advice
- r/CouplesTherapy
- r/marriage, r/Marriage
- r/datingoverthirty
- r/AskWomenOver30, r/AskMenOver30
- r/SideProject (for launch)
- r/Entrepreneur, r/startups (for founder posts)

### Press contacts (starting list)

- **TechCrunch — Connie Loizos** (consumer)
- **The Information — Erin Woo** (consumer AI)
- **Verywell Mind — Editorial team** (mental health)
- **Well+Good — Editorial team**
- **Mindbodygreen — Editorial team**
- **Refinery29 — Wellness vertical**
- **Scary Mommy — Relationship vertical**
- **Apartment Therapy — Lifestyle**
- **NY Mag's The Cut — Wellness/relationships**
- **The Verge — Allison Johnson** (apps)

(Verify each contact via https://muckrack.com or recent bylines before pitching.)

---

## Decision-tree summary (what to do when X happens)

| Situation | Action |
|---|---|
| Funnel improvement plateaus before week 4 | Extend Phase 1 by 2 weeks, skip iOS until conversion is moving |
| iOS App Store rejects v1 | Read rejection carefully, fix in <72 hrs, resubmit. Don't delay launch >1 week |
| ASA CAC > $20 after week 1 | Pause, iterate creative, test again with $300 budget |
| Therapist channel produces 0 referrals after 30 DMs | Pivot the pitch — try "free trial for therapy practice referral" instead of pilot model |
| Press push gets 0 responses | Try Hacker News Show HN + Product Hunt instead. Press is a slow build. |
| YC rejects | TinySeed continues. Apply to next YC batch in 3 months with better numbers. Not a blocker. |
| Day-job becomes unbearable before day 90 | Take 2 weeks PTO if possible, accelerate the bridge plan with 1 fractional client. Don't quit reactively. |
| Co-founder candidate seriously interested | Don't rush. Spend 4–6 weeks dating before committing. Check references. |
| Burnout warning signs (>60 hrs/wk consistently for 6+ weeks) | Cut standing tasks first (skip 1 Reddit run, 1 SEO post). Sleep is non-negotiable. |
| Day-90 result is "Marginal" | Don't quit day job yet. Run another 8-week iteration. Re-evaluate at week 21. |
| Day-90 result is "Fail" | 2-week pause. Talk to 10 new potential customers. Then decide: pivot, persevere, or shutter. |

---

## What to read before starting

- **Y Combinator's "How to Apply" guide:** https://www.ycombinator.com/library/4D-yc-application-guide
- **Patrick McKenzie on solo SaaS:** https://www.kalzumeus.com/standing-invitation/
- **Lenny Rachitsky on retention:** https://www.lennysnewsletter.com (specifically the cohort-retention articles)
- **Apple Search Ads basics:** https://searchads.apple.com/learn
- **ASO playbook by App Radar:** https://appradar.com/academy

This is the manual. Don't add to it. Execute it, mark tasks complete, ship.
