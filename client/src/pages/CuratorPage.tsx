/**
 * ArtON /curator — 策展人介紹子頁
 * Gallery Quietism: museum-like whitespace, warm tones, Cormorant Garamond.
 * Color palette: warm white #FAFAF8, cream #F5F0EB, art gold #C4A265/#E8B339,
 * deep gray #1C1C1E, ink navy #16202B/#1C2632.
 * Empowerment narrative — curators build exhibitions once, value keeps flowing.
 */
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle } from "lucide-react";

const values = [
  {
    no: "01",
    title: "策展一次，價值持續",
    description: "建立一檔數位策展，即可持續進入企業、診所、飯店與咖啡館等展示空間。作品不再只停留在短暫展期，策展的價值每天都被看見。",
  },
  {
    no: "02",
    title: "與創作者共享成長",
    description: "每一次展示，都讓藝術家與策展夥伴獲得持續收入。我們相信真正的支持，不是一次性的捐助，而是讓創作者能靠自己的作品，持續走下去。",
  },
  {
    no: "03",
    title: "雲端管理，輕鬆經營",
    description: "策展上架、據點管理與收益統計都在 ArtON 完成，搭配 AI 協助內容更新與排程，讓你可以專注在策展本身。",
  },
  {
    no: "04",
    title: "被記錄的影響力",
    description: "展示據點、作品被看見的天數與支持的創作者，都會成為可被記錄的策展成果，累積成你長期策展生涯的憑證。",
  },
];

const CURATOR_QR = "/manus-storage/line-qr-curator_51a4f553.png";

const curatorFaq = [
  {
    q: "加入策展人需要什麼條件？",
    a: "只要你有策展眼光與作品資源——無論是個人策展經驗、畫廊合作管道，或熟悉的藝術家與作品，都可以加入。團隊會與你一起評估策展主題與上架方式。",
  },
  {
    q: "策展上架需要付費嗎？",
    a: "推廣期間，ArtON 主動邀約的策展人免收費。作品上架後即可進入 ArtON 策展目錄，當企業訂閱展覽，作品便能持續在展示空間播放，策展人與藝術家同步獲得展示收益。"
  },
  {
    q: "收益如何計算與請領？",
    a: "收益依策展的展示據點與展示天數計算，透過 ArtON 雲端後台透明呈現。每月彙整，可依約定方式請領，讓你清楚掌握每一筆展示帶來的收入。",
  },
  {
    q: "策展上架後需要我持續管理嗎？",
    a: "策展上架一次，後續的作品更新、據點排程與內容輪播都由 ArtON 雲端完成，並搭配 AI 協助管理。你只需要偶爾更新策展內容，保持新鮮感即可。",
  },
];

const steps = [
  { no: "01", title: "加入策展人 LINE", description: "與團隊聊聊你的策展風格與作品資源，了解合作方式與收益機制。" },
  { no: "02", title: "上架數位策展", description: "整理作品成為有主題、有情緒的展覽，上架到 ArtON 策展目錄。" },
  { no: "03", title: "作品進入展示空間", description: "企業訂閱後，你的策展自動進入他們的展示空間，每月內容自動更新。" },
  { no: "04", title: "持續獲得回報", description: "展示持續進行，收入與影響力紀錄持續累積。" },
];

