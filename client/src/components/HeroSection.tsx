/**
 * ArtON Hero Section — 參考風格改版（2026-08-18）
 * Style: 明快黃色系（明亮白底 + 深藍 #16203B + 品牌黃 #F5B300）
 * 核心訊息：讓藝術，走進更多日常。
 * 背景：企業大廳＋牆上電子畫框（藍黃抽象畫）＋黃圓點與弧線裝飾。
 * CTA：黃色膠囊「探索作品→」（導 #demo）、白底描邊膠囊「合作洽詢→」（導 /b2b）。
 * 背景左側為留白區，使用深藍字，不使用黑色遮罩。
 */
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-[760px] overflow-hidden bg-[#FBFAF7]">
      {/* Background — 電子畫框大廳場景，左側留白 */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-digital-frame-yellow_156c19d5.png"
          alt="ArtON 智慧藝術畫框展示空間"
          className="w-full h-full object-cover"
        />
        {/* 左側留白：由白→透明的漸層，確保深藍標題文字清晰 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F1]/97 via-[#FBF8F1]/72 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF8F1]/55 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[760px] flex items-center">
        <div className="container py-24">
          <div className="max-w-[760px]">
            <p
              className={`text-[#C98F0E] text-[11px] md:text-[13px] uppercase tracking-[0.32em] mb-7 font-semibold transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Art · Space · ESG · Together
            </p>

            <h1
              className={`text-[clamp(2.8rem,6.1vw,5.6rem)] leading-[1.12] text-[#16203B] mb-8 font-bold tracking-[-0.03em] transition-all duration-1000 delay-150 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
            >
              讓藝術，<br />
              走進<span className="text-[#F5B300]">更多日常</span>。
            </h1>

            <p
              className={`text-[#33404F] text-[17px] md:text-[18px] leading-[2] mb-5 max-w-[620px] font-medium transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              ArtON 是一個持續更新的數位藝術展示。
              結合數位展示設備與中控系統，讓藝術作品進入你的空間，遠端持續更新。
            </p>

            <p
              className={`text-[#16203B] text-[16px] md:text-[17px] leading-[1.9] mb-10 max-w-xl font-semibold transition-all duration-1000 delay-[450ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              任何藝術，都值得被看見。
            </p>

            {/* 雙膠囊 CTA：黃色主＋白底描邊次 */}
            <div
              className={`flex flex-wrap gap-4 max-w-2xl transition-all duration-1000 delay-[600ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="group px-8 py-4 bg-[#F5B300] text-[#16203B] rounded-full font-bold hover:bg-[#e5a800] transition-all duration-300 hover:shadow-xl hover:shadow-[#F5B300]/25 active:scale-[0.97]"
              >
                <span className="text-[16px] leading-none">探索作品</span>
                <span className="ml-2 text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
              </button>
              <a
                href="/start"
                className="group px-8 py-4 bg-white/85 backdrop-blur-sm border-2 border-[#16203B]/20 text-[#16203B] rounded-full font-bold hover:bg-white hover:border-[#16203B]/40 transition-all duration-300 active:scale-[0.97]"
              >
                <span className="text-[15px] leading-none">為我的空間訂閱藝術</span>
                <span className="ml-2 text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#16203B]/30 mx-auto" />
        <div className="w-5 h-8 border border-[#16203B]/25 rounded-full flex justify-center pt-1.5 mt-2 bg-white/60 backdrop-blur-sm">
          <div className="w-[2px] h-2 bg-[#F5B300] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
