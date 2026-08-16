/**
 * Room 04 — What you will see（依 2026-08-16 反饋改版：產品導向）
 * Gallery Quietism: actual playback artwork with artist names shown on frame;
 * curator content condensed; artwork display is the focus over text.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CuratorSection() {
  const { ref, isVisible } = useScrollAnimation(0.06);

  return (
    <section id="curator" className="relative py-28 md:py-40 bg-[#EDE8DF] overflow-hidden">
      <div className="absolute -left-16 bottom-0 text-[18rem] leading-none text-white/28 font-light select-none" aria-hidden="true">04</div>
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <div className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative pb-14 md:pb-20 pr-0 md:pr-12">
              <div className="gallery-frame rotate-[-1.2deg]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#D9D2C7]">
                  <img src="/assets/flowers-sea-island_a1502703.jpg" alt="小光點作品：花卉與海島藝術在空間中播放展示" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/62 to-transparent px-6 pt-10 pb-4">
                    <p className="text-white text-[13px] md:text-[15px] font-medium" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>藝術家 · 小光點</p>
                    <p className="text-white/72 text-[11px] md:text-[12px] mt-0.5">《花卉與海島》· 持續展示中</p>
                  </div>
                </div>
              </div>

              <div className="relative md:absolute md:-bottom-1 md:right-0 w-full md:w-[72%] bg-[#FBFAF7] shadow-[0_20px_60px_rgba(44,37,27,0.14)] border border-white p-5 md:p-6 -mt-8 md:mt-0">
                <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD4]">
                  <div className="flex items-center gap-2.5"><PowerGlyph className="w-5 h-5 text-[#C4A265]" /><span className="text-[12px] font-medium">正在播放</span></div>
                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#1C1C1E]/30">Now Exhibiting</span>
                </div>
                <div className="grid grid-cols-4 gap-3 py-4 text-[12px]">
                  {[
                    { label: "藝術家", note: "Artist" },
                    { label: "作品", note: "Works" },
                    { label: "創作故事", note: "Story" },
                    { label: "展覽資訊", note: "Exhibition" },
                  ].map(({ label, note }) => (
                    <div key={label} className="border-l border-[#C4A265]/40 pl-3">
                      <p className="text-[13px] md:text-[14px] font-medium text-[#1C1C1E]">{label}</p>
                      <p className="text-[9px] mt-1 text-[#1C1C1E]/36 uppercase tracking-[0.1em]">{note}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 border-t border-[#E2DDD4] pt-4">
                  {[{ label: "藝術家", value: "01" }, { label: "作品", value: "05" }, { label: "展覽", value: "1" }].map(({ label, value }) => (
                    <div key={label}><p className="text-[22px] md:text-[28px] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{value}</p><p className="text-[9px] mt-1.5 text-[#1C1C1E]/36">{label}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <GalleryHeading
              room="04"
              label="What You Will See"
              title={<>一件作品，<br />也可以成為<br />一場展覽。</>}
              titleSize="clamp(2.15rem,3.6vw,3.4rem)"
              description={<>藝術家、作品、創作故事與展覽資訊，在螢幕裡持續播放。建議以實際播放畫面為主，文字維持精簡。</>}
              className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            />

            <a href={LINKS.curatorLine} target="_blank" rel="noopener noreferrer" className="inline-flex mt-10 items-center gap-4 text-[13px] font-medium text-[#1C1C1E] border-b border-[#C4A265] pb-2 hover:text-[#9B7C47] transition-colors">
              成為 ArtON 策展人 <span className="text-[#C4A265]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
