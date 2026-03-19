## Context

The site currently uses a shared navigation bar with a `Start Building` call-to-action and renders all page copy in one language. The requested change introduces a global language switcher in the header and requires the selected language to affect the entire site, which means the implementation needs both a reusable selector UI and a centralized localization source for shared content.

## Goals / Non-Goals

**Goals:**
- Add a language icon in the top-right navigation area immediately to the left of `Start Building`.
- Show a hoverable language menu with `English`, `Francais`, `Portugués`, `Italiano`, and `Español`.
- Apply the selected language across the site and keep it consistent as the user navigates.
- Keep the implementation extensible so more translated strings can be added over time.

**Non-Goals:**
- Add automatic browser-language detection.
- Introduce machine translation at runtime.
- Translate third-party or externally hosted content not controlled by the app.

## Decisions

- Use a shared localization source keyed by language code for navigation and page copy rather than scattering translated literals inside components.
  - Alternative considered: embedding inline conditional text inside each component. This was rejected because it becomes hard to maintain as more pages are translated.
- Store the selected language in a global client-side state with persistence so the chosen language survives navigation and refreshes.
  - Alternative considered: limiting the selection to in-memory component state. This was rejected because the request expects the entire site to stay in the selected language.
- Implement the selector as a compact globe-style button with a hover/focus dropdown menu in the shared navigation.
  - Alternative considered: replacing `Start Building` with a text-only language switcher. This was rejected because the request explicitly asks for a global icon placed to the left of that button.
- Start by translating site-controlled UI strings and page copy in the app, using the same translation keys across pages where possible.
  - Alternative considered: rewriting routing to language-prefixed URLs immediately. This was rejected because a shared translation layer can satisfy the request with less disruption to the current app structure.

## Risks / Trade-offs

- Translating the entire site may uncover many hardcoded strings spread across multiple pages -> Mitigation: centralize translation keys and migrate pages incrementally against the shared dictionary.
- Hover-only menus can be less accessible on touch devices -> Mitigation: implement the language menu so it also works on click/focus interactions.
- Client-side localization can cause brief default-language rendering before hydration if not initialized carefully -> Mitigation: persist the selected language and initialize from storage as early as possible in the shared app shell.
