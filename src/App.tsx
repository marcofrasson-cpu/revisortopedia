import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import ProfileGate from "./components/profile/ProfileGate";
import { useUserState } from "./store/useUserState";
import { useQuizStats } from "./store/useQuizStats";
import { useProfiles } from "./store/useProfiles";
import { useFlashcardStats } from "./store/useFlashcardStats";

/* Rotas sob demanda. O peso do app é conteúdo, e cada rota quer um recorte
   diferente dele: a home só precisa da árvore de navegação, enquanto o tópico
   arrasta o corpo dos 98 tópicos e as figuras SVG (~1,5 s de eval somados), e o
   modo estudo arrasta as questões e os flashcards derivados deles. Estáticos,
   todos caíam no chunk inicial e a home pagava por telas que ninguém abriu.
   O PWA continua com tudo em precache — muda o que roda antes do primeiro paint,
   não o que fica disponível offline. */
const HomePage = lazy(() => import("./pages/HomePage"));
const RegionPage = lazy(() => import("./pages/RegionPage"));
const TopicPage = lazy(() => import("./pages/TopicPage"));
const StudyPage = lazy(() => import("./pages/StudyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/** Reset scroll on route change (hash routing keeps the old scroll otherwise). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const loaded = useProfiles((s) => s.loaded);
  const activeId = useProfiles((s) => s.activeId);
  const loadProfiles = useProfiles((s) => s.load);
  const hydrateUser = useUserState((s) => s.hydrate);
  const hydrateQuiz = useQuizStats((s) => s.hydrate);
  const hydrateFlashcards = useFlashcardStats((s) => s.hydrate);

  useEffect(() => {
    loadProfiles();
  }, [loadProfiles]);

  // Ao entrar/trocar de perfil, recarrega os dados isolados desse perfil.
  useEffect(() => {
    if (activeId) {
      void hydrateUser(activeId);
      void hydrateQuiz(activeId);
      void hydrateFlashcards(activeId);
    }
  }, [activeId, hydrateUser, hydrateQuiz, hydrateFlashcards]);

  if (!loaded) return null;
  if (!activeId) return <ProfileGate />;

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="regiao/:regionId" element={<RegionPage />} />
            <Route path="topico/:slug" element={<TopicPage />} />
            <Route path="estudo" element={<StudyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
