/**
 * Room 09 — Subscribing & Exhibiting.
 * Gallery Quietism: a warm subscription panel led by a disability artist's
 * painting (left story, right price card), followed by a calm row of the
 * three hardware devices — subscription and hardware clearly separated.
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight, Check, Monitor, Send, Smartphone, Sun } from "lucide-react";

type PlanFeature = string;

interface HardwarePlan {
  icon: typeof Monitor;
  title: string;
  subtitle: string;
  price?: string;
  priceNote?: string;
  highlight?: string;
  highlightNote?: string;
  features: PlanFeature[];
  cta: string;
  recommended?: boolean;
}

const hardwarePlans: HardwarePlan[] = [
  {
    icon: Smartphone,
    title: "ArtON Box 藝術盒",
    subtitle: "輕巧易安裝，搭配任何螢幕即可開始展示藝術作品。",
    price: "NT$2,200",
    priceNote: "一次購買",
    highlight: "或租用 NT$220／月（12 個月方案）",
    features: ["隨插即用，支援 HDMI 輸出", "雲端排程與自動更新展覽", "穩定流暢，適合企業與診所"],
    cta: "諮詢專屬播放器",
  },
  {
    icon: Monitor,
    title: "ArtON 藝術展示面板",
    subtitle: "專為藝術展示打造，精準還原色彩，讓每件作品展現最佳質感。",
    highlight: "專業展示",
    highlightNote: "多種尺寸｜依需求配置，提供專人規劃與報價",
    features: ["霧面抗眩光，如同真實畫布", "博物館級色彩校準與木質外框", "結合 ArtON 訂閱服務一體到位"],
    cta: "取得專人規劃報價",
    recommended: true,
  },
  {
    icon: Sun,
    title: "ArtON 真全彩電子紙展示",
    subtitle: "1677 萬真全彩｜零藍光護眼｜超低耗電。",
    highlight: "環保首選",
    highlightNote: "多種尺寸｜依需求配置，提供專人規劃與報價",
    features: ["採用全反射電子紙顯示技術", "忠實呈現藝術作品色彩，長時間顯示舒適省電", "最適合藝術展示、企業 ESG 與公共空間"],
    cta: "諮詢電子紙展示方案",
  },
];

export default function PlansSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="plans" className="relative py-28 md:py-40 bg-[#F7F4EF] overflow-hidden">
      <div className="absolute -bottom-28 left-[3%] text-[20rem] leading-none text-[#C4A265]/[0.045] font-light select-none" aria-hidden="true">09</div>
      <div className="container relative" ref={ref}>
        <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <GalleryHeading
            room="09"
            label="Subscribe & Exhibit"
            title="選擇適合你的展示方式。"
            description={<>訂閱讓藝術持續發生，裝置讓展示落地。無論從一次訂閱開始，還是整棟空間規劃，ArtON 都陪著你讓藝術持續被看見。</>}
            className="max-w-3xl mx-auto"
            titleSize="clamp(2.15rem,3.8vw,3.6rem)"
          />
        </div>

        {/* Subscription — ArtON Supporter, 799/mo, with artwork photo */}
        <div
          className={`relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(44,37,27,0.16)] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-12">
            {/* Left — dark story panel */}
            <div className="lg:col-span-7 bg-[#1C2632] text-white p-10 md:p-14 lg:p-16">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] mb-8 font-semibold">Monthly Plan · Make Art a Daily Presence</p>
              <h3 className="text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.3] font-light mb-8" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                讓藝術
                <br />
                <span className="text-[#E8B339]">持續發生。</span>
              </h3>
              <p className="text-[15px] md:text-[16px] leading-[2] text-white/72 max-w-xl mb-12">
                選擇一檔喜歡的策展，加入 ArtON 訂閱。藝術內容會持續送進你的展示空間，讓空間持續有新的作品，也讓藝術創作持續獲得支持。
              </p>

              <div className="space-y-6 border-t border-white/12 pt-8">
                {["加入 ArtON LINE", "選擇展覽與訂閱", "綁定設備，開始展示"].map((step, i) => (
                  <div key={step} className="grid grid-cols-[40px_1fr] gap-4 items-center border-b border-white/12 pb-6 last:border-0 last:pb-0">
                    <span className="text-[13px] text-[#E8B339] font-medium">0{i + 1}</span>
                    <p className="text-[15px] font-medium tracking-[0.03em]">{step}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[13px] text-white/40">後續管理，也都在 LINE 完成。</p>
            </div>

            {/* Right — cream price card with artwork */}
            <div className="lg:col-span-5 bg-[#F6F2E9] p-10 md:p-12 lg:p-12 flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#B8954F] mb-5 font-semibold">BASIC PLAN</p>
              <div className="flex items-start justify-between gap-4 mb-6">
                <h4 className="text-[27px] md:text-[30px] font-normal text-[#1C1C1E] leading-[1.3]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                  ArtON 支持夥伴
                </h4>
                <p className="text-right shrink-0">
                  <span className="text-[13px] text-[#B8954F] mr-1">NT$</span>
                  <span className="text-[clamp(2.9rem,4.2vw,3.8rem)] leading-none font-light text-[#B8954F]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>799</span>
                  <span className="text-[13px] text-[#1C1C1E]/45 ml-1">／月起</span>
                </p>
              </div>

              <div className="overflow-hidden rounded-lg mb-6">
                <img src="/manus-storage/subscription-art2_d94ae0fc.jpg" alt="九鯉魚 — 身障藝術家作品" className="w-full h-[180px] md:h-[210px] object-cover" />
              </div>

              <p className="text-[14px] leading-[1.9] text-[#1C1C1E]/70 mb-8">
                與 ArtON 一起支持身障藝術創作，每一次訂閱都是實質的力量。
              </p>

              <ul className="space-y-3.5 mb-10 flex-1">
                {["ArtON 平台展示服務", "藝術內容支持與合法展示授權", "ArtON 藝術內容持續更新", "雲端管理與展示紀錄"].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-[#1C1C1E]/78">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#E8B339]" strokeWidth={2.2} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={LINKS.customerLine}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 text-[14px] font-semibold tracking-[0.05em] px-6 py-4.5 bg-[#F0B429] text-[#1C1C1E] hover:bg-[#F6C03C] transition-all duration-200 active:scale-[0.97]"
              >
                加入 LINE 開始訂閱
                <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Hardware — three devices together */}
        <div className="mt-16 md:mt-20">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-8">Exhibiting Devices</p>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-0 items-stretch max-w-6xl mx-auto">
            {hardwarePlans.map((plan, index) => (
              <article
                key={plan.title}
                className={`relative flex flex-col p-8 md:p-9 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  plan.recommended
                    ? "lg:mx-[-1px] lg:-my-6 lg:px-9 lg:py-12 bg-[#16202B] text-white shadow-[0_32px_90px_rgba(22,32,43,0.45)] border-t-4 border-[#E8B339] lg:z-10"
                    : "bg-white border border-[#E7E0D5] shadow-[0_18px_50px_rgba(44,37,27,0.06)]"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <plan.icon className={`w-5 h-5 ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`} strokeWidth={1.5} />
                  <h3
                    className="text-[23px] md:text-[26px] leading-[1.35] font-normal text-[#1C1C1E]"
                    style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif", ...(plan.recommended ? { color: "#FFFFFF" } : {}) }}
                  >
                    {plan.title}
                  </h3>
                </div>

                <p className={`text-[13px] leading-[1.85] mb-8 ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.subtitle}</p>

                {plan.price ? (
                  <div className={`pb-7 mb-7 border-b ${plan.recommended ? "border-white/14" : "border-[#EAE5DC]"}`}>
                    <p className="text-[clamp(2rem,3.2vw,3.1rem)] leading-none font-light text-[#B8954F] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {plan.price}
                    </p>
                    <p className={`text-[13px] ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.priceNote}</p>
                    <p className="text-[12px] mt-1.5 text-[#1C1C1E]/45">{plan.highlight}</p>
                  </div>
                ) : (
                  <div className={`pb-7 mb-7 border-b ${plan.recommended ? "border-white/14" : "border-[#EAE5DC]"}`}>
                    <p className={`text-[clamp(1.55rem,2.6vw,2.6rem)] leading-none font-light mb-3 ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {plan.highlight}
                    </p>
                    <p className={`text-[13px] ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.highlightNote}</p>
                  </div>
                )}

                <ul className="space-y-3.5 mb-9 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[13px] leading-[1.7]">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`}
                        strokeWidth={2}
                      />
                      <span className={plan.recommended ? "text-white/85" : "text-[#45423C]"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={LINKS.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center justify-center gap-2.5 text-[13px] font-medium tracking-[0.04em] px-6 py-4 transition-all duration-200 active:scale-[0.97] ${
                    plan.recommended
                      ? "bg-[#E8B339] text-[#16202B] hover:bg-[#F0B429]"
                      : "border border-[#1C1C1E]/35 text-[#1C1C1E] hover:border-[#B8954F] hover:text-[#B8954F]"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
              </article>
            ))}
          </div>
        </div>

        <p className={`mt-14 md:mt-16 text-center text-[12.5px] text-[#1C1C1E]/40 tracking-[0.02em] transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          所有裝置皆搭配 ArtON 訂閱服務，每月策展內容自動更新，讓展示持續發生。
        </p>
      </div>
    </section>
  );
}
