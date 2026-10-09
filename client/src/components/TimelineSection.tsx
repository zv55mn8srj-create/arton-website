/**
 * Room 06 — The exhibition journey.
 * Gallery Quietism: a museum chronology with oversized archival numerals.
 */
import GalleryHeading, { PowerGlyph } from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  { title: "建立策展", note: "作品被整理成一個有主題、有情緒的展覽。" },
  { title: "分享策展", note: "策展被看見，也被更多合適的空間選擇。" },
  { title: "企業開始展示", note: "藝術進入企業、診所、飯店與生活場域。" },
  { title: "藝術持續被看見", note: "一場展覽離開單一展期，持續與人相遇。" },
  { title: "創作者獲得內容回饋", note: "公開策展依合作約定結算內容權利金，讓支持回到創作者的創作。" },
];

export default function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="relative py-28 md:py-44 bg-[#F2EEE7] overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20 md:mb-28">
          <GalleryHeading
            room="05"
            label="A Living Exhibition"
            title={<>一場策展，<br />持續發生<br />在日常裡。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            className={`lg:col-span-7 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />
          <p className={`lg:col-span-4 lg:col-start-9 text-[15px] leading-[1.9] text-[#1C1C1E]/48 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            從策展建立的那一刻起，作品便開始在不同空間裡延續生命；價值不是一次完成，而是一次次被看見。
          </p>
        </div>

        <div className="relative grid md:grid-cols-5 gap-10 md:gap-0">
          <div className="hidden md:block absolute top-[64px] left-0 right-0 h-px bg-gradient-to-r from-[#F5B300] via-[#F5B300]/35 to-transparent" />
          {stages.map((stage, index) => (
            <article
              key={stage.title}
              className={`relative md:pr-7 md:pl-5 first:pl-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex md:block items-center gap-5">
                <span className="block text-[4.9rem] leading-none font-light text-[#F5B300]/55" style={{ fontFamily: "'Cormorant Garamond', serif" }}>0{index + 1}</span>
                <PowerGlyph className="hidden md:block relative z-10 w-4 h-4 mt-3 mb-8 text-[#F5B300] bg-[#F2EEE7]" />
                <div className="md:hidden w-12 h-px bg-[#F5B300]/50" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-normal text-[#1C1C1E] mt-5 md:mt-0 mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{stage.title}</h3>
              <p className="text-[12px] md:text-[13px] leading-[1.8] text-[#1C1C1E]/43">{stage.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
