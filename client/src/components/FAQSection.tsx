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
  { q: "企業需要哪些設備？", a: "需搭配 ArtON Box 藝術盒。它輕巧易安裝，只要一台顯示器或電視，接上藝術盒即可開始展示。ArtON 支援大多數螢幕設備，並會依空間條件提供設備建議與設定協助。" },
  { q: "如何開始展示？", a: "選擇適合空間的策展內容，確認展示設備與時段後，即可開始讓作品走進您的空間。我們會陪同完成前期設定。" },
  { q: "如何支持創作者？", a: "每一次透過 ArtON 發生的展示，都讓創作者的作品被更多人看見，也將展示轉化為創作者持續的收入，讓他們能靠自己的作品持續生活。" },
  { q: "我的作品多久會更新一次？", a: "每月都會提供新的策展與藝術作品，讓您的空間保持新鮮感，讓每次造訪都有不同的藝術體驗。" },
  { q: "ESG 成果如何呈現？", a: "企業會員可查看展示據點、支持藝術家數量、展示紀錄與年度 ESG 成果，並可匯出年度報告，作為企業永續行動的一部分。" },
  { q: "訂閱內容包含身心障礙藝術家的作品嗎？", a: "有的。身心障礙藝術家的作品收錄於 ArtON 策展之中，並附有 ESG 標誌方便識別。若想優先支持身心障礙創作者，只需在策展目錄中選擇帶有 ESG 標誌的展覽，讓訂閱直接成為可被記錄的社會影響力。" },
  { q: "空間沒有多餘螢幕，也不想花大錢採購，能參加嗎？", a: "放心！您只需要一台現有的螢幕，搭配 ArtON Box 藝術盒即可。活用診所叫號機、大廳電視等現有設備，接上 ArtON Box 就能輕鬆展示。加入「輕量訂閱方案」，我們會隨方案提供專屬播放器，月租低負擔、免去大額採購，讓藝術展示輕鬆落地。" },
  { q: "想了解電子紙（E-Paper）展示方案，該如何洽詢？", a: "電子紙為專案配置，可依據點與空間需求選擇合適尺寸與數量，並提供現場評估與報價。歡迎透過 LINE 官方帳號或來信 support@arton.tw，說明您的據點條件與展示需求，顧問將提供尺寸建議、減碳試算與方案報價。" },
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
