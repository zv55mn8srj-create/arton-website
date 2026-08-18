/**
 * Room 01 — What is ArtON（依 2026-08-16 反饋改版：產品定位優先）
 * Gallery Quietism; product-first story: a continuously-updating digital art
 * display combining playback device + central control + monthly renewal.
 * Brand origin (disabled artists' sustainable income) condensed into short
 * narrative to keep text light.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const beliefs = [
  {
    en: "Ability",
    title: "看見能力，而不是標籤",
    description: "身心障礙不是作品的註解。創作的專業、觀點與價值，值得被公平看見。",
    emphasis: true,
  },
  {
    en: "Independence",
    title: "讓創作成為可以依靠的工作",
    description: "作品持續展示，就能持續產生價值，讓創作者靠自己的雙手累積收入與選擇。",
  },
  {
    en: "Continuity",
    title: "把一次機會，變成長期的可能",
    description: "從短暫展期走進日常空間，讓被看見、被欣賞與獲得收入都不再只發生一次。",
  },
];

export default function WhyArtON() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="about" className="relative py-28 md:py-44 bg-[#F7F4EF] overflow-hidden">
      <div className="absolute -top-24 right-[4%] text-[21rem] leading-none text-[#F5B300]/[0.045] font-light select-none" aria-hidden="true">01</div>
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <GalleryHeading
            room="01"
            label="What is ArtON · 產品定位"
            title={<>一個持續更新的<br />數位藝術展示。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            description={<>今天看見一場展覽，下個月，又是一場新的展覽。</>}
            className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          />

          <div className="lg:col-span-7 lg:pt-14">
            <div
              className={`space-y-7 max-w-2xl text-[15px] md:text-[17px] leading-[2] text-[#1C1C1E]/58 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[clamp(1.6rem,2.5vw,2.35rem)] leading-[1.55] font-light tracking-[-0.02em] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                ArtON 結合數位展示設備與中控系統，<br className="hidden md:block" />讓藝術作品可以遠端更新。
              </p>
              <p className="text-[#1C1C1E]/78 font-medium">每月新的藝術家 × 新的作品 × 新的展覽。</p>
              <p>藝術作品，不只在展場觀看。ArtON 讓藝術進入空間，持續更新——一次安裝，之後的每一個月份，都是新的展覽。</p>
            </div>

            <blockquote
              className={`relative my-14 md:my-20 py-10 md:py-12 border-y border-[#F5B300]/38 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <PowerGlyph className="w-7 h-7 text-[#F5B300] mb-7" />
              <p className="text-[clamp(1.65rem,2.6vw,2.5rem)] leading-[1.5] font-light tracking-[-0.025em] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                真正的支持，不是一次性的捐助，<br className="hidden md:block" />
                而是讓創作者能靠自己的作品，持續走下去。
              </p>
            </blockquote>

            <div className="grid md:grid-cols-3 gap-10 md:gap-6">
              {beliefs.map((belief, index) => (
                <article
                  key={belief.title}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
                  }`}
                  style={{ transitionDelay: `${260 + index * 90}ms` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1E]/32 mb-5 font-medium">
                    0{index + 1} · {belief.en}
                  </p>
                  <h3 className="text-[18px] leading-[1.55] font-normal text-[#1C1C1E] mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                    {belief.title}
                  </h3>
                  <p
                    className={`text-[13.5px] leading-[1.85] ${
                      (belief as { emphasis?: boolean }).emphasis
                        ? "text-[#3D3A36] font-medium"
                        : "text-[#1C1C1E]/72 font-medium"
                    }`}
                  >
                    {belief.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
