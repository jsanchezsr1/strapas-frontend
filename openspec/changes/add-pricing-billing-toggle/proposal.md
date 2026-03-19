## Why

The pricing page currently presents annual billing only, which makes it harder to communicate that users can start on a lower-commitment option before upgrading. Adding a billing-period toggle clarifies the entry point and makes the plan presentation feel more flexible without redesigning the page.

## What Changes

- Add supporting copy below the pricing page intro that reinforces a free starting point and upgrade path.
- Add a billing toggle control under the new copy with `Yearly (save 20%)` and `Monthly` states.
- Update pricing cards so the `Billed annually` label is shown only when the yearly option is active and hidden when monthly is selected.
- Preserve the current premium visual language and keep the interaction clear on desktop and mobile.

## Capabilities

### New Capabilities
- `pricing-billing-toggle`: Defines pricing page behavior for switching between yearly and monthly billing presentation.

### Modified Capabilities

## Impact

- Affects `app/pricing/page.tsx` and its pricing page UI behavior.
- Introduces lightweight client-side state for the billing toggle interaction.
- Requires a new spec describing the billing toggle copy, control, and annual-label visibility behavior.
