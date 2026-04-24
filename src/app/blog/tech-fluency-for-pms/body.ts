export const GUIDE_BODY = `<nav class="toc">
  <ol>
    <li><span class="num">01</span><a href="#big-picture">The Big Picture</a></li>
    <li><span class="num">02</span><a href="#web">The Web &amp; APIs</a></li>
    <li><span class="num">03</span><a href="#workflow">How Engineers Work</a></li>
    <li><span class="num">04</span><a href="#infra">Infrastructure &amp; Scale</a></li>
    <li><span class="num">05</span><a href="#data">Data &amp; Databases</a></li>
    <li><span class="num">06</span><a href="#quality">Quality &amp; Reliability</a></li>
    <li><span class="num">07</span><a href="#architecture">Architecture Patterns</a></li>
    <li><span class="num">08</span><a href="#security">Security Basics</a></li>
    <li><span class="num">09</span><a href="#process">Process &amp; Ceremonies</a></li>
    <li><span class="num">10</span><a href="#redflags">Red Flags to Avoid</a></li>
    <li><span class="num">11</span><a href="#holding-own">Holding Your Own</a></li>
  </ol>
</nav>
<section id="big-picture">
  <div class="section-head">
    <div class="section-label">Chapter One</div>
    <h2>The Big Picture</h2>
    <p class="section-blurb">How a piece of software is actually put together, from the screen you tap to the servers you don&rsquo;t see.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header">
        <div class="term-name">Frontend</div>
        <div class="term-alias">a.k.a. client-side, UI layer</div>
      </div>
      <div class="term-def">The part of the product the user actually sees and interacts with &mdash; the buttons, screens, animations, forms. Runs in the browser or the mobile app.</div>
      <div class="term-context"><span class="tag">IN THE WILD</span><span>&ldquo;The bug is frontend-only &mdash; the data is fine, it&rsquo;s just <em>rendering</em> wrong.&rdquo;</span></div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">Backend</div>
        <div class="term-alias">a.k.a. server-side</div>
      </div>
      <div class="term-def">Everything the user doesn&rsquo;t see &mdash; the servers, databases, and business logic that power the experience. When you press &ldquo;Submit,&rdquo; the backend is what actually does the work.</div>
      <div class="term-context"><span class="tag">IN THE WILD</span><span>&ldquo;That&rsquo;s a backend change &mdash; we&rsquo;ll need to update the service and redeploy.&rdquo;</span></div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Full-stack</div></div>
      <div class="term-def">An engineer who works across both frontend and backend. Not a synonym for &ldquo;senior&rdquo; &mdash; it&rsquo;s about breadth, not seniority.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Client &amp; Server</div></div>
      <div class="term-def">The <em>client</em> is the app on the user&rsquo;s device (phone, browser). The <em>server</em> is a computer somewhere else that the client talks to. They exchange messages: client asks, server answers.</div>
      <div class="term-context"><span class="tag">MENTAL MODEL</span><span>Think: waiter (client) takes your order to the kitchen (server), kitchen sends food back.</span></div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">API</div>
        <div class="term-alias">Application Programming Interface</div>
      </div>
      <div class="term-def">A set of rules that lets one piece of software talk to another. It&rsquo;s a contract: &ldquo;if you ask me like <em>this</em>, I&rsquo;ll respond with <em>that</em>.&rdquo; When your app shows weather, it&rsquo;s calling a weather API.</div>
      <div class="term-context"><span class="tag">WHY PMs CARE</span><span>APIs are the seams of your product. Integrations, partnerships, platform strategy &mdash; all live here.</span></div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">SDK</div>
        <div class="term-alias">Software Development Kit</div>
      </div>
      <div class="term-def">A packaged toolkit &mdash; code, documentation, sample snippets &mdash; that makes it easier for developers to build on top of a platform. Stripe&rsquo;s SDK, for example, saves you from wiring up payment APIs from scratch.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">Database</div>
        <div class="term-alias">often shortened to &ldquo;DB&rdquo;</div>
      </div>
      <div class="term-def">Where persistent information lives &mdash; user accounts, orders, messages, anything that needs to still be there tomorrow. Think of it as an extremely organized set of digital filing cabinets.</div>
    </div>
  </div>
</section>
<section id="web">
  <div class="section-head">
    <div class="section-label">Chapter Two</div>
    <h2>The Web &amp; APIs</h2>
    <p class="section-blurb">How two computers actually talk to each other over the internet.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header"><div class="term-name">HTTP / HTTPS</div></div>
      <div class="term-def">The language computers use to exchange messages on the web. HTTPS is the same thing, encrypted. Every URL you visit is an HTTP(S) request under the hood.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">REST API</div></div>
      <div class="term-def">The most common style of web API. Organized around &ldquo;resources&rdquo; (users, orders, posts) you can create, read, update, or delete using standard HTTP verbs.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Endpoint</div></div>
      <div class="term-def">A specific URL on an API that does one specific thing. <em>/users/123</em> is an endpoint that returns info about user 123.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Request &amp; Response</div></div>
      <div class="term-def">A single round-trip: the client sends a <em>request</em>, the server sends back a <em>response</em>. That&rsquo;s one API call.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">JSON</div>
        <div class="term-alias">pronounced &ldquo;jay-son&rdquo;</div>
      </div>
      <div class="term-def">The standard format for sending data between systems. It looks like nested lists of labels and values. You don&rsquo;t need to write it &mdash; but you should recognize it when someone pastes it in Slack.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Status Codes</div></div>
      <div class="term-def">The three-digit numbers that come back with every response. <strong>200</strong> = success. <strong>400s</strong> = you (the client) did something wrong (404 = not found, 401 = not authorized). <strong>500s</strong> = the server broke.</div>
      <div class="term-context"><span class="tag">INTERVIEW GOLD</span><span>Knowing 404 vs 500 signals whose problem it is &mdash; the client&rsquo;s or the server&rsquo;s.</span></div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Webhook</div></div>
      <div class="term-def">The reverse of an API call. Instead of you asking the server &ldquo;anything new?&rdquo; every minute, the server <em>pings you</em> when something happens. Push, not pull.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Latency</div></div>
      <div class="term-def">How long a request takes to complete. Measured in milliseconds. High latency = slow-feeling product.</div>
    </div>
  </div>
</section>
<section id="workflow">
  <div class="section-head">
    <div class="section-label">Chapter Three</div>
    <h2>How Engineers Work</h2>
    <p class="section-blurb">The daily vocabulary of shipping code: version control, reviews, and deploys.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header">
        <div class="term-name">Repository</div>
        <div class="term-alias">&ldquo;repo&rdquo;</div>
      </div>
      <div class="term-def">A project&rsquo;s codebase, plus its entire history of changes. Usually hosted on GitHub or GitLab.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Git</div></div>
      <div class="term-def">The version control system nearly every software team uses. It tracks every change ever made to the code and lets many engineers work in parallel without stepping on each other.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Commit</div></div>
      <div class="term-def">A saved, labeled change to the code. Think of it as one entry in the project&rsquo;s diary.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Branch</div></div>
      <div class="term-def">A parallel copy of the codebase where an engineer works on a feature without affecting anyone else. When it&rsquo;s ready, they <em>merge</em> it back.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">Pull Request (PR)</div>
        <div class="term-alias">GitLab calls it MR &mdash; Merge Request</div>
      </div>
      <div class="term-def">A proposal to merge one branch into another. It&rsquo;s where code review happens &mdash; other engineers comment, suggest changes, and eventually approve it.</div>
      <div class="term-context"><span class="tag">WHY PMs CARE</span><span>&ldquo;Is the PR merged?&rdquo; is how you find out if a feature is actually, truly done.</span></div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Merge</div></div>
      <div class="term-def">Combining one branch&rsquo;s changes into another. Usually the feature branch into the main branch.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Deploy / Ship / Release</div></div>
      <div class="term-def">Pushing code out so real users can use it. &ldquo;Shipping&rdquo; is the informal verb engineers live for. A PR being merged isn&rsquo;t the same as being shipped &mdash; deploy is the last step.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Environment</div></div>
      <div class="term-def">A running copy of the application. <strong>Dev</strong> = an engineer&rsquo;s laptop. <strong>Staging</strong> = a pre-production clone for testing. <strong>Production</strong> (&ldquo;prod&rdquo;) = what real users hit. Never test something risky in prod.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">CI / CD</div>
        <div class="term-alias">Continuous Integration / Continuous Deployment</div>
      </div>
      <div class="term-def">Automation that runs every time code is changed &mdash; tests it, builds it, and (optionally) deploys it. It&rsquo;s why modern teams can ship many times a day without everything breaking.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Feature Flag</div></div>
      <div class="term-def">A switch that turns a feature on or off without redeploying code. Lets you roll out to 5% of users, test in production safely, or kill a feature instantly if it breaks.</div>
      <div class="term-context"><span class="tag">PM SUPERPOWER</span><span>Asking &ldquo;can we put this behind a flag?&rdquo; is one of the most PM-savvy things you can say.</span></div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Rollback</div></div>
      <div class="term-def">Reverting a deploy when something goes wrong. &ldquo;Roll it back&rdquo; is what you hear in an incident channel at 2 a.m.</div>
    </div>
  </div>
</section>
<div class="callout">
  <h3>Phrases that instantly signal &ldquo;this PM gets it&rdquo;</h3>
  <ul>
    <li><strong>&ldquo;What&rsquo;s the tradeoff?&rdquo;</strong> &mdash; Engineers respect this because every decision is a tradeoff.</li>
    <li><strong>&ldquo;Can we put it behind a feature flag?&rdquo;</strong> &mdash; Shows you think about risk and rollout, not just ship dates.</li>
    <li><strong>&ldquo;Is this a frontend change or does it touch the backend too?&rdquo;</strong> &mdash; Shows you understand the architecture has layers.</li>
    <li><strong>&ldquo;What&rsquo;s the blast radius if this breaks?&rdquo;</strong> &mdash; Shows you care about reliability, not just features.</li>
    <li><strong>&ldquo;Is the complexity in the logic or in the data model?&rdquo;</strong> &mdash; Signals you know where effort actually lives.</li>
  </ul>
</div>
<section id="infra">
  <div class="section-head">
    <div class="section-label">Chapter Four</div>
    <h2>Infrastructure &amp; Scale</h2>
    <p class="section-blurb">The invisible machinery that keeps products running for millions of people.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header">
        <div class="term-name">The Cloud</div>
        <div class="term-alias">AWS, GCP, Azure</div>
      </div>
      <div class="term-def">Someone else&rsquo;s computers, rented by the hour. &ldquo;The cloud&rdquo; is Amazon (AWS), Google (GCP), or Microsoft (Azure) letting companies run their software on a shared global fleet instead of owning hardware.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Server / Instance</div></div>
      <div class="term-def">A computer running your backend code. In the cloud, you usually have many of them, spun up and down as needed.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">CDN</div>
        <div class="term-alias">Content Delivery Network</div>
      </div>
      <div class="term-def">A global network of servers that stores copies of your content (images, videos, static files) closer to users, so they load faster. Cloudflare and Fastly are examples.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">Cache</div>
        <div class="term-alias">pronounced &ldquo;cash&rdquo;</div>
      </div>
      <div class="term-def">A temporary, fast storage layer that remembers recent results so you don&rsquo;t have to recompute them. &ldquo;The cache is stale&rdquo; means the stored version is out of date.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Load Balancer</div></div>
      <div class="term-def">A traffic director that spreads incoming requests across many servers so none of them get overwhelmed.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Scalability</div></div>
      <div class="term-def">The ability of a system to handle more load without falling over. &ldquo;Does this scale?&rdquo; usually means: what happens when 100x more users show up tomorrow?</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Uptime / Downtime</div></div>
      <div class="term-def">How available the service is. &ldquo;Three nines&rdquo; = 99.9% uptime (about 9 hours of downtime a year). &ldquo;Four nines&rdquo; = 99.99%. More nines = way more expensive.</div>
    </div>
  </div>
</section>
<section id="data">
  <div class="section-head">
    <div class="section-label">Chapter Five</div>
    <h2>Data &amp; Databases</h2>
    <p class="section-blurb">Where the information lives, and how it&rsquo;s shaped.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header"><div class="term-name">SQL vs NoSQL</div></div>
      <div class="term-def"><strong>SQL</strong> databases (Postgres, MySQL) store data in structured tables with strict columns &mdash; great when relationships matter. <strong>NoSQL</strong> databases (MongoDB, DynamoDB) are more flexible, storing documents or key-value pairs &mdash; great for fast-changing data shapes.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Schema</div></div>
      <div class="term-def">The blueprint of a database &mdash; what tables exist, what columns they have, what types of data go where. &ldquo;Schema change&rdquo; = changing that blueprint, which is usually a bigger deal than it sounds.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Query</div></div>
      <div class="term-def">A question asked of the database. &ldquo;Give me all users who signed up last week&rdquo; is a query.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Migration</div></div>
      <div class="term-def">A controlled, versioned change to the database &mdash; adding a column, renaming a table. Migrations are risky because they touch live data; they&rsquo;re almost always scheduled and reviewed carefully.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Index</div></div>
      <div class="term-def">A data structure that speeds up certain queries &mdash; like the index at the back of a book. No index = the database reads every row every time.</div>
    </div>
  </div>
</section>
<section id="quality">
  <div class="section-head">
    <div class="section-label">Chapter Six</div>
    <h2>Quality &amp; Reliability</h2>
    <p class="section-blurb">How engineers keep things from breaking &mdash; and what happens when they do.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header"><div class="term-name">Bug</div></div>
      <div class="term-def">Behavior that differs from what was intended. Not all bugs are urgent &mdash; severity and frequency matter.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Regression</div></div>
      <div class="term-def">A bug that breaks something that used to work. Engineers hate regressions more than new bugs because they signal a process failure.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Edge Case</div></div>
      <div class="term-def">An unusual situation the main flow wasn&rsquo;t designed for &mdash; empty states, extremely long inputs, users in airplane mode. &ldquo;What&rsquo;s the edge case?&rdquo; is a fantastic PM question.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Unit / Integration / E2E Tests</div></div>
      <div class="term-def"><strong>Unit</strong> = tests one small function in isolation. <strong>Integration</strong> = tests that several pieces work together. <strong>End-to-end (E2E)</strong> = simulates a real user clicking through the product.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">Technical Debt</div>
        <div class="term-alias">&ldquo;tech debt&rdquo;</div>
      </div>
      <div class="term-def">Shortcuts taken in the past that now make the code harder to change. Like financial debt: sometimes worth taking on deliberately; dangerous when it accumulates unchecked.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Refactor</div></div>
      <div class="term-def">Rewriting existing code to be cleaner or faster <em>without</em> changing what it does from the outside. A refactor is not a feature.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Incident / Outage</div></div>
      <div class="term-def">When something breaks in production. Teams usually run a <em>postmortem</em> after &mdash; a blameless write-up of what happened and what to change.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Observability / Logs / Metrics</div></div>
      <div class="term-def"><strong>Logs</strong> = text breadcrumbs the system writes as it runs. <strong>Metrics</strong> = numerical measurements over time (requests per second, error rate). <strong>Observability</strong> = how well you can understand what&rsquo;s happening inside the system from the outside.</div>
    </div>
  </div>
</section>
<section id="architecture">
  <div class="section-head">
    <div class="section-label">Chapter Seven</div>
    <h2>Architecture Patterns</h2>
    <p class="section-blurb">The big structural decisions that shape what&rsquo;s easy and what&rsquo;s painful.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header"><div class="term-name">Monolith vs Microservices</div></div>
      <div class="term-def">A <strong>monolith</strong> is one big application doing everything. <strong>Microservices</strong> break it into many small services that talk over APIs. Neither is &ldquo;better&rdquo; &mdash; they&rsquo;re tradeoffs between simplicity (mono) and independent scaling/teams (micro).</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Native vs Hybrid (Mobile)</div></div>
      <div class="term-def"><strong>Native</strong> apps are built specifically for iOS (Swift) or Android (Kotlin) &mdash; fastest, most polished. <strong>Hybrid</strong> (React Native, Flutter) shares code across platforms &mdash; faster to build, some tradeoffs in feel and performance.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Frontend Framework</div></div>
      <div class="term-def">Libraries that organize how the UI is built &mdash; React, Vue, Angular. You don&rsquo;t need to know them, just recognize the names and know they solve the same general problem differently.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Async vs Sync</div></div>
      <div class="term-def"><strong>Synchronous</strong> = wait for an answer before doing anything else. <strong>Asynchronous</strong> = fire off the request, keep working, handle the answer when it comes. Most modern apps are heavily async &mdash; that&rsquo;s why you see loading spinners.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Queue</div></div>
      <div class="term-def">A waiting line for work. If 10,000 users hit &ldquo;send,&rdquo; a queue lets the system process them one at a time without falling over.</div>
    </div>
  </div>
</section>
<section id="security">
  <div class="section-head">
    <div class="section-label">Chapter Eight</div>
    <h2>Security Basics</h2>
    <p class="section-blurb">Just enough to not say anything embarrassing.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header">
        <div class="term-name">Authentication vs Authorization</div>
        <div class="term-alias">&ldquo;authN vs authZ&rdquo;</div>
      </div>
      <div class="term-def"><strong>Authentication</strong> = who are you? (logging in). <strong>Authorization</strong> = what are you allowed to do? (permissions). Getting these mixed up in a meeting is a giveaway.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">OAuth / SSO</div></div>
      <div class="term-def"><strong>OAuth</strong> is the protocol behind &ldquo;Sign in with Google / Apple.&rdquo; <strong>SSO</strong> (Single Sign-On) lets employees use one login across many internal tools.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Encryption at Rest vs In Transit</div></div>
      <div class="term-def"><strong>In transit</strong> = encrypted while moving between computers (that&rsquo;s what the S in HTTPS does). <strong>At rest</strong> = encrypted while sitting in the database. Enterprise customers almost always ask for both.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">PII</div>
        <div class="term-alias">Personally Identifiable Information</div>
      </div>
      <div class="term-def">Data that can identify a specific person &mdash; names, emails, addresses, phone numbers. Handling PII has legal implications (GDPR, CCPA) and engineers are trained to be careful with it.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Token</div></div>
      <div class="term-def">A string of characters that proves you&rsquo;re logged in or authorized to do something. When you sign in, the server issues a token your app then sends with every request.</div>
    </div>
  </div>
</section>
<section id="process">
  <div class="section-head">
    <div class="section-label">Chapter Nine</div>
    <h2>Process &amp; Ceremonies</h2>
    <p class="section-blurb">The rituals of how software teams actually run &mdash; you&rsquo;ll probably be asked about these.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header"><div class="term-name">Agile / Scrum</div></div>
      <div class="term-def"><strong>Agile</strong> is a philosophy (ship small, iterate, respond to change). <strong>Scrum</strong> is a specific recipe for doing Agile &mdash; with sprints, standups, retros, etc.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Sprint</div></div>
      <div class="term-def">A fixed time window (usually 1&ndash;2 weeks) in which the team commits to finishing a specific set of work.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Standup</div></div>
      <div class="term-def">A short daily sync. Each person says what they did yesterday, what they&rsquo;re doing today, and anything blocking them.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">Retrospective</div>
        <div class="term-alias">&ldquo;retro&rdquo;</div>
      </div>
      <div class="term-def">An end-of-sprint meeting where the team reflects on what went well, what didn&rsquo;t, and what to change next time.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">User Story</div></div>
      <div class="term-def">A one-line description of a feature from the user&rsquo;s perspective. Classic form: <em>&ldquo;As a [user], I want [goal], so that [benefit].&rdquo;</em></div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Acceptance Criteria</div></div>
      <div class="term-def">The concrete, testable conditions a story has to meet to be considered done. &ldquo;When the user taps X, the system should do Y.&rdquo; PMs usually write these.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Epic</div></div>
      <div class="term-def">A large body of work made up of many stories. &ldquo;Checkout redesign&rdquo; is an epic; &ldquo;Support Apple Pay&rdquo; is a story inside it.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Backlog &amp; Grooming</div></div>
      <div class="term-def">The <strong>backlog</strong> is the prioritized list of everything the team <em>could</em> work on next. <strong>Grooming</strong> (or &ldquo;refinement&rdquo;) is the recurring meeting where the PM and team review and sharpen upcoming stories.</div>
    </div>
    <div class="term">
      <div class="term-header">
        <div class="term-name">MVP</div>
        <div class="term-alias">Minimum Viable Product</div>
      </div>
      <div class="term-def">The smallest version of something that proves or disproves the core hypothesis. Not &ldquo;the cheapest first version&rdquo; &mdash; the <em>least</em> you can build to <em>learn</em>.</div>
    </div>
  </div>
</section>
<section id="redflags">
  <div class="section-head">
    <div class="section-label">Chapter Ten</div>
    <h2>Red Flags to Avoid</h2>
    <p class="section-blurb">Phrases that make engineers wince. Avoiding them costs you nothing and buys you credibility.</p>
  </div>
  <div class="flags">
    <div class="flag">
      <span class="flag-bad">&ldquo;Can&rsquo;t you just add a button that&hellip;&rdquo;</span>
      <span class="flag-good">Drop &ldquo;just.&rdquo; Engineers hear it as &ldquo;I haven&rsquo;t thought about this.&rdquo; Try: &ldquo;How hard would it be to add X? What would you need to change?&rdquo;</span>
    </div>
    <div class="flag">
      <span class="flag-bad">&ldquo;We need to put it in the cloud.&rdquo;</span>
      <span class="flag-good">&ldquo;The cloud&rdquo; isn&rsquo;t a decision. Ask: &ldquo;Where does this live today, and what would we need to change to support more users?&rdquo;</span>
    </div>
    <div class="flag">
      <span class="flag-bad">&ldquo;The API is broken.&rdquo; (when you mean the website is broken)</span>
      <span class="flag-good">Describe what you&rsquo;re seeing, not what you think is causing it. &ldquo;When I click X, I see Y instead of Z&rdquo; lets the engineer do the diagnosis.</span>
    </div>
    <div class="flag">
      <span class="flag-bad">&ldquo;How long will it take? Ballpark?&rdquo;</span>
      <span class="flag-good">Ask for the shape of the work first: &ldquo;Is this a day, a week, or a month kind of problem?&rdquo; Then: &ldquo;What would make it longer?&rdquo;</span>
    </div>
    <div class="flag">
      <span class="flag-bad">&ldquo;Can we use AI for this?&rdquo;</span>
      <span class="flag-good">Be specific about the problem. &ldquo;Users are spending too much time on X &mdash; are there approaches (ML, rules, better UX) worth exploring?&rdquo; lets engineers bring options.</span>
    </div>
    <div class="flag">
      <span class="flag-bad">Confusing frontend with design.</span>
      <span class="flag-good">The frontend is the <em>code</em> that renders the UI. Design is the visual/experience decisions. A designer hands off mocks; a frontend engineer builds them.</span>
    </div>
  </div>
</section>
<section id="holding-own">
  <div class="section-head">
    <div class="section-label">Chapter Eleven</div>
    <h2>Holding Your Own</h2>
    <p class="section-blurb">Vocabulary gets you in the door. These habits keep you there.</p>
  </div>
  <div class="terms">
    <div class="term">
      <div class="term-header"><div class="term-name">Say &ldquo;I don&rsquo;t know&rdquo; cleanly.</div></div>
      <div class="term-def">Not &ldquo;I don&rsquo;t know but&hellip;&rdquo; &mdash; just, &ldquo;I don&rsquo;t know, walk me through it.&rdquo; Senior engineers respect this more than a bluff. Follow up with &ldquo;What should I read to go deeper?&rdquo;</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Play back what you heard.</div></div>
      <div class="term-def">&ldquo;So if I&rsquo;m hearing you right, the challenge is X because Y, and the tradeoff is Z &mdash; is that right?&rdquo; This one move builds more trust with engineers than almost anything else.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Ask about the cause, not the symptom.</div></div>
      <div class="term-def">&ldquo;Users complain the page is slow&rdquo; is a symptom. &ldquo;What&rsquo;s actually slow &mdash; the server response, the image loading, the rendering?&rdquo; lets engineers point you at the real problem.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Respect estimation is hard.</div></div>
      <div class="term-def">&ldquo;How long will this take?&rdquo; is the question engineers are most often wrong about &mdash; not because they&rsquo;re bad at their jobs, but because software has unknown unknowns. Ask for <em>ranges</em> and <em>confidence levels</em>, not dates.</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Bring the &ldquo;why,&rdquo; always.</div></div>
      <div class="term-def">Engineers will challenge <em>what</em> you&rsquo;re asking for &mdash; that&rsquo;s their job. If you can clearly articulate <em>why</em> (user need, business goal, data), the conversation shifts from &ldquo;should we?&rdquo; to &ldquo;what&rsquo;s the best way?&rdquo;</div>
    </div>
    <div class="term">
      <div class="term-header"><div class="term-name">Learn one thing deeper after every technical conversation.</div></div>
      <div class="term-def">Hear a new term today? Look it up tonight. Over six months, this compounds into real fluency. That&rsquo;s how every non-technical PM who became excellent got there.</div>
    </div>
  </div>
</section>`;
