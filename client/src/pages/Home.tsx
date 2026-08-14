/**
 * ArtON Homepage
 * Design Philosophy: Gallery Quietism
 * - Gallery Quietism: museum-like whitespace, warm tones, Cormorant Garamond display font
 * - Color palette: warm white #FAFAF8, cream #F5F0EB, art gold #C4A265, deep gray #1C1C1E
 * - Layout: generous vertical spacing, asymmetric compositions, elegant card grids
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyArtON from "@/components/WhyArtON";
import ProcessSection from "@/components/ProcessSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import CuratorSection from "@/components/CuratorSection";
import ExploreSection from "@/components/ExploreSection";
import TimelineSection from "@/components/TimelineSection";
import WhyEnterprise from "@/components/WhyEnterprise";
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
        <WhyArtON />
        <ProcessSection />
        <EnterpriseSection />
        <CuratorSection />
        <ExploreSection />
        <TimelineSection />
        <WhyEnterprise />
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
    <section className="py-28 md:py-40 bg-[#1C2632] text-white overflow-hidden">
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
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="relative">
              <img
                src="/manus-storage/teaser-art-d_d8627ff7.jpg"
                alt="藝術作品於空間中持續展示"
                className="w-full max-w-md rounded-2xl shadow-2xl shadow-black/30"
              />
              <div className="absolute -bottom-4 -left-4 hidden md:block bg-[#E8B339] text-[#1C2632] text-[13px] font-semibold px-5 py-3 rounded-xl shadow-lg">
                每月更新 · 雲端策展
              </div>
            </div>
            <a
              href="/start"
              className={`inline-flex items-center gap-3 px-8 py-4 bg-[#E8B339] text-[#1C2632] text-[15px] font-semibold tracking-[0.04em] rounded-full hover:bg-[#F0B429] transition-all duration-300 hover:shadow-xl hover:shadow-[#E8B339]/20 active:scale-[0.97] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } delay-200`}
            >
              查看完整方案與硬體
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
