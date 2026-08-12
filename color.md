# Color Tokens & Accessibility

This document outlines the color architecture for Muzammil C's portfolio, aligning with **UI-UX Designer** accessibility standards and **Hallmark's** strict token-based system.

## 1. Palette Architecture (Atmospheric Genre)
The current aesthetic is "Premium Black & Minimal". We formalize this into a tokenized system using OKLCH/HSL for predictable contrast and manipulation.

### Base Tokens
- **Background (`--bg`)**: `#050505` (Deepest black, atmospheric foundation)
- **Surface 1 (`--surface`)**: `#0c0c0c` (Cards, modals)
- **Surface 2 (`--surface-2`)**: `#141414` (Hover states, elevated elements)
- **Surface 3 (`--surface-3`)**: `#1c1c1c` (Borders, subtle dividers)

### Content Tokens
- **Text Primary (`--text`)**: `#e8e8e8` (High contrast, readable)
- **Text Muted (`--text-muted`)**: `#888888` (Secondary information, timestamps)
- **Text Dim (`--text-dim`)**: `#555555` (Placeholders, subtle structural text)

### Accent Tokens
- **Accent Primary (`--accent`)**: `#ffffff` (Highest contrast for CTAs)
- **Accent Subtle (`--accent-subtle`)**: `rgba(255, 255, 255, 0.04)` (Interactive backgrounds)
- **Brand Glow**: `hsla(270, 80%, 70%, 1)` (Purple/Neon accent for Logo and subtle glows, fitting the Cybersecurity/ML theme)

## 2. Accessibility & WCAG Compliance (UI-UX Designer)
- **Contrast Ratios**: 
  - `--text` (#e8e8e8) on `--bg` (#050505) provides a **15.6:1** contrast ratio, passing WCAG AAA.
  - `--text-muted` (#888888) on `--bg` provides a **5.4:1** contrast ratio, passing WCAG AA for normal text.
  - `--text-dim` (#555555) on `--bg` provides a **2.3:1** contrast ratio. **[WARNING]** This fails WCAG AA. It should strictly be used for non-essential UI borders or disabled states, never for readable text.

## 3. Hallmark Theme Constraints
- **Paper Band**: Dark (`L < 30%`)
- **Display Style**: Grotesk-sans (`Outfit` for headings, `Space Grotesk` for technical data)
- **Accent Hue**: Cool/Chromatic-other (Purple/Neon glowing accents)
- **Token Discipline**: No inline colors in components. Every color must map back to these defined variables.
