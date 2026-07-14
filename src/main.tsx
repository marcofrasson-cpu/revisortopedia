import "@fontsource-variable/newsreader";
import "@fontsource-variable/hanken-grotesk";
/* Só o latim: o pacote completo traz cirílico, cirílico estendido e vietnamita,
   que este manual em pt-BR nunca renderiza mas o PWA precacheava assim mesmo.
   O subset latino cobre todo acento do português (U+0000-00FF) e a pontuação
   tipográfica (U+2000-206F, onde vive o travessão dos eyebrows). */
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-600.css";
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
