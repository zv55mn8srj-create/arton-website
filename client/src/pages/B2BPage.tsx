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
import { ArrowRight, Check, FileOutput, Landmark, MessageCircle, WifiOff } from "lucide-react";

const highlights = [
  {
    icon: FileOutput,
    title: "一鍵匯出 ESG 報告",
    description: "展示據點、支持藝術家數量與年度展示紀錄，直接匯出成可放入企業永續報告書的格式。",
  },
  {
    icon: Landmark,
    title: "合法採購與完整憑證",
    description: "ArtON 是藝術展示服務平台。企業付費採購藝術服務，取得完整憑證、授權文件與發票，協助財務、稅務與 ESG 申報。",
  },
  {
    icon: WifiOff,
    title: "零施工雲端管理",
    description: "不改變空間工程，接上 ArtON Box 即可開始。多據點內容雲端統一排程更新。",
  },
  {
    icon: Check,
    title: "企業 CSR 品牌形象加分",
    description: "採購藝術服務的同時支持身心障礙創作者靠作品獲得持續收入，成為 DEI 與文化永續的具體實踐。",
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
    name: "全包輕量面板方案",
    price: "1,499",
    period: "/月",
    term: "綁約 2 年",
    badge: "質感首選",
    highlight: "附贈 21.5 吋高質感藝術面板",
    note: "一體到位，霧面抗眩光如同真實畫布。",
    features: ["21.5 吋高質感藝術面板", "博物館級色彩校準", "每月策展內容自動更新", "雲端管理與年度 ESG 報告"],
    recommended: true,
  },
];

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
                讓企業的牆面，
                <br />
                變成 2026 永續報告書裡
                <br />
                <span className="text-[#E8B339]">最亮眼的 Social KPI。</span>
              </h1>
              <p
                className={`text-white/70 text-[15px] md:text-[17px] leading-[2] max-w-2xl mb-10 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                ArtON 是一個藝術展示服務平台。企業付費採購藝術服務，同時創造藝術支持與 ESG 影響——每一天的展示，都成為可被記錄的永續實踐。
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
              每一面牆，
              <br />
              <span className="text-[#E8B339]">都可以成為企業的 ESG 答案。</span>
            </h2>
            <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.9] max-w-xl mx-auto mb-10">
              與顧問聊聊據點數量與預算，取得方案建議、報價與 ESG 報告範本。
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
