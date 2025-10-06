import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`${normalize}
  :root {
  font-size: 16px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --font-body: "Karla", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --font-heading: 'Markazi Text', serif;
  --fs-h1: clamp(2.25rem, 2.4vw + 1.6rem, 3.25rem);
  --fs-h2: clamp(1.75rem, 1.6vw + 1.2rem, 2.25rem);
  --fs-h3: 1.5rem;
  --fs-h4: 1.25rem;

  --color-primary: #F4CE14; /* lemon */
  --color-secondary: #495E57; /* dark olive green */
  --color-accent: #EE9972; /* light orange */
  --color-primary-text: #1F1F1F; /* very dark gray */
  --color-secondary-text: #333333;
  --color-surface-soft: #EDEFEE; /* light gray */
  --color-surface: #FFFFFF; /* white */
}

body {
  font-family: var(--font-body);
  font-size: 1rem;      /* 16px */
  line-height: 1.5;
}
`