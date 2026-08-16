/**
 * ArtON /b2b — B2B Landing Page
 * Direct, outcome-first copy for procurement & ESG decision makers,
 * while keeping the Gallery Quietism visual language (warm whites,
 * Cormorant Garamond display, art gold #C4A265 / #E8B339, deep gray #1C1C1E).
 */
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Check, FileOutput, Landmark, MessageCircle, Leaf, Mail, WifiOff } from "lucide-react";

const highlights = [
  {
    icon: Check,
    title: "S · 身心障礙創作者支持",
    description: "每一次訂閱，都直接支持身心障礙創作者，讓他們靠自己的作品獲得持續收入，同時累積 DEI 與文化永續的可記錄成果。",
  },
  {
    icon: FileOutput,
    title: "一鍵匯出 ESG 報告",
    description: "支持創作者數量、展示天數與年度展示紀錄，直接匯出成可放入企業永續報告書的格式。",
  },
  {
    icon: Landmark,
    title: "合法採購與完整憑證",
    description: "ArtON 是藝術展示服務平台。企業付費採購藝術服務，取得完整憑證、授權文件與發票，協助財務、稅務與 ESG 申報。",
  },
  {
    icon: Leaf,
    title: "E · 減碳升級選項",
    description: "想要更進一步？可升級全彩電子紙，較傳統液晶省電約 99%，讓 ESG 的 E 與 S 同時被記錄。",
  },
];

const painSolutions = [
  { pain: "每年都要重新找 ESG 活動", solution: "一次策展，全年 365 天持續展示" },
  { pain: "活動結束就沒有成果", solution: "展示天數、據點與創作者支持紀錄可匯出" },
  { pain: "難以向董事會證明 ESG 價值", solution: "年度 ESG 成果報告與數據存證憑證" },
  { pain: "多據點管理成本高", solution: "雲端排程，所有空間統一更新" },
];

const plans = [
  {
    no: "PLAN 01",
    name: "無痛體驗方案",
    tagline: "綁約 1 年 · 直接送 ArtON Box 藝術盒",
    features: [
      "軟體訂閱＋ArtON Box 藝術盒（隨插即用）",
      "自備螢幕即可展示",
      "每月策展內容自動更新",
      "雲端管理與展示紀錄",
      "年度 ESG 成果報告（OPTION · 加價購）",
      "支援身心障礙創作者持續收入",
    ],
    price: "NT$999",
    per: "/月",
    note: "退訂收回裝置，月租低負擔、免大額採購。",
    cta: "加入 LINE 諮詢方案",
    ctaHref: "line",
  },
  {
    no: "PLAN 02",
    name: "全包輕量面板方案",
    tagline: "綁約 2 年 · 附贈 21.5 吋高質感藝術面板",
    features: [
      "軟體訂閱＋21.5 吋藝術展示面板",
      "畫廊級色彩校準與精準還原",
      "霧面抗眩光、木質外框展牆質感",
      "每月策展內容自動更新",
      "雲端管理與展示紀錄",
      "年度 ESG 成果報告（OPTION · 加價購）",
      "支援身心障礙創作者持續收入",
    ],
    price: "NT$1,499",
    per: "/月",
    note: "隨方案送面板，免去採購與校準成本。",
    cta: "加入 LINE 諮詢方案",
    ctaHref: "line",
  },
];

const esgMap = [
  {
    target: "SDG 8",
    name: "良好工作與經濟成長",
    description: "2030 目標明確寫明「為身心障礙者實現體面工作與同值同酬」。訂閱支持身心障礙創作者持續獲得展示收入，即為企業日常實踐。",
    metric: "8.5 包容性就業",
  },
  {
    target: "SDG 10",
    name: "減少不平等",
    description: "不分身心障礙與否，讓每一位創作者的專業、觀點與價值被公平看見、被市場支持，促進社會與經濟包容。",
    metric: "多元平等 · DEI",
  },
  {
    target: "S 社會面向",
    name: "企業永續報告指標",
    description: "支持身心障礙者營生、多元包容採購與在地文化支持，皆為上市櫃永續報告書「社會面向」的常見披露指標。",
    metric: "社會 · 共融採購",
  },
  {
    target: "G 治理面向",
    name: "可稽核的完整憑證",
    description: "合法展示授權、採購憑證與數據存證一應俱全，ESG 成果可被記錄、被稽核、被放入年報。",
    metric: "授權 · 憑證 · 存證",
  },
];

