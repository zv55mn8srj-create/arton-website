/**
 * Room 01 — Our Why.
 * Gallery Quietism: a direct, dignified origin story about disabled artists,
 * creative independence and recurring income — not charity or pity.
 * Placed right after the Hero so businesses understand why ArtON exists.
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
      <div className="absolute -top-24 right-[4%] text-[21rem] leading-none text-[#C4A265]/[0.045] font-light select-none" aria-hidden="true">01</div>
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <GalleryHeading
            room="01"
            label="Our Why · 品牌初心"
            title={<>讓創作者，<br />靠自己的作品<br />站穩腳步。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            description={<>我們相信，藝術可以改變生活，也能改變一個人的未來。</>}
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
                許多優秀的藝術家，並不缺少創作能力，而是缺少持續被看見的機會。
              </p>
              <p>其中，也包含許多身心障礙藝術家。他們創作出動人的作品，卻往往只能在短暫的展覽中被看見；展覽結束後，作品離開視線，創作也失去了穩定的收入來源。</p>
              <p className="text-[#1C1C1E]/78 font-medium">ArtON 希望改變這件事。</p>
              <p>我們不是提供一次性的幫助，而是建立一個能夠持續展示、持續被欣賞、持續創造收入的藝術生態。透過企業、診所、飯店、咖啡館與更多生活空間，每一次展示，都讓創作者獲得靠作品持續創作、持續生活的機會。</p>
            </div>

            <blockquote
              className={`relative my-14 md:my-20 py-10 md:py-12 border-y border-[#C4A265]/38 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <PowerGlyph className="w-7 h-7 text-[#C4A265] mb-7" />
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
