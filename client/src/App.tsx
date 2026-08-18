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

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
