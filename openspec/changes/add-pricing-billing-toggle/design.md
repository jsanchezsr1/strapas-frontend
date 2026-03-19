## Context

`app/pricing/page.tsx` is currently a static server component that renders plan cards with a fixed `Billed annually` label for paid plans. The requested change adds marketing copy plus a billing-period toggle that updates the label visibility in-place, so the page needs a small amount of client-side interactivity while preserving the existing visual treatment and responsive layout.

## Goals / Non-Goals

**Goals:**
- Add a short supporting message below the pricing intro.
- Add a two-state billing toggle for yearly and monthly selection.
- Show `Billed annually` only when yearly billing is active.
- Keep the interaction lightweight and scoped to the pricing page.

**Non-Goals:**
- Recalculate or replace the displayed plan prices.
- Change plan order, card content, or enterprise CTA behavior.
- Introduce backend billing logic or persistence for the selected state.

## Decisions

- Convert the pricing page module to a client component so it can hold a local billing-period state with `useState`.
  - Alternative considered: splitting the toggle into a nested client component while keeping the page server-rendered. This was rejected because the billing state also affects card rendering, so lifting the state to the page keeps the implementation simpler for a single-file UI.
- Thread the selected billing mode into `PricingCard` and conditionally render the annual billing label only for paid plans when the yearly option is selected.
  - Alternative considered: hiding the label with CSS only. This was rejected because explicit conditional rendering is easier to reason about and avoids leaving unused UI in the accessibility tree.
- Implement the toggle as a pill-style button group aligned with the existing premium visual language and sized to work on both mobile and desktop.
  - Alternative considered: using a checkbox-style switch. This was rejected because the request names two explicit billing options and the copy is clearer as a segmented control.

## Risks / Trade-offs

- Converting the page to a client component increases client-side JavaScript slightly -> Mitigation: keep state local, avoid new dependencies, and limit the interaction to simple conditional rendering.
- Users may expect prices to change when monthly is selected -> Mitigation: scope the initial behavior to the requested annual-label visibility and keep the toggle labels explicit.
- The new control could crowd the hero area on smaller screens -> Mitigation: stack the copy and toggle vertically with responsive spacing.
