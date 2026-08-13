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
import PlansSection from "@/components/PlansSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

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
        <PlansSection />
      </main>
      <FooterSection />
    </div>
  );
}
