import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import HomePage from "./pages/HomePage";
import RegionPage from "./pages/RegionPage";
import TopicPage from "./pages/TopicPage";
import StudyPage from "./pages/StudyPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfileGate from "./components/profile/ProfileGate";
import { useUserState } from "./store/useUserState";
import { useQuizStats } from "./store/useQuizStats";
import { useProfiles } from "./store/useProfiles";

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

  useEffect(() => {
    loadProfiles();
  }, [loadProfiles]);

  // Ao entrar/trocar de perfil, recarrega os dados isolados desse perfil.
  useEffect(() => {
    if (activeId) {
      void hydrateUser(activeId);
      void hydrateQuiz(activeId);
    }
  }, [activeId, hydrateUser, hydrateQuiz]);

  if (!loaded) return null;
  if (!activeId) return <ProfileGate />;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="regiao/:regionId" element={<RegionPage />} />
          <Route path="topico/:slug" element={<TopicPage />} />
          <Route path="estudo" element={<StudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
