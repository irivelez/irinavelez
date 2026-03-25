@AGENTS.md

# irinavelez.com — The Manifesto

Personal manifesto site for Irina Vélez. One clean typeset page, no scroll experience, no effects beyond subtle GSAP entrance animation.

## Architecture

- **Framework:** Next.js 16 + Tailwind 4 + GSAP
- **Fonts:** Newsreader (serif display, italic) + Manrope (sans body) — both with `display: "swap"`
- **Palette:** Dark #07070B, gold accent #E8A838, text primary #F0EDE8, secondary #9898A6, muted #5C5C6F
- **Single page:** Everything lives in `src/app/page.tsx` — no routing, no components directory

## Design Rules

- **Ultra clean.** No scroll effects, no per-stanza reveals, no noise textures, no grain, no grid patterns. The text is just there, well formatted.
- **The manifesto speaks for itself.** Don't add mission statements, bios, or explanations. The identity anchor at the bottom ("Cloud architect turned AI entrepreneur...") is the only grounding — keep it short.
- **Gold is earned.** Only two lines get gold: "There is no better time to be alive" and "Uncertainty is the new golden standard of this world." Don't add more gold highlights without asking.
- **No photos.** This is a text-only site. If photos ever belong here, they'll be a deliberate addition.

## Relationship to thexperiment.dev

This site is the "why." thexperiment.dev is the "what." They share:
- Gold accent: #E8A838 (must stay unified)
- Font pairing: Newsreader + Manrope
- Dark background (this one is warmer at #07070B vs lab's #09090b — intentional)

**Self-containment rule:** This site must tell a complete story on its own. The "See the lab →" link is an invitation, not a requirement. Someone who never visits thexperiment.dev must still understand who Irina is.

## What NOT to do

- Don't add scroll-driven animations or viewport-height stanzas (explicitly rejected)
- Don't use Inter, Space Grotesk, Roboto, or any generic font
- Don't add a navigation bar, hamburger menu, or multi-page structure
- Don't add "Built with..." taglines or generic portfolio copy
- Don't break the reduced-motion handling in globals.css
