/**
 * Room 04 — Curators.
 * Gallery Quietism: a working curator's desk and exhibition catalogue,
 * not a conventional software feature showcase.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart3, FolderOpen, LayoutGrid, Share2, Sparkles } from "lucide-react";

const tools = [
  { icon: LayoutGrid, title: "建立數位策展" },
  { icon: Share2, title: "分享策展" },
  { icon: FolderOpen, title: "企業展示管理" },
  { icon: BarChart3, title: "收益統計" },
  { icon: Sparkles, title: "AI 協助管理" },
];

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
                  <img src="/manus-storage/curator-laptop_38899225.jpg" alt="策展人在工作桌上管理數位策展" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="relative md:absolute md:-bottom-1 md:right-0 w-full md:w-[72%] bg-[#FBFAF7] shadow-[0_20px_60px_rgba(44,37,27,0.14)] border border-white p-5 md:p-6 -mt-8 md:mt-0">
                <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD4]">
                  <div className="flex items-center gap-2.5"><PowerGlyph className="w-5 h-5 text-[#C4A265]" /><span className="text-[12px] font-medium">策展工作簿</span></div>
                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#1C1C1E]/30">Curatorial Notebook</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 py-4">
                  {["/manus-storage/exhibition-spring_779eb4e1.jpg", "/manus-storage/exhibition-healing_3a941b9a.jpg", "/manus-storage/exhibition-abstract_a4923795.jpg"].map((src, index) => (
                    <div key={src} className="aspect-[4/3] overflow-hidden"><img src={src} alt={`策展作品 ${index + 1}`} className="w-full h-full object-cover" /></div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 border-t border-[#E2DDD4] pt-4">
                  {[{ label: "展示次數", value: "156" }, { label: "展示天數", value: "2,847" }, { label: "展示空間", value: "08" }].map(({ label, value }) => (
                    <div key={label}><p className="text-[22px] md:text-[28px] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{value}</p><p className="text-[9px] mt-1.5 text-[#1C1C1E]/36">{label}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <GalleryHeading
              room="04"
              label="For Curators"
              title={<>策展一次，<br />讓更多創作者<br />有收入。</>}
              titleSize="clamp(2.15rem,3.6vw,3.4rem)"
              description={<>你的策展讓作品走進更多企業與生活空間，持續被看見，也讓藝術家靠作品獲得穩定、長期的收入。</>}
              className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4">
              {tools.map(({ icon: Icon, title }, index) => (
                <div key={title} className={`flex items-center gap-3 border-t border-[#1C1C1E]/10 pt-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${200 + index * 70}ms` }}>
                  <Icon className="w-4 h-4 text-[#C4A265]" strokeWidth={1.35} /><span className="text-[13px] text-[#1C1C1E]/62">{title}</span>
                </div>
              ))}
            </div>
            <a href={LINKS.curatorLine} target="_blank" rel="noopener noreferrer" className="inline-flex mt-10 items-center gap-4 text-[13px] font-medium text-[#1C1C1E] border-b border-[#C4A265] pb-2 hover:text-[#9B7C47] transition-colors">
              成為 ArtON 策展人 <span className="text-[#C4A265]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
