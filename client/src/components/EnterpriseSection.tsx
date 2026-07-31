/**
 * Room 03 — Enterprise ESG.
 * Gallery Quietism: impact is presented as a cultural ledger beside a real
 * exhibition space, keeping technology secondary to the art experience.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, CalendarDays, FileText, MapPin, RefreshCw, Users } from "lucide-react";

const problems = ["不知道如何開始 ESG", "每年都要重新找活動", "活動結束就沒有成果", "難以累積影響力"];

const provisions = [
  { icon: MapPin, text: "長期藝術展示" },
  { icon: Users, text: "支持藝術家與策展人" },
  { icon: Building2, text: "多據點管理" },
  { icon: RefreshCw, text: "雲端更新與永續展示" },
  { icon: FileText, text: "ESG 成果紀錄" },
];

const statistics = [
  { label: "展示據點", value: "12", icon: MapPin },
  { label: "展示策展", value: "08", icon: CalendarDays },
  { label: "支持藝術家", value: "24", icon: Users },
  { label: "展示天數", value: "365", icon: FileText },
];

export default function EnterpriseSection() {
  const { ref, isVisible } = useScrollAnimation(0.06);

  return (
    <section id="enterprise" className="relative py-28 md:py-40 bg-[#FBFAF7] overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-start mb-20 md:mb-28">
          <GalleryHeading
            room="03"
            label="Cultural ESG"
            title={<>讓 ESG，<br />每天都在<br />空間裡發生。</>}
            description={<>不是一年一次的活動，而是一場長期、可被看見、也能被記錄的文化行動。</>}
            className={`lg:col-span-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7 lg:pt-20 grid sm:grid-cols-2 gap-10">
            <div className={`plaque transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="museum-label mb-7 text-[#1C1C1E]/40">Before · 難以累積</p>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={problem} className="flex gap-3 text-[14px] leading-[1.7] text-[#1C1C1E]/48">
                    <span className="text-[#C4A265]/55">0{index + 1}</span>
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`plaque transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="museum-label mb-7">With ArtON · 持續發生</p>
              <div className="space-y-4">
                {provisions.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-[14px] text-[#1C1C1E]/70">
                    <Icon className="w-4 h-4 text-[#C4A265]" strokeWidth={1.4} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <figure className={`grid lg:grid-cols-12 items-stretch transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[650px] overflow-hidden">
            <img src="/manus-storage/office-art_3453b208.jpg" alt="企業空間中的藝術展示" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-7 md:p-9 text-white">
              <span className="museum-label text-[#E2C88E]">Exhibition Site · Taipei</span>
              <p className="mt-3 text-[17px] font-light">藝術成為空間的一部分，支持也成為企業文化的一部分。</p>
            </figcaption>
          </div>

          <div className="lg:col-span-7 bg-white border-y border-r border-[#E7E0D5] p-5 md:p-8 lg:p-10 shadow-[0_24px_80px_rgba(44,37,27,0.07)]">
            <div className="flex items-center justify-between pb-6 border-b border-[#EAE5DC]">
              <div className="flex items-center gap-3">
                <PowerGlyph className="w-6 h-6 text-[#C4A265]" />
                <div>
                  <p className="text-[14px] font-medium text-[#1C1C1E]">年度文化影響紀錄</p>
                  <p className="text-[10px] uppercase tracking-[0.17em] text-[#1C1C1E]/35 mt-1">ArtON · ESG Cultural Ledger</p>
                </div>
              </div>
              <span className="text-[11px] text-[#2D5A3D] border border-[#2D5A3D]/18 bg-[#2D5A3D]/5 px-3 py-1.5 rounded-full">持續展示中</span>
            </div>

            <div className="grid grid-cols-2 gap-x-7 gap-y-8 py-8 border-b border-[#EAE5DC]">
              {statistics.map(({ label, value, icon: Icon }) => (
                <div key={label} className="border-l border-[#C4A265]/42 pl-4">
                  <div className="flex items-center gap-2 mb-3 text-[#1C1C1E]/38">
                    <Icon className="w-3.5 h-3.5 text-[#C4A265]" strokeWidth={1.4} />
                    <span className="text-[11px] tracking-[0.09em]">{label}</span>
                  </div>
                  <p className="text-[clamp(2.35rem,4vw,4rem)] leading-none font-light text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{value}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 pt-8">
              <div>
                <div className="flex justify-between mb-5">
                  <p className="text-[13px] text-[#1C1C1E]/70">展示紀錄</p>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#1C1C1E]/32">Jan — Dec</span>
                </div>
                <div className="flex items-end gap-1.5 h-28">
                  {[38, 51, 47, 59, 68, 55, 64, 74, 79, 72, 84, 92].map((height, index) => (
                    <div key={index} className="flex-1 bg-[#C4A265]/18 relative h-full flex items-end">
                      <div className="w-full bg-[#C4A265]/58" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                {[{ label: "文化支持", value: 92 }, { label: "社區參與", value: 78 }, { label: "藝術教育", value: 85 }].map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2 text-[11px]"><span className="text-[#1C1C1E]/48">{label}</span><span className="text-[#C4A265]">{value}%</span></div>
                    <div className="h-px bg-[#EAE5DC]"><div className="h-px bg-[#C4A265]" style={{ width: `${value}%` }} /></div>
                  </div>
                ))}
                <button className="w-full mt-2 text-left text-[12px] text-[#1C1C1E]/65 border-t border-[#EAE5DC] pt-4 flex items-center justify-between">
                  <span>取得 ESG 成果報告</span><span className="text-[#C4A265]">↗</span>
                </button>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
