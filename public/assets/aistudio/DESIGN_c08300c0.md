---
name: Academic & Curatorial Editorial
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#594140'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#8d706f'
  outline-variant: '#e1bfbd'
  surface-tint: '#b12a34'
  primary: '#7a0016'
  on-primary: '#ffffff'
  primary-container: '#9e1b28'
  on-primary-container: '#ffafad'
  inverse-primary: '#ffb3b1'
  secondary: '#775a00'
  on-secondary: '#ffffff'
  secondary-container: '#fed269'
  on-secondary-container: '#765900'
  tertiary: '#3a393d'
  on-tertiary: '#ffffff'
  tertiary-container: '#515054'
  on-tertiary-container: '#c5c2c7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#8f0d1f'
  secondary-fixed: '#ffdf99'
  secondary-fixed-dim: '#ecc15a'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4300'
  tertiary-fixed: '#e4e1e6'
  tertiary-fixed-dim: '#c8c5ca'
  on-tertiary-fixed: '#1b1b1e'
  on-tertiary-fixed-variant: '#47464a'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '500'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  gutter-mobile: 1rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a refined intersection of academic rigor, debate prestige, and print-grade editorial precision. Designed for an Informatics Engineering scholar, institutional debater, and document production practitioner, it balances intellectual authority with sharp technical modernity.

The aesthetic philosophy draws heavily from **Modern Editorial Minimalism with Archival Polish**:
- **Tone & Mood:** Authoritative, intellectual, meticulously organized, and quietly prestigious. It avoids juvenile tech-portfolio tropes (such as generic saturated neon gradients or particle canvases) in favor of high-contrast typography, restrained ornamentation, and bookbound spatial discipline.
- **Visual Discipline:** Broad white/ivory space, razor-sharp hairline borders, structured typographic hierarchy, and purposeful crimson and bronze accents that honor formal academic portraiture and competitive accolades.

## Colors

The color palette is built on warm archival warmth, obsidian ink, and scholastic accents:

- **Primary (`#9E1B28` — Deep Crimson):** Used for focal interactive states, primary calls-to-action, structural highlights, and subtle rule lines. Tuned to complement the formal red-backdrop institutional portraiture.
- **Secondary (`#C29B38` — Warm Antique Gold):** Reserved for debate accolades, academic distinctions, trophy indicators, certifications, and verification badges.
- **Tertiary / Ink (`#18181B` — Deep Obsidian):** The baseline tone for typography, solid high-contrast buttons, and precision borders.
- **Background & Containers:**
  - Base canvas: `#F7F5F0` (Archival Warm Ivory)
  - Card & Module Container: `#FFFFFF` (Crisp Pure Surface)
  - Secondary Container / Recessed modules: `#EFECE4` (Bone Linen)
- **Text Hierarchy:**
  - High-emphasis: `#18181B`
  - Medium-emphasis (Body & Descriptions): `#3F3F46`
  - Subtle / Metadata: `#71717A`
  - Hairline Rule / Border: `#E4DFD5`

## Typography

The typography unites three distinct typographic traditions:
- **Headlines & Display (`Newsreader`):** Infuses academic prestige, literary cadence, and intellectual authority. Headlines utilize italic variants selectively for emphasis or thesis statements.
- **Body & Structural UI (`Plus Jakarta Sans`):** Delivers clean, contemporary legibility for case studies, curriculum vitae entries, and editorial narratives.
- **Labels, Specs & Metadata (`JetBrains Mono`):** Reflects the technical discipline of Informatics Engineering, document formatting specifications, and debate speaker scores. Rendered in uppercase or clean tabular format.

## Layout & Spacing

The layout is grounded in a disciplined 12-column grid resembling an archival broadsheet or modern academic journal:

- **Desktop (1024px+):** Max layout container width of 1200px centered on screen, with a 12-column grid, 1.5rem gutters, and 2rem outer margins.
- **Tablet (768px - 1023px):** 8-column grid with 1.25rem gutters and 1.5rem margins.
- **Mobile (< 768px):** 4-column fluid structure with 1rem gutters and 1.25rem outer margins.
- **Rhythm & Grid Lines:** Layout blocks favor top-aligned rule borders (`1px solid #E4DFD5`), allowing content sections to sit like curated exhibition catalog entries rather than disconnected floating boxes.

## Elevation & Depth

This design system avoids heavy, diffused drop shadows. Spatial depth is instead achieved through **surface layering and tactile paper contrast**:

- **Tier 0 (Canvas):** Warm archival ivory (`#F7F5F0`).
- **Tier 1 (Surface Cards & Artifacts):** Crisp pure white (`#FFFFFF`) with a delicate hairline border (`1px solid #E4DFD5`).
- **Tier 2 (Recessed/Secondary Containers):** Bone linen (`#EFECE4`) used for metadata panels, code blocks, and quote sidebars.
- **Active Elevation (Hover/Floating Elements):** Subtle ambient lift using an ink-tinted micro-shadow: `0 4px 12px -2px rgba(24, 24, 27, 0.06), 0 1px 3px rgba(24, 24, 27, 0.04)`.
- **Dividers:** Crisp 1px rules in `#E4DFD5` delineate editorial columns and project entries.

## Shapes

The shape system utilizes a **Soft (Level 1)** geometric standard. This mirrors the precision-cut corners of high-grade cardstock and printed editorial folios:
- Default components (inputs, standard cards, buttons): `0.25rem` (4px).
- Larger layout surfaces, modal frames, and framed portraits: `0.5rem` (8px).
- Status dots and category tags: strictly rectangular with micro-radii (`0.25rem`) or circular for status indicators only (`9999px`). Avoid pill-shaped bubble buttons to maintain gravitas.

## Components

### Buttons
- **Primary:** Deep Crimson (`#9E1B28`) background with white text, font `Plus Jakarta Sans` 14px weight 600, 4px border radius. Hover transitions to `#821520`.
- **Secondary / Ink:** Deep Obsidian (`#18181B`) background with white text, providing high-contrast academic authority.
- **Outline / Ghost:** Transparent background, 1px border `#E4DFD5`, text `#18181B`. Hover state applies `#EFECE4` surface fill with primary `#9E1B28` border accent.

### Chips & Accolade Badges
- **Accolade Chips (Debate & Honors):** Background `#FDFBF5`, border `1px solid #C29B38`, text `#8C670D`, labeled using `JetBrains Mono` 11px uppercase.
- **Engineering / Tech Stack Chips:** Background `#EFECE4`, border `1px solid #E4DFD5`, text `#3F3F46`, labeled using `JetBrains Mono` 11px.

### Cards & Project Folders
- Constructed with `#FFFFFF` background, `1px solid #E4DFD5` border, and 4px border radius.
- Cards feature a distinct two-part structure: a prominent headline in `Newsreader`, followed by a secondary metadata shelf in `JetBrains Mono` separated by a 1px internal rule.

### Lists & Academic Timeline
- Vertical timeline utilizing a continuous 1px `#E4DFD5` vertical axis.
- Nodes represented by 8x8px square markers (`#9E1B28` for current roles, `#C29B38` for debate championships, `#18181B` for graduated education milestones).

### Input Fields & Document Inquiries
- Pure white background (`#FFFFFF`), `1px solid #E4DFD5` border, text `#18181B`.
- Focus state activates an obsidian hairline stroke `1px solid #18181B` with an inset `0 0 0 1px #18181B`. Placeholders styled in `#71717A`.

### Academic & Project Metadata Bar
- A bespoke component displaying publication dates, Git commit hashes, debate speaker tabs, or paper weights (GSM) in `JetBrains Mono`, separated by mid-dot (`·`) dividers.