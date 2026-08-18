/**
 * Room 05 — Current Exhibitions.
 * Gallery Quietism: 乾淨整齊的等比網格。
 * 修正原則：等高卡片、統一圖片比例、統一的標題結構、
 * 移除交錯高低與混雜的卡面樣式差異。
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const exhibitions = [
  { title: "九鯉魚", tag: "本月主打", image: "/manus-storage/koi-square_a0f0802a.jpg", artist: "藝術家 · 鄭美珠", gallery: "小光點畫廊策展" },
  { title: "旅行台灣", tag: "Taiwan", image: "/assets/exhibition-taiwan_802358d3.jpg", artist: "山海之間，留下島嶼的日常風景", gallery: "" },
  { title: "身心障礙藝術展", tag: "Together", image: "/manus-storage/happiness-square_5f481689.jpg", artist: "藝術家 · 鄭美珠", gallery: "小光點畫廊策展 · 《真的幸福了》" },
  { title: "抽象藝術", tag: "Abstract", image: "/assets/exhibition-abstract_a4923795.jpg", artist: "色彩、形狀與空間之間的自由對話", gallery: "" },
  { title: "自然風景", tag: "Nature", image: "/assets/exhibition-nature_c9268f72.jpg", artist: "將遠方的山林帶進每天經過的地方", gallery: "" },
  { title: "春季療癒展", tag: "春季策展", image: "/manus-storage/summer-youth-square_be39c0c7.jpg", artist: "藝術家 · 鄭美珠", gallery: "小光點畫廊策展" },
];

export default function ExploreSection() {
  const { ref, isVisible } = useScrollAnimation(0.04);

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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-14">
          {exhibitions.map((exhibition, index) => (
            <figure
              key={exhibition.title}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${100 + index * 70}ms` }}
            >
              <a href={index === 0 ? LINKS.customerLine : "/start"} className="block group">
                <div className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                </div>
                <figcaption className="pt-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#F5B300] font-medium mb-2.5">0{index + 1} · {exhibition.tag}</p>
                  <h3 className="text-[19px] md:text-[22px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{exhibition.title}</h3>
                  <p className="text-[12px] leading-[1.7] text-[#1C1C1E]/45 mt-2.5">{exhibition.artist}</p>
                  {exhibition.gallery && <p className="text-[11px] leading-[1.7] text-[#F5B300] mt-1">{exhibition.gallery}</p>}
                </figcaption>
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


