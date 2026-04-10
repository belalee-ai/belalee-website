# Impeccable + DESIGN.md 全站优化 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the website from teal/green DaisyUI pastel style to Airbnb-inspired design system (Rausch Red + white canvas + new typography), using Impeccable as quality guardrail throughout all 4 phases.

**Architecture:** Phase 1 audits the current site with Impeccable to find baseline issues. Phase 2 migrates global tokens (colors, fonts, shadows, radii) then adapts components page-by-page. Phase 3 polishes typography and does a second audit. Phase 4 runs all enhancement commands (animate, colorize, distill, harden, adapt).

**Tech Stack:** Astro 4.0.2, TailwindCSS 3.3.5, DaisyUI 4.4.10, pnpm, Vercel static deployment. Impeccable skill (already installed at `.claude/skills/`).

---

## Chunk 1: Phase 1 — Audit & Baseline Fix

### Task 1: Run Impeccable Teach

**Files:**
- Read: `src/styles/global.css`, `tailwind.config.cjs`, `src/pages/index.astro`
- Read: `DESIGN.md`

- [ ] **Step 1: Run `/impeccable teach`**

Execute the Impeccable teach command to inject project context. This scans the project and understands the current tech stack (Astro + Tailwind + DaisyUI) and design language.

- [ ] **Step 2: Review the generated design context**

Confirm Impeccable has captured the project's current state. Note any misunderstandings to correct.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: run impeccable teach — establish project design context"
```

---

### Task 2: Run Full Site Audit

- [ ] **Step 1: Run `/audit`**

Execute full-site technical audit. Capture all findings: a11y issues (contrast, touch targets, heading hierarchy, ARIA), performance issues, responsive breakpoints.

- [ ] **Step 2: Run `/critique`**

Execute UX design review. Capture findings: visual hierarchy, navigation intuitiveness, information architecture issues.

- [ ] **Step 3: Run CLI anti-pattern scan**

```bash
npx impeccable detect src/
```

Capture the 24-rule scan results: gradient misuse, font issues, nested cards, low contrast, etc.

- [ ] **Step 4: Create issue list**

Consolidate all findings from audit + critique + detect into a single prioritized list. Separate into:
- **Must fix before migration** (a11y blockers, critical contrast issues)
- **Will be fixed by migration** (color/font issues that the new design system resolves)
- **Needs separate attention** (structural/layout issues)

- [ ] **Step 5: Fix baseline issues**

Fix only the "must fix before migration" items identified in Step 4. These are issues that won't be automatically resolved by the design system migration (e.g., missing ARIA labels, heading hierarchy violations, touch target sizes).

- [ ] **Step 6: Commit baseline fixes**

```bash
git add -A && git commit -m "fix: resolve baseline a11y and structural issues from Impeccable audit"
```

---

## Chunk 2: Phase 2 — Global Token Migration

### Task 3: Migrate Fonts

**Files:**
- Modify: `src/components/BaseHead.astro`
- Modify: `src/styles/global.css:1-18`

- [ ] **Step 1: Install LXGW WenKai webfont package**

```bash
pnpm add lxgw-wenkai-webfont
```

- [ ] **Step 2: Update BaseHead.astro — add new font links**

Add preload and font links after the existing `<meta>` tags in `src/components/BaseHead.astro`:

```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@latest/style.css" rel="stylesheet" />
```

- [ ] **Step 3: Update global.css — replace font imports and declarations**

Replace the Google Fonts `@import` on line 1 and the `body` / heading font-family rules (lines 9-18) in `src/styles/global.css`:

```css
/* Remove the old @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC...') */

