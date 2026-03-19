## ADDED Requirements

### Requirement: Pricing page billing toggle
The pricing page SHALL display supporting upgrade copy below the introductory description and SHALL provide a billing toggle with `Yearly (save 20%)` and `Monthly` options.

#### Scenario: Pricing hero shows billing controls
- **WHEN** a user views the pricing page
- **THEN** the page shows the text `Start for free. Upgrade when you're ready.` below the existing intro copy
- **AND** the page shows controls for `Yearly (save 20%)` and `Monthly`

### Requirement: Annual billing label visibility
The pricing page SHALL show the `Billed annually` label on paid plan cards only while the yearly option is active, and SHALL hide that label when the monthly option is active.

#### Scenario: Yearly billing selected
- **WHEN** the pricing page loads or the user selects `Yearly (save 20%)`
- **THEN** each paid plan card shows the `Billed annually` label
- **AND** the free plan does not show an annual billing label

#### Scenario: Monthly billing selected
- **WHEN** the user selects `Monthly`
- **THEN** all `Billed annually` labels are hidden from the pricing cards
