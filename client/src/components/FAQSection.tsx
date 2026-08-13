/**
 * Room 09 — Visitor notes.
 * Gallery Quietism: a fixed wall label beside a restrained question index.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const questions = [
  { q: "企業需要哪些設備？", a: "只需要一台顯示器或電視即可開始展示。ArtON 支援大多數螢幕設備，並會依空間條件提供設備建議與設定協助。" },
  { q: "Samsung TV 可以使用嗎？", a: "可以。ArtON 支援 Samsung Smart TV 及多數品牌顯示設備；實際相容方式會依型號與現場網路條件確認。" },
  { q: "如何開始展示？", a: "選擇適合空間的策展內容，確認展示設備與時段後，即可開始讓作品走進您的空間。我們會陪同完成前期設定。" },
  { q: "如何支持創作者？", a: "每一次透過 ArtON 發生的展示，都讓創作者的作品被更多人看見，也將展示轉化為創作者持續的收入，讓他們能靠自己的作品持續生活。" },
  { q: "如何取得 ESG 成果報告？", a: "企業可查看展示據點、策展、支持創作者數量與展示天數等紀錄，並彙整為 ESG 文化成果報告，成為可以長期累積的文化行動。" },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 md:py-40 bg-[#F7F4EF] overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <GalleryHeading
            room="09"
            label="Visitor Notes"
            title={<>開始之前，<br />你可能想<br />知道的事。</>}
            description={<>如果你的空間、設備或 ESG 紀錄有不同需求，我們也會依實際情況一起規劃。</>}
            className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7">
            {questions.map((item, index) => {
              const expanded = open === index;
              return (
                <article
                  key={item.q}
                  className={`border-t border-[#1C1C1E]/12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : index)}
                    className="w-full grid grid-cols-[34px_1fr_28px] gap-4 items-center py-7 text-left"
                    aria-expanded={expanded}
                  >
                    <span className="text-[12px] text-[#C4A265]">0{index + 1}</span>
                    <span className="text-[17px] md:text-[20px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{item.q}</span>
                    <PowerGlyph className={`w-5 h-5 text-[#C4A265] transition-transform duration-300 ${expanded ? "rotate-45" : ""}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-8 pl-[50px] pr-8 max-w-2xl text-[14px] leading-[1.95] text-[#1C1C1E]/48">{item.a}</p>
                    </div>
                  </div>
                </article>
              );
            })}
            <div className="border-t border-[#1C1C1E]/12" />
          </div>
        </div>
      </div>
    </section>
  );
}
