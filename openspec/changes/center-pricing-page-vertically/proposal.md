## Why

The pricing page currently starts near the top of the viewport, which makes the hero and plan grid feel less anchored on larger screens. Vertically centering the page content creates a more balanced presentation and gives the pricing experience a stronger full-screen feel.

## What Changes

- Update the pricing page layout so its primary content is vertically centered within the viewport where space allows.
- Preserve existing pricing content, billing toggle behavior, and card layout while adjusting section sizing and alignment.
- Keep the layout responsive so smaller screens can still scroll naturally without clipping content.

## Capabilities

### New Capabilities
- `pricing-page-vertical-centering`: Defines how the pricing page aligns its primary content vertically within the viewport.

### Modified Capabilities

## Impact

- Affects layout styling in `app/pricing/page.tsx`.
- May adjust outer section spacing and minimum-height behavior for the pricing page container.
- Requires a new spec covering viewport-centered presentation and responsive overflow behavior.
