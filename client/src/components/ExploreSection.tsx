/**
 * Room 05 — Current Exhibitions.
 * Gallery Quietism: 乾淨整齊的等比網格。
 * 2026-08-22 更新：加入按藝術風格與 ESG 主題篩選的功能。
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

// 定義篩選類別
type FilterType = "all" | "style" | "esg";

const exhibitions = [
  { 
    title: "九鯉魚", 
    tag: "本月主打", 
    image: "/manus-storage/koi-square_a0f0802a.jpg", 
    artist: "藝術家 · 鄭美珠", 
    gallery: "小光點畫廊策展",
    categories: ["style-oriental", "esg-inclusive"] 
  },
  { 
    title: "旅行台灣", 
    tag: "Taiwan", 
    image: "/assets/exhibition-taiwan_802358d3.jpg", 
    artist: "山海之間，留下島嶼的日常風景", 
    gallery: "",
    categories: ["style-scenery"] 
  },
  { 
    title: "身心障礙藝術展", 
    tag: "Together", 
    image: "/manus-storage/happiness-square_5f481689.jpg", 
    artist: "藝術家 · 鄭美珠", 
    gallery: "小光點畫廊策展 · 《真的幸福了》",
    categories: ["style-healing", "esg-inclusive"] 
  },
  { 
    title: "抽象藝術", 
    tag: "Abstract", 
    image: "/assets/exhibition-abstract_a4923795.jpg", 
    artist: "色彩、形狀與空間之間的自由對話", 
    gallery: "",
    categories: ["style-abstract"] 
  },
  { 
    title: "自然風景", 
    tag: "Nature", 
    image: "/assets/exhibition-nature_c9268f72.jpg", 
    artist: "將遠方的山林帶進每天經過的地方", 
    gallery: "",
    categories: ["style-scenery"] 
  },
  { 
    title: "春季療癒展", 
    tag: "春季策展", 
    image: "/manus-storage/summer-youth-square_be39c0c7.jpg", 
    artist: "藝術家 · 鄭美珠", 
    gallery: "小光點畫廊策展",
    categories: ["style-healing", "esg-inclusive"] 
  },
];

const STYLES = [
  { id: "all", label: "全部作品" },
  { id: "style-oriental", label: "東方韻味" },
  { id: "style-scenery", label: "自然風景" },
  { id: "style-abstract", label: "抽象藝術" },
  { id: "style-healing", label: "療癒插畫" },
];

const ESG_THEMES = [
  { id: "esg-inclusive", label: "多元共融 (DEI)" },
  { id: "esg-lowcarbon", label: "低碳永續" },
];

export default function ExploreSection() {
  const { ref, isVisible } = useScrollAnimation(0.04);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExhibitions = useMemo(() => {
    if (activeFilter === "all") return exhibitions;
    return exhibitions.filter(ex => ex.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="explore" className="py-24 md:py-36 bg-[#FBFAF7]">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <GalleryHeading
            room="05"
            label="Current Exhibitions"
            title={<>把喜歡的<br />藝術，帶進<br />你的空間。</>}
            titleSize="clamp(2.4rem,4.2vw,4.2rem)"
            className={`lg:col-span-7 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />
          <div className={`lg:col-span-5 lg:pb-2 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[15px] leading-[1.9] text-[#1C1C1E]/50">每一檔策展，都有自己的情緒、節奏與故事。企業可以直接觀看，找到最適合空間的一場展覽。</p>
            <a href={LINKS.customerLine} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 gap-3 text-[12px] tracking-[0.08em] border-b border-[#F5B300] pb-2">查看所有策展 <span className="text-[#F5B300]">↗</span></a>
          </div>
        </div>

        {/* 篩選控制器 */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="space-y-8">
            {/* 藝術風格篩選 */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#1C1C1E]/30 font-bold mb-5">Art Style · 藝術風格</h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setActiveFilter(style.id)}
                    className={cn(
                      "px-5 py-2.5 text-[13px] tracking-[0.05em] transition-all duration-300 rounded-full border",
                      activeFilter === style.id
                        ? "bg-[#16203B] text-white border-[#16203B] shadow-lg shadow-[#16203B]/10"
                        : "bg-white text-[#1C1C1E]/60 border-[#1C1C1E]/10 hover:border-[#F5B300] hover:text-[#1C1C1E]"
                    )}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ESG 主題篩選 */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#1C1C1E]/30 font-bold mb-5">ESG Impact · 永續影響力</h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {ESG_THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setActiveFilter(theme.id)}
                    className={cn(
                      "px-5 py-2.5 text-[13px] tracking-[0.05em] transition-all duration-300 rounded-full border flex items-center gap-2",
                      activeFilter === theme.id
                        ? "bg-[#2D5A3D] text-white border-[#2D5A3D] shadow-lg shadow-[#2D5A3D]/10"
                        : "bg-white text-[#2D5A3D]/70 border-[#2D5A3D]/20 hover:border-[#2D5A3D] hover:bg-[#2D5A3D]/5"
                    )}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                    {theme.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 策展列表 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-14 min-h-[400px]">
          {filteredExhibitions.length > 0 ? (
            filteredExhibitions.map((exhibition, index) => (
              <figure
                key={exhibition.title}
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <a href={index === 0 ? LINKS.customerLine : "/start"} className="block group">
                  <div className="overflow-hidden">
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={exhibition.image}
                        alt={exhibition.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      />
                      {/* ESG 標籤提示 */}
                      {exhibition.categories.includes("esg-inclusive") && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#2D5A3D] text-[9px] font-bold tracking-[0.1em] px-2 py-1 rounded shadow-sm border border-[#2D5A3D]/10">
                          ESG IMPACT
                        </div>
                      )}
                    </div>
                  </div>
                  <figcaption className="pt-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#F5B300] font-medium mb-2.5">{exhibition.tag}</p>
                    <h3 className="text-[19px] md:text-[22px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{exhibition.title}</h3>
                    <p className="text-[12px] leading-[1.7] text-[#1C1C1E]/45 mt-2.5">{exhibition.artist}</p>
                    {exhibition.gallery && <p className="text-[11px] leading-[1.7] text-[#F5B300] mt-1">{exhibition.gallery}</p>}
                  </figcaption>
                </a>
              </figure>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-[#1C1C1E]/40 text-[15px]">目前該類別尚無策展作品，請嘗試其他篩選條件。</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
