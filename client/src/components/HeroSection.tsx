/**
 * ArtON Hero Section
 * Design: Gallery Quietism - full-screen cinematic with warm overlay
 * Typography: Cormorant Garamond for display, large and elegant
 */
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-gallery_f188e269.jpg"
          alt="ArtON 藝術展示空間"
          className="w-full h-full object-cover"
        />
        {/* Stronger gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Subtitle above */}
            <p
              className={`text-[#C4A265] text-[13px] md:text-[14px] uppercase tracking-[0.35em] mb-8 font-medium transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Turn Art ON — 藝術 · 即刻啟動
            </p>

            {/* Main Title */}
            <h1
              className={`font-display text-[44px] md:text-[60px] lg:text-[76px] leading-[1.1] text-white mb-8 font-light transition-all duration-1000 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
            >
              每一面牆，<br />
              都能成為展覽。
            </h1>

            {/* Description */}
            <p
              className={`text-white/80 text-[16px] md:text-[18px] leading-[1.9] mb-5 max-w-xl font-light transition-all duration-1000 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              ArtON 串連藝術家、策展人、畫廊與企業，
              讓藝術走進診所、企業、飯店、咖啡館與更多生活空間，
              打造可持續展示的藝術生態。
            </p>

            {/* Brand Statement */}
            <p
              className={`text-[#C4A265] text-[15px] md:text-[17px] leading-[1.8] mb-10 max-w-lg font-light italic transition-all duration-1000 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              每一次展示，不只是美化空間，
              更是在支持藝術創作。
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#start"
                className="px-8 py-4 bg-[#C4A265] text-white text-[15px] font-medium rounded-full hover:bg-[#b8954f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C4A265]/20 text-center"
              >
                我要開始展示
              </a>
              <a
                href="#curator"
                className="px-8 py-4 border border-white/40 text-white text-[15px] font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
              >
                我要成為策展人
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/40 mx-auto" />
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5 mt-2">
          <div className="w-[2px] h-2 bg-[#C4A265] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
