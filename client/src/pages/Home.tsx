/**
 * ArtON Homepage
 * Design Philosophy: Gallery Quietism
 * - Gallery Quietism: museum-like whitespace, warm tones, Cormorant Garamond display font
 * - Color palette: warm white #FAFAF8, cream #F5F0EB, art gold #F5B300, deep gray #1C1C1E
 * - Layout: generous vertical spacing, asymmetric compositions, elegant card grids
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import CuratorSection from "@/components/CuratorSection";
import MonthlyUpdateSection from "@/components/MonthlyUpdateSection";
import TimelineSection from "@/components/TimelineSection";
import DemoShowcaseSection from "@/components/DemoShowcaseSection";
import VenuesSection from "@/components/VenuesSection";
import SpacesPartnersSection from "@/components/SpacesPartnersSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />
      <main>
        <HeroSection />

        {/* Transition — bridge from hero to how-it-works */}
        <section className="py-16 md:py-24 bg-[#FBFAF7] text-center">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-6">
              From the wall · 從你的牆開始
            </p>
            <p className="text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.6] font-light tracking-[-0.02em] text-[#1C1C1E]/85 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
              選一個喜歡的展，<br className="md:hidden" />剩下的交給 ArtON。
            </p>
            <p className="text-[13px] text-[#1C1C1E]/45 mt-6">一次安裝，持續更新。</p>

            {/* 向下箭頭：引導進入流程區塊 */}
            <button
              aria-label="往下查看 ArtON 如何運作"
              onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="mt-10 inline-flex flex-col items-center gap-1.5 text-[#1C1C1E]/40 hover:text-[#C98F0E] transition-colors duration-300 group"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            </button>
          </div>
        </section>

        <ProcessSection />
        <EnterpriseSection />
        <CuratorSection />
        <MonthlyUpdateSection />
        <TimelineSection />
        <DemoShowcaseSection />
        <VenuesSection />
        <FAQSection />
        <SpacesPartnersSection />
        <PlansTeaserSection />
      </main>
      <FooterSection />
    </div>
  );
}

/**
 * Lightweight plans teaser on the homepage.
 * Full plans (subscription, bundles, hardware, comparison table) live on /start
 * to avoid duplicating information across pages.
 */
function PlansTeaserSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section className="py-28 md:py-44 bg-[#16203B] text-white overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`grid lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="lg:col-span-7">
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-[#E8B339] mb-8 font-semibold">Subscribe & Exhibit · 選擇適合你的展示方式</p>
            <h2 className="text-[clamp(2.2rem,4.4vw,4.4rem)] leading-[1.2] font-light tracking-[-0.02em] mb-8" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
              從 NT$799／月起，<br />
              讓藝術<span className="text-[#E8B339]">持續發生。</span>
            </h2>
            <p className="text-white/72 text-[15px] md:text-[16px] leading-[2] max-w-xl">
              輕量訂閱、以租代買組合包與硬體方案，完整價格與配置說明請見專屬頁面，依你的空間與預算一起規劃。
            </p>
          </div>
          <div className="lg:col-span-5">
            {/* 畫框感斜疊構圖：電子畫框（深藍卡片＋金屬描邊）承載微傾斜的作品圖卡 */}
            <div className="relative max-w-md lg:ml-auto">
              {/* 電子畫框本體 */}
              <div className={`relative bg-[#0E1628] border border-white/12 rounded-[1.2rem] p-4 shadow-2xl shadow-black/40 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                {/* 畫框頂端指示燈 */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B339] shadow-[0_0_6px_#E8B339]/70" />
                    <span className="text-[10px] uppercase tracking-[0.28em] text-white/40">ArtON Frame · On Air</span>
                  </span>
                  <span className="text-[10px] tracking-[0.14em] text-white/35">09:24 AM</span>
                </div>
                {/* 作品圖卡：微傾斜，畫框畫面 */}
                <img
                  src="/manus-storage/koi-full_art_b670850f.jpg"
                  alt="鄭美珠作品《九鯉魚》作品全圖 — 藝術於空間中持續展示"
                  className={`w-full aspect-[4/3] object-cover rounded-lg transition-transform duration-700 ${isVisible ? "rotate-0" : "-rotate-2"}`}
                />
                {/* 畫框名牌 */}
                <div className={`flex items-center justify-between gap-4 border-t border-white/12 mt-3 pt-3 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <p className="text-[12px] md:text-[13px] tracking-[0.14em] text-white/55">《九鯉魚》· 鄭美珠</p>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#E8B339] font-semibold whitespace-nowrap">每月更新 · 雲端策展</p>
                </div>
              </div>
              {/* 畫框背板陰影（層次感） */}
              <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-[1.4rem] bg-white/[0.05]" aria-hidden="true" />

              {/* plaque 式 CTA：整齊條狀，與全站 CTA 一致 */}
              <a
                href="/start"
                className={`mt-10 flex items-center justify-between gap-6 bg-[#E8B339] text-[#16203B] rounded-[0.9rem] px-7 py-5 group hover:bg-[#F0B429] transition-all duration-300 hover:shadow-xl hover:shadow-[#E8B339]/15 active:scale-[0.97] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } delay-200`}
              >
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.28em] text-[#16203B]/55 font-medium">View Plans</span>
                  <span className="block text-[16px] font-semibold tracking-[0.04em]">查看完整方案與硬體</span>
                </span>
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#16203B] text-[#E8B339] group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