/* Refined typography */
body {
  font-family: 'Noto Sans SC', 'Plus Jakarta Sans', system-ui, sans-serif;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, .text-3xl, .text-4xl {
  font-family: 'LXGW WenKai', 'Plus Jakarta Sans', serif;
  letter-spacing: -0.01em;
}
```

- [ ] **Step 4: Run `/typeset` to verify font hierarchy**

Check that new font combination renders correctly with proper weight/size hierarchy.

- [ ] **Step 5: Commit**

```bash
git add src/components/BaseHead.astro src/styles/global.css package.json pnpm-lock.yaml
git commit -m "feat: migrate fonts to Plus Jakarta Sans + LXGW WenKai + Noto Sans SC"
```

---

### Task 4: Migrate DaisyUI Theme & Tailwind Config

**Files:**
- Modify: `tailwind.config.cjs`

- [ ] **Step 1: Rewrite tailwind.config.cjs DaisyUI theme**

Replace the entire `daisyui` section in `tailwind.config.cjs`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: [
      {
        airbnb: {
          "primary": "#ff385c",
          "primary-content": "#ffffff",
          "secondary": "#f2f2f2",
          "secondary-content": "#222222",
          "accent": "#ff385c",
          "accent-content": "#ffffff",
          "neutral": "#222222",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-300": "#e5e5e5",
          "base-content": "#222222",
          "info": "#428bff",
          "info-content": "#ffffff",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#c13515",
          "error-content": "#ffffff",
        },
      },
    ],
    logs: false,
  }
}
```

Note: The new config explicitly removes `darkTheme: "dark"` (per spec — no dark mode for this site).

- [ ] **Step 2: Verify build succeeds**

```bash
pnpm build
```

Expected: Build completes without errors. The site now uses the `airbnb` theme as default (no dark mode).

- [ ] **Step 3: Run `/audit header` and `/audit sidebar` to check contrast**

Verify new color tokens pass WCAG contrast requirements.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.cjs
git commit -m "feat: migrate DaisyUI theme from pastel to Airbnb color system"
```

---

### Task 5: Migrate global.css — Colors, Shadows, Animations

**Files:**
- Modify: `src/styles/global.css` (full file)

This is the largest single task. The file has ~755 lines with ~80 oklch color values that need migration per the OKLCH grouping table in the spec.

**Note:** Line references below are approximate (based on pre-migration state). Earlier tasks may shift line numbers. Use selector names to locate code, not line numbers.

- [ ] **Step 1: Migrate hero section styles (lines 42-116)**

Apply these replacements in `src/styles/global.css`:

- `.hero-gradient` background: replace oklch teal gradients with `background: #ffffff;` (pure white canvas)
- `.hero-btn-primary`: replace oklch teal borders/backgrounds with Rausch Red system:
  - Border gradient: use `#ff385c` tones
  - Background: white with red accent border
  - Hover: red accent glow
- `.hero-btn-primary::after` shimmer: change from teal to warm neutral or remove
- `.shimmer-text`: change gradient from oklch blue-teal to Rausch Red sweep:
  ```css
  .shimmer-text {
    background: linear-gradient(90deg, #222222 0%, #222222 40%, #ff385c 50%, #222222 60%, #222222 100%);
    /* ... keep animation properties ... */
  }
  ```

- [ ] **Step 2: Migrate home section styles (lines 119-310)**

Apply OKLCH group mapping:
- `.home-section__title` color: `oklch(0.30 0.03 200)` → `#222222`
- `.home-section__more` color: `oklch(0.58 0.05 185)` → `#6a6a6a`, hover → `#ff385c`
- `.home-carousel` border: → `1px solid rgba(0,0,0,0.08)`
- `.carousel-arrow` colors: → `background: #f2f2f2; color: #222222;`, hover → `background: #ff385c; color: #fff;`
- `.home-carousel__dot`: → `background: #e5e5e5;`, active → `background: #ff385c;`
- `.home-lab-card__status`: → `background: #ff385c; color: #fff;`
- `.home-lab-card__status--soon`: → `background: #f2f2f2; color: #6a6a6a;`
- `.home-lab-card__title` color: → `#222222`
- `.home-lab-card__desc` color: → `#6a6a6a`
- `.home-lab-card__tools span`: → `color: #6a6a6a; background: #f2f2f2;`
- `.home-insight-num` color: → `#c1c1c1`
- `.home-insight-badge`: → `color: #222222; background: #f2f2f2;`
- `.home-insight-title` color: → `#222222`
- `.home-insight-arrow` color: → `#ff385c`
- `.home-insight-item:hover` background: → `rgba(0,0,0,0.02)`
- `.home-insights-more` color: → `#6a6a6a`, hover → `#ff385c`

- [ ] **Step 3: Migrate card and blog styles (lines 393-475)**

- `.card-row:hover` background/shadow: → `background: rgba(0,0,0,0.02); box-shadow: rgba(0,0,0,0.04) 0px 2px 6px;`
- `.card-row-arrow` color: → `#ff385c`
- `.card-badge` color/border: → `color: #ff385c; border-left-color: #ff385c;`
- `.card-tag-link` color: → `#6a6a6a`, hover → `#ff385c`
- `.card-tag-sep` color: → `#c1c1c1`
- `.collapse` border: → `1px solid #e5e5e5;`
- `.collapse:hover` shadow: → three-layer card shadow from DESIGN.md
- `.tag-cloud-item:hover` shadow: → `0 2px 12px rgba(0,0,0,0.08)`
- `.timeline-dot` shadow: → `0 0 0 4px #f2f2f2`
- `.contact-card:hover`: → `box-shadow: rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px; border-color: #e5e5e5;`

- [ ] **Step 4: Migrate avatar and sidebar styles (lines 503-628)**

- `.avatar-ring-glow` conic-gradient: replace oklch teal values with neutral warm grays or Rausch Red:
  ```css
  background: conic-gradient(#ff385c, #ff8fa0, #ff385c, #ffb3c1, #ff385c);
  ```
- `.avatar-ring-glow::after` background: → `linear-gradient(180deg, #ffffff, #f2f2f2)`
- `.sidebar-bg` background: → `background: #ffffff;`
- `.drawer-side` border: → `border-right: 1px solid rgba(0,0,0,0.08);`
- `.sidebar-icon` color: → `#6a6a6a`
- `.sidebar-bg .menu a:hover .sidebar-icon` color: → `#ff385c`
- `.sidebar-bg .menu a.sidebar-active .sidebar-icon` color: → `#ff385c`
- `.sidebar-bg .menu a:hover` background: → `rgba(0,0,0,0.04)`
- `.sidebar-bg .menu a.sidebar-active`: → `background: rgba(255,56,92,0.08); color: #ff385c;`

- [ ] **Step 5: Migrate page-scroll-hint styles**

- `.page-scroll-hint__arrow` color: → `#c1c1c1`
- `.page-scroll-hint__label` color: → `#6a6a6a`

- [ ] **Step 6: Verify build**

```bash
pnpm build
```

- [ ] **Step 7: Run anti-pattern detection on global.css**

```bash
npx impeccable detect src/styles/global.css
```

Ensure no new anti-patterns introduced.

- [ ] **Step 8: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: migrate global.css from teal oklch to Airbnb Rausch Red color system"
```

---

## Chunk 3: Phase 2 — Component Migration

### Task 6: Migrate High-Priority Components

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/SideBar.astro`
- Modify: `src/components/Card.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/components/SideBarFooter.astro`

- [ ] **Step 1: Update Header.astro**

The header already uses DaisyUI classes (`bg-base-100`, `text-base-content`) which will auto-inherit the new theme. No color changes needed. Verify the mobile navbar brand text "梨贝拉" renders correctly with new fonts.

- [ ] **Step 2: Update SideBar.astro**

The sidebar uses `sidebar-bg` class from global.css (already migrated in Task 5). Verify it renders as white background. No additional changes needed — styles are in global.css.

- [ ] **Step 3: Update Card.astro**

In `src/components/Card.astro`, update the card container class to use the three-layer shadow and 20px radius:

Replace:
```html
<div class="card bg-base-100 transition ease-in-out hover:shadow-xl mx-6 my-2 hover:scale-[102%]">
```
With:
```html
<div class="card bg-base-100 transition ease-in-out mx-6 my-2 hover:scale-[102%]" style="border-radius: 20px; box-shadow: rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px;">
```

- [ ] **Step 4: Update Footer.astro**

Footer already uses DaisyUI classes. With new theme (`base-100: #ffffff`), it auto-inherits white background. No changes needed.

- [ ] **Step 5: Update SideBarFooter.astro**

Replace oklch colors in the `<style>` block:

```css
.social-icon {
  color: #6a6a6a;  /* was oklch(0.60 0.04 195) */
}
.social-icon--github:hover {
  color: #222222;  /* was #333 */
  background: #f2f2f2;  /* was oklch(0.95 0.005 200 / 0.5) */
}
.social-icon--xhs:hover {
  color: #ff385c;  /* was #ff2442 — align to Rausch Red */
  background: rgba(255,56,92,0.08);  /* was oklch(0.97 0.02 25 / 0.4) */
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Header.astro src/components/SideBar.astro src/components/Card.astro src/components/Footer.astro src/components/SideBarFooter.astro
git commit -m "feat: migrate high-priority components to Airbnb design system"
```

---

### Task 7: Migrate Medium-Priority Components

**Files:**
- Modify: `src/components/CompanyTimeline.astro`
- Modify: `src/components/cv/TimeLine.astro`
- Modify: `src/components/HorizontalCard.astro`
- Modify: `src/components/HorizontalShopItem.astro`
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/components/SkillBoard.astro`
- Modify: `src/components/BubbleCloud.astro`
- Modify: `src/components/TagCloud.astro`

- [ ] **Step 1: Update CompanyTimeline.astro**

Replace `border-primary/20` and `bg-primary/60` with Rausch Red values:

```html
<div class="relative pl-8 border-l-2 border-[#c1c1c1]">
  ...
  <div class="absolute -left-[25px] w-4 h-4 rounded-full bg-[#ff385c] border-2 border-base-100"></div>
```

- [ ] **Step 2: Update cv/TimeLine.astro**

Replace `bg-primary` references:

```html
<span class="w-4 h-4 bg-[#ff385c] block rounded-full mt-1"></span>
<span class="education__line bg-[#ff385c] block h-full w-[2px] translate-x-[7px]"></span>
```

- [ ] **Step 3: Update HorizontalCard.astro**

Replace the `badgeColors` oklch values with `#ff385c` for all badges (single accent color per DESIGN.md):

```javascript
const badgeColors: Record<string, string> = {
  "商业化": "#ff385c",
  "增长": "#ff385c",
  "出海": "#ff385c",
  "工作流": "#ff385c",
  "AI 转型": "#ff385c",
};
```

- [ ] **Step 4: Update HorizontalShopItem.astro**

Update container to use three-layer shadow and 20px radius:

```html
<div class="bg-base-100 hover:scale-[102%] transition ease-in-out" style="border-radius: 20px; box-shadow: rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px;">
```

- [ ] **Step 5: Update ProjectCard.astro**

Replace oklch fallback color:

```html
<div class="font-semibold" style={accentColor ? `color: ${accentColor};` : 'color: #ff385c;'}>{title}</div>
```

Update `.collapse` border style (already partially handled in global.css Task 5):
```html
<div class="collapse collapse-arrow bg-base-200 mb-3" style={accentColor ? `border-left: 3px solid ${accentColor};` : 'border-left: 3px solid #ff385c;'}>
```

- [ ] **Step 6: Update SkillBoard.astro**

Replace the `accents` array oklch values with Airbnb-compatible grays + Rausch Red accent:

```javascript
const accents = [
  { bar: '#ff385c, #e00b41', border: 'rgba(0,0,0,0.08)' },
  { bar: '#ff385c, #e00b41', border: 'rgba(0,0,0,0.08)' },
  { bar: '#ff385c, #e00b41', border: 'rgba(0,0,0,0.08)' },
  { bar: '#ff385c, #e00b41', border: 'rgba(0,0,0,0.08)' },
];
```

Replace oklch colors in `<style>` block:
- `.skill-card` background: → `background: #ffffff; border: 1px solid #e5e5e5;`
- `.skill-card:hover` shadow: → three-layer card shadow
- `.skill-card__title` color: → `#222222`
- `.skill-item__label` color: → `#6a6a6a`
- `.skill-item__bar-bg` background: → `#f2f2f2`
- border-radius: → `border-radius: 20px;` (card level)

- [ ] **Step 7: Update BubbleCloud.astro**

Replace all oklch gradient/color values in `<style>`:
- `.bubble-cloud` background: → `radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 100%); border: 1.5px solid rgba(0,0,0,0.06);`
- `.bubble-xl`: → `background: linear-gradient(135deg, #ff385c, #e00b41); color: #fff;`
- `.bubble-lg`: → `background: linear-gradient(135deg, #ff6b81, #ff385c); color: #fff;`
- `.bubble-md`: → `background: #f2f2f2; color: #222222;`
- `.bubble-sm`: → `background: #f2f2f2; color: #222222;`
- `.bubble-xs`: → `background: #f2f2f2; color: #6a6a6a;`
- `.bubble:hover` shadow: → `0 8px 24px rgba(0,0,0,0.12);`

- [ ] **Step 8: Update TagCloud.astro**

Replace DaisyUI `bg-primary` classes with Airbnb-appropriate styles. Since `primary` is now `#ff385c`, the existing `bg-primary` classes will auto-inherit. However, review the graduated opacity levels (`bg-primary/80`, `bg-primary/60`, etc.) to ensure they look correct with Rausch Red. Adjust if too intense:

```javascript
const sizeClasses = {
  xl: "text-lg px-5 py-2.5 font-bold bg-[#ff385c] text-white",
  lg: "text-base px-4 py-2 font-semibold bg-[#ff6b81] text-white",
  md: "text-sm px-3 py-1.5 bg-[#f2f2f2] text-[#222222]",
  sm: "text-xs px-3 py-1.5 bg-[#f2f2f2] text-[#222222]",
  xs: "text-xs px-2.5 py-1 bg-[#f2f2f2] text-[#6a6a6a]"
};
```

- [ ] **Step 9: Commit**

```bash
git add src/components/CompanyTimeline.astro src/components/cv/TimeLine.astro src/components/HorizontalCard.astro src/components/HorizontalShopItem.astro src/components/ProjectCard.astro src/components/SkillBoard.astro src/components/BubbleCloud.astro src/components/TagCloud.astro
git commit -m "feat: migrate medium-priority components to Airbnb design system"
```

---

### Task 8: Migrate Low-Priority Components & Page-Level Inline Styles

**Files:**
- Modify: `src/components/PageScroller.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Update PageScroller.astro**

Replace oklch colors in `<style>`:
- `.page-scroll-hint__arrow` color: → `#c1c1c1`
- `.page-scroll-hint__label` color: → `#6a6a6a`

(Already handled in Task 5 global.css — verify no scoped style overrides exist.)

- [ ] **Step 2: Update index.astro inline styles**

Replace the `badgeAccents` oklch values (lines 22-28):

```javascript
const badgeAccents: Record<string, { color: string; bg: string }> = {
  "商业化": { color: "#222222", bg: "rgba(0,0,0,0.04)" },
  "增长": { color: "#222222", bg: "rgba(0,0,0,0.04)" },
  "出海": { color: "#222222", bg: "rgba(0,0,0,0.04)" },
  "工作流": { color: "#222222", bg: "rgba(0,0,0,0.04)" },
  "AI 转型": { color: "#222222", bg: "rgba(0,0,0,0.04)" },
};
```

Replace the hero subtitle inline oklch colors (lines 41-45):

```html
<span style="color: #222222;">效果广告</span>
<span class="text-base-content/25"> ｜ </span>
<span style="color: #222222;">订阅商业化</span>
<span class="text-base-content/25"> ｜ </span>
<span style="color: #222222;">出海增长</span>
```

- [ ] **Step 3: Run anti-pattern scan on all modified pages**

```bash
npx impeccable detect src/pages/index.astro
npx impeccable detect src/components/
```

- [ ] **Step 4: Verify full build**

```bash
pnpm build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/PageScroller.astro src/pages/index.astro
git commit -m "feat: migrate low-priority components and page inline styles"
```

---

### Task 9: Migrate cv.astro (~30 oklch values)

**Files:**
- Modify: `src/pages/cv.astro`

- [ ] **Step 1: Migrate scoped styles — section headers and highlight cards**

In the `<style>` block of `cv.astro`, replace:

```css
/* Section title */
.cv-section__title { color: #ff385c; border-bottom: 1.5px solid rgba(0,0,0,0.08); }

/* Highlight cards — collapse multi-hue variants to single neutral + red accent */
.cv-highlight-card { background: #ffffff; border: 1px solid #e5e5e5; border-radius: 14px; }
.cv-highlight-card:hover { box-shadow: rgba(0,0,0,0.04) 0px 2px 6px; }
.cv-highlight-card--mint .cv-highlight-card__label { color: #ff385c; }
.cv-highlight-card--amber .cv-highlight-card__label { color: #ff385c; }
.cv-highlight-card--indigo .cv-highlight-card__label { color: #ff385c; }
.cv-highlight-card--coral .cv-highlight-card__label { color: #ff385c; }
.cv-highlight-card--mint { border-color: #e5e5e5; }
.cv-highlight-card--amber { border-color: #e5e5e5; }
.cv-highlight-card--indigo { border-color: #e5e5e5; }
.cv-highlight-card--coral { border-color: #e5e5e5; }
.cv-highlight-card__text { color: #222222; }
```

- [ ] **Step 2: Migrate bridge section**

```css
.cv-bridge { background: #f2f2f2; border-left: 3px solid #ff385c; border-radius: 0 14px 14px 0; }
.cv-bridge__text { color: #222222; }
```

- [ ] **Step 3: Migrate work experience styles**

```css
.cv-exp { border-left: 3px solid #e5e5e5; background: #ffffff; border-radius: 0 14px 14px 0; }
.cv-exp:hover { background: rgba(0,0,0,0.02); }
.cv-exp__company { color: #222222; }
.cv-exp__period { color: #6a6a6a; }
.cv-exp__role { color: #ff385c; }
.cv-exp__desc { color: #222222; }
```

- [ ] **Step 4: Migrate inline border-left-color on cv-exp elements**

Replace the 4 inline `style="border-left-color: oklch(...)"` attributes in the HTML:

```html
<!-- All work experience left borders use #ff385c -->
<div class="cv-exp" style="border-left-color: #ff385c;">
```

The Career Break entry uses a muted variant:
```html
<div class="cv-exp cv-exp--gap" style="border-left-color: #c1c1c1;">
```

- [ ] **Step 5: Migrate education and cert styles**

```css
.cv-edu__school { color: #222222; }
.cv-edu__detail { color: #6a6a6a; }
.cv-cert { background: #f2f2f2; color: #222222; border: 1px solid #e5e5e5; }
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/cv.astro
git commit -m "feat: migrate cv.astro — 30 oklch values to Airbnb color system"
```

---

### Task 10: Migrate projects.astro

**Files:**
- Modify: `src/pages/projects.astro`

- [ ] **Step 1: Replace accentColor array**

Replace the oklch accent values on lines 95-100:

```javascript
const accents = [
  '#ff385c',
  '#ff385c',
  '#ff385c',
  '#ff385c',
];
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/projects.astro
git commit -m "feat: migrate projects.astro accent colors to Rausch Red"
```

---

### Task 11: Migrate contact.astro (~12 oklch values)

**Files:**
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Migrate all scoped styles**

Replace every oklch value in contact.astro's `<style>` block:

```css
.contact-item { border: 1px solid #e5e5e5; }
.contact-item:hover {
  background: rgba(0,0,0,0.02);
  border-color: #c1c1c1;
  box-shadow: rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px;
}
.contact-item__icon { background: #f2f2f2; color: #ff385c; }
.contact-item:hover .contact-item__icon { background: #ff385c; color: #fff; }
.contact-item__icon--xhs { color: #ff385c; }
.contact-item:hover .contact-item__icon--xhs { background: #ff385c; color: #fff; }
.contact-item__label { color: #6a6a6a; }
.contact-item__value { color: #222222; }
.contact-item__arrow { color: #ff385c; }
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/contact.astro
git commit -m "feat: migrate contact.astro to Airbnb color system"
```

---

### Task 12: Migrate ai-lab/personal-site.astro

**Files:**
- Modify: `src/pages/ai-lab/personal-site.astro`

This file has the highest oklch density (~80 values). It contains changelog sections, feature cards, code block themes, and multi-section styling.

- [ ] **Step 1: Scan and categorize all oklch values**

```bash
grep -c "oklch" src/pages/ai-lab/personal-site.astro
```

Group all values using the OKLCH mapping table:
- Deep text `oklch(0.25-0.45)` → `#222222`
- Secondary `oklch(0.50-0.60)` → `#6a6a6a`
- Accent `oklch(0.55-0.75 high-chroma)` → `#ff385c`
- Surfaces `oklch(0.85-0.97)` → `#f2f2f2` or `#ffffff`
- Borders `oklch(0.90-0.96 low-chroma)` → `#c1c1c1` or `rgba(0,0,0,0.08)`

- [ ] **Step 2: Replace all oklch values systematically**

Work through the file section by section (changelog, feature cards, code blocks, etc.), applying the mapping. Since this file is large, process in order from top to bottom to avoid drift.

- [ ] **Step 3: Run anti-pattern detection**

```bash
npx impeccable detect src/pages/ai-lab/personal-site.astro
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/ai-lab/personal-site.astro
git commit -m "feat: migrate ai-lab/personal-site.astro — 80 oklch values to Airbnb system"
```

---

### Task 13: Migrate Remaining Pages & Verification

**Files:**
- Verify: `src/pages/blog/[...page].astro` (no oklch — DaisyUI theme auto-inherits)
- Verify: `src/pages/blog/[slug].astro` (no oklch — DaisyUI theme auto-inherits)
- Verify: `src/pages/blog/tag/[tag]/[...page].astro` (no oklch — DaisyUI theme auto-inherits)
- Verify: `src/pages/skills.astro` (uses SkillBoard/BubbleCloud/TagCloud — already migrated in Task 7)
- Verify: `src/pages/ai-lab/index.astro` (uses global.css lab-card styles — already migrated in Task 5)
- Verify: `src/components/SideBarMenu.astro` (no oklch — uses global.css sidebar styles — verify rendering)

- [ ] **Step 1: Verify blog pages render correctly**

Blog pages have zero oklch values. Confirm DaisyUI theme inheritance works.

- [ ] **Step 2: Verify skills page**

Confirm SkillBoard, BubbleCloud, TagCloud components render correctly with new styles.

- [ ] **Step 3: Verify SideBarMenu rendering**

Confirm sidebar menu active state, hover state, and icons work correctly with new color system.

- [ ] **Step 4: Full build verification**

```bash
pnpm build
```

- [ ] **Step 5: Scan entire source for remaining oklch values**

```bash
grep -r "oklch" src/ --include="*.astro" --include="*.css"
```

Expected: Zero remaining oklch values (all migrated).

- [ ] **Step 6: Commit any remaining fixes**

```bash
git add src/
git commit -m "feat: verify and fix remaining pages after color migration"
```

---

## Chunk 4: Phase 3 — Polish & Phase 4 — Enhancement

### Task 14: Typography Polish

- [ ] **Step 1: Run `/typeset`**

Full-site typography review and refinement. Apply fixes for:
- Font size hierarchy alignment with DESIGN.md
- Line height adjustments
- Letter-spacing fine-tuning (-0.18px to -0.44px on headings)
- Weight consistency (500+ for headings)

- [ ] **Step 2: Commit typography fixes**

```bash
git add -A && git commit -m "feat: polish typography — align sizes, weights, spacing to DESIGN.md"
```

---

### Task 15: Second Audit

- [ ] **Step 1: Run `/audit`**

Full-site technical re-audit. Verify:
- All contrast ratios pass WCAG after color migration
- No new a11y issues introduced
- Responsive behavior intact across breakpoints

- [ ] **Step 2: Fix any issues found**

Address any new issues from the second audit.

- [ ] **Step 3: Commit fixes**

```bash
git add -A && git commit -m "fix: resolve issues from second Impeccable audit"
```

---

### Task 16: Final Polish

- [ ] **Step 1: Run `/polish`**

Pre-deployment refinement:
- Spacing consistency (align to 8px grid)
- Visual rhythm across pages
- Detail cleanup

- [ ] **Step 2: Commit polish changes**

```bash
git add -A && git commit -m "feat: final visual polish — spacing, rhythm, detail alignment"
```

---

### Task 17: Enhancement — Animate

- [ ] **Step 1: Run `/animate`**

Review and adapt the motion system:
- Unify easing curves across all transitions
- Adjust `fadeSlideUp`, `shimmer`, `avatarDrop` animations for new style
- Ensure reduced-motion preferences are respected
- Standardize timing durations

- [ ] **Step 2: Commit animation changes**

```bash
git add -A && git commit -m "feat: enhance animations — unified easing, reduced-motion support"
```

---

### Task 18: Enhancement — Colorize

- [ ] **Step 1: Run `/colorize`**

Fine-tune color balance after migration:
- Verify Rausch Red usage is appropriately restrained
- Check that grays/neutrals create proper hierarchy
- Ensure sufficient contrast in all states (hover, active, disabled)

- [ ] **Step 2: Commit colorize changes**

```bash
git add -A && git commit -m "feat: fine-tune color balance across all components"
```

---

### Task 19: Enhancement — Distill

- [ ] **Step 1: Run `/distill`**

Reduce visual noise:
- Remove unnecessary decorative elements
- Simplify overly complex component structures
- Ensure content-first hierarchy

- [ ] **Step 2: Commit distill changes**

```bash
git add -A && git commit -m "feat: distill — remove visual noise, simplify components"
```

---

### Task 20: Enhancement — Harden

- [ ] **Step 1: Run `/harden`**

Edge case handling:
- Empty states (no blog posts, no projects)
- Long text overflow in all components
- Missing images / broken image fallbacks
- Various content lengths

- [ ] **Step 2: Commit harden changes**

```bash
git add -A && git commit -m "feat: harden edge cases — empty states, overflow, fallbacks"
```

---

### Task 21: Enhancement — Adapt

- [ ] **Step 1: Run `/adapt`**

Mobile-specific optimization:
- Touch target sizes (minimum 44x44px)
- Responsive breakpoint edge cases
- Mobile navigation UX
- Swipe interactions on carousel

- [ ] **Step 2: Commit adapt changes**

```bash
git add -A && git commit -m "feat: adapt for mobile — touch targets, responsive edge cases"
```

---

### Task 22: Final Quality Gate

- [ ] **Step 1: Full build**

```bash
pnpm build
```

- [ ] **Step 2: Run final anti-pattern scan**

```bash
npx impeccable detect src/
```

Ensure zero critical issues remain.

- [ ] **Step 3: Deploy and scan live site**

After deploying to Vercel:

```bash
npx impeccable detect https://liwenhui.vercel.app
```

- [ ] **Step 4: Final commit if any last fixes**

```bash
git add -A && git commit -m "fix: final quality gate fixes from Impeccable scan"
```
