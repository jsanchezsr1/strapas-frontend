## ADDED Requirements

### Requirement: Site content reflects selected language
The site SHALL render site-controlled UI text in the language selected by the user.

#### Scenario: Selected language updates visible copy
- **WHEN** the user selects a supported language from the global language selector
- **THEN** shared navigation text and page content controlled by the app are displayed in that language

### Requirement: Language preference persists across navigation
The site SHALL preserve the selected language as the user navigates between pages.

#### Scenario: User moves to another page
- **WHEN** the user selects a supported language and then navigates to another page in the site
- **THEN** the newly opened page uses the same selected language

### Requirement: Language preference persists until changed
The site SHALL keep using the selected language until the user chooses a different one.

#### Scenario: User returns later in same browser
- **WHEN** the user has previously selected a supported language and later revisits or refreshes the site in the same browser
- **THEN** the site continues using that previously selected language until the user changes it
