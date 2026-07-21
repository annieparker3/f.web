# FORGE — Marketing Website Architecture
**"Built for Work. Made for You."**

Version 1.0 · Prepared for the Forge app launch site

---

## 1. Project Summary

A marketing + acquisition website for **Forge**, a blue-collar job-matching app connecting workers and customers. The site has three jobs:

1. **Sell the app** — hero pitch, feature tour, download CTAs.
2. **Recruit for two live programs** — Beta Testing Program and Ambassador Program, each with its own pitch and registration flow.
3. **Capture & confirm signups** — a registration form per program that writes to a database and triggers a confirmation/welcome email.

---

## 2. Brand System (derived from the app icon)

| Token | Hex | Usage |
|---|---|---|
| `--forge-navy` | `#0A1A3C` | Primary background, header/footer, dark sections |
| `--forge-navy-light` | `#132A5C` | Secondary panels, cards on dark bg, gradients |
| `--forge-orange` | `#F5760A` | Primary accent, CTAs, links, highlight strokes |
| `--forge-orange-dark` | `#D45E00` | Hover/active states, gradient stop |
| `--forge-white` | `#FFFFFF` | Primary text on navy, logo strokes |
| `--forge-ink` | `#0A1220` | Body text on light backgrounds |
| `--forge-fog` | `#F4F6FA` | Light section backgrounds |
| `--forge-steel` | `#8FA0C2` | Muted text, borders on navy |

**Typography**
- Headings: geometric sans, bold/black weight, tight tracking, uppercase for eyebrow labels — mirrors the chiseled "F" and "FORGE" wordmark (e.g. Space Grotesk, Sora, or Clash Display).
- Body: humanist sans for readability (Inter or Satoshi).
- Micro-labels/tags styled like the tagline: uppercase, letter-spaced, small caps — orange on navy.

**Motif language**
- The **gear** and the **cut/skew "F" blade shapes** are the visual DNA. Use angled clip-paths, diagonal section dividers, and rotating gear iconography as a recurring motif (loading states, section transitions, scroll-triggered accents) rather than literal gear clipart everywhere.
- Two-tone split fills (navy/orange or white/orange) on icons, progress bars, and stat callouts, echoing the split-color "F".

**Motion character**
- Confident, mechanical, precise — not bouncy/cute. Think: gears engaging, panels sliding into place with slight easing, metallic sheen sweeps, counters "ratcheting" up. Use `cubic-bezier(0.16, 1, 0.3, 1)` easing for a "settling into place" feel.

---

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | SSR/SEO for a marketing site, file-based routing, easy API routes for forms |
| Styling | **Tailwind CSS** + CSS variables for brand tokens | Fast iteration, easy dark/orange theming |
| Animation | **Framer Motion** (page/section transitions, scroll reveals) + **GSAP + ScrollTrigger** (complex gear/parallax sequences) + **Lottie** for the animated logo mark | Layered animation needs different tools for different jobs |
| 3D/Hero flourish (optional) | **React Three Fiber** for a subtle rotating 3D gear/F-mark in the hero | Adds a premium, animated centerpiece without hurting load time (lazy-loaded) |
| Forms | **React Hook Form + Zod** validation | Robust client-side validation before hitting the API |
| Backend/API | **Next.js Route Handlers** (`/app/api/*`) | Keeps frontend+backend in one deployable unit |
| Database | **PostgreSQL** via **Prisma ORM** (hosted on Supabase/Neon/RDS) | Relational, simple schema, generous free tiers |
| Email | **Resend** (or SendGrid) + **React Email** for templated, branded HTML emails | Transactional email with React-based templating that matches brand |
| Auth (admin only) | **NextAuth / Clerk** for an internal admin dashboard to view registrants | Not user-facing; just for the Forge team |
| Hosting | **Vercel** (frontend + API routes), DB on Neon/Supabase | Zero-config CI/CD, edge caching for the static marketing pages |
| Analytics | **Plausible or PostHog** | Track funnel: visit → scroll → CTA click → form submit → confirmed |
| CMS (optional, phase 2) | **Sanity.io** for editable copy/testimonials/app screenshots | Lets non-devs update marketing copy later |

---

## 4. Site Map / Information Architecture

