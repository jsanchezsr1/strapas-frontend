## Why

The pricing toggle currently changes only the billing label, which makes the yearly and monthly states feel incomplete and potentially misleading. Updating the displayed prices to match the selected billing period makes the toggle meaningful and communicates plan differences more clearly.

## What Changes

- Update paid pricing cards so displayed prices change when the user switches between `Yearly (save 20%)` and `Monthly`.
- Show yearly prices as `$150` for Elite, `$70` for Pro, `$30` for Builder, and `$15` for Starter.
- Show monthly prices as `$190` for Elite, `$90` for Pro, `$40` for Builder, and `$20` for Starter.
- Preserve the free plan pricing and existing billing-label visibility behavior.

## Capabilities

### New Capabilities
- `pricing-by-billing-period`: Defines billing-period-specific price presentation on the pricing page.

### Modified Capabilities

## Impact

- Affects pricing display logic in `app/pricing/page.tsx`.
- Requires plan pricing data to support multiple prices per billing period.
- Requires a spec covering the expected yearly and monthly values for each paid plan.
