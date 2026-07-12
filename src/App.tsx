import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import HomePage from "./pages/HomePage";
import RegionPage from "./pages/RegionPage";
import TopicPage from "./pages/TopicPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useUserState } from "./store/useUserState";

export default function App() {
  const hydrate = useUserState((s) => s.hydrate);
  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="regiao/:regionId" element={<RegionPage />} />
        <Route path="topico/:slug" element={<TopicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
