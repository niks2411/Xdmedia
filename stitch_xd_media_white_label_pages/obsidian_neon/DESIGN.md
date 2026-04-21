# Design System Specification: The Bioluminescent Narrative

## 1. Overview & Creative North Star

**Creative North Star: The Bioluminescent Narrative**

This design system is built to move XD Media beyond the "startup-in-a-box" aesthetic. We are not just building a website; we are crafting a high-end digital environment that feels alive. By pairing deep, atmospheric depths (the dark green-black void) with high-energy, bioluminescent accents (neon green), we create a sense of growth and high-performance energy.

To achieve a signature editorial look, we reject the rigid, boxy constraints of standard web design. We embrace **Intentional Asymmetry**—overlapping elements, text that breaks container boundaries, and large-scale typography that commands attention. The goal is "Digital Luxury": a layout that breathes, feels expensive, and prioritizes white space as much as the content itself.

---

## 2. Colors & Tonal Depth

Our palette is rooted in the "Abyssal Green" spectrum. We use depth to imply sophistication.

### The Palette (Core Tokens)
*   **Background (Surface):** `#00180c` — A deep, rich void that serves as our canvas.
*   **Primary (Bioluminescent):** `#4be277` — Use for high-impact moments.
*   **Primary Container (CTA Base):** `#22c55e` — The core of our interactive elements.
*   **Surface Tiers:** 
    *   `surface_container_lowest`: `#001208` (For recessed areas)
    *   `surface_container_high`: `#0d3020` (For elevated cards)
    *   `surface_container_highest`: `#193b2a` (For active/hover states)

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Sectioning must be achieved through:
1.  **Tonal Shifts:** Transitioning from `surface` to `surface_container_low`.
2.  **Negative Space:** Using the spacing scale to create distinct visual groups.
3.  **Soft Gradients:** Subtle radial overlays of `surface_bright` to guide the eye.

### Surface Hierarchy & Nesting
Think of the UI as layers of dark, semi-transparent obsidian. 
*   **Level 0:** `surface` (The foundation).
*   **Level 1:** `surface_container_low` (In-page sections).
*   **Level 2:** `surface_container_high` (Interactive cards).
Nesting an "Inner" element should always result in a tonal move toward "Brighter/Greener" rather than "Darker."

### Signature Textures: The "Aura"
Main CTAs and Hero sections should utilize a **Bioluminescent Glow**. This is a subtle radial gradient behind an element (e.g., `primary` at 15% opacity transitioning to `transparent`) to give the impression that the element is emitting light into the dark environment.

---

## 3. Typography: Editorial Authority

We use a high-contrast pairing to distinguish between "The Message" and "The Detail."

*   **Display & Headlines:** *Plus Jakarta Sans.* This is our voice. It must be bold, high-contrast, and occasionally use negative letter-spacing (-0.02em) for a tighter, premium feel. 
    *   `display-lg`: 3.5rem (The Hero Statement)
    *   `headline-lg`: 2rem (Section Entrances)
*   **Body & Labels:** *Inter.* Chosen for its surgical precision and readability against dark backgrounds.
    *   `body-lg`: 1rem (Primary reading)
    *   `label-md`: 0.75rem (Uppercase, tracked out +10% for metadata).

**Hierarchy Note:** Use `on_surface` (light mint) for body text and `white` for headings. Never use pure gray; always ensure a hint of green saturation is present in the text to maintain the "Bioluminescent" mood.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are forbidden. We use **Ambient Light** and **Materiality**.

### The Layering Principle
Depth is achieved by "stacking" surface tokens. A `surface_container_highest` card placed on a `surface` background creates a natural, soft lift.

### Ambient Glows (The Shadow Replacement)
When a floating effect is required, use a shadow color tinted with the primary green (e.g., `primary` at 8% opacity) with a very large blur radius (40px+). This creates a "glow" rather than a "shadow," fitting our bioluminescent theme.

### Glassmorphism & Ghost Borders
For floating navigation or overlay cards:
*   **Fill:** `surface_variant` at 40% opacity.
*   **Effect:** `backdrop-filter: blur(20px)`.
*   **The Ghost Border:** If containment is required, use `outline_variant` at 15% opacity. It should be barely visible—a "suggestion" of an edge.

---

## 5. Components

### Buttons
*   **Primary:** `primary_container` background, `on_primary_container` text.
*   **Visual Soul:** On hover, apply a `0 0 25px` glow using the `primary` token.
*   **Radius:** `full` (pill-shaped) or `xl` (3rem) to maintain the organic feel.

### Interactive Cards
*   **Base:** `surface_container_high` with `xl` (3rem) corner radius.
*   **Interaction:** On hover, the card should scale (1.02x) and the background should shift to `surface_container_highest`. 
*   **Rule:** No dividers. Separate internal card content using `body-sm` vs `title-md` hierarchy and padding.

### Input Fields
*   **Style:** Ghost-style. No solid fill. Use a `surface_container_highest` bottom border (2px) that transforms into `primary` on focus.
*   **Feedback:** Error states use `error` (#ffb4ab) but must maintain the glassmorphism blur if inside a modal.

### Progress Indicators
*   **Visual:** Use a "Glow-trail" effect. A progress bar should have a `primary` head with a fading gradient tail, making it look like a moving light source.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme vertical padding (e.g., 120px+) between sections to emphasize luxury.
*   **Do** overlap elements. Let a heading bleed 20px over a card's edge to break the "grid" feel.
*   **Do** use the `lg` and `xl` border radii consistently to keep the interface feeling soft and modern.

### Don't:
*   **Don't** use 1px solid borders for sectioning. It looks "templatey" and cheap.
*   **Don't** use pure black (#000000). Our depth comes from the deep green-black `surface` (#00180c).
*   **Don't** use standard "drop shadows" (black with 25% opacity). It muddies the bioluminescent effect.
*   **Don't** crowd the layout. If you think it needs more space, double it.

---

## 7. Spacing Scale

We utilize a loose, airy spacing scale to ensure the "Editorial" feel.
*   **Internal Card Padding:** `xl` (3rem).
*   **Section Gaps:** `2xl` (6rem) to `4xl` (12rem).
*   **Text Lead:** Generous line-height (1.6 for body) to ensure the dark background doesn't feel "heavy" or claustrophobic.