/**
 * ArtON /start — 企業免費諮詢與開始展示子頁
 * Gallery Quietism: museum-like whitespace, warm tones, Cormorant Garamond.
 * Color palette: warm white #FAFAF8, cream #F5F0EB, art gold #F5B300/#E8B339,
 * deep gray #1C1C1E, ink navy #16202B/#1C2632, forest #2D5A3D.
 * Empowerment narrative — creators earn income through sustained display.
 * This page consolidates subscription plans + hardware + steps, and points
 * all final CTAs to the customer LINE.
 */
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import PlansSection from "@/components/PlansSection";
import ExploreSection from "@/components/ExploreSection";
import { LINKS, consultMail } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const LINE_QR = "/assets/line-qr-customer_068ac53d.png";
const FOUNDING_ART = "/assets/founding-art_d2e8df21.jpg";

const planComparison = [
  {
    category: "方案價格",
    home: "NT$699／月",
    commercial: "NT$999／月",
  },
  {
    category: "授權類型",
    home: "家庭授權｜僅限私人住宅、非商業使用",
    commercial: "商用授權｜企業、診所、飯店、店家與公開空間",
  },
  {
    category: "展示設備",
    home: "不含面板；可搭配自有設備，設備另行買斷",
    commercial: "不含面板；可搭配自有設備，設備另行買斷或專案配置",
  },
  {
    category: "策展內容",
    home: "每月更新的藝術策展",
    commercial: "每月更新的藝術策展",
  },
  {
    category: "展示紀錄",
    home: "提供一般展示紀錄",
    commercial: "提供展示與藝術支持佐證數據",
  },
  {
    category: "適合對象",
    home: "家庭客廳、房間、書房與私人住宅",
    commercial: "公司、診所、飯店、店家與其他商業／公開空間",
  },
];

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
        <section className="relative py-28 md:py-44 bg-[#16203B] text-white overflow-hidden">
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
                Choose Your ArtON Plan · 選擇展示方案
              </p>
              <h1
                className={`text-[clamp(2.6rem,5.2vw,4.8rem)] leading-[1.12] font-light tracking-[-0.04em] mb-8 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
              >
                讓每一面牆，
                <br />
                成為支持<span className="text-[#E8B339]">藝術創作</span>的
                <br />
                美好空間。
              </h1>
              <p
                className={`text-white/72 text-[15px] md:text-[17px] leading-[2] max-w-2xl mb-10 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                從家庭日常到商業空間，選擇適合的 ArtON 授權方案，讓藝術內容持續走進你的生活與展示場域。
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
                  <span className="text-[12px] text-[#F5B300] font-medium">{step.no}</span>
                  <h3 className="text-[19px] font-normal text-[#1C1C1E] mt-3 mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.9] text-[#45423C]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founding Partner — 暫時隱藏（日後需要可恢復，程式碼完整保留） */}
        {false && <>
          <section className="py-24 md:py-32 bg-[#F2EEE7] overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-[2fr_3fr_2.6fr] items-center gap-10 md:gap-8">
              {/* Tilted plaque card */}
              <div className="hidden md:flex justify-center">
                <div className="plaque w-52 h-52 bg-[#FBFAF7] rotate-[-4deg] flex flex-col items-center justify-center gap-5 shadow-[0_14px_44px_rgba(28,28,30,0.10)]">
                  <span className="text-[11px] uppercase tracking-[0.42em] text-[#1C1C1E]/60">ArtON</span>
                  <span className="text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.3] text-[#1C1C1E] text-center font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Founding<br />Partner
                  </span>
                  <span className="block w-12 h-[2px] bg-[#E8B339]" />
                </div>
              </div>
              {/* Copy */}
              <div>
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-[#F5B300] mb-6 font-semibold">For The First Spaces · 首批合作空間</p>
                <h2 className="text-[clamp(2.2rem,4.2vw,4rem)] leading-[1.25] font-light text-[#1C1C1E] mb-7" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                  成為 ArtON<br />
                  <span className="text-[#C98F0E]">創始合作夥伴。</span>
                </h2>
                <p className="text-[14.5px] leading-[2] text-[#45423C] max-w-md mb-8">
                  首批合作空間可享期間免費體驗，讓身心障礙藝術展覽內容、ArtON 播放設備與平台服務，先進入你的空間。
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-9">
                  <span className="inline-flex items-center gap-2.5 text-[13.5px] text-[#1C1C1E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B339]" />
                    體驗期間不收月費
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-[13.5px] text-[#1C1C1E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B339]" />
                    訂閱後依方案收費：Home NT$699／月、Commercial NT$999／月
                  </span>
                </div>
                <a
                  href={consultMail("申請免費體驗")}
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-[#1C1C1E]/25 text-[#1C1C1E] text-[15px] font-medium rounded-full hover:bg-[#16203B] hover:text-white transition-all duration-300 active:scale-[0.97]"
                >
                  申請免費體驗
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              {/* Art */}
              <div className="relative">
                <div className="absolute -inset-4 border border-[#F5B300]/35 rotate-[1.5deg]" aria-hidden="true" />
                <img
                  src={FOUNDING_ART}
                  alt="身心障礙藝術家作品《花開時節與海與島》—— 首批合作空間預覽"
                  className="relative w-full aspect-[2/3] object-cover shadow-[0_18px_50px_rgba(28,28,30,0.14)]"
                />
                <p className="absolute bottom-4 left-5 right-5 text-white/90 text-[10.5px] uppercase tracking-[0.24em] font-medium">
                  Founding Spaces / Art Preview
                </p>
              </div>
            </div>
          </div>
          </section></>}

        {/* Plans (subscription only — hardware cards hidden for now) */}
        <PlansSection hideHardware showRoom={false} />

        {/* Room 05 — 探索策展（移至 /start 子頁） */}
        <ExploreSection />

        {/* LINE QR Code — desktop scan */}
        <section className="py-24 md:py-28 bg-[#FBFAF7]">
          <div className="container">
            <div className="plaque max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-44 md:h-44 bg-white p-4 shadow-[0_8px_30px_rgba(28,28,30,0.08)]">
                  <img
                    src={LINE_QR}
                    alt="ArtON 客戶 LINE QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#F5B300] font-semibold mb-4">Scan to Consult</p>
                <h2 className="text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.35] font-light text-[#1C1C1E] mb-5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                  用電腦瀏覽？<br />
                  掃碼即可加入諮詢。
                </h2>
                <p className="text-[14px] leading-[1.9] text-[#45423C] max-w-md mb-7">
                  使用手機開啟 LINE 掃描上方 QR Code，即可加入 ArtON 客戶專線，與顧問聊聊您的空間與預算。
                </p>
                <a
                  href={LINKS.customerLine}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#16203B] text-white text-[14px] font-medium rounded-full hover:bg-[#333336] transition-all duration-300 active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  或直接點擊加入 LINE
                </a>
              </div>
            </div>
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
        <Sparkles className="w-4 h-4 text-[#F5B300]" strokeWidth={1.5} />
        <h3 className="text-[21px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
          {title}
        </h3>
      </div>
      <p className="text-[13.5px] leading-[1.9] text-[#45423C]">{description}</p>
    </article>
  );
}
