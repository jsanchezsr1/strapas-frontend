## Context

The pricing page already includes a hero section, billing toggle, pricing grid, and enterprise CTA inside a single outer section. Its content flows from the top with fixed top and bottom padding, which works functionally but leaves the composition visually high in the viewport on larger displays.

## Goals / Non-Goals

**Goals:**
- Center the pricing page's main content vertically when the viewport has enough height.
- Preserve scrolling behavior when the content is taller than the viewport.
- Keep the existing pricing cards, billing toggle, and enterprise CTA intact.

**Non-Goals:**
- Redesign the pricing page visual language.
- Change pricing copy, plan order, or billing interactions.
- Introduce JavaScript-driven viewport measurement for layout.

## Decisions

- Use CSS layout primitives such as `min-h-screen`, flexbox, and responsive alignment utilities on the outer pricing container.
  - Alternative considered: calculating viewport height in JavaScript and applying inline styles. This was rejected because the layout requirement is static and CSS is simpler and more robust.
- Keep vertical centering responsive so the page can align toward the top on smaller screens where content height exceeds the viewport.
  - Alternative considered: forcing perfect centering on all screen sizes. This was rejected because it could push important pricing content off-screen and harm usability on shorter viewports.
- Treat the pricing page content as one centered stack rather than centering only the hero block.
  - Alternative considered: centering just the headline area. This was rejected because the request refers to the page content on screen, and partial centering would feel visually disconnected from the plan grid.

## Risks / Trade-offs

- Large displays may still show some extra whitespace because the pricing grid is tall -> Mitigation: combine viewport minimum height with balanced padding rather than over-constraining the layout.
- Smaller laptops may have less room for the full pricing stack -> Mitigation: allow natural overflow and scrolling instead of fixed-height locking.
- Adjusting outer layout wrappers could affect downstream section spacing -> Mitigation: keep the changes scoped to the pricing page container and verify the CTA still sits naturally in the flow.
