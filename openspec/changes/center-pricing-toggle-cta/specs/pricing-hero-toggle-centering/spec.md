## ADDED Requirements

### Requirement: Centered pricing hero callout block
The pricing page SHALL center the `Start for free. Upgrade when you're ready.` supporting copy and the billing toggle block within the pricing hero area.

#### Scenario: Pricing hero centers callout content
- **WHEN** a user views the pricing page
- **THEN** the supporting copy is centered within the hero callout block
- **AND** the billing toggle is centered directly beneath it

### Requirement: Responsive centered callout behavior
The pricing page SHALL preserve the centered alignment of the supporting copy and billing toggle across supported screen sizes without breaking the existing billing toggle interaction.

#### Scenario: Smaller viewport keeps centered callout usable
- **WHEN** a user views the pricing page on a smaller screen
- **THEN** the supporting copy and billing toggle remain centered and readable
- **AND** the billing toggle options remain interactive and visible
