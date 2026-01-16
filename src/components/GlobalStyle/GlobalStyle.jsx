import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`${normalize}
  :root {
  font-size: 16px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --font-body: "Karla", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --font-heading: 'Markazi Text', serif;
  --fs-h1: clamp(2.25rem, 2.4vw + 1.6rem, 3.25rem);
  --fs-h2: clamp(1.75rem, 1.6vw + 1.2rem, 2rem);
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

.review-toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  background: var(--color-primary);
  color: #111;
  padding: 12px 18px;
  border-radius: 999px;

  font-weight: 600;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);

  animation: fadeInOut 2.5s ease forwards;
  z-index: 99999;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  10% { opacity: 1; transform: translateX(-50%) translateY(0); }
  90% { opacity: 1; }
  100% { opacity: 0; }
}


`