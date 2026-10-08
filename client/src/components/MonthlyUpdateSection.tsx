/**
 * 每月更新區（依 2026-08-16 反饋新增）
 * 「公開策展目錄持續更新，實際內容依方案與排程提供。」
 * 以「本月 → 下月」的卡片對照呈現，直觀傳達內容持續更新。
 */
import GalleryHeading from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const months = [
  {
    label: "精選",
    en: "Selected",
    artist: "藝術家 · 鄭美珠",
    theme: "小光點畫廊策展 · 精選藝術展",
    img: "/assets/flowers-sea-square2_29d1e34e.jpg",
  },
  {
    label: "精選",
    en: "Selected",
    badge: undefined,
    artist: "《兩顆柿子》",
    theme: "精選藝術內容 · 依排程提供",
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
            title={<>持續更新，<br />看見新的<br />展覽。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            description={<>公開策展目錄持續更新，內容依方案與排程提供。</>}
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
              <span className="uppercase tracking-[0.24em]">公開策展 · 持續更新</span>
              <span className="h-px flex-1 bg-[#F5B300]/38" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
