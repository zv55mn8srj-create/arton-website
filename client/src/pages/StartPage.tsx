/**
 * ArtON /start — 企業免費諮詢與開始展示子頁
 * Gallery Quietism: museum-like whitespace, warm tones, Cormorant Garamond.
 * Color palette: warm white #FAFAF8, cream #F5F0EB, art gold #C4A265/#E8B339,
 * deep gray #1C1C1E, ink navy #16202B/#1C2632, forest #2D5A3D.
 * Empowerment narrative — creators earn income through sustained display.
 * This page consolidates subscription plans + hardware + steps, and points
 * all final CTAs to the customer LINE.
 */
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import PlansSection from "@/components/PlansSection";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "輕量訂閱",
    description: "每月策展內容自動更新，零施工、雲端管理，現有螢幕即可開始。",
  },
  {
    title: "合法授權",
    description: "所有作品皆經藝術家與策展方授權，企業安心展示、安心累積成果。",
  },
  {
    title: "ESG 可紀錄",
    description: "展示據點、支持創作者數量與展示天數皆可匯出，放進年度永續報告。",
  },
];

const steps = [
  { no: "01", title: "加入 ArtON LINE", description: "與顧問聊聊空間、據點與預算，確認最適合的展示方式。" },
  { no: "02", title: "選擇策展與方案", description: "從每月更新的策展中挑選，並確認訂閱方案與裝置配置。" },
  { no: "03", title: "綁定設備，開始展示", description: "接上 ArtON Box 或配置藝術面板，作品即進入你的空間。" },
  { no: "04", title: "每月自動更新", description: "內容雲端排程更新，ESG 成果持續累積，管理都在 LINE 完成。" },
];

export default function StartPage() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />
      <main>
        {/* Intro */}
        <section className="relative py-28 md:py-36 bg-[#1C2632] text-white overflow-hidden">
          <div className="absolute -bottom-16 left-[3%] text-[22rem] leading-none text-white/[0.04] font-light select-none" aria-hidden="true">
            Start
          </div>
          <div className="container relative" ref={ref}>
            <div className="max-w-3xl">
              <p
                className={`text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-[#E8B339] mb-8 font-semibold transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Enterprise Consultation · 開始展示
              </p>
              <h1
                className={`text-[clamp(2.6rem,5.2vw,4.8rem)] leading-[1.12] font-light tracking-[-0.04em] mb-8 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
              >
                把閒置的牆，
                <br />
                變成企業的 <span className="text-[#E8B339]">ESG 實踐</span>
                <br />
                與創作者的穩定收入。
              </h1>
              <p
                className={`text-white/72 text-[15px] md:text-[17px] leading-[2] max-w-2xl mb-10 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                每一次展示，不只是美化空間，更是企業最直觀的永續行動與創作者的持續收入。無論單一據點還是多據點規劃，我們都會依空間條件一起完成。
              </p>
              <a
                href={LINKS.customerLine}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 px-8 py-4 bg-[#E8B339] text-[#1C2632] text-[15px] font-semibold tracking-[0.04em] rounded-full hover:bg-[#F0B429] transition-all duration-300 hover:shadow-xl hover:shadow-[#E8B339]/20 active:scale-[0.97] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } delay-300`}
              >
                <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
                加入 ArtON LINE 開始諮詢
              </a>
            </div>
          </div>
        </section>

        {/* Why start with us */}
        <section className="py-24 md:py-32 bg-[#FBFAF7]">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
              {reasons.map((reason, i) => (
                <ReasonCard key={reason.title} {...reason} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 md:py-32 bg-[#F7F4EF]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-12 text-center">
              Four Simple Steps · 從諮詢到展示
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <div key={step.no} className="relative border-t border-[#1C1C1E]/12 pt-6">
                  <span className="text-[12px] text-[#C4A265] font-medium">{step.no}</span>
                  <h3 className="text-[19px] font-normal text-[#1C1C1E] mt-3 mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.9] text-[#45423C]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans (subscription + hardware) */}
        <PlansSection />

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-[#1C1C1E] text-white text-center">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] mb-8 font-semibold">Ready · 隨時可以開始</p>
            <h2 className="text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.25] font-light mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
              讓下一面牆，<br />
              <span className="text-[#E8B339]">開始說話。</span>
            </h2>
            <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.9] max-w-xl mx-auto mb-10">
              與顧問聊聊你的空間與預算，取得最適合的方案建議與報價。
            </p>
            <a
              href={LINKS.customerLine}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B339] text-[#1C1C1E] text-[15px] font-semibold rounded-full hover:bg-[#F0B429] transition-all duration-300 active:scale-[0.97]"
            >
              <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
              加入 LINE 開始諮詢
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

function ReasonCard({ title, description, index }: { title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <article
      ref={ref}
      className={`plaque transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <Sparkles className="w-4 h-4 text-[#C4A265]" strokeWidth={1.5} />
        <h3 className="text-[21px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
          {title}
        </h3>
      </div>
      <p className="text-[13.5px] leading-[1.9] text-[#45423C]">{description}</p>
    </article>
  );
}
