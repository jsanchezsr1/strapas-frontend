## Context

The pricing page already has a yearly/monthly toggle and uses local client state to control billing-label visibility, but plan prices are still driven by a single static `price` field. To make the toggle meaningful, paid plans need billing-period-specific values while the free tier remains unchanged.

## Goals / Non-Goals

**Goals:**
- Display different paid-plan prices for yearly and monthly billing states.
- Keep the existing billing toggle interaction and annual-label behavior.
- Keep the implementation scoped to the pricing page data and rendering logic.

**Non-Goals:**
- Change credits, integrations, highlights, or other plan copy.
- Introduce backend billing logic or payment calculations.
- Alter the free plan pricing presentation.

## Decisions

- Replace the single paid-plan `price` value with billing-period-aware pricing data so the selected state directly determines the rendered amount.
  - Alternative considered: hardcoding conditional prices inside the JSX. This was rejected because plan data stays easier to maintain when pricing values live alongside each plan definition.
- Derive the displayed amount in `PricingCard` from the active `billingPeriod` while leaving the `/mo` suffix and annual-label visibility rules intact.
  - Alternative considered: computing a transformed plans array before render. This was rejected because per-card lookup is straightforward and avoids extra mapping logic.
- Keep the free plan on a single static price of `$0` across both billing states.
  - Alternative considered: giving the free tier billing-specific entries too. This was rejected because the requested values only change paid plans.

## Risks / Trade-offs

- Mixed data shapes between paid and free plans can complicate typing -> Mitigation: define pricing fields clearly and keep the card display logic explicit.
- A mismatched price table could show incorrect amounts -> Mitigation: encode the exact requested values in plan data and verify both billing states during implementation.
- Users may interpret `/mo` differently when yearly is selected -> Mitigation: preserve the existing `Billed annually` indicator for yearly mode.
