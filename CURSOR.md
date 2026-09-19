# Portfolio Build Brief — Fardin Abu Ubaid

> Feed this file to Cursor as the primary spec. It describes the stack, architecture, theme system, section-by-section content, and which Aceternity/shadcn components to draw from. Cursor should treat the "Component Direction" in each section as a strong suggestion, not a hard requirement — swap or blend components where it produces a better result, as long as it stays within the constraints below.

---

## 0. Stack & Constraints

- **Framework:** Next.js (App Router)
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Styling:** Tailwind CSS
- **Component sources:** shadcn/ui (primitives — button, dialog, badge, input, etc.) + Aceternity UI (visual/animated components, listed below) — but not limited to these. Use whatever combination produces the cleanest, most impressive result within the stack.
- **Border radius:** cap at `rounded-md`. Never go above it. Prefer `rounded-sm` for buttons, pills, badges. Avoid heavy/pill-shaped rounding everywhere — this should feel like a system architect's site, not a SaaS landing page.
- **Images:** My photo and any other assets will be placed in `public/assets/`. Reference them from there; don't hotlink or placeholder-fetch external images.
- **Content source of truth:** Do not hardcode resume/project content inside JSX. Put it in a typed `lib/data.ts` (projects, skills, experience, research, competencies) so it's a data edit, not a component hunt, when I update it later.

---

## 1. Theme System (critical — build this first)

