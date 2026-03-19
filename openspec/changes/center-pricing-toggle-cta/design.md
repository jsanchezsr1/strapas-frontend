## Context

The pricing page hero currently contains a short supporting sentence and a billing toggle beneath the main description. That small callout block uses `items-start`, which keeps both elements left-aligned even though they act as a focused secondary CTA above the pricing grid.

## Goals / Non-Goals

**Goals:**
- Center the supporting sentence and billing toggle within the pricing hero content block.
- Preserve the current toggle interaction and visual styling.
- Keep the layout responsive so the centered block still reads clearly on smaller screens.

**Non-Goals:**
- Change the pricing headline or description alignment.
- Alter pricing card layout, pricing values, or billing behavior.
- Introduce new components or client-side logic beyond alignment changes.

## Decisions

- Adjust the hero callout wrapper to use centered alignment utilities instead of left alignment.
  - Alternative considered: centering only the toggle and leaving the copy left-aligned. This was rejected because the request targets both elements as a paired block.
- Keep the supporting copy text centered so it visually anchors with the toggle underneath.
  - Alternative considered: centering the wrapper but leaving text alignment unchanged. This was rejected because the sentence would still read visually offset.
- Scope the update to the callout block only, leaving the rest of the hero layout unchanged.
  - Alternative considered: centering the full hero section. This was rejected because the request is specifically about the supporting copy and button block.

## Risks / Trade-offs

- Centering the callout could reduce left-edge alignment consistency with the rest of the hero copy -> Mitigation: limit the change to the compact CTA block so it feels intentionally highlighted.
- Longer toggle labels could wrap awkwardly on narrow screens -> Mitigation: keep the existing responsive sizing and verify the centered layout still fits cleanly.
- A centered wrapper may look too detached from the hero copy if spacing is excessive -> Mitigation: preserve the current vertical spacing rhythm and only change alignment.
