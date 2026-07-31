/**
 * Room 01 — Brand values.
 * Gallery Quietism: offset exhibition heading and plaque-like principles,
 * avoiding the repeated centered card rhythm of a SaaS landing page.
 */
import GalleryHeading from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Heart, Palette, Leaf } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "讓藝術持續被看見",
    description: "藝術不再只停留在展覽期間，而是走進每一天的生活。",
  },
  {
    icon: Heart,
    title: "讓空間更有溫度",
    description: "用藝術提升診所、企業、飯店與公共空間的體驗。",
  },
  {
    icon: Palette,
    title: "支持藝術創作",
    description: "每一次展示，都將支持藝術家與策展人持續創作。",
  },
  {
    icon: Leaf,
    title: "ESG 永續共好",
    description: "讓企業的文化支持不只發生在活動當天，而成為每天都在累積的行動。",
  },
];

export default function WhyArtON() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="about" className="relative py-28 md:py-40 bg-[#F7F4EF] overflow-hidden">
      <div className="absolute -top-24 right-[7%] text-[20rem] leading-none text-[#C4A265]/[0.045] font-light select-none" aria-hidden="true">
        01
      </div>
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">
          <GalleryHeading
            room="01"
            label="The Belief"
            title={<>藝術不是裝飾。<br />它是一種<br className="hidden lg:block" />日常支持。</>}
            description={<>ArtON 讓創作離開短暫的展期，在真實生活裡持續發生；一面牆、一個空間，也能成為文化永續的起點。</>}
            className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          <div className="lg:col-span-7 lg:pt-24">
            <p
              className={`max-w-2xl text-[clamp(1.55rem,2.6vw,2.55rem)] leading-[1.45] font-light text-[#1C1C1E] tracking-[-0.03em] mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
            >
              每一次作品被看見，都是創作者繼續走下去的一盞燈；每一個願意展示的空間，都在替藝術保留未來。
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className={`plaque group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${180 + index * 90}ms` }}
                  >
                    <div className="flex items-center justify-between mb-7">
                      <span className="text-[3.5rem] leading-none font-light text-[#C4A265]/38" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        0{index + 1}
                      </span>
                      <Icon className="w-5 h-5 text-[#C4A265]" strokeWidth={1.35} />
                    </div>
                    <h3 className="text-[20px] md:text-[22px] text-[#1C1C1E] font-normal mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9] text-[#1C1C1E]/48">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