Build a **CSS-variable-driven theme system** with full **light/dark mode support**, switchable via a single source of truth (a `data-theme` attribute on `<html>` or a `ThemeProvider` context — Cursor's choice, but it must be a variable-driven system, not hardcoded Tailwind color classes scattered through components).

### Reference palette (dark mode) — inspired by MonkeyType

Use this as the **starting point**, not a hard constraint. Keep the dark-mode-with-yellow-accent feeling, but feel free to add/adjust supporting colors (e.g. a secondary accent, success/info colors) if it improves the design.

```css
:root[data-theme='dark'] {
  --bg-color: #323437;
  --main-color: #e2b714;       /* primary accent */
  --caret-color: #e2b714;
  --sub-color: #646669;        /* muted text / secondary */
  --sub-alt-color: #2c2e31;    /* card / surface backgrounds */
  --text-color: #d1d0c5;
  --error-color: #ca4754;
  --error-extra-color: #7e2a33;
}
```

### Light mode

Derive a light counterpart that keeps the same *role* mapping (bg, main/accent, sub, sub-alt, text, error) but flips to a light, high-contrast, still-yellow-accented palette. Example direction (Cursor may refine):

```css
:root[data-theme='light'] {
  --bg-color: #fafaf7;
  --main-color: #b8860b;       /* deeper gold-yellow for contrast on light bg */
  --caret-color: #b8860b;
  --sub-color: #8a8d91;
  --sub-alt-color: #f0efe9;
  --text-color: #2c2e31;
  --error-color: #b3323e;
  --error-extra-color: #7e2a33;
}
```

### Requirements

- Define these as **semantic CSS variables** (`--bg-color`, `--main-color`, etc.) in `globals.css`, mapped into Tailwind via `tailwind.config` (`theme.extend.colors`) so components use classes like `bg-background`, `text-accent`, `bg-surface`, `text-muted` rather than raw hex or raw CSS vars inline.
- Theme must be switchable **at runtime** via a variable/context (`useTheme()` hook or similar) — not a rebuild-time constant. A toggle in the navbar (sun/moon icon, lucide) switches `data-theme` and persists the choice (localStorage).
- Respect `prefers-color-scheme` on first load if no stored preference exists.
- Every component must consume theme via the semantic tokens — no component should hardcode `#e2b714` or `#323437` directly.

---

## 2. Loading / Entry Sequence

**On initial load only** (not on route changes within the SPA):

1. A full-screen modal/overlay greeting appears first — short, personal, e.g. "Hi, I'm Fardin." or similar (keep it brief, few words, maybe with a small animated flourish — Sparkles or a subtle text-generate-in effect works well here).
2. After a short beat (~1–2s), it fades/dissolves out (opacity + slight scale or blur transition via Framer Motion `AnimatePresence`) to reveal the Hero underneath.
3. This should feel intentional and fast — not a long splash screen. Total sequence under ~2.5s before Hero is fully interactive.

**Component direction:** Sparkles or Text Generate Effect for the greeting text itself; plain Framer Motion `AnimatePresence` with opacity/scale for the exit transition.

---

## 3. Section-by-Section Plan

Sequence chosen to front-load proof (recruiters skim — architecture and evidence come before a skills list).

### 3.1 Hero

- Headline: "Full-Stack System Engineer & Software Architect"
- **Continuously rewriting sub-line** cycling through short phrases like: "I build real-time systems.", "I architect UI component trees.", "I integrate AI into production workflows.", "I ship full-stack systems end to end." — flipping/typewriter style, looping.
- CTAs: Explore Architecture / Download Resume / Contact Me
- Optional atmospheric background (subtle, not distracting): Background Beams or Lamp Section Header treatment, restrained opacity, themed via CSS vars (not hardcoded blue/purple — recolor to accent + sub-alt).

**Component direction:** Text Animation Flipping Words *or* Text Flipping Board (Vestaboard split-flap) for the rewriting line — Text Flipping Board is more distinctive and fits the "system engineer" tone well, worth trying over the generic flip-words. Background Beams / Lamp for atmosphere, recolored to theme.

### 3.2 Impact Strip

Thin stat row directly under Hero: ~1.5 yrs experience · 8+ production systems shipped · Peer-reviewed AI publication · Real-time systems at scale.

**Component direction:** Simple animated counters/reveal (Text Generate Effect or scroll-triggered fade), no heavy component needed.

### 3.3 System Architecture Showcase (main differentiator — keep early)

Filterable project cards: MERN / .NET / Vue-Quasar / Real-time. Each expands to show backend logic → UI state model → data flow breakdown, not just a screenshot.

Feature first: SkyChat/SkySMS, Jonosheba, PCND/PBEH.

**Component direction:** 3D Card Effect or Focus Cards for the grid; Tooltip Card or a shadcn `Dialog`/`Sheet` for the expanded architecture breakdown. Glowing Effect border treatment on hover to reinforce the "systems" feel.

### 3.4 Core Competencies

Three-pillar grid: System Engineering / UI Component Architecture / AI Engineering. Icon-led (lucide), scannable, not a tag wall.

**Component direction:** Glowing Effect bento grid (this is a strong fit — Cursor-inspired glowing bento cards map directly onto three-to-six competency tiles) or Bento Grid Illustrations style layout.

### 3.5 Research & Credentials

JMAI publication front and center with outbound link. Education (B.Sc. CSE) + CCNA below, smaller.

**Component direction:** A single elevated card (3D Card Effect or a Background Overlay Card) for the publication; simple list/badge row for education & certs.

### 3.6 Experience Timeline

Codezzi and Proficient as two timeline nodes, 2–3 line architectural highlights each, not a resume dump.

**Component direction:** Timeline (sticky header + scroll beam) — this is a direct fit, use as-is with content substituted. Tracing Beam is an alternative if a lighter treatment is preferred.

### 3.7 Tech Stack / Trusted Tools (optional, only if it doesn't feel redundant with Competencies)

A quiet strip showing the actual tools (React, Node, MongoDB, .NET, Tailwind, etc.) as a logo/wordmark row.

**Component direction:** Logo Cloud with Swap Animation or Single Row Logo Cloud, restyled with monochrome/theme-colored marks instead of brand logos (since these are generic tech, not company logos — use text/icon marks, not real trademarked logos where avoidable, or simple lucide/simple-icons equivalents).

### 3.8 Contact / Hire

Clean contact form, remote availability callout, direct links (email, LinkedIn, GitHub).

**Component direction:** Cover component (space/beam hover effect) behind a "Let's build something" headline works well as a closing CTA before the form. Keep the form itself simple shadcn inputs — no need for heavy animation here, it should feel calm and easy to fill out.

### 3.9 Footer

**Component direction:** Simple Footer with Four Grids, content substituted (Pages/Socials/Links/etc. → Navigation / Socials / Resume+Contact / whatever fits a personal site), with the large background wordmark treatment ("FARDIN" in oversized faint text) — it's a nice signature touch and fits a personal portfolio well.

---

## 4. Components Seen But Not Directly Placed Above

Available for Cursor to use opportunistically if a good spot emerges, or to skip:

- **Card Stack** — could work as an alternate treatment for testimonials/recommendations if I add any later; not needed at launch since there are no testimonials yet.
- **Compare (drag comparison)** — could be repurposed non-literally, e.g. a "before/after" of a UI I redesigned, if a project has that kind of before/after asset. Optional, skip if no clean use case.
- **Fey.com Macbook Scroll** — a scroll-driven laptop mockup showing a project UI coming "out of the screen." Could work as a hero-adjacent or project-detail moment for one flagship project (e.g. Codezzi platform or Jonosheba) if the effect can be built cleanly and doesn't slow the page down. Nice-to-have, not required.
- **SVG Mask Effect** — could be used as a small easter-egg/hover reveal somewhere (e.g. over a project card or the footer wordmark), fun but non-essential.
- **Squiggly Text** — probably too playful for the tone of this site (system architect positioning); skip unless it's used very sparingly for a single small flourish.
- **Image Generation Loader / Terminal** — Terminal component could be a fun way to represent the "AI-assisted development workflow" competency (a fake `npx` install sequence styled to theme) instead of a plain icon+text tile. Optional.
- **Notch** — an alternative floating nav pattern to Floating Navbar. Pick one, not both; Floating Navbar (hide-on-scroll-down, reveal-on-scroll-up) is the more conventional and safer choice for a portfolio.

---

## 5. Architecture

```
app/
  layout.tsx              -- theme provider, fonts, metadata
  page.tsx                -- composes sections in order, no logic
  globals.css             -- CSS variable definitions (dark + light), Tailwind base

components/
  loader/
    IntroOverlay.tsx        -- greeting + fade-out sequence
  hero/
    Hero.tsx
    FlippingHeadline.tsx
  impact-strip/
  architecture-showcase/
    ProjectGrid.tsx
    ProjectDetail.tsx        -- expanded architecture breakdown (dialog/sheet)
  competencies/
  research/
  experience-timeline/
  tech-stack/
  contact/
  footer/
  nav/
    FloatingNavbar.tsx
    ThemeToggle.tsx

components/ui/              -- shadcn primitives

lib/
  data.ts                   -- typed content: projects, skills, experience, research, competencies
  animations.ts             -- shared Framer Motion variants
  theme.ts                  -- theme context/hook

public/
  assets/                   -- photo + any other images (Cursor: reference from here, do not placeholder)
```

---

## 6. Content Source

Pull all resume/project/experience content from the resume and portfolio brief already provided in this project (candidate overview, tech stack, Codezzi & Proficient experience, JMAI publication, education/CCNA). Do not invent projects, employers, or credentials not present in that source material.

---

## 7. Tone Notes

- This is a **system architect's** portfolio, not a generic SaaS landing page — favor restraint over maximal animation. Every animated component should serve a purpose (proving system/UI thinking) rather than being decorative for its own sake.
- Dark mode is the primary/default experience; light mode should feel equally deliberate, not an afterthought Tailwind auto-invert.
- Rounded corners stay small (`rounded-sm`/`rounded-md` max) throughout, including inside any Aceternity component that defaults to larger radii — override as needed.
