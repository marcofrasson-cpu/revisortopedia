import "@fontsource-variable/newsreader";
import "@fontsource-variable/hanken-grotesk";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import { applyStoredTheme } from "./store/useTheme.ts";

// Apply persisted theme before first paint to avoid a flash.
applyStoredTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
