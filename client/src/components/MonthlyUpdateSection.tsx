/**
 * 每月更新區（依 2026-08-16 反饋新增）
 * 「每個月，看見新的藝術家。1 位藝術家＋5 幅作品＝1 場新的數位展覽」
 * 以「本月 → 下月」的卡片對照呈現，直觀傳達內容持續更新。
 */
import GalleryHeading from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const months = [
  {
    label: "本月",
    en: "This Month",
    artist: "藝術家 · 鄭美珠",
    theme: "小光點畫廊策展 · 《花開時節與海與島》春季療癒展",
    img: "/manus-storage/flowers-sea-square2_29d1e34e.jpg",
  },
  {
    label: "下月",
    en: "Next Month",
    badge: "9 月預告",
    artist: "《兩顆柿子》",
    theme: "溫暖水彩插畫 · 下月即將登場",
    img: "/manus-storage/next-persimmon-painting_0c834f5b.png",
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
            title={<>每個月，<br />看見新的<br />藝術家。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            description={<>5 幅作品，組成 1 場新的數位展覽。</>}
            className={`lg:col-span-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7 lg:pt-10">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {months.map(({ label, en, badge, artist, theme, img }, index) => (
                <figure
                  key={label}
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
              <span className="uppercase tracking-[0.24em]">持續更新 · 永不重複</span>
              <span className="h-px flex-1 bg-[#F5B300]/38" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
