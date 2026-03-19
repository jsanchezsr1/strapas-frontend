## ADDED Requirements

### Requirement: Navigation shows language selector icon
The site SHALL display a global language selector icon in the top-right navigation area to the left of the `Start Building` action.

#### Scenario: Navigation renders language icon
- **WHEN** a user views any page with the shared navigation bar
- **THEN** a language selector icon is visible in the top-right navigation area
- **AND** the icon appears to the left of `Start Building`

### Requirement: Language selector reveals supported options
The site SHALL reveal the supported language options `English`, `Francais`, `Portugués`, `Italiano`, and `Español` when the user interacts with the language selector.

#### Scenario: User opens language menu
- **WHEN** the user hovers over or focuses the language selector
- **THEN** the site shows options for `English`, `Francais`, `Portugués`, `Italiano`, and `Español`

### Requirement: Language selection updates active site language
The site SHALL update the active site language when the user selects one of the supported language options.

#### Scenario: User chooses a language
- **WHEN** the user selects one of the supported language options
- **THEN** the selected language becomes the active site language
