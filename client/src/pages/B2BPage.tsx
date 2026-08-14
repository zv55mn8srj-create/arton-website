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
import { ArrowRight, Check, FileOutput, Landmark, MessageCircle, Leaf, WifiOff } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "E · 減碳展示終端",
    description: "全彩電子紙較傳統液晶省電約 99%。一年幫你省下上百度電與數十公斤碳排放，讓每一面展示牆都成為低碳實踐。",
  },
  {
    icon: FileOutput,
    title: "一鍵匯出 ESG 報告",
    description: "減碳量、展示據點、支持藝術家數量與年度展示紀錄，直接匯出成可放入企業永續報告書的格式。",
  },
  {
    icon: Landmark,
    title: "合法採購與完整憑證",
    description: "ArtON 是藝術展示服務平台。企業付費採購藝術服務，取得完整憑證、授權文件與發票，協助財務、稅務與 ESG 申報。",
  },
  {
    icon: Check,
    title: "S · 身障創作者支持",
    description: "每一次訂閱，都直接支持身心障礙創作者，讓他們靠自己的作品獲得持續收入，同時累積 DEI 與文化永續的可記錄成果。",
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
    name: "無痛體驗方案",
    price: "999",
    period: "/月",
    term: "綁約 1 年",
    badge: "隨插即用",
    highlight: "直接送 ArtON Box 藝術盒",
    note: "退訂收回裝置，月租低負擔、免大額採購。",
    features: ["ArtON Box 藝術盒（隨插即用）", "自備螢幕即可展示", "每月策展內容自動更新", "雲端管理與展示紀錄"],
  },
  {
    name: "ArtON 藝術展示面板",
    price: "1,499",
    period: "/月",
    term: "綁約 2 年",
    badge: "畫廊質感",
    highlight: "專為藝術展示打造",
    note: "精準還原色彩、霧面抗眩光，讓每件作品展現最佳質感。多種尺寸依需求配置，提供專人規劃與報價。",
    features: ["畫廊級色彩校準與精準還原", "霧面抗眩光面板", "木質外框、展牆即視感", "每月策展內容自動更新", "雲端管理與展示紀錄"],
    recommended: true,
  },
];

const epaperPlan = {
  label: "OPTION 03",
  name: "ArtON 真全彩電子紙展示",
  tagline: "1677 萬真全彩｜零藍光護眼｜超低耗電。",
  badge: "環保首選",
  badgeNote: "多種尺寸｜依需求配置",
  quote: "提供專人規劃與報價",
  features: ["採用全反射電子紙顯示技術", "忠實呈現藝術作品色彩，長時間顯示舒適省電", "最適合藝術展示、企業 ESG 與公共空間"],
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
                <span className="text-[#E8B339]">會減碳、支持身障創作者的 ESG 實踐。</span>
              </h1>
              <p
                className={`text-white/70 text-[15px] md:text-[17px] leading-[2] max-w-2xl mb-10 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                ArtON 是一個藝術展示服務平台。企業付費採購藝術服務，同時創造減碳與社會影響力——低耗電的電子紙展示，讓每一位身障創作者靠作品獲得持續收入，也讓 ESG 的 E 與 S 同時被記錄。
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

        {/* E-Paper Carbon Impact */}
        <section className="py-24 md:py-32 bg-[#16202B] text-white overflow-hidden">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] font-semibold mb-14 text-center">
              Why E-Paper · 為什麼主推全彩電子紙
            </p>
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-7">
                <p className="text-white/82 text-[15px] md:text-[16.5px] leading-[2] max-w-2xl">
                  比起傳統液晶螢幕，電子紙只在換畫時耗電，省電高達 <span className="text-[#E8B339] font-semibold">99%</span>。一年幫企業省下約 <span className="text-[#E8B339] font-semibold">446 度電</span>（相當於減少約 <span className="text-[#E8B339] font-semibold">227 kg CO₂</span>），同時支持了 <span className="text-[#E8B339] font-semibold">24 位身障創作者</span>。
                </p>
                <p className="text-white/60 text-[13.5px] leading-[2] mt-6 max-w-2xl">
                  這是一台吃最少電、產出最高 S&E 價值的永續展示終端——環境減碳與支持身障創作者，一個展示空間同時完成。
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
              Subscription Plans · 以租代買，零重採購
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col p-9 md:p-11 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${
                    plan.recommended
                      ? "bg-[#16202B] text-white shadow-[0_32px_90px_rgba(22,32,43,0.4)] border-t-4 border-[#E8B339] -my-4 py-14"
                      : "bg-white border border-[#E7E0D5] shadow-[0_18px_50px_rgba(44,37,27,0.06)]"
                  }`}
                  style={{ transitionDelay: `${i * 130}ms` }}
                >
                  {plan.recommended && (
                    <span className="absolute -top-4 left-9 bg-[#E8B339] text-[#16202B] text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                  <p className={`text-[11px] uppercase tracking-[0.25em] mb-4 font-semibold ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-[14px] text-[#B8954F] mb-2">NT$</span>
                    <span className="text-[clamp(2.8rem,4vw,3.6rem)] leading-none font-light text-[#B8954F]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {plan.price}
                    </span>
                    <span className={`text-[14px] mb-1.5 ${plan.recommended ? "text-white/60" : "text-[#1C1C1E]/45"}`}>{plan.period}</span>
                  </div>
                  <p className={`text-[13px] mb-6 ${plan.recommended ? "text-white/65" : "text-[#1C1C1E]/50"}`}>
                    {plan.term} · {plan.highlight}
                  </p>
                  <p className={`text-[13px] leading-[1.85] mb-8 ${plan.recommended ? "text-white/70" : "text-[#45423C]"}`}>{plan.note}</p>
                  <ul className={`space-y-3 mb-10 flex-1 ${plan.recommended ? "" : ""}`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13.5px] leading-[1.7]">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`} strokeWidth={2.2} />
                        <span className={plan.recommended ? "text-white/85" : "text-[#1C1C1E]/78"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={LINKS.customerLine}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-2.5 text-[14px] font-semibold px-6 py-4 rounded-full transition-all duration-200 active:scale-[0.97] ${
                      plan.recommended
                        ? "bg-[#E8B339] text-[#16202B] hover:bg-[#F0B429]"
                        : "border border-[#1C1C1E]/35 text-[#1C1C1E] hover:border-[#B8954F] hover:text-[#B8954F]"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={2} />
                    加入 LINE 諮詢方案
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
                      <p className="text-[15px] text-[#1C1C1E] mb-1">{epaperPlan.badgeNote}</p>
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
                    <p className="text-white/40 text-[11.5px] leading-[1.7] mt-6 pt-5 border-t border-white/10">
                      各尺寸規格與報價，請洽 arton.contact@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className={`mt-12 text-center text-[12.5px] text-[#1C1C1E]/40 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              所有方案皆含合法展示授權與每月策展內容自動更新；多據點與大型空間另有專人規劃報價。
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
