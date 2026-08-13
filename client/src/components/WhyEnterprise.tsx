/**
 * Room 07 — Why spaces choose ArtON.
 * Gallery Quietism: architectural photography leads; benefits read like
 * concise exhibition annotations rather than a row of product cards.
 */
import GalleryHeading from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cloud, Heart, Leaf, Sparkles } from "lucide-react";

const reasons = [
  { icon: Sparkles, title: "美化空間", description: "以經過策展的作品，為日常環境帶來情緒、節奏與記憶點。" },
  { icon: Leaf, title: "ESG 永續", description: "將文化支持轉化為能長期累積、被看見也能被記錄的企業行動。" },
  { icon: Cloud, title: "雲端更新", description: "不改變空間工程，也能讓不同據點持續迎來新的展覽內容。" },
  { icon: Heart, title: "支持創作者自立", description: "每一個展示日，都在讓創作者靠自己的作品，持續獲得收入、持續生活。" },
];

export default function WhyEnterprise() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="py-28 md:py-40 bg-[#1C1C1E] text-white overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <figure className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] overflow-hidden">
              <img src="/manus-storage/public-space-art_1fe105c8.jpg" alt="公共空間中的藝術展示" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-7 md:p-9">
                <p className="museum-label text-[#E2C88E]">Everyday Patronage</p>
                <p className="mt-3 text-[16px] text-white/68 max-w-md leading-[1.8]">當藝術成為每天會經過的風景，對創作者的支持也就不再只是一次性的選擇。</p>
              </figcaption>
            </div>
          </figure>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <GalleryHeading
              room="07"
              label="Why ArtON"
              light
              title={<>企業選擇的，<br />不只是一面<br />更好看的牆。</>}
              titleSize="clamp(2.6rem,4.6vw,4.6rem)"
              className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            />
            <div className="mt-12">
              {reasons.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className={`grid grid-cols-[38px_1fr] gap-4 border-t border-white/10 py-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${180 + index * 80}ms` }}
                >
                  <Icon className="w-4.5 h-4.5 text-[#C4A265] mt-1" strokeWidth={1.35} />
                  <div><h3 className="text-[17px] font-normal mb-2">{title}</h3><p className="text-[12px] leading-[1.8] text-white/38">{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
