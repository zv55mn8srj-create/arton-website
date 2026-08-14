/**
 * ArtON Hero Section — Room 00
 * Gallery Quietism: cinematic full-screen art space, exhibition-scale type.
 * Brand promise: every wall can change a creator's future.
 * Empowerment narrative — creators earn income through sustained display.
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
          src="/manus-storage/hero-gallery_f188e269.jpg"
          alt="ArtON 藝術展示空間"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/49 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-transparent to-black/12" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container pt-16">
          <div className="max-w-[790px]">
            <p
              className={`text-[#D6B876] text-[11px] md:text-[13px] uppercase tracking-[0.32em] mb-7 font-medium transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Art · Independence · Continuity · Together
            </p>

            <h1
              className={`text-[clamp(2.8rem,6.1vw,5.6rem)] leading-[1.08] text-white mb-8 font-light tracking-[-0.045em] transition-all duration-1000 delay-150 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
            >
              每一面牆，<br />
              都能改變一位<br className="hidden sm:block" />
              創作者的未來。
            </h1>

            <p
              className={`text-white/76 text-[15px] md:text-[17px] leading-[1.95] mb-5 max-w-[680px] font-light transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              把空間轉化為持續展示藝術的場域，
              讓企業創造可被記錄的 ESG 影響力，
              也讓創作者獲得持續的展示與收益。
            </p>

            <p
              className={`text-white/68 text-[14px] md:text-[15.5px] leading-[1.9] mb-9 max-w-[640px] font-light transition-all duration-1000 delay-[380ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              把每一面牆，變成企業的 ESG 實踐與創作者的穩定收入。
            </p>

            <p
              className={`text-[#D6B876] text-[14px] md:text-[15px] leading-[1.8] mb-9 max-w-xl font-light italic transition-all duration-1000 delay-[450ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              每一次展示，不只是美化空間，<br className="hidden sm:block" />
              更是企業最直觀的永續行動與創作者的持續收入。
            </p>

            {/* Dual-track CTA: enterprise vs creators/curators */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl transition-all duration-1000 delay-[600ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="/b2b"
                className="group px-7 py-5 bg-[#C4A265] text-white rounded-2xl hover:bg-[#b8954f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C4A265]/20 active:scale-[0.97]"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#F5EBD8] mb-1.5">For Enterprise</p>
                <p className="text-[16px] font-medium leading-snug">我是企業：瀏覽 ESG 方案</p>
              </a>
              <a
                href="/curator"
                className="group px-7 py-5 border border-white/38 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-[0.97]"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/65 mb-1.5">For Creators & Curators</p>
                <p className="text-[16px] font-medium leading-snug">我是創作者／策展人：加入合作</p>
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
