## Why

The site currently presents all content in a single language, which makes it less accessible to visitors who prefer other major languages. Adding a global language selector in the main navigation allows users to switch the entire experience into their preferred language without leaving the current page.

## What Changes

- Add a global language icon to the top-right area of the navigation bar, positioned to the left of `Start Building`.
- Show a hover-triggered language menu with `English`, `Francais`, `Portugués`, `Italiano`, and `Español`.
- Translate the full site UI into the selected language after the user chooses an option.
- Preserve the selected language across navigation so the entire site stays in the chosen language until changed again.

## Capabilities

### New Capabilities
- `global-language-selector`: Defines the navigation language icon, hover menu, and language selection behavior.
- `site-localization`: Defines how shared site content is translated and rendered for supported languages.

### Modified Capabilities

## Impact

- Affects shared navigation/header UI and likely root app layout components.
- Requires a translation structure for common site copy across pages.
- May require client-side state, routing strategy, or persisted preference handling for language selection.