export default function CuratorPage() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />
      <main>
        {/* Intro */}
        <section className="relative py-28 md:py-36 bg-[#16202B] text-white overflow-hidden">
          <div className="absolute -bottom-16 right-[3%] text-[22rem] leading-none text-white/[0.04] font-light select-none" aria-hidden="true">
            Curator
          </div>
          <div className="container relative" ref={ref}>
            <div className="max-w-3xl">
              <p
                className={`text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-[#E8B339] mb-8 font-semibold transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Curator Program · 成為策展人
              </p>
              <h1
                className={`text-[clamp(2.6rem,5.2vw,4.8rem)] leading-[1.12] font-light tracking-[-0.04em] mb-8 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
              >
                策展一次，
                <br />
                讓更多創作者
                <br />
                <span className="text-[#E8B339]">有收入。</span>
              </h1>
              <p
                className={`text-white/72 text-[15px] md:text-[17px] leading-[2] max-w-2xl mb-10 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                ArtON 邀請你成為策展夥伴。你的策展不只是短暫的展覽，而是一場每天在生活空間裡持續發生的展示，讓藝術家與你一起，靠作品持續走下去。
              </p>
              <a
                href={LINKS.curatorLine}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 px-8 py-4 bg-[#E8B339] text-[#16202B] text-[15px] font-semibold tracking-[0.04em] rounded-full hover:bg-[#F0B429] transition-all duration-300 hover:shadow-xl hover:shadow-[#E8B339]/20 active:scale-[0.97] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } delay-300`}
              >
                <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
                加入策展人 LINE
              </a>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 bg-[#FBFAF7]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-14 text-center">
              Why Curate with ArtON · 策展人的四種價值
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 max-w-5xl mx-auto">
              {values.map((v, i) => (
                <ValueCard key={v.no} {...v} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 md:py-32 bg-[#F7F4EF]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-12 text-center">
              Four Simple Steps · 加入流程
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

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-[#1C1C1E] text-white text-center">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] mb-8 font-semibold">Join Us · 邀請加入</p>
            <h2 className="text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.25] font-light mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
              你的策展眼光，
              <br />
              <span className="text-[#E8B339]">值得被每天看見。</span>
            </h2>
            <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.9] max-w-xl mx-auto mb-10">
              與團隊聊聊你的策展計畫，了解收益機制與上架方式。
            </p>
            <a
              href={LINKS.curatorLine}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B339] text-[#1C1C1E] text-[15px] font-semibold rounded-full hover:bg-[#F0B429] transition-all duration-300 active:scale-[0.97]"
            >
              <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
              加入策展人 LINE
            </a>

            {/* QR Code — scan to join (symmetric with /start) */}
            <div className="mt-16 mx-auto max-w-md bg-white/[0.06] rounded-2xl px-8 py-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] mb-6 font-semibold">Scan to Join</p>
              <div className="w-32 h-32 mx-auto bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                <img src={CURATOR_QR} alt="ArtON 策展人 LINE QR Code" className="w-full h-full object-contain" />
              </div>
              <p className="text-white/55 text-[12.5px] leading-[1.8] mt-6">
                用電腦瀏覽？用手機掃描 QR Code，即可加入策展人 LINE。
              </p>
            </div>
          </div>
        </section>

        {/* Curator FAQ */}
        <section className="py-24 md:py-32 bg-[#F7F4EF]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/32 font-semibold mb-14 text-center">
              Curator Notes · 策展人常見問答
            </p>
            <div className="max-w-3xl mx-auto divide-y divide-[#1C1C1E]/10 border-y border-[#1C1C1E]/10">
              {curatorFaq.map((item, i) => (
                <details key={item.q} className="group py-7">
                  <summary className="list-none flex items-center gap-4 cursor-pointer select-none">
                    <span className="text-[12px] text-[#C4A265] font-medium">0{i + 1}</span>
                    <span className="text-[17px] md:text-[19px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                      {item.q}
                    </span>
                    <span className="ml-auto text-[#C4A265] text-[16px] transition-transform duration-300 group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 pl-[44px] pr-8 text-[13.5px] leading-[1.95] text-[#45423C]">{item.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-10 text-center text-[13px] text-[#1C1C1E]/45">
              還有其他問題？直接加入策展人 LINE，團隊會親自回覆。
            </p>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

function ValueCard({ no, title, description, index }: { no: string; title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <article
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-[12px] text-[#C4A265] font-medium">{no}</span>
        <h3 className="text-[24px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
          {title}
        </h3>
      </div>
      <p className="text-[14px] leading-[2] text-[#45423C]">{description}</p>
    </article>
  );
}
