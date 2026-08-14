/**
 * Footer CTA + Footer
 * Design: Gallery Quietism - warm, elegant closing
 */
import { LINKS } from "@/lib/links";

export default function FooterSection() {
  return (
    <>
      {/* CTA Section */}
      <section id="start" className="relative py-28 md:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/cta-bg_d96c3b82.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E]/85 via-[#1C1C1E]/75 to-[#1C1C1E]/55" />
        </div>

        <div className="relative z-10 container text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#C4A265] text-[13px] uppercase tracking-[0.35em] mb-6 font-medium">
              Join ArtON
            </p>
            <h2 className="text-[36px] md:text-[52px] lg:text-[58px] font-light text-white leading-[1.15] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
              一起讓藝術走進生活。
            </h2>
            <p className="text-white/65 text-[16px] md:text-[18px] leading-[1.9] mb-12 max-w-lg mx-auto">
              我們不是在租畫，<br />
              我們是在建立一個讓藝術持續被看見、讓創作者持續有收入的生態。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/curator"
                className="px-8 py-4 bg-[#C4A265] text-white text-[15px] font-medium rounded-full hover:bg-[#b8954f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C4A265]/20"
              >
                我要成為策展人
              </a>
              <a
                href="/start"
                className="px-8 py-4 border border-white/30 text-white text-[15px] font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                我要開始展示
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1E] py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-1.5 mb-5">
                <span className="text-[26px] font-display font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#FFFFFF" }}>
                  Art
                </span>
                <svg viewBox="0 0 16 16" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1 A7 7 0 1 1 1 8" fill="none" stroke="#C4A265" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="8" y1="1" x2="8" y2="7" stroke="#C4A265" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="text-[26px] font-display font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#FFFFFF" }}>
                  N
                </span>
              </div>
              <p className="text-white/35 text-[13px] leading-[1.8]">
                藝術 · 即刻啟動
                <br />
                Turn Art ON.
              </p>
              <div className="w-8 h-[1px] bg-[#C4A265]/40 mt-4" />
            </div>

            {/* Links */}
            <div>
              <h5 className="text-[#C4A265]/80 text-[11px] uppercase tracking-[0.2em] mb-5 font-medium">
                關於
              </h5>
              <ul className="space-y-3">
                {["關於 ArtON", "我們的理念", "團隊", "合作夥伴"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[#C4A265]/80 text-[11px] uppercase tracking-[0.2em] mb-5 font-medium">
                服務
              </h5>
              <ul className="space-y-3">
                <li>
                  <a href="/start" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">
                    企業展示
                  </a>
                </li>
                <li>
                  <a href="/b2b" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">
                    企業 ESG 方案
                  </a>
                </li>
                <li>
                  <a href="/curator" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">
                    策展服務
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">
                    設備支援
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[#C4A265]/80 text-[11px] uppercase tracking-[0.2em] mb-5 font-medium">
                聯絡我們
              </h5>
              <ul className="space-y-3">
                <li><a href={LINKS.email} className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">{LINKS.emailDisplay}</a></li>
                <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">Instagram</a></li>
                <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">Facebook</a></li>
                <li><a href={LINKS.customerLine} target="_blank" rel="noopener noreferrer" className="text-white/35 text-[14px] hover:text-[#C4A265] transition-colors duration-300">LINE（客戶）</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-[12px]">
              &copy; 2026 ArtON. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-white/25 text-[12px] hover:text-[#C4A265] transition-colors duration-300">
                隱私政策
              </a>
              <a href="#" className="text-white/25 text-[12px] hover:text-[#C4A265] transition-colors duration-300">
                使用條款
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
