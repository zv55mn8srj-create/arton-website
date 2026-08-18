/**
 * Room 07 — Demo Showcase.
 * Gallery Quietism: a live "what you actually see" preview grid,
 * four real-space mockups with screens showing Artist Profile /
 * Artwork Story / Full Artwork — landscape & portrait orientations.
 * Colors: warm white #FAFAF8, art gold #E8B339/#F5B300, deep gray #1C2632.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenes = [
  {
    name: "企業大廳",
    tag: "01 · 作品全圖 · 橫式",
    image: "/manus-storage/demo-lobby-sunrise_85ece1de.png",
    caption: "日出晨曦橫式呈現，作品以完整構圖填滿大廳螢幕。",
  },
  {
    name: "會議室／洽談室",
    tag: "02 · 作者介紹 · 直式",
    image: "/manus-storage/demo-meeting-author_d10ba69e.png",
    caption: "鄭美珠老師的創作故事與肖像，讓觀者認識作品背後的人。",
  },
  {
    name: "員工休憩區",
    tag: "03 · 作品介紹 · 橫式",
    image: "/manus-storage/demo-lounge-koi_cc1b3b7b.png",
    caption: "作品旁附上故事說明，每一幅畫都有自己的導覽。",
  },
  {
    name: "接待櫃檯／公共空間",
    tag: "04 · 作品全圖 · 直式",
    image: "/manus-storage/demo-reception-flowers_0c36330d.png",
    caption: "直式螢幕以作品全圖呈現，成為空間裡最亮眼的風景。",
  },
];

export default function DemoShowcaseSection() {
  const { ref, isVisible } = useScrollAnimation(0.04);

  return (
    <section id="demo" className="py-28 md:py-40 bg-[#F5F0EB] overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className={`lg:col-span-7 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-[#B38A44] mb-8 font-semibold">Demo · 展示情境示意</p>
            <h2 className="text-[clamp(2.6rem,4.6vw,4.6rem)] leading-[1.18] font-light tracking-[-0.02em] text-[#1C1C1E] mb-7" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
              展示情境應用，
              <br />
              作品<span className="text-[#B38A44]">走進你的空間。</span>
            </h2>
            <p className="text-[#1C1C1E]/62 text-[15px] md:text-[16px] leading-[2] max-w-xl">
              一位藝術家、五幅作品，就是一場新展覽。作品全圖、創作故事與作者介紹輪番登場，讓每一面牆都有自己的展覽。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {scenes.map((scene, index) => (
            <figure
              key={scene.name}
              className={`group relative min-h-[320px] md:min-h-[400px] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <img
                src={scene.image}
                alt={`${scene.name}展示情境`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/6 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#E8B339] mb-2 font-medium">{scene.tag}</p>
                <h3 className="text-[22px] md:text-[24px] font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{scene.name}</h3>
                <p className="text-[12px] leading-[1.7] text-white/66">{scene.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={`mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[#1C1C1E]/56 text-[13px] md:text-[14px]">
            展示畫面由<span className="font-medium text-[#1C1C1E]/80">鄭美珠老師</span>創作；每月更新藝術家與作品。
          </p>
          <a href="/start" className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1C2632] text-white text-[14px] font-semibold rounded-full hover:bg-[#2A3646] transition-all duration-300 active:scale-[0.97]">
            為我的空間訂閱藝術
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
