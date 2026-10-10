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
      </main>
      {/* 細金線分隔：深藍 CTA 區塊與頁尾之間的視覺收束 */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E8B339]/70 to-transparent" aria-hidden="true" />
      <FooterSection />
    </div>
  );
}
