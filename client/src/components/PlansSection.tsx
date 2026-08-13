/**
 * Room 09 — Exhibiting Options.
 * Gallery Quietism: three exhibition-grade cards — two quiet paper cards and
 * one deep midnight recommended panel with gold accents — presenting the
 * ArtON Box, Art Display Panel and True-Color e-Paper options.
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight, Check, Monitor, Smartphone, Sun } from "lucide-react";

type PlanFeature = string;

interface Plan {
  tag: string;
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

const plans: Plan[] = [
  {
    tag: "START HERE",
    icon: Smartphone,
    title: "ArtON 支持夥伴",
    subtitle: "與 ArtON 一起支持身障藝術創作，每一次訂閱都是實質的力量。",
    price: "NT$799",
    priceNote: "／月起",
    highlight: "加入 LINE 開始訂閱",
    features: ["ArtON 平台展示服務", "藝術內容支持與合法展示授權", "ArtON 藝術內容持續更新", "雲端管理與展示紀錄"],
    cta: "加入 LINE 開始訂閱",
  },
  {
    tag: "OPTION 01",
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
    tag: "RECOMMENDED",
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
    tag: "OPTION 02",
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
            label="Exhibiting Options"
            title="選擇適合你的展示方式。"
            description={<>從支持夥伴訂閱開始，或選擇專屬展示裝置。無論從一個螢幕開始，還是整棟空間規劃，ArtON 都陪著你讓藝術持續被看見。</>}
            className="max-w-3xl mx-auto"
            titleSize="clamp(2.15rem,3.8vw,3.6rem)"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-0 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
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
              <p
                className={`text-[10px] uppercase tracking-[0.24em] mb-8 font-semibold ${
                  plan.recommended ? "text-[#E8B339]" : "text-[#1C1C1E]/45"
                }`}
              >
                {plan.tag}
              </p>

              <div className="flex items-center gap-3.5 mb-5">
                <plan.icon className={`w-5 h-5 ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`} strokeWidth={1.5} />
                <h3
                  className="text-[24px] md:text-[27px] leading-[1.35] font-normal text-[#1C1C1E]"
                  style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif", ...(plan.recommended ? { color: "#FFFFFF" } : {}) }}
                >
                  {plan.title}
                </h3>
              </div>

              <p className={`text-[13.5px] leading-[1.85] mb-9 ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.subtitle}</p>

              {plan.price ? (
                <div className="pb-8 mb-8 border-b border-[#EAE5DC]">
                  <p className="text-[clamp(2.35rem,3.6vw,3.5rem)] leading-none font-light text-[#B8954F] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {plan.price}
                  </p>
                  <p className={`text-[13.5px] ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.priceNote}</p>
                  <p className="text-[12px] mt-1.5 text-[#1C1C1E]/45">{plan.highlight}</p>
                </div>
              ) : (
                <div className={`pb-8 mb-8 border-b ${plan.recommended ? "border-white/14" : "border-[#EAE5DC]"}`}>
                  <p className={`text-[clamp(1.75rem,2.9vw,2.9rem)] leading-none font-light mb-3 ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {plan.highlight}
                  </p>
                  <p className={`text-[13.5px] ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.highlightNote}</p>
                </div>
              )}

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[13.5px] leading-[1.7]">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.recommended ? "text-[#E8B339]" : "text-[#B8954F]"}`}
                      strokeWidth={2}
                    />
                    <span className={plan.recommended ? "text-white/85" : "text-[#45423C]"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.tag === "START HERE" ? LINKS.customerLine : LINKS.email}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2.5 text-[13.5px] font-medium tracking-[0.04em] px-6 py-4 transition-all duration-200 active:scale-[0.97] ${
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

        <p className={`mt-12 text-center text-[12.5px] text-[#1C1C1E]/40 tracking-[0.02em] transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          所有裝置皆搭配 ArtON 訂閱服務，每月策展內容自動更新，讓展示持續發生。
        </p>
      </div>
    </section>
  );
}
