/**
 * ArtON Header / Navigation
 * Design: Gallery Quietism - minimal, warm, elegant
 */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { LINKS } from "@/lib/links";

// Anchors live on the homepage; from sub-pages, link back to "/" + anchor.
const HOME_ANCHORS: Record<string, string> = {
  about: "/#about",
  enterprise: "/#enterprise",
  explore: "/#explore",
  faq: "/#faq",
};

function resolveHref(href: string): string {
  return href.startsWith("#") ? (HOME_ANCHORS[href] ?? `/`) : href;
}


const navLinks = [
  { label: "關於 ArtON", href: "#about" },
  { label: "企業 ESG", href: "#enterprise" },
  { label: "開始展示", href: "/start" },
  { label: "探索策展", href: "#explore" },
  { label: "常見問題", href: "#faq" },
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
        <a href="#" className="flex items-center gap-1">
          <span className="text-[28px] font-display font-light tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: scrolled ? "#1C1C1E" : "#FFFFFF" }}>
            Art
          </span>
          <svg viewBox="0 0 16 16" className="w-5 h-5 -mt-0.5" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1 A7 7 0 1 1 1 8" fill="none" stroke="#C4A265" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="8" y1="1" x2="8" y2="7" stroke="#C4A265" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="text-[28px] font-display font-light tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: scrolled ? "#1C1C1E" : "#FFFFFF" }}>
            N
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className={`text-[15px] font-normal transition-colors duration-300 tracking-wide ${
                scrolled ? "text-[#1C1C1E]/70 hover:text-[#C4A265]" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/b2b"
            className={`text-[14px] font-medium border px-4 py-2 rounded-full transition-colors duration-300 ${
              scrolled
                ? "border-[#C4A265]/50 text-[#B8954F] hover:bg-[#C4A265]/8"
                : "border-white/40 text-white/90 hover:bg-white/8"
            }`}
          >
            企業 ESG 方案
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/curator"
            className={`text-[15px] font-medium transition-colors duration-300 ${
              scrolled ? "text-[#1C1C1E] hover:text-[#C4A265]" : "text-white hover:text-[#C4A265]"
            }`}
          >
            成為策展人
          </Link>
          <Link
            href="/start"
            className="px-5 py-2.5 bg-[#C4A265] text-white text-[15px] font-medium rounded-full hover:bg-[#b8954f] transition-all duration-300 hover:shadow-lg"
          >
            開始展示
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
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setMobileOpen(false)}
                className="text-[16px] text-[#1C1C1E]/80 py-2 hover:text-[#C4A265] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#E5E5E3]">
              <Link href="/curator" onClick={() => setMobileOpen(false)} className="text-center text-[15px] text-[#1C1C1E] font-medium py-2">
                成為策展人
              </Link>
              <Link href="/start" onClick={() => setMobileOpen(false)} className="text-center px-5 py-2.5 bg-[#C4A265] text-white text-[15px] font-medium rounded-full">
                開始展示
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
