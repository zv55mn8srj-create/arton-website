/**
 * ArtON Hero Section — 產品價值導向（依 2026-08-16 反饋改版）
 * Gallery Quietism: cinematic full-screen art space, exhibition-scale type.
 * 核心訊息：讓藝術，持續發生在生活裡。
 * ArtON 是「持續更新的數位藝術展示」：每月新的藝術家 × 新的作品 × 新的展覽。
 * CTA：觀看 Demo（導 /start）、瀏覽方案。
 */
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[760px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-gallery_f188e269.jpg"
          alt="ArtON 藝術展示空間"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/58 to-black/16" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/14" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container pt-16">
          <div className="max-w-[820px]">
            <p
              className={`text-[#D6B876] text-[11px] md:text-[13px] uppercase tracking-[0.32em] mb-7 font-medium transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Art · Continuity · Together
            </p>

            <h1
              className={`text-[clamp(2.8rem,6.1vw,5.6rem)] leading-[1.08] text-white mb-8 font-light tracking-[-0.045em] transition-all duration-1000 delay-150 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
            >
              讓藝術，<br />
              持續發生在<br className="hidden sm:block" />
              生活裡。
            </h1>

            <p
              className={`text-white/92 text-[16px] md:text-[18px] leading-[1.95] mb-5 max-w-[680px] font-light transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              ArtON 是一個持續更新的數位藝術展示。
              結合數位展示設備與中控系統，讓藝術作品進入你的空間，遠端持續更新。
            </p>

            <p
              className={`text-[#D6B876] text-[15px] md:text-[16px] leading-[1.9] mb-10 max-w-xl font-light transition-all duration-1000 delay-[450ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              每月新的藝術家 × 新的作品 × 新的展覽。
            </p>

            {/* CTA：觀看 Demo 為主、瀏覽方案為輔 */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl transition-all duration-1000 delay-[600ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="/start"
                className="group px-7 py-5 bg-[#C4A265] text-white rounded-2xl hover:bg-[#b8954f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C4A265]/20 active:scale-[0.97]"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#F5EBD8] mb-1.5">Watch Demo</p>
                <p className="text-[16px] font-medium leading-snug">觀看 Demo</p>
              </a>
              <a
                href="/b2b"
                className="group px-7 py-5 border border-white/38 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-[0.97]"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/65 mb-1.5">For Your Space</p>
                <p className="text-[16px] font-medium leading-snug">為我的空間訂閱藝術</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/38 mx-auto" />
        <div className="w-5 h-8 border border-white/28 rounded-full flex justify-center pt-1.5 mt-2">
          <div className="w-[2px] h-2 bg-[#C4A265] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
