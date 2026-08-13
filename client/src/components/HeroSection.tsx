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
              ArtON 串連藝術家、策展人、畫廊與企業，讓藝術走進生活空間，建立持續展示的機會，也讓更多創作者能靠自己的作品，持續創作、持續生活。
            </p>

            <p
              className={`text-[#D6B876] text-[14px] md:text-[16px] leading-[1.8] mb-9 max-w-xl font-light italic transition-all duration-1000 delay-[450ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              每一次展示，不只是美化空間，<br className="hidden sm:block" />
              更是在創造一份持續的收入。
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-[600ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#start"
                className="px-8 py-4 bg-[#C4A265] text-white text-[14px] font-medium rounded-full hover:bg-[#b8954f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C4A265]/20 text-center active:scale-[0.97]"
              >
                我要開始展示
              </a>
              <a
                href="#curator"
                className="px-8 py-4 border border-white/38 text-white text-[14px] font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm active:scale-[0.97]"
              >
                我要成為策展人
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
