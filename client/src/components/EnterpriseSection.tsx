/**
 * Room 03 — Enterprise（依 2026-08-16 反饋改版：產品導向）
 * Gallery Quietism: monthly content renewal + ESG value as a cultural ledger.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CalendarDays, FileText, MapPin, Users } from "lucide-react";

const keywords = ["藝術展示", "空間美學", "企業文化", "ESG"];

const statistics = [
  { label: "展示據點", value: "12", icon: MapPin },
  { label: "展示策展", value: "08", icon: CalendarDays },
  { label: "支持創作者", value: "24", icon: Users },
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
            label="For Enterprise"
            title={<>讓空間，<br />每個月都有<br />新的內容。</>}
            titleSize="clamp(2.15rem,3.6vw,3.4rem)"
            description={<>ArtON 將藝術、空間與企業品牌連結，讓藝術成為企業環境的一部分。藝術展示、空間美學、企業文化、ESG。</>}
            className={`lg:col-span-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7 lg:pt-20">
            <div className={`plaque transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="museum-label mb-7 text-[#3D3A36]">ArtON · 每月更新</p>
              <div className="grid grid-cols-2 gap-6">
                {keywords.map((keyword, index) => (
                  <div key={keyword} className="flex items-baseline gap-3 border-t border-[#E2DDD4] pt-5">
                    <span className="text-[#F5B300] text-[15px] md:text-[17px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{index + 1}</span>
                    <span className="text-[15px] md:text-[16px] text-[#1C1C1E]/78 font-medium">{keyword}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/b2b"
              className={`inline-flex mt-8 items-center gap-3 text-[13px] font-medium text-[#1C1C1E] border-b border-[#F5B300] pb-2 hover:text-[#9B7C47] transition-colors delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              為我的空間訂閱藝術 <span className="text-[#F5B300]">↗</span>
            </a>
          </div>
        </div>

        <figure className={`grid lg:grid-cols-12 items-stretch transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[650px] overflow-hidden">
            <img src="/manus-storage/venue-office-digital_a460b0a5.png" alt="企業空間中的智慧藝術畫框展示" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-7 md:p-9 text-white">
              <span className="museum-label text-[#C98F0E]">Exhibition Site · Taipei</span>
                  <p className="mt-3 text-[17px] font-light">藝術成為空間的一部分，你的支持也成為創作者生活的一部分。</p>
            </figcaption>
          </div>

          <div className="lg:col-span-7 bg-white border-y border-r border-[#E7E0D5] p-5 md:p-8 lg:p-10 shadow-[0_24px_80px_rgba(44,37,27,0.07)]">
            <div className="flex items-center justify-between pb-6 border-b border-[#EAE5DC]">
              <div className="flex items-center gap-3">
                <PowerGlyph className="w-6 h-6 text-[#F5B300]" />
                <div>
                  <p className="text-[14px] font-medium text-[#1C1C1E]">年度文化與創作者影響紀錄</p>
                  <p className="text-[10px] uppercase tracking-[0.17em] text-[#1C1C1E]/35 mt-1">ArtON · ESG Cultural Ledger</p>
                </div>
              </div>
              <span className="text-[11px] text-[#2D5A3D] border border-[#2D5A3D]/18 bg-[#2D5A3D]/5 px-3 py-1.5 rounded-full">持續展示中</span>
            </div>
            <p className="text-[11px] text-[#2D5A3D] font-medium pt-4 flex items-center gap-2">
              <PowerGlyph className="w-3.5 h-3.5 text-[#2D5A3D]" />
              提供完整的數據存證與認證憑證，方便企業年度申報。
            </p>

            <div className="grid grid-cols-2 gap-x-7 gap-y-8 py-8 border-b border-[#EAE5DC]">
              {statistics.map(({ label, value, icon: Icon }) => (
                <div key={label} className="border-l border-[#F5B300]/42 pl-4">
                  <div className="flex items-center gap-2 mb-3 text-[#1C1C1E]/38">
                    <Icon className="w-3.5 h-3.5 text-[#F5B300]" strokeWidth={1.4} />
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
                    <div key={index} className="flex-1 bg-[#F5B300]/18 relative h-full flex items-end">
                      <div className="w-full bg-[#F5B300]/58" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                {[{ label: "文化支持", value: 92 }, { label: "社區參與", value: 78 }, { label: "藝術教育", value: 85 }].map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2 text-[11px]"><span className="text-[#1C1C1E]/48">{label}</span><span className="text-[#F5B300]">{value}%</span></div>
                    <div className="h-px bg-[#EAE5DC]"><div className="h-px bg-[#F5B300]" style={{ width: `${value}%` }} /></div>
                  </div>
                ))}
                <button className="w-full mt-2 text-left text-[12px] text-[#1C1C1E]/65 border-t border-[#EAE5DC] pt-4 flex items-center justify-between">
                  <span>取得 ESG 成果報告</span><span className="text-[#F5B300]">↗</span>
                </button>
                <a href="/assets/arton-esg-sample_90a82260.pdf" download className="w-full text-left text-[12px] text-[#1C1C1E]/65 border-t border-[#EAE5DC] pt-4 flex items-center justify-between hover:text-[#2D5A3D] transition-colors duration-300">
                  <span>下載 ESG 報告範本（PDF）</span><span className="text-[#F5B300]">↓</span>
                </a>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
