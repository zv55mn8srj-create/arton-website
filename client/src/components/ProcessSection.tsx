/**
 * Room 02 — The ArtON ecosystem.
 * Gallery Quietism: a dark transition room with vertical wayfinding,
 * treating the ecosystem as an exhibition journey rather than a feature diagram.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const participants = [
  { role: "藝術家", action: "創作出動人的作品", note: "Works take shape" },
  { role: "策展人／畫廊", action: "讓作品成為一個展覽", note: "Works become exhibitions" },
  { role: "ArtON", action: "把展覽帶進生活空間", note: "Exhibitions find spaces" },
  { role: "企業／診所／飯店", action: "讓展示轉化為持續的收入", note: "Spaces sustain income" },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section className="relative py-28 md:py-40 bg-[#1C1C1E] text-white overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_40%_35%,rgba(196,162,101,0.11),transparent_55%)]" />
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          <GalleryHeading
            room="02"
            label="The Ecosystem"
            light
            title={<>建立一次策展，<br />讓價值<br />一直走下去。</>}
            description={<>藝術不再只依賴作品被買走而產生價值。透過持續展示，創作的收入跟著空間裡的每一天一起累積。從創作到空間，每一步都讓創作者走得更遠。</>}
            className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7 lg:pl-12">
            <div className="relative">
              <div className="absolute left-[27px] md:left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-[#C4A265]/70 via-[#C4A265]/30 to-transparent" />
              {participants.map((item, index) => (
                <article
                  key={item.role}
                  className={`relative grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-9 pb-12 md:pb-14 last:pb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${index * 130}ms` }}
                >
                  <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#1C1C1E] border border-[#C4A265]/42 flex items-center justify-center shadow-[0_0_0_8px_#1C1C1E]">
                    {index === 2 ? (
                      <PowerGlyph className="w-6 h-6 text-[#C4A265]" />
                    ) : (
                      <span className="text-[1.7rem] md:text-[2.25rem] font-light text-[#C4A265]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        0{index + 1}
                      </span>
                    )}
                  </div>
                  <div className="border-t border-white/10 pt-5 md:pt-7">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                      <h3 className="text-[23px] md:text-[29px] font-light" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                        {item.role}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/28">{item.note}</span>
                    </div>
                    <p className="text-[14px] md:text-[15px] text-white/48">{item.action}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
