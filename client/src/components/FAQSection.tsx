/**
 * Room 10 — Visitor notes.
 * Gallery Quietism: a fixed wall label beside a restrained question index.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/links";

const LINE_QR = LINKS.lineQr;

const questions = [
  { q: "已有螢幕，如何開始？", a: "已有相容螢幕，可另購 ArtON Box 開始展示。ArtON 控制端需要連網，設備綁定與展示管理依平台操作流程完成；實際相容性會依螢幕與場域條件確認。" },
  { q: "沒有螢幕，可以選什麼設備？", a: "可依展示需求選購 ArtON 藝術展示面板或全彩電子紙面板。設備皆為一次買斷，內容訂閱另計；藝術框其他尺寸與電子紙配置請洽詢。" },
  { q: "如何開始展示？", a: "選擇適合空間的策展內容，確認展示設備與時段後，即可開始讓作品走進您的空間。我們會陪同完成前期設定。" },
  { q: "如何支持創作者？", a: "公開策展依內容費與藝術家、策展夥伴的合作約定結算，支持參與該展覽的創作者。若想優先支持身心障礙創作者，可在策展目錄中選擇帶有 ESG 標誌的展覽。" },
  { q: "公開策展會多久更新一次？", a: "公開策展目錄持續更新，實際展示內容依選定方案與排程提供。" },
  { q: "ESG 成果如何呈現？", a: "基本方案提供與展示相關的基本紀錄；Impact Tracking 為獨立加購，提供約定範圍的 ESG 展示資料。兩者都不等同第三方 ESG 認證或法定申報，實際欄位依方案與專案確認。" },
  { q: "訂閱內容包含身心障礙藝術家的作品嗎？", a: "有的。身心障礙藝術家的作品收錄於 ArtON 策展之中，並附有 ESG 標誌方便識別。若想優先支持身心障礙創作者，只需在策展目錄中選擇帶有 ESG 標誌的展覽，讓訂閱直接成為可被記錄的社會影響力。" },
  { q: "ArtON Box 是租用的嗎？", a: "不是。ArtON Box、藝術展示面板與全彩電子紙面板皆為設備採購項目，設備一次買斷，內容訂閱另計；若已有相容螢幕，可選擇 ArtON Box。" },
  { q: "想了解電子紙（E-Paper）展示方案，該如何洽詢？", a: "電子紙為專案配置，可依據點與空間需求選擇合適尺寸與數量，並提供現場評估與報價。歡迎透過 LINE 官方帳號或來信 support@arton.tw，說明您的據點條件與展示需求，顧問將提供尺寸建議、設備配置與節能估算、方案報價。" },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 md:py-44 bg-[#F7F4EF] overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <GalleryHeading
            room="08"
            label="Visitor Notes"
            title={<>開始之前，<br />你可能想<br />知道的事。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
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
                    <span className="text-[12px] text-[#F5B300]">0{index + 1}</span>
                    <span className="text-[17px] md:text-[20px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{item.q}</span>
                    <PowerGlyph className={`w-5 h-5 text-[#F5B300] transition-transform duration-300 ${expanded ? "rotate-45" : ""}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-8 pl-[50px] pr-8 max-w-2xl text-[14px] leading-[1.95] text-[#45423C]">{item.a}</p>
                    </div>
                  </div>
                </article>
              );
            })}
            <div className="border-t border-[#1C1C1E]/12" />

            {/* QR Code — scan to consult */}
            <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8 plaque bg-white/60 p-8 md:p-10">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white p-3 shadow-[0_8px_30px_rgba(28,28,30,0.08)]">
                  <img src={LINE_QR} alt="ArtON 客戶 LINE QR Code" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#F5B300] font-semibold mb-3">Scan to Consult</p>
                <h3 className="text-[19px] md:text-[22px] font-normal text-[#1C1C1E] mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                  看完問答，還有想了解的？
                </h3>
                <p className="text-[13.5px] leading-[1.9] text-[#45423C] mb-6 max-w-md">
                  用手機開啟 LINE 掃描 QR Code，或撥打專線 <a href={LINKS.phone} className="font-semibold text-[#16203B] hover:text-[#F5B300] transition-colors">{LINKS.phoneDisplay}</a>，與顧問聊聊您的空間與需求。
                </p>
                <a
                  href={LINKS.customerLine}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#16203B] text-white text-[13.5px] font-medium rounded-full hover:bg-[#333336] transition-all duration-300 active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  直接點擊加入 LINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
