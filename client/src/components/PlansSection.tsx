/**
 * Room 09 — Subscribing & Exhibiting.
 * Gallery Quietism: a warm subscription panel led by a disability artist's
 * painting (left story, right price card), followed by a calm row of the
 * three hardware devices — subscription and hardware clearly separated.
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS, consultMail } from "@/lib/links";
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

interface BundledPlan {
  name: string;
  price: string;
  period: string;
  term: string;
  device: string;
  note: string;
  features: PlanFeature[];
  cta: string;
  recommended?: boolean;
  badge?: string;
}

const planTable = [
  {
    name: "一分鐘藝術",
    english: "ONE MINUTE ART",
    price: "199",
    license: "無面板內容訂閱",
    device: "不含面板與播放器",
    content: "每月一件作品＋約一分鐘藝術內容",
    audience: "想以輕量方式接收藝術內容的使用者",
    record: "內容訂閱紀錄",
    cta: "加入 LINE 開始訂閱",
  },
  {
    name: "ArtON Home",
    english: "家庭授權",
    price: "699",
    license: "私人住宅、非商業使用",
    device: "設備另行買斷或專案配置",
    content: "每月更新的藝術策展",
    audience: "家庭客廳、房間、書房與私人住宅",
    record: "一般展示紀錄",
    cta: "加入 LINE 開始訂閱",
  },
  {
    name: "ArtON Commercial",
    english: "商用授權",
    price: "999",
    license: "企業、診所、飯店、店家與公開空間",
    device: "設備另行買斷或專案配置",
    content: "每月更新的藝術策展",
    audience: "需要商業展示與合法授權的空間",
    record: "展示與藝術支持佐證數據",
    cta: "加入 LINE 開始訂閱",
  },
];

const hardwarePlans: HardwarePlan[] = [
  {
    icon: Smartphone,
    title: "ArtON Box 藝術盒",
    subtitle: "輕巧易安裝，接上你現有的螢幕即可開始展示藝術作品。適合已經有自己螢幕的空間。",
    price: "NT$2,990",
    priceNote: "一次購買",
    highlight: "ArtON Box｜一次買斷",
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
    subtitle: "1677 萬真全彩｜依空間需求專案配置。",
    highlight: "環保首選",
    highlightNote: "多種尺寸｜依需求配置，提供專人規劃與報價",
    features: ["採用全反射電子紙顯示技術", "忠實呈現藝術作品色彩，長時間顯示舒適省電", "最適合藝術展示、企業 ESG 與公共空間"],
    cta: "諮詢電子紙展示方案",
  },
];

interface PlansSectionProps {
  /** Hide the three hardware device cards (kept for future use) */
  hideHardware?: boolean;
  /** 是否顯示 Room 編號（子頁不顯示） */
  showRoom?: boolean;
}

