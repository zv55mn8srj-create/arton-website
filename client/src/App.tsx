import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useHashScroll } from "./components/Header";
import StartPage from "./pages/StartPage";
import CuratorPage from "./pages/CuratorPage";
import B2BPage from "./pages/B2BPage";
import { installClickTracking, trackPageView } from "./lib/analytics";


function ScrollToTop() {
  const [location] = useLocation();
  // When navigating to any route (including sub-pages like /start, /curator,
  // /b2b from the bottom of the homepage), scroll back to the top so the
  // visitor sees the beginning of the page instead of its bottom.
  useEffect(() => {
    const base = location.includes("#") ? location.split("#")[0] : location;
    if (base !== "") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);
  return null;
}

function Router() {
  // Auto-scroll to the target section when arriving at the homepage with a
  // hash (e.g. navigating "/#enterprise" from a sub-page or loading it directly).
  useHashScroll();
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/start"} component={StartPage} />
      <Route path={"/curator"} component={CuratorPage} />
      <Route path={"/b2b"} component={B2BPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ArtON — Turn Art ON | 智慧藝術畫框與數位藝術展示",
    description: "ArtON 以智慧藝術畫框與數位策展，讓藝術走進企業、診所、飯店與生活空間；企業訂閱藝術，也能持續支持創作者並累積 ESG 影響力。",
  },
  "/start": {
    title: "選擇藝術展示方案｜ArtON 智慧藝術畫框",
    description: "從輕量訂閱、ArtON Box 到企業展示配置，選擇適合你的藝術展示方案，讓空間持續更新作品。",
  },
  "/b2b": {
    title: "企業 ESG 訂閱方案｜ArtON 文化永續展示",
    description: "企業訂閱 ArtON，持續展示藝術、支持身心障礙創作者，並累積可記錄的 ESG 社會影響與永續成果。",
  },
  "/curator": {
    title: "策展人加入合作｜ArtON 數位策展",
    description: "將你的策展眼光帶進更多展示空間，依 ArtON 合作規格上架策展，讓更多人看見你的創作與策展故事。",
  },
};

function SeoAndAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    const pathname = location.split("#")[0] || "/";
    const meta = PAGE_META[pathname] || PAGE_META["/"];
    const canonicalPath = pathname === "/" ? "/" : pathname;
    const canonicalUrl = `https://arton.tw${canonicalPath}`;

    document.title = meta.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", meta.description);
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute("href", canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);
    trackPageView(`${pathname}${location.includes("#") ? location.slice(location.indexOf("#")) : ""}`);
  }, [location]);

  useEffect(() => installClickTracking(), []);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <SeoAndAnalytics />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
