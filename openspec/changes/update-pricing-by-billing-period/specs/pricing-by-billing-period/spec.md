## ADDED Requirements

### Requirement: Pricing cards show yearly prices
The pricing page SHALL display yearly prices for paid plans when `Yearly (save 20%)` is selected.

#### Scenario: Yearly pricing values are shown
- **WHEN** the pricing page loads or the user selects `Yearly (save 20%)`
- **THEN** the Elite plan shows `$150`
- **AND** the Pro plan shows `$70`
- **AND** the Builder plan shows `$30`
- **AND** the Starter plan shows `$15`

### Requirement: Pricing cards show monthly prices
The pricing page SHALL display monthly prices for paid plans when `Monthly` is selected.

#### Scenario: Monthly pricing values are shown
- **WHEN** the user selects `Monthly`
- **THEN** the Elite plan shows `$190`
- **AND** the Pro plan shows `$90`
- **AND** the Builder plan shows `$40`
- **AND** the Starter plan shows `$20`

### Requirement: Free plan remains unchanged
The pricing page SHALL keep the free plan price unchanged across billing states.

#### Scenario: Free plan stays free
- **WHEN** the user switches between yearly and monthly billing
- **THEN** the Free plan continues to show `$0`