const epaperPlan = {
  label: "UPGRADE · 減碳升級選項",
  name: "ArtON 真全彩電子紙展示",
  tagline: "1677 萬真全彩｜零藍光護眼｜超低耗電。",
  badge: "E 加分項",
  badgeNote: "多種尺寸｜依需求配置｜洽 ",
  quote: "高質感顯示，讓 ESG 的 E 與 S 同時被記錄",
  features: ["在任一訂閱方案基礎上，升級電子紙顯示終端", "較傳統液晶省電約 99%，一年省電 446 度、減碳 227 kg", "忠實呈現藝術作品色彩，長時間顯示舒適護眼", "減碳量計入年度 ESG 成果報告"],
};

export default function B2BPage() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-28 md:py-40 bg-[#16202B] text-white overflow-hidden">
          <div className="absolute -bottom-16 left-[3%] text-[20rem] leading-none text-white/[0.04] font-light select-none" aria-hidden="true">
            B2B
          </div>
          <div className="container relative" ref={ref}>
            <div className="max-w-3xl">
              <p
                className={`text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-[#E8B339] mb-8 font-semibold transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                For Enterprises · ESG 採購方案
              </p>
              <h1
                className={`text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[1.15] font-light tracking-[-0.03em] mb-8 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
              >
                讓每一面牆，
                <br />
                成為 2026 永續報告書裡
                <br />
                <span className="text-[#E8B339]">支持身心障礙創作者的 ESG 實踐。</span>
              </h1>
              <p
                className={`text-white/70 text-[15px] md:text-[17px] leading-[2] max-w-2xl mb-10 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                ArtON 是一個藝術展示服務平台。企業付費採購藝術服務，讓每一位身心障礙創作者靠作品獲得持續收入——支持身心障礙創作者，就是最直接的 ESG 社會實踐；想更進一步，還可升級低耗電的電子紙展示，讓 E 與 S 同時被記錄。
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <a
                  href={LINKS.customerLine}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E8B339] text-[#16202B] text-[15px] font-semibold rounded-full hover:bg-[#F0B429] transition-all duration-300 active:scale-[0.97]"
                >
                  <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
                  加入 LINE 免費諮詢
                </a>
                <a
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-[15px] font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  查看全部方案
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-24 md:py-32 bg-[#FBFAF7]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-14 text-center">
              What You Get · 四大亮點
            </p>
            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-14 max-w-5xl mx-auto">
              {highlights.map((h, i) => (
                <HighlightCard key={h.title} {...h} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ESG Mapping — 支持身心障礙創作者如何對應 ESG 指標 */}
        <section className="py-24 md:py-32 bg-[#F7F4EF]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-6 text-center">
              Your ESG Impact · 支持身心障礙創作者，如何成為你的 ESG
            </p>
            <p className={`max-w-2xl mx-auto text-center text-[15px] md:text-[16.5px] leading-[2] text-[#45423C] mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              支持身心障礙創作者，不是公益活動，而是企業付費採購文化服務所創造的社會價值——直接對應聯合國永續發展目標與企業永續報告書的社會指標。
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 max-w-5xl mx-auto">
              {esgMap.map((item, i) => (
                <EsGCard key={item.target} {...item} index={i} />
              ))}
            </div>
            <p className="mt-12 text-center text-[12px] text-[#1C1C1E]/40">
              年度 ESG 成果報告提供完整數據存證與認證憑證，方便企業年度申報。
            </p>
          </div>
        </section>

        {/* E-Paper Carbon Impact */}
        <section className="py-24 md:py-32 bg-[#16202B] text-white overflow-hidden">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] font-semibold mb-14 text-center">
              Want More E? · 想進一步減碳：升級全彩電子紙
            </p>
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-7">
                <p className="text-white/82 text-[15px] md:text-[16.5px] leading-[2] max-w-2xl">
                  比起傳統液晶螢幕，電子紙只在換畫時耗電，省電高達 <span className="text-[#E8B339] font-semibold">99%</span>。一年幫企業省下約 <span className="text-[#E8B339] font-semibold">446 度電</span>（相當於減少約 <span className="text-[#E8B339] font-semibold">227 kg CO₂</span>），是 ESG 中 <span className="text-[#E8B339] font-semibold">E（環境減碳）</span> 的升級選項。
                </p>
                <p className="text-white/60 text-[13.5px] leading-[2] mt-6 max-w-2xl">
                  而支持身心障礙創作者的 <span className="text-white/82">S（社會共融）</span>，每個訂閱方案都已包含。電子紙讓 E 與 S 同時被記錄——環境減碳與支持身心障礙創作者，一個展示空間同時完成。
                </p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-3 gap-4">
                <EcoStat value="99%" label="省電比例（對比液晶）" />
                <EcoStat value="446 度" label="年省電力（單點估算）" />
                <EcoStat value="227 kg" label="年減碳量（CO₂）" />
              </div>
            </div>
            <p className="text-white/40 text-[11.5px] mt-10 text-center">
              估算基準：65 吋液晶電視 24 小時開啟年耗約 450 度；電子紙年耗約 4–5 度。碳排係數採台灣電網平均。實際數據依現場設備與使用條件調整。
            </p>
          </div>
        </section>

        {/* Pain → Solution */}
        <section className="py-24 md:py-32 bg-[#F7F4EF]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-14 text-center">
              Before → With ArtON · 從痛點到解方
            </p>
            <div className="max-w-4xl mx-auto space-y-5">
              {painSolutions.map((row, i) => (
                <div
                  key={row.pain}
                  className={`grid md:grid-cols-2 gap-4 md:gap-10 items-center bg-white border border-[#E7E0D5] rounded-xl px-7 py-6 shadow-[0_14px_40px_rgba(44,37,27,0.05)] transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <p className="text-[14px] text-[#1C1C1E]/45 line-through decoration-[#C4A265]/60">{row.pain}</p>
                  <p className="text-[15px] font-medium text-[#2D5A3D] flex items-center gap-2.5">
                    <Check className="w-4 h-4 shrink-0 text-[#2D5A3D]" strokeWidth={2.4} />
                    {row.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-24 md:py-32 bg-[#FBFAF7]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-14 text-center">
              B2B Plans · 訂閱即每天做 ESG
            </p>
            <p className={`max-w-2xl mx-auto text-center text-[15px] md:text-[16.5px] leading-[2] text-[#45423C] mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              選擇任一訂閱方案，您的企業每天就在展示藝術、支持身心障礙創作者，並累積可匯出的 ESG 成果紀錄；想進一步減碳，可升級電子紙方案。
            </p>
            {/* 訂閱方案：999／1499 — 企業日常 ESG 的基礎 */}
            <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
              {plans.map((p, i) => (
                <div
                  key={p.no}
                  className={`bg-[#F7F4EF] border border-[#E7E0D5] rounded-xl p-8 md:p-9 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${i === 0 ? "md:translate-y-0" : "md:translate-y-6"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/35 font-semibold mb-4">{p.no}</p>
                  <h3 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.3] font-light text-[#1C1C1E] mb-2" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                    {p.name}
                  </h3>
                  <p className="text-[14px] text-[#1C1C1E]/70 mb-7">{p.tagline}</p>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-[clamp(2.4rem,3.6vw,3.2rem)] font-light text-[#B8954F] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {p.price}
                    </span>
                    <span className="text-[15px] text-[#1C1C1E]/55 pb-1">{p.per}</span>
                  </div>
                  <p className="text-[12.5px] text-[#1C1C1E]/45 mb-7">{p.note}</p>
                  <div className="border-t border-[#E7E0D5] pt-6 mb-8">
                    <ul className="space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-[#1C1C1E]/78">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#B8954F]" strokeWidth={2.2} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={LINKS.customerLine}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2.5 text-[14px] font-semibold px-7 py-4 bg-[#1C1C1E] text-white rounded-full hover:bg-[#16202B] transition-all duration-200 active:scale-[0.97]"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={2} />
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
            {/* E-Paper — 洽詢方案（不標價） */}
            <div className="mt-10 flex justify-center">
              <div
                className={`w-full max-w-4xl bg-[#F7F4EF] border border-[#E7E0D5] rounded-xl p-9 md:p-12 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/35 font-semibold mb-4">{epaperPlan.label}</p>
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-8">
                    <h3 className="text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.3] font-light text-[#1C1C1E] mb-4" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                      {epaperPlan.name}
                    </h3>
                    <p className="text-[15px] md:text-[16.5px] text-[#1C1C1E] mb-8">{epaperPlan.tagline}</p>
                    <div className="border-t border-[#E7E0D5] pt-7 mb-8">
                      <p className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-light text-[#B8954F] mb-2.5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                        {epaperPlan.badge}
                      </p>
                      <p className="flex items-center gap-2 text-[15px] text-[#1C1C1E] mb-1">
                        {epaperPlan.badgeNote}
                        <a href={LINKS.email} className="inline-flex items-center gap-1.5 text-[#B8954F] hover:text-[#C4A265] transition-colors duration-200">
                          <Mail className="w-3.5 h-3.5" strokeWidth={2} />
                          <span>arton.contact@gmail.com</span>
                        </a>
                      </p>
                      <p className="text-[13.5px] text-[#1C1C1E]/45">{epaperPlan.quote}</p>
                    </div>
                    <ul className="space-y-3 mb-9">
                      {epaperPlan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-[#1C1C1E]/78">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#B8954F]" strokeWidth={2.2} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={LINKS.email}
                      className="group inline-flex items-center justify-center gap-2.5 text-[14px] font-semibold px-7 py-4 border border-[#1C1C1E]/35 text-[#1C1C1E] rounded-full hover:border-[#B8954F] hover:text-[#B8954F] transition-all duration-200 active:scale-[0.97]"
                    >
                      諮詢電子紙展示方案
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </a>
                  </div>
                  <div className="md:col-span-4 bg-[#16202B] text-white rounded-lg p-7 md:ml-2">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#E8B339] font-semibold mb-5">E-Paper · 低碳優勢</p>
                    <ul className="space-y-4 text-[13px] leading-[1.8] text-white/80">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">99%</span>
                        <span>較傳統液晶省電</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">零藍光</span>
                        <span>紙感顯影、護眼舒適</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">1677 萬色</span>
                        <span>真全彩忠實還原作品色彩</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">多尺寸</span>
                        <span>依據點與空間需求配置</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* OPTION 04 — 企業客製方案（多據點） */}
            <div className="mt-10 flex justify-center">
              <div
                className={`w-full max-w-4xl bg-[#16202B] text-white rounded-xl p-9 md:p-12 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] font-semibold mb-4">OPTION 04 · Enterprise</p>
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-8">
                    <h3 className="text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.3] font-light text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                      企業客製方案
                    </h3>
                    <p className="text-[15px] md:text-[16.5px] text-white/85 mb-8">
                      多據點採購 · 專人到場評估 · 年度合約彈性。
                    </p>
                    <div className="border-t border-white/12 pt-7 mb-8">
                      <p className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-light text-[#E8B339] mb-2.5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                        為大型採購設計
                      </p>
                      <p className="text-[15px] text-white/80 mb-1">5 台以上（診所、企業總部、連鎖門市）</p>
                      <p className="text-[13.5px] text-white/45">依據點規模提供團體優惠與彈性合約，洽 arton.contact@gmail.com</p>
                    </div>
                    <ul className="space-y-3 mb-9">
                      <li className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-white/85">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#E8B339]" strokeWidth={2.2} />
                        <span>多據點團體優惠：5 台以上即享量購折讓，據點越多條件越優</span>
                      </li>
                      <li className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-white/85">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#E8B339]" strokeWidth={2.2} />
                        <span>專人到場評估：免費勘查各據點空間與設備條件，提供規劃建議書</span>
                      </li>
                      <li className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-white/85">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#E8B339]" strokeWidth={2.2} />
                        <span>年度合約彈性：綁約與付款方式可依企業預算客製，支援統一發票與採購憑證</span>
                      </li>
                      <li className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-white/85">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#E8B339]" strokeWidth={2.2} />
                        <span>整併式 ESG 成果：所有據點展示紀錄彙整為一份年度報告，方便企業永續申報</span>
                      </li>
                    </ul>
                    <a
                      href={LINKS.email}
                      className="group inline-flex items-center justify-center gap-2.5 text-[14px] font-semibold px-7 py-4 bg-[#E8B339] text-[#16202B] rounded-full hover:bg-[#F0B429] transition-all duration-200 active:scale-[0.97]"
                    >
                      申請多據點評估與報價
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </a>
                  </div>
                  <div className="md:col-span-4 border border-white/15 rounded-lg p-7 md:ml-2">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#E8B339] font-semibold mb-5">Custom · 企業採購流程</p>
                    <ul className="space-y-4 text-[13px] leading-[1.8] text-white/80">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">01</span>
                        <span>提供據點清單與需求</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">02</span>
                        <span>專人到場勘查評估</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">03</span>
                        <span>客製報價與合約規劃</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">04</span>
                        <span>統一安裝上線與教育訓練</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E8B339] font-semibold shrink-0">05</span>
                        <span>年度 ESG 成果報告交付</span>
                      </li>
                    </ul>
                    <p className="text-white/40 text-[11.5px] leading-[1.7] mt-6 pt-5 border-t border-white/10">
                      由專人為您評估據點需求與預算，全程免費、無強制採購。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className={`mt-12 text-center text-[12.5px] text-[#1C1C1E]/40 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              所有方案皆含合法展示授權、每月策展內容自動更新與年度 ESG 成果報告；多據點與大型空間另有專人規劃報價。升級電子紙，讓減碳與支持創作者同時被記錄。
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-[#1C1C1E] text-white text-center">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] mb-8 font-semibold">Talk to Us · 免費諮詢</p>
            <h2 className="text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.25] font-light mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
              吃最少電的展示終端，
              <br />
              <span className="text-[#E8B339]">讓減碳與支持創作者，同時發生。</span>
            </h2>
            <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.9] max-w-xl mx-auto mb-10">
              與顧問聊聊據點數量與預算，取得減碳試算、方案報價與 ESG 報告範本。
            </p>
            <a
              href={LINKS.customerLine}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B339] text-[#1C1C1E] text-[15px] font-semibold rounded-full hover:bg-[#F0B429] transition-all duration-300 active:scale-[0.97]"
            >
              <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
              加入 LINE 免費諮詢
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

function EcoStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-6 text-center">
      <p className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-light text-[#E8B339] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {value}
      </p>
      <p className="text-white/55 text-[11px] leading-[1.7] mt-3">{label}</p>
    </div>
  );
}

function HighlightCard({ icon: Icon, title, description, index }: { icon: typeof Check; title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <article
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className="flex items-center gap-3.5 mb-5">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#C4A265]/10">
          <Icon className="w-5 h-5 text-[#B8954F]" strokeWidth={1.5} />
        </span>
        <h3 className="text-[24px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
          {title}
        </h3>
      </div>
      <p className="text-[14px] leading-[2] text-[#45423C]">{description}</p>
    </article>
  );
}

function EsGCard({ target, name, description, metric, index }: { target: string; name: string; description: string; metric: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <article
      ref={ref}
      className={`border-t border-[#1C1C1E]/12 pt-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="text-[12px] text-[#B8954F] font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{target}</p>
      <h3 className="text-[19px] font-normal text-[#1C1C1E] mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
        {name}
      </h3>
      <p className="text-[13px] leading-[1.9] text-[#45423C] mb-4">{description}</p>
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#1C1C1E]/40 font-semibold">{metric}</p>
    </article>
  );
}
