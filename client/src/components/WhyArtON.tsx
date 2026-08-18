/**
 * Room 01 — What is ArtON（依 2026-08-18 反饋改版：版面精簡、加入情境小圖）
 * Gallery Quietism; condensed product positioning for /b2b:
 * - Left: heading + short lead (sticky)
 * - Right: image-led intro card + shortened belief line + compact value row
 * Less vertical space, more visual storytelling.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const beliefs = [
  {
    en: "Ability",
    title: "看見能力，而不是標籤",
    description: "身心障礙不是作品的註解。創作的專業與價值，值得被公平看見。",
  },
  {
    en: "Independence",
    title: "讓創作成為可以依靠的工作",
    description: "作品持續展示，就持續產生價值與收入。",
  },
  {
    en: "Continuity",
    title: "把一次機會，變成長期的可能",
    description: "走進日常空間，被看見不再只發生一次。",
  },
];

export default function WhyArtON() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#F7F4EF] overflow-hidden">
      <div className="absolute -top-24 right-[4%] text-[21rem] leading-none text-[#F5B300]/[0.045] font-light select-none" aria-hidden="true">01</div>
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <GalleryHeading
            room="01"
            label="What is ArtON · 產品定位"
            title={<>一個持續更新的<br />數位藝術展示。</>}
            titleSize="clamp(2.4rem,4.2vw,4.2rem)"
            description={<>今天看見一場展覽，下個月，又是一場新的展覽。</>}
            className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          />

          <div className="lg:col-span-7">
            {/* 情境小圖＋一句話產品卡 */}
            <figure
              className={`relative rounded-2xl overflow-hidden mb-10 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <img
                src="/manus-storage/venue-office-digital_a460b0a5.png"
                alt="企業空間中的 ArtON 電子畫框"
                className="w-full h-52 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-5 md:p-6 text-white max-w-xl">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-medium mb-2">Digital Frame · 電子畫框</p>
                <p className="text-[15px] md:text-[17px] leading-[1.8] text-white/95">
                  結合展示設備與中控系統，作品遠端更新——一次安裝，每月都是新的展覽。
                </p>
              </figcaption>
            </figure>

            {/* 信念行（精簡） */}
            <blockquote
              className={`relative my-10 md:my-12 pb-9 border-b border-[#F5B300]/38 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[clamp(1.35rem,2.1vw,1.9rem)] leading-[1.55] font-light tracking-[-0.02em] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                真正的支持，不是一次性的捐助，<br className="hidden md:block" />
                而是讓創作者能靠自己的作品，持續走下去。
              </p>
            </blockquote>

            {/* 價值三欄 */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {beliefs.map((belief, index) => (
                <article
                  key={belief.title}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
                  }`}
                  style={{ transitionDelay: `${260 + index * 90}ms` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1E]/32 mb-4 font-medium">
                    0{index + 1} · {belief.en}
                  </p>
                  <h3 className="text-[16.5px] leading-[1.5] font-normal text-[#1C1C1E] mb-2" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                    {belief.title}
                  </h3>
                  <p
                    className={`text-[13.5px] leading-[1.8] ${
                      index === 0 ? "text-[#3D3A36] font-medium" : "text-[#1C1C1E]/72 font-medium"
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
