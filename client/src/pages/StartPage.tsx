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
import { consultMail } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, ShieldCheck, Sparkles } from "lucide-react";

const FOUNDING_ART = "/assets/founding-art_d2e8df21.jpg";

const reasons = [
  {
    title: "輕量訂閱",
    description: "依方案與排程提供公開策展內容；已有相容螢幕可搭配 ArtON Box。",
  },
  {
    title: "合法授權",
    description: "公開策展的展示範圍與素材授權，依 ArtON 合作約定確認。",
  },
  {
    title: "ESG 可紀錄",
    description: "Commercial 方案提供基本展示紀錄；Impact／成果服務可依成果加購，現場服務另行報價。",
  },
];

const startScenes = [
  { title: "會議室／洽談室", label: "Meeting Room", image: "/assets/scene-meeting-room-v2.webp", text: "讓作品自然融入討論與交流的空間。" },
  { title: "茶水間／員工休憩區", label: "Pantry & Lounge", image: "/assets/scene-pantry-v2.webp", text: "在短暫休息裡，遇見一件喜歡的作品。" },
  { title: "家裡書桌前", label: "Home Study", image: "/assets/scene-home-study.webp", text: "在閱讀、工作與創作的日常裡，留一面牆給喜歡的作品。" },
];

const steps = [
  { no: "01", title: "加入 ArtON LINE", description: "與顧問聊聊空間、據點與預算，確認最適合的展示方式。" },
  { no: "02", title: "選擇策展與方案", description: "從每月更新的策展中挑選，並確認訂閱方案與裝置配置。" },
  { no: "03", title: "綁定設備，開始展示", description: "接上 ArtON Box 或配置藝術面板，作品即進入你的空間。" },
  { no: "04", title: "依排程開始展示", description: "ArtON 控制端需連網；設備綁定與展示管理依平台操作流程完成，內容異動依合作流程處理。" },
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
                    訂閱後依方案收費：Home NT$699／台／月、Commercial Standard NT$1,499／台／月
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

        <section className="py-24 md:py-36 bg-[#F5F0EB]">
          <div className="container">
            <div className="max-w-3xl mb-12 md:mb-16">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#B38A44] font-semibold mb-5">Choose your setting · 展示情境</p>
              <h2 className="text-[clamp(2.2rem,4vw,4rem)] leading-[1.2] font-light text-[#1C1C1E] mb-5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>先想像藝術，<br />在你的空間裡如何發生。</h2>
              <p className="text-[15px] leading-[2] text-[#45423C]">從會議室到員工休憩區，選擇適合的展示方式，讓作品與空間一起成為日常的一部分。</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {startScenes.map((scene) => <figure key={scene.title} className="bg-white overflow-hidden border border-[#E7E0D5]">
                <div className="aspect-[4/3] overflow-hidden"><img src={scene.image} alt={`${scene.title}展示情境`} className="w-full h-full object-cover" /></div>
                <figcaption className="p-6"><p className="text-[10px] uppercase tracking-[0.2em] text-[#B38A44] mb-2">{scene.label}</p><h3 className="text-[22px] font-light text-[#1C1C1E] mb-2" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{scene.title}</h3><p className="text-[13px] leading-[1.8] text-[#45423C]/70">{scene.text}</p></figcaption>
              </figure>)}
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
