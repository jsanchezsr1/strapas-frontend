## ADDED Requirements

### Requirement: Pricing page viewport centering
The pricing page SHALL vertically center its primary content stack within the viewport when the viewport height allows the content to fit without clipping.

#### Scenario: Large viewport centers pricing content
- **WHEN** a user opens the pricing page on a viewport taller than the content stack
- **THEN** the main pricing content is positioned with balanced vertical spacing in the viewport

### Requirement: Pricing page remains scrollable on constrained screens
The pricing page SHALL preserve natural document flow and scrolling behavior when the content height exceeds the available viewport height.

#### Scenario: Short viewport preserves access to all pricing content
- **WHEN** a user opens the pricing page on a shorter viewport where the content stack exceeds the screen height
- **THEN** the page remains scrollable
- **AND** no pricing content is clipped or made inaccessible by forced centering
