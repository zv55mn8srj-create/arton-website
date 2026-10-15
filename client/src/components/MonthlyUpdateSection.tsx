/**
 * 每月更新區：以兩張作品卡呈現每月新展與持續更新的品牌訊息。
 */
import GalleryHeading from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const months = [
  {
    label: "本月新展",
    en: "NEW EXHIBITION",
    artist: "藝術家 · 鄭美珠",
    theme: "小光點畫廊策展 · 本月新展",
    img: "/assets/flowers-sea-square2_29d1e34e.jpg",
  },
  {
    label: "本月新展",
    en: "NEW EXHIBITION",
    badge: undefined,
    artist: "《兩顆柿子》",
    theme: "每月更新內容 · 新的風景",
    img: "/assets/next-persimmon-painting_0c834f5b_50af0cfa.jpg",
  },
];

export default function MonthlyUpdateSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="py-28 md:py-44 bg-[#FBFAF7] overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <GalleryHeading
            room="04"
            label="Monthly Renewal · 每月更新"
            title={<>每月都有新展，<br />讓牆上的藝術持續更新。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            description={<>持續推出新的策展內容，讓空間不必重新裝修，也能不斷換上新的風景。</>}
            className={`lg:col-span-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7 lg:pt-10">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {months.map(({ label, en, badge, artist, theme, img }, index) => (
                <figure
                  key={`${label}-${index}`}
                  className={`relative overflow-hidden rounded-2xl bg-[#EDE8DF] transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 130}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={img} alt={`${label}：${theme}`} className={`w-full h-full object-cover ${index === 1 ? "grayscale-[0.35]" : ""}`} />
                    <div className="absolute top-5 left-5 bg-white/92 backdrop-blur px-4 py-2 rounded-full">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#1C1C1E]/55 font-medium">{en}</p>
                      <p className="text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{label}</p>
                    </div>
                    {badge && (
                      <div className="absolute top-5 right-5 bg-[#F5B300] text-[#16203B] px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-[0.12em]">
                        {badge}
                      </div>
                    )}
                  </div>
                  <figcaption className="p-6">
                    <p className="text-[14px] font-medium text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{artist}</p>
                    <p className="text-[12px] text-[#1C1C1E]/55 mt-1.5 leading-[1.7]">{theme}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-[12px] text-[#1C1C1E]/50">
              <span className="h-px flex-1 bg-[#F5B300]/38" />
              <span className="uppercase tracking-[0.24em]">新的藝術，持續發生</span>
              <span className="h-px flex-1 bg-[#F5B300]/38" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
