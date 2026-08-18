/**
 * Room 02 — How it works（依 2026-08-16 反饋改版：產品三步驟）
 * Gallery Quietism: dark transition room with vertical wayfinding.
 * 產品流程：一次安裝，持續更新
 * ① 選擇藝術內容 ② ArtON Box 播放 ③ 中控遠端更新
 */
import GalleryHeading from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    title: "選擇藝術內容",
    note: "Choose the exhibition",
    description: "選擇典藏展覽，或讓每月更新自動輪替新的藝術家與作品。",
  },
  {
    title: "ArtON Box 播放",
    note: "Art plays in your space",
    description: "作品直接進入你的空間，輕巧易安裝，搭配任何螢幕即可開始展示。",
  },
  {
    title: "中控遠端更新",
    note: "Remote content renewal",
    description: "無需重新更換設備，每個月透過中控系統更新新的藝術內容。",
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="process" className="relative py-28 md:py-44 bg-[#16203B] text-white overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_40%_35%,rgba(196,162,101,0.11),transparent_55%)]" />
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          <GalleryHeading
            room="02"
            label="How It Works"
            light
            title={<>一次安裝，<br />持續更新。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            description={<>今天看見一場展覽，下個月，又是一場新的展覽。</>}
            className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7 lg:pl-12">
            <div className="relative">
              <div className="absolute left-[27px] md:left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-[#F5B300]/70 via-[#F5B300]/30 to-transparent" />
              {steps.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-9 pb-12 md:pb-14 last:pb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${index * 130}ms` }}
                >
                  <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#16203B] border border-[#F5B300]/42 flex items-center justify-center shadow-[0_0_0_8px_#1C1C1E]">
                    <span className="text-[1.7rem] md:text-[2.25rem] font-light text-[#F5B300]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      0{index + 1}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-5 md:pt-7">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                      <h3 className="text-[23px] md:text-[29px] font-light" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                        {item.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/28">{item.note}</span>
                    </div>
                    <p className="text-[14px] md:text-[15px] text-white/68">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
