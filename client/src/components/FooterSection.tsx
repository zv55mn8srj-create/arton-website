/**
 * Footer — 深藍圓環風（2026-08-18 反饋改版）
 * 參考 erJcvP 圖：深藍 #16203B 背景＋黃色細同心圓環＋金色細線 label「MAKE SPACE FOR ART」
 * 大標「讓下一面牆，開始說故事。」＋副標「預約專人展示，看看 ArtON 如何成為你的空間風景。」
 * 黃色膠囊 CTA「預約展示 →」＋品牌資訊列。
 */
import { Link } from "wouter";
import { LINKS } from "@/lib/links";

export default function FooterSection() {
  return (
    <>
      {/* 深藍圓環 CTA */}
      <section className="relative bg-[#16203B] text-white overflow-hidden py-20 md:py-28">
        {/* 黃色細同心圓環（置中） */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="absolute w-[min(110vw,1400px)] h-[min(110vw,1400px)] rounded-full border border-[#F5B300]/25" />
          <div className="absolute w-[min(90vw,1160px)] h-[min(90vw,1160px)] rounded-full border border-white/[0.06]" />
          <div className="absolute w-[min(70vw,900px)] h-[min(70vw,900px)] rounded-full border border-[#F5B300]/15" />
          <div className="absolute w-[min(50vw,640px)] h-[min(50vw,640px)] rounded-full border border-white/[0.05]" />
        </div>
        {/* 右上黃色圓點（呼應參考稿） */}
        <div className="absolute top-12 right-[8%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F5B300]/14" aria-hidden="true" />
        <div className="absolute top-[46%] left-[6%] w-3 h-3 rounded-full bg-[#F5B300]/70" aria-hidden="true" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-4 mb-7">
            <span className="w-10 h-px bg-[#E8B339]" />
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.34em] text-[#E8B339] font-semibold">
              Make Space For Art
            </p>
            <span className="w-10 h-px bg-[#E8B339]" />
          </div>

          <h2
            className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.55] font-normal mb-7"
            style={{ fontFamily: "'Noto Serif TC', 'Noto Sans TC', serif" }}
          >
            讓下一面牆，
            <br />
            開始說故事。
          </h2>

          <p className="text-white/72 text-[14px] md:text-[15px] leading-[1.9] max-w-lg mx-auto mb-9">
            預約專人展示，看看 ArtON 如何成為你的空間風景。
          </p>

          <a
            href={LINKS.email}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#F5B300] text-[#16203B] text-[14px] font-semibold rounded-full hover:bg-[#e5a800] transition-all duration-300 hover:shadow-xl hover:shadow-[#F5B300]/25 active:scale-[0.97]"
          >
            預約展示
            <span className="text-[16px] transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
          </a>
        </div>
      </section>

      {/* Footer 資訊列 */}
      <footer className="bg-[#10182E] text-white py-12 md:py-14">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center h-12 py-2">
                <img
                  src="/manus-storage/arton-logo-official_fa5df696_bb3c62fb.png"
                  alt="ArtON — Turn Art ON"
                  className="h-full w-auto object-contain brightness-[1.85]"
                />
              </div>
              <p className="text-white/35 text-[13px] leading-[1.8]">
                藝術 · 即刻啟動
                <br />
                Turn Art ON.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/" className="text-white/50 text-[14px] hover:text-[#F5B300] transition-colors">關於 ArtON</Link>
              <Link href="/start" className="text-white/50 text-[14px] hover:text-[#F5B300] transition-colors">開始展示</Link>
              <Link href="/b2b" className="text-white/50 text-[14px] hover:text-[#F5B300] transition-colors">企業 ESG 訂閱方案</Link>
              <Link href="/curator" className="text-white/50 text-[14px] hover:text-[#F5B300] transition-colors">策展人加入</Link>
              <a href={LINKS.email} className="text-white/50 text-[14px] hover:text-[#F5B300] transition-colors">{LINKS.emailDisplay}</a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.07] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/28 text-[12px]">
              &copy; 2026 ArtON. All rights reserved.
            </p>
            <p className="text-white/28 text-[12px]">
              每一面牆，都能改變一位創作者的未來。
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