export default function PlansSection({ hideHardware = false, showRoom = true }: PlansSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="plans" className="relative py-28 md:py-44 bg-[#F7F4EF] overflow-hidden">
      <div className="absolute -bottom-28 left-[3%] text-[20rem] leading-none text-[#F5B300]/[0.045] font-light select-none" aria-hidden="true">09</div>
      <div className="container relative" ref={ref}>
        <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <GalleryHeading
            room="09"
            label="Subscribe & Exhibit"
            showRoom={showRoom}
            title="選擇適合你的展示方式。"
            description={<>訂閱讓藝術持續發生，裝置讓展示落地。無論從一次訂閱開始，還是整棟空間規劃，ArtON 都陪著你讓藝術持續被看見。</>}
            className="max-w-3xl mx-auto"
            titleSize="clamp(2.15rem,3.8vw,3.6rem)"
          />
        </div>

        {/* Three plans — one clear comparison table */}
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/40 mb-4 font-semibold">Three Plans · 三種方案</p>
            <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#45423C] max-w-2xl mx-auto">
              一分鐘藝術是不含面板的內容訂閱；ArtON Home 是家庭授權；ArtON Commercial 是商用授權。三者的使用對象與授權範圍不同。
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#E2DCCF] bg-white shadow-[0_18px_50px_rgba(44,37,27,0.06)]">
            <table className="w-full min-w-[900px] text-[13px]">
              <thead>
                <tr className="border-b border-[#E2DCCF]">
                  <th className="w-[18%] px-6 py-6 text-left text-[12px] font-medium text-[#1C1C1E]/50">比較項目</th>
                  {planTable.map((plan) => (
                    <th key={plan.name} className="w-[27.3%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C98F0E]">{plan.english}</p>
                      <p className="text-[21px] font-normal leading-[1.35] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{plan.name}</p>
                      <p className="mt-4 text-[#1C1C1E]">
                        <span className="text-[12px] text-[#C98F0E]">NT$</span>
                        <span className="mx-1 text-[32px] font-light leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{plan.price}</span>
                        <span className="text-[12px] text-[#1C1C1E]/50">／月</span>
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["授權／內容類型", ...planTable.map((p) => p.license)],
                  ["面板與設備", ...planTable.map((p) => p.device)],
                  ["每月提供", ...planTable.map((p) => p.content)],
                  ["適合對象", ...planTable.map((p) => p.audience)],
                  ["可查閱紀錄", ...planTable.map((p) => p.record)],
                ].map(([label, ...values]) => (
                  <tr key={label} className="border-t border-[#EAE5DC] align-top">
                    <th className="px-6 py-5 text-left font-medium text-[#1C1C1E]/55">{label}</th>
                    {values.map((value, i) => <td key={`${label}-${i}`} className="border-l border-[#EAE5DC] px-6 py-5 leading-[1.8] text-[#45423C]">{value}</td>)}
                  </tr>
                ))}
                <tr className="border-t border-[#EAE5DC] align-top">
                  <th className="px-6 py-6 text-left font-medium text-[#1C1C1E]/55">開始方式</th>
                  {planTable.map((plan) => (
                    <td key={plan.name} className="border-l border-[#EAE5DC] px-6 py-6">
                      <a href={LINKS.customerLine} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[#1C1C1E]/35 px-4 py-3 text-[12px] font-medium text-[#1C1C1E] transition-colors hover:border-[#C98F0E] hover:text-[#C98F0E]">
                        {plan.cta}<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Hardware comparison — purchase devices separately from content licenses */}
        <div className="mt-16 md:mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/40 mb-4 font-semibold">Exhibiting Devices · 展示設備買斷方案</p>
            <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#45423C] max-w-2xl mx-auto">
              訂閱方案決定內容與授權；設備則依你的現有條件另行選購。已有螢幕，選 ArtON Box；想要完整藝術框，選 ArtON 藝術展示面板；想強化 ESG 節能，選全彩電子紙。
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E2DCCF] bg-white shadow-[0_18px_50px_rgba(44,37,27,0.06)]">
            <table className="w-full min-w-[900px] text-[13px]">
              <thead>
                <tr className="border-b border-[#E2DCCF]">
                  <th className="w-[18%] px-6 py-6 text-left text-[12px] font-medium text-[#1C1C1E]/50">比較項目</th>
                  <th className="w-[27.3%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C98F0E]">ARTON BOX</p>
                    <p className="text-[21px] font-normal leading-[1.35] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>ArtON Box</p>
                    <span className="inline-flex mt-3 border border-[#1C1C1E]/18 px-2.5 py-1 text-[10px] tracking-[0.08em] text-[#1C1C1E]/60">適合：家庭／商用</span>
                    <p className="mt-4 text-[#1C1C1E]"><span className="text-[12px] text-[#C98F0E]">NT$</span><span className="mx-1 text-[32px] font-light leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2,990</span><span className="text-[12px] text-[#1C1C1E]/50">／一次買斷</span></p>
                  </th>
                  <th className="w-[27.3%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C98F0E]">ART FRAME</p>
                    <p className="text-[21px] font-normal leading-[1.35] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>21 吋藝術框</p>
                    <span className="inline-flex mt-3 border border-[#1C1C1E]/18 px-2.5 py-1 text-[10px] tracking-[0.08em] text-[#1C1C1E]/60">適合：家庭／商用</span>
                    <p className="mt-4 text-[#1C1C1E]"><span className="text-[12px] text-[#C98F0E]">NT$</span><span className="mx-1 text-[32px] font-light leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>13,900</span><span className="text-[12px] text-[#1C1C1E]/50">／一次買斷</span></p>
                  </th>
                  <th className="w-[27.3%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C98F0E]">E-PAPER</p>
                    <p className="text-[21px] font-normal leading-[1.35] text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>全彩電子紙</p>
                    <span className="inline-flex mt-3 border border-[#1C1C1E]/18 px-2.5 py-1 text-[10px] tracking-[0.08em] text-[#1C1C1E]/60">適合：商用／ESG 優先</span>
                    <p className="mt-4 text-[24px] font-light leading-none text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>專案報價</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["是否需要自備螢幕", "需要；接上既有螢幕", "不需要；設備含藝術框與顯示面板", "不需要；設備含全彩電子紙面板"],
                  ["適合情境", "已有螢幕，想快速開始展示", "想要完整藝術框與一體化展示", "想強化 ESG 節能與低耗電展示"],
                  ["搭配授權", "ArtON Home／Commercial", "ArtON Home／Commercial", "ArtON Commercial／專案配置"],
                  ["設備形式", "播放器／訊號盒，一次買斷", "21 吋藝術展示面板，一次買斷", "尺寸依空間需求配置，一次買斷"],
                  ["ESG 相關", "依訂閱方案提供展示紀錄", "依訂閱方案提供展示紀錄", "可另行加購 Impact Tracking，提供節能與展示佐證"],
                ].map(([label, ...values]) => (
                  <tr key={label} className="border-t border-[#EAE5DC] align-top">
                    <th className="px-6 py-5 text-left font-medium text-[#1C1C1E]/55">{label}</th>
                    {values.map((value, i) => <td key={`${label}-${i}`} className="border-l border-[#EAE5DC] px-6 py-5 leading-[1.8] text-[#45423C]">{value}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-center text-[12px] leading-[1.8] text-[#1C1C1E]/45">設備採一次買斷，不提供租賃；全彩電子紙價格依尺寸、數量與場域條件由 ArtON 提供專案報價。</p>
        </div>

        {/* Hardware — three devices together (hidden when hideHardware is true) */}
        {!hideHardware && (
        <div className="mt-16 md:mt-20">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-8">Exhibiting Devices · 展示硬體</p>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-0 items-stretch max-w-6xl mx-auto">
            {hardwarePlans.map((plan, index) => (
              <article
                key={plan.title}
                className={`relative flex flex-col p-8 md:p-9 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  plan.recommended
                    ? "lg:mx-[-1px] lg:-my-6 lg:px-9 lg:py-12 bg-[#16203B] text-white shadow-[0_32px_90px_rgba(22,32,43,0.45)] border-t-4 border-[#E8B339] lg:z-10"
                    : "bg-white border border-[#E7E0D5] shadow-[0_18px_50px_rgba(44,37,27,0.06)]"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <plan.icon className={`w-5 h-5 ${plan.recommended ? "text-[#E8B339]" : "text-[#C98F0E]"}`} strokeWidth={1.5} />
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
                    <p className="text-[clamp(2rem,3.2vw,3.1rem)] leading-none font-light text-[#E8B339] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {plan.price}
                    </p>
                    <p className={`text-[13px] ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.priceNote}</p>
                    <p className="text-[12px] mt-1.5 text-[#1C1C1E]/45">{plan.highlight}</p>
                  </div>
                ) : (
                  <div className={`pb-7 mb-7 border-b ${plan.recommended ? "border-white/14" : "border-[#EAE5DC]"}`}>
                    <p className={`text-[clamp(1.55rem,2.6vw,2.6rem)] leading-none font-light mb-3 ${plan.recommended ? "text-[#E8B339]" : "text-[#C98F0E]"}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {plan.highlight}
                    </p>
                    <p className={`text-[13px] ${plan.recommended ? "text-white/68" : "text-[#45423C]"}`}>{plan.highlightNote}</p>
                  </div>
                )}

                <ul className="space-y-3.5 mb-9 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[13px] leading-[1.7]">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.recommended ? "text-[#E8B339]" : "text-[#C98F0E]"}`}
                        strokeWidth={2}
                      />
                      <span className={plan.recommended ? "text-white/85" : "text-[#45423C]"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={consultMail(plan.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center justify-center gap-2.5 text-[13px] font-medium tracking-[0.04em] px-6 py-4 transition-all duration-200 active:scale-[0.97] ${
                    plan.recommended
                      ? "bg-[#E8B339] text-[#16202B] hover:bg-[#F0B429]"
                      : "border border-[#1C1C1E]/35 text-[#1C1C1E] hover:border-[#C98F0E] hover:text-[#C98F0E]"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
              </article>
            ))}
          </div>
        </div>
        )}

        {!hideHardware && (
        <p className={`mt-14 md:mt-16 text-center text-[12.5px] text-[#1C1C1E]/40 tracking-[0.02em] transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          所有設備皆採買斷或專案報價；藝術內容依 Home 或 Commercial 訂閱方案提供，每月策展內容更新。
        </p>
        )}
      </div>
    </section>
  );
}
