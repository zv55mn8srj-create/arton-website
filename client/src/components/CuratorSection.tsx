/**
 * Room 04 — What You Will See（2026-08-18 反饋改版：Wall Label 卡片式設計）
 * 參考 RKwtqH 圖：左側直幅電子畫框主圖＋右側大標題「把生活的視線，留給喜歡的作品。」
 * 下方三張 WALL LABEL 卡片：
 * 01 一面會呼吸的展牆 — 讓作品隨季節、心情與空間節奏自然更迭。
 * 02 為空間保留品味 — 極窄邊框與霧面顯示，作品安靜地融入日常。
 * 03 收藏，隨手啟動 — 從手機選擇作品，讓每一次切換都簡單自在。
 * 主圖：/manus-storage/wall-label-main_09d5fac2.png（用戶提供直幅藍金電子畫框）
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const wallLabels = [
  {
    no: "01",
    label: "WALL LABEL / 01",
    title: "一面會呼吸的展牆",
    description: "讓作品隨季節、心情與空間節奏自然更迭。",
  },
  {
    no: "02",
    label: "WALL LABEL / 02",
    title: "為空間保留品味",
    description: "極窄邊框與霧面顯示，作品安靜地融入日常。",
  },
  {
    no: "03",
    label: "WALL LABEL / 03",
    title: "收藏，隨手啟動",
    description: "從手機選擇作品，讓每一次切換都簡單自在。",
  },
];

export default function CuratorSection() {
  const { ref, isVisible } = useScrollAnimation(0.06);

  return (
    <section id="curator" className="relative py-28 md:py-44 bg-[#FBFAF7] overflow-hidden">
      <div className="absolute -right-14 top-10 text-[18rem] leading-none text-[#1C1C1E]/[0.03] font-light select-none" aria-hidden="true">04</div>
      <div className="container relative" ref={ref}>
        {/* 上半：左圖右文 */}
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center mb-20 md:mb-28">
          <div className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 border border-[#16203B]/10" aria-hidden="true" />
              <img
                src="/manus-storage/wall-label-main_09d5fac2.png"
                alt="ArtON 智慧藝術畫框：極窄邊框與霧面顯示，作品安靜地融入日常"
                className="relative w-full object-cover shadow-[0_24px_70px_rgba(22,32,59,0.18)]"
              />
              <div className="absolute top-5 left-5 bg-[#16203B] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-2 font-medium">
                01 / Living Space
              </div>
              <p className="mt-5 text-[12px] md:text-[13px] tracking-[0.08em] text-[#1C1C1E]/55">
                ArtON 智慧藝術畫框 · 極窄邊框與霧面顯示
              </p>
            </div>
          </div>

          <div className={`lg:col-span-7 lg:pl-8 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <GalleryHeading
              room="04"
              label="What You Will See"
              title={<>把生活的視線，<br />留給喜歡的<br />作品。</>}
              titleSize="clamp(2.4rem,4.2vw,4.4rem)"
              description={<>一件作品，也可以成為一場展覽。藝術家、作品、創作故事與展覽資訊，輪番走進你的空間。每月，都是一場新的展覽。</>}
              className=""
            />

            <a href={LINKS.curatorLine} target="_blank" rel="noopener noreferrer" className="group inline-flex mt-10 items-center gap-4 text-[13px] font-medium text-[#16203B] border-b border-[#F5B300] pb-2 hover:text-[#C98F0E] transition-colors">
              看看 ArtON 如何融入空間 <span className="text-[#F5B300] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* 下半：三張 WALL LABEL 卡片 */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {wallLabels.map((item, index) => (
            <div
              key={item.no}
              className={`group relative bg-white border border-[#16203B]/10 p-8 md:p-10 transition-all duration-700 hover:border-[#F5B300]/60 hover:shadow-[0_16px_50px_rgba(22,32,59,0.10)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${250 + index * 110}ms` }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#C98F0E] font-semibold mb-7">
                {item.label}
              </p>
              <h3 className="text-[clamp(1.35rem,2vw,1.8rem)] leading-[1.4] font-medium text-[#16203B] mb-4" style={{ fontFamily: "'Noto Sans TC', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-[13.5px] leading-[1.95] text-[#33404F]">{item.description}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F5B300] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
