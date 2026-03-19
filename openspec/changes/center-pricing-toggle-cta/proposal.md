## Why

The supporting pricing copy and billing toggle currently align to the left edge of the hero content, which makes that callout feel visually detached from the center of the page. Centering this mini-call-to-action gives it more emphasis and creates a cleaner focal point above the pricing grid.

## What Changes

- Center the `Start for free. Upgrade when you're ready.` supporting copy within the pricing hero area.
- Center the billing toggle control containing `Yearly (save 20%)` and `Monthly` beneath that supporting copy.
- Preserve the existing billing toggle behavior, spacing rhythm, and responsiveness while adjusting alignment.

## Capabilities

### New Capabilities
- `pricing-hero-toggle-centering`: Defines centered alignment for the pricing hero supporting copy and billing toggle.

### Modified Capabilities

## Impact

- Affects hero layout styling in `app/pricing/page.tsx`.
- Keeps the current billing state behavior intact while refining presentation.
- Requires a spec covering centered alignment and responsive behavior for the hero callout block.
