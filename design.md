# Design System (Hallmark + UI-UX Guidelines)

This document serves as the locked design system for Muzammil C's portfolio. It applies the **Hallmark** anti-slop rules, **UI-UX Designer** component methodologies, and **Web Design Guidelines**.

## 1. Genre & Macrostructure
- **Genre**: **Atmospheric** (Dark mode, neon touches, technical aesthetic). Fits the Cybersecurity and Machine Learning identity perfectly.
- **Macrostructure Focus**: The page currently uses a single-page scrolling structure (`Home` page with dividers). This aligns with Hallmark's **Marquee Hero** leading into a **Workbench** or **Bento Grid** layout for the Projects/Skills sections.

## 2. Typography (2+1 Discipline)
The site already follows the strict 2+1 font discipline:
1. **Body**: `Inter` (Roman, highly readable, utilitarian).
2. **Headings/Display**: `Outfit` (Modern, geometric, used for section titles and hero).
3. **Mono (Accent)**: `Space Grotesk` (Used for technical data, code snippets, or cybersecurity-themed metadata).
- **Constraint**: **NO ITALIC HEADERS.** All headings must be `font-style: normal`.

## 3. Component Archetypes
- **Navigation**: Currently implemented as **N5 (Floating Pill)**. It features a backdrop filter blur and shrinks on scroll.
- **Section Dividers**: Currently using `.section-divider`. Must be subtle and structural, not decorative noise.
- **Cards (Projects/Skills)**: Must adhere to UI-UX Atomic Design. 
  - Background: `--surface`
  - Hover: `--surface-2`
  - Border: 1px solid `--border`

## 4. Interaction & States (UI-UX Designer)
Every interactive element (buttons, links, project cards) must have explicit states defined in CSS, rather than relying on defaults:
1. `default`: Standard `--surface` or transparent.
2. `:hover`: Micro-interaction (e.g., scale up 1.02x, change background to `--surface-2`).
3. `:focus-visible`: Strict 2px solid outline using `--accent` for accessibility.
4. `:active`: Scale down (0.98x) to provide tactile feedback.

## 5. Web Design Guidelines (Anti-Patterns to Avoid)
- **No re-drawn UI chrome**: Do not simulate browser windows or IDE frames around project screenshots. Let the content speak for itself.
- **No invented metrics**: The About and Skills sections must rely on actual facts, not generic placeholder counters.
- **Mobile Responsiveness**: `overflow-x: clip` is set. Ensure grid tracks use `minmax(0, 1fr)` and no interactive element is smaller than 44x44px for touch targets.