```
/                      → Home (app pitch, hero, features, program teasers, footer CTA)
/beta                  → Beta Testing Program landing page
/beta/register         → Beta registration form
/ambassador            → Ambassador Program landing page
/ambassador/register   → Ambassador registration form
/how-it-works          → For Workers / For Customers tabbed explainer
/faq                   → FAQ accordion
/privacy, /terms       → Legal
/download              → Smart redirect (App Store / Play Store / device detect)
/confirm/[token]       → Email confirmation landing (double opt-in, optional)
/admin                 → Password-protected registrant dashboard (internal)

api/
  /api/register/beta          POST → validate, store, send email
  /api/register/ambassador    POST → validate, store, send email
  /api/confirm/[token]        GET  → mark email verified
  /api/health                 GET  → uptime check
```

---

## 5. Page-by-Page UX Blueprint

### 5.1 Home (`/`)
1. **Sticky nav** — logo (Lottie-animated F on load), links, "Join Beta" orange pill CTA.
2. **Hero** — split-color animated headline ("Built for Work. Made for You."), rotating 3D/Lottie gear-F mark, two CTAs: *Download the App* / *Explore Programs*. Background: subtle animated gear-teeth parallax pattern in navy-on-navy.
3. **Social proof strip** — animated counters (jobs matched, workers onboarded, cities live) that ratchet up on scroll into view.
4. **Feature showcase** — alternating left/right scroll-reveal panels: "For Workers" / "For Customers", each with animated phone mockup (app screenshots) sliding in.
5. **How It Works** — 3-step horizontal timeline with gear-tooth connectors that "engage" (rotate/lock) as you scroll.
6. **Programs teaser section** — two large cards (Beta / Ambassador), diagonal-cut like the F blade, hover = tilt + orange glow, click → respective landing page.
7. **Testimonials/logos** (if available) — auto-scrolling marquee.
8. **Final CTA band** — full-width navy-to-orange gradient, "Ready to build your future?" + download buttons.
9. **Footer** — sitemap, social, legal, mini gear-spin easter egg on hover of logo.

### 5.2 Program Landing Pages (`/beta`, `/ambassador`)
Same template, different content:
- Hero banner with program name, one-line value prop, "Spots limited" or perk badges (animated pill tags).
- **What you get** — perk grid (early access, swag, referral rewards, recognition) with icon animations on hover.
- **Who it's for** — worker vs. customer eligibility split.
- **Timeline** — animated stepper: Apply → Review → Onboard → Go Live.
- Sticky **"Register Now"** CTA that follows scroll and expands the form inline or routes to `/beta/register`.

### 5.3 Registration Form (`/beta/register`, `/ambassador/register`)
- Single-column, multi-step form (progress bar styled as gear teeth filling in) to reduce perceived effort:
  1. Basic info (name, email, phone)
  2. Role (Worker / Customer / Both) — animated toggle cards
  3. Trade/industry or use-case (conditional fields based on role)
  4. Location
  5. Program-specific question (e.g., "Why do you want to be a Forge Ambassador?")
- Real-time validation (Zod + inline error shake-animation).
- Submit button morphs into a spinner shaped like the gear, then a checkmark on success.
- On success: on-page animated confirmation ("You're in the queue!") **and** triggers a branded confirmation email.
- Honeypot + rate limiting + reCAPTCHA/Turnstile to block bots.

### 5.4 Confirmation Email (via Resend + React Email)
- Branded header (navy bg, white/orange F logo).
- Personalized greeting, program name, what happens next, expected timeline.
- CTA button back to site / social links / calendar add (for onboarding calls, if applicable).
- Optional double opt-in confirm link if you want verified emails only.

### 5.5 Admin Dashboard (`/admin`, internal only)
- Table of registrants per program, filter/export CSV, resend-email action, status flags (new/contacted/onboarded).

---

## 6. Data Model (Prisma schema sketch)

```prisma
model Registrant {
  id          String   @id @default(cuid())
  program     Program  // BETA | AMBASSADOR
  fullName    String
  email       String
  phone       String?
  role        Role     // WORKER | CUSTOMER | BOTH
  trade       String?
  location    String
  motivation  String?  // ambassador "why" field
  status      Status   @default(NEW) // NEW | CONTACTED | ONBOARDED
  emailSentAt DateTime?
  confirmed   Boolean  @default(false)
  createdAt   DateTime @default(now())
}

enum Program { BETA AMBASSADOR }
enum Role    { WORKER CUSTOMER BOTH }
enum Status  { NEW CONTACTED ONBOARDED }
```

---

## 7. Registration → Email Flow (sequence)

```
User fills form (client)
   → POST /api/register/{program}  (validated w/ Zod)
      → Save Registrant row (Prisma → Postgres)
      → Enqueue email via Resend using React Email template
      → Return { success, registrantId } to client
   ← Client shows animated success state
Resend delivers branded email
   → (optional) user clicks confirm link → /api/confirm/[token] → sets confirmed = true
Admin dashboard reflects new row in real time (polling or Supabase realtime)
```

Add basic reliability: retry queue for failed email sends (e.g., a lightweight job via Vercel Cron or Upstash QStash) so a Resend hiccup never loses a signup.

---

## 8. Animation Inventory (what moves, and how)

| Element | Trigger | Tool |
|---|---|---|
| Logo mark in nav | Page load | Lottie |
| Hero gear/F 3D mark | Idle rotation + mouse parallax | React Three Fiber |
| Section headlines | Scroll into view, slide+fade | Framer Motion `whileInView` |
| Stat counters | Scroll into view | Framer Motion + custom count-up hook |
| Feature panels | Scroll-linked slide from alternating sides | GSAP ScrollTrigger |
| Gear-tooth stepper (How It Works, program timeline) | Scroll progress | GSAP ScrollTrigger (scrub) |
| Program cards | Hover | Framer Motion tilt/glow |
| Form progress bar | Step change | Framer Motion width animation |
| Submit button | Click → loading → success | Framer Motion state machine (idle → spin → check) |
| Page transitions | Route change | Framer Motion `AnimatePresence` |
| Background gear-teeth pattern | Scroll (subtle parallax) | CSS transform + Framer Motion `useScroll` |

Performance guardrails: lazy-load the R3F hero and GSAP bundles below the fold/behind `dynamic(() => import(...), { ssr: false })`; respect `prefers-reduced-motion` throughout.

---

## 9. Folder Structure (Next.js App Router)

```
forge-site/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx                 // Home
│  │  ├─ how-it-works/page.tsx
│  │  ├─ faq/page.tsx
│  │  ├─ beta/page.tsx
│  │  ├─ beta/register/page.tsx
│  │  ├─ ambassador/page.tsx
│  │  └─ ambassador/register/page.tsx
│  ├─ admin/page.tsx
│  ├─ api/
│  │  ├─ register/[program]/route.ts
│  │  └─ confirm/[token]/route.ts
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  ├─ ui/                         // buttons, inputs, cards (Tailwind primitives)
│  ├─ animations/                 // GearLoader, CountUp, TiltCard, PageTransition
│  ├─ sections/                   // Hero, FeatureShowcase, ProgramTeaser, Footer...
│  └─ forms/                      // MultiStepForm, StepRole, StepDetails...
├─ emails/
│  ├─ BetaWelcome.tsx             // React Email templates
│  └─ AmbassadorWelcome.tsx
├─ lib/
│  ├─ prisma.ts
│  ├─ resend.ts
│  └─ validation/registrantSchema.ts
├─ prisma/
│  └─ schema.prisma
├─ public/
│  └─ brand/ (logo, favicon, gear-svg assets)
└─ tailwind.config.ts             // brand color tokens as theme extension
```

---

## 10. Build Roadmap

| Phase | Scope |
|---|---|
| **1. Foundation** | Next.js scaffold, Tailwind theme w/ brand tokens, base layout/nav/footer, deploy skeleton to Vercel |
| **2. Home page** | Hero, features, program teasers, static content, core animations |
| **3. Program pages + forms** | Beta/Ambassador landing pages, multi-step registration form, Zod validation |
| **4. Backend** | Prisma schema + DB, API routes, Resend integration, React Email templates |
| **5. Polish** | GSAP scroll sequences, R3F hero mark, reduced-motion fallback, performance pass (Lighthouse ≥ 90) |
| **6. Admin + analytics** | Simple admin table, Plausible/PostHog events on funnel steps |
| **7. QA + launch** | Cross-browser/device QA, spam protection, legal pages, go live |

---

## 11. SEO & Performance Notes

- Server-render all marketing pages (App Router default) for fast, crawlable content.
- `next/image` for all screenshots/mockups with proper `sizes`.
- Structured data (`Organization`, `MobileApplication`) in JSON-LD for rich search results.
- OG/Twitter card images per page (especially `/beta` and `/ambassador` for shareability).
- Target Core Web Vitals: LCP < 2.5s even with the animated hero (achieved by lazy-loading 3D/GSAP and serving a static hero on first paint that "wakes up" once JS hydrates).

---

**This document is the blueprint — next step would be turning Section 5 into wireframes/high-fidelity mockups, and Section 6–7 into a working Prisma + Resend integration.**
