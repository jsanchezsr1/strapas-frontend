## 1. Pricing Page State And Hero Updates

- [x] 1.1 Convert `app/pricing/page.tsx` to use local client-side billing state.
- [x] 1.2 Add the `Start for free. Upgrade when you're ready.` supporting copy below the pricing intro.
- [x] 1.3 Add a responsive billing toggle control with `Yearly (save 20%)` and `Monthly` options that reflects the active selection.

## 2. Pricing Card Billing Label Behavior

- [x] 2.1 Pass the selected billing mode into `PricingCard` and show `Billed annually` only for paid plans in yearly mode.
- [x] 2.2 Ensure monthly mode hides every annual billing label without changing existing prices or other plan content.
- [x] 2.3 Verify the updated layout and toggle interaction remain clear on mobile and desktop.
