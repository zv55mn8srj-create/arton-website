/**
 * Footer CTA + Footer
 * Design: Gallery Quietism - warm, elegant closing
 */
import { LINKS } from "@/lib/links";

export default function FooterSection() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#1C1C1E] py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center h-14 py-2 mb-5">
                {/* 官方 Logo（透明底：深灰字＋黃電源符號），套用於深色頁尾 */}
                <img
                  src="/manus-storage/arton-logo-official_fa5df696.png"
                  alt="ArtON — Turn Art ON"
                  className="h-full w-auto object-contain drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]"
                />
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
                    企業訂閱方案
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
