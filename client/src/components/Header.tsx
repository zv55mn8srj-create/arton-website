/**
 * ArtON Header / Navigation
 * Design: Gallery Quietism - minimal, warm, elegant
 */
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "wouter";
import { LINKS } from "@/lib/links";

const NAV_ANCHORS = ["about", "enterprise", "explore", "faq"] as const;

/**
 * Smooth-scroll to a section on the homepage, retrying until the section
 * exists in the DOM (sections mount with scroll animations).
 */
export function scrollToAnchor(anchorId: string): void {
  const tryScroll = (attempt = 0): void => {
    const target = document.getElementById(anchorId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${anchorId}`);
    } else if (attempt < 12) {
      setTimeout(() => tryScroll(attempt + 1), attempt < 3 ? 80 : 150);
    } else {
      history.replaceState(null, "", `/#${anchorId}`);
      window.scrollTo({ top: 0 });
    }
  };
  tryScroll();
}

/**
 * Auto-scroll to a hash anchor when navigating to the homepage (or loading it
 * directly with a hash), e.g. /#about or /start -> click anchor.
 */
export function useHashScroll(): void {
  const [location] = useLocation();
  const handledRef = useRef<string | null>(null);

  useEffect(() => {
    const hash = location.includes("#")
      ? location.split("#")[1]
      : window.location.hash.replace("#", "");
    if (hash && NAV_ANCHORS.includes(hash as (typeof NAV_ANCHORS)[number])) {
      if (handledRef.current === hash) return;
      handledRef.current = hash;
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          setTimeout(() => {
            const retry = document.getElementById(hash);
            if (retry) retry.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 200);
        }
      }, 60);
    }
  }, [location]);
}


const navLinks = [
  { label: "關於 ArtON", anchor: "about" },
  { label: "企業 ESG", anchor: "enterprise" },
  { label: "探索策展", anchor: "explore" },
  { label: "常見問題", anchor: "faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center h-16 py-2">
          {/* 官方 Logo：透明底（深灰字＋黃色電源符號）
              未滾動時（深色 hero 底）：白色字版，黃圓保留
              滾動後（白色導覽列底）：原始深灰字版 */}
          <img
            src={scrolled ? "/manus-storage/arton-logo-official_fa5df696.png" : "/manus-storage/arton-logo-white_de90f326.png"}
            alt="ArtON — Turn Art ON"
            className="h-full w-auto object-contain transition-opacity duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <AnchorLink key={link.anchor} anchor={link.anchor} scrolled={scrolled}>
              {link.label}
            </AnchorLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/curator"
            className={`text-[15px] font-medium transition-colors duration-300 ${
              scrolled ? "text-[#1C1C1E] hover:text-[#C4A265]" : "text-white hover:text-[#C4A265]"
            }`}
          >
            策展人加入
          </Link>
          <a
            href="/b2b"
            className={`text-[14px] font-medium border px-4 py-2 rounded-full transition-colors duration-300 ${
              scrolled
                ? "border-[#C4A265]/50 text-[#B8954F] hover:bg-[#C4A265]/8"
                : "border-white/40 text-white/90 hover:bg-white/8"
            }`}
          >
            企業訂閱方案
          </a>
          <Link
            href="/start"
            className="px-5 py-2.5 bg-[#C4A265] text-white text-[15px] font-medium rounded-full hover:bg-[#b8954f] transition-all duration-300 hover:shadow-lg"
          >
            選擇方案
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-[#1C1C1E]" : "text-white"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#E5E5E3]">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <AnchorLink
                key={link.anchor}
                anchor={link.anchor}
                mobile
                onClose={() => setMobileOpen(false)}
              >
                {link.label}
              </AnchorLink>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#E5E5E3]">
              <Link href="/b2b" onClick={() => setMobileOpen(false)} className="text-center text-[15px] text-[#1C1C1E] font-medium py-2 border border-[#C4A265]/50 rounded-full">
                企業訂閱方案
              </Link>
              <Link href="/curator" onClick={() => setMobileOpen(false)} className="text-center text-[15px] text-[#1C1C1E] font-medium py-2">
                策展人加入
              </Link>
              <Link href="/start" onClick={() => setMobileOpen(false)} className="text-center px-5 py-2.5 bg-[#C4A265] text-white text-[15px] font-medium rounded-full">
                選擇方案
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/**
 * AnchorLink — works identically from the homepage and any sub-page:
 * - Homepage: smooth-scroll directly to the section.
 * - Sub-page: navigate to "/#<anchor>"; useHashScroll (or retry loop) scrolls
 *   once the homepage mounts the target section.
 */
function AnchorLink({
  anchor,
  scrolled = false,
  mobile,
  onClose,
  children,
}: {
  anchor: string;
  scrolled?: boolean;
  mobile?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}) {
  const [location] = useLocation();
  const isHome = location === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose?.();
    if (isHome) {
      scrollToAnchor(anchor);
    } else {
      // From a sub-page: a full navigation to /#<anchor> guarantees the
      // homepage loads with the hash, so useHashScroll scrolls to the target.
      window.location.href = `/#${anchor}`;
    }
  };

  return (
    <a
      href={`/#${anchor}`}
      onClick={handleClick}
      className={
        mobile
          ? "text-[16px] text-[#1C1C1E]/80 py-2 hover:text-[#C4A265] transition-colors"
          : `text-[15px] font-normal transition-colors duration-300 tracking-wide ${
              scrolled
                ? "text-[#1C1C1E]/70 hover:text-[#C4A265]"
                : "text-white/80 hover:text-white"
            }`
      }
    >
      {children}
    </a>
  );
}
