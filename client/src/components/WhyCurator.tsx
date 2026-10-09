/**
 * Curator belief section（創作者視角的「真正的支持」）
 * Gallery Quietism: light quiet room; mirrors WhyArtON structure but
 * reframed for curators — being seen, becoming a sustainable practice,
 * curating beyond the gallery into everyday spaces.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const beliefs = [
  {
    en: "Visibility",
    title: "讓更多人看見你的策展",
    description: "策展上架後進入 ArtON 策展目錄，當企業訂閱你的展覽，作品便持續在更多空間播放。",
  },
  {
    en: "Sustainability",
    title: "讓策展成為可以依靠的事業",
    description: "公開策展的訂閱與展示紀錄，依合作約定計算內容權利金。",
  },
  {
    en: "Beyond",
    title: "讓策展走出畫廊",
    description: "走進診所、企業、飯店與咖啡館的日常空間，讓被看見與被欣賞不再只發生一次。",
  },
];

export default function WhyCurator() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
      <div className="absolute -top-24 right-[4%] text-[21rem] leading-none text-[#F5B300]/[0.045] font-light select-none" aria-hidden="true">✦</div>
      <div className="container relative" ref={ref}>
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-10 text-center">
          The Quiet Belief · 策展人的心之所向
        </p>

        <blockquote
          className={`relative max-w-3xl mx-auto my-12 md:my-16 py-10 md:py-12 border-y border-[#F5B300]/38 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[clamp(1.55rem,2.4vw,2.35rem)] leading-[1.55] font-light tracking-[-0.025em] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
            真正的支持，不是委託一次就結束，
            <br className="hidden md:block" />
            而是讓你的策展眼光，在每個空間裡持續被看見。
          </p>
        </blockquote>

        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 gap-10">
          {beliefs.map((belief, index) => (
            <article
              key={belief.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
              }`}
              style={{ transitionDelay: `${200 + index * 90}ms` }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1E]/32 mb-5 font-medium">
                0{index + 1} · {belief.en}
              </p>
              <h3 className="text-[18px] leading-[1.55] font-normal text-[#1C1C1E] mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                {belief.title}
              </h3>
              <p className="text-[13.5px] leading-[1.85] text-[#1C1C1E]/72 font-medium">
                {belief.description}
              </p>
            </article>
          ))}
          </div>

          <figure
            className={`relative rounded-[6px] overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
            style={{ transitionDelay: "480ms" }}
          >
            <img
              src="/assets/curator-wall-scene_ad4739b6.png"
              alt="策展人作品牆：多幅作品並陳的展示空間"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/55 to-transparent px-5 pt-10 pb-4">
              <p className="text-[12px] tracking-[0.14em] text-white/90 font-medium">
                一面作品牆，一次策展，走進多個日常空間。
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
