# Lebanese Dental Clinic — Design System

Extracted from the reference webpage design. Use these tokens and patterns for consistency.

## Colors

| Token        | Value     | Usage                    |
| ------------ | --------- | ------------------------- |
| Primary BG   | `#333333` | Page, panels, header, nav |
| Text primary | `#FFFFFF` | Headings, body, links     |
| Text muted   | `#CCCCCC` | Dividers, bullets, subtle |
| Hero overlay | `rgba(0,0,0,0.5)` | Over image in hero   |

## Typography

- **Font:** Sans-serif (Geist / Inter / Open Sans). Clean, minimal.
- **Hero title:** Large, bold, uppercase, centered.
- **Section headings (H2):** Uppercase, bold, white.
- **Subsection (H3):** Slightly smaller, uppercase, bold.
- **Body:** Regular weight, light, white/95%.
- **Nav/Footer:** Smaller, uppercase, tracking.

## Layout

- **Grid:** 2-column alternating on desktop (`grid-cols-1 md:grid-cols-2`).
- **Pattern:** Image left ↔ Text right, then Text left ↔ Image right.
- **Max width:** ~90rem for content.
- **Border radius:** 0 (sharp corners).

## Spacing

- Section vertical: `clamp(3rem, 8vw, 5rem)`.
- Content padding: `clamp(1.5rem, 4vw, 3rem)` horizontal, similar vertical.
- Space between heading / paragraph / list: 1rem–1.5rem.

## Components

- **Header:** Top bar + nav; dark panel; “Book an appointment” CTA.
- **HeroBanner:** Full-width image (optional), overlay, centered title + tagline.
- **SectionHeader:** Full-width dark panel, centered or left-aligned title, optional divider.
- **ImageContentSection:** 50/50 image + dark content panel; `imageFirst` toggles order.
- **FeatureDescriptionBlock:** Full-width dark block with heading, paragraph, optional list.
- **Footer:** Centered CTA link, contact line, copyright.

## Visual patterns

1. Alternating image-left / text-right sections.
2. Dark content panels for all text.
3. Large, full-height imagery in split sections.
4. Minimal typography; uppercase headings.
5. Modern clinical aesthetic: high contrast, clean lines.
