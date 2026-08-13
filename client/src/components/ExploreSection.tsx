/**
 * Room 05 — Curated exhibitions.
 * Gallery Quietism: works hang on a breathing wall with captions below,
 * rather than appearing as interchangeable product cards.
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const exhibitions = [
  { title: "身障藝術展", tag: "Together", image: "/manus-storage/koi-nine_6a87b9e0.jpg", artist: "身心障礙創作者的油畫，讓每一面牆都成為展廳", featured: true },
  { title: "旅行台灣", tag: "Taiwan", image: "/manus-storage/exhibition-taiwan_802358d3.jpg", artist: "山海之間，留下島嶼的日常風景" },
  { title: "療癒攝影", tag: "Photography", image: "/manus-storage/exhibition-healing_3a941b9a.jpg", artist: "讓光線慢下來，也讓心慢下來" },
  { title: "抽象藝術", tag: "Abstract", image: "/manus-storage/exhibition-abstract_a4923795.jpg", artist: "色彩、形狀與空間之間的自由對話" },
  { title: "自然風景", tag: "Nature", image: "/manus-storage/exhibition-nature_c9268f72.jpg", artist: "將遠方的山林帶進每天經過的地方" },
  { title: "春季療癒展", tag: "Healing", image: "/manus-storage/flowers-sea-island_a1502703.jpg", artist: "柔光、花影與重新生長的季節" },
];

const spans = ["md:col-span-5", "md:col-span-3", "md:col-span-4", "md:col-span-4", "md:col-span-5", "md:col-span-3"];

export default function ExploreSection() {
  const { ref, isVisible } = useScrollAnimation(0.04);

  return (
    <section id="explore" className="py-28 md:py-40 bg-[#FBFAF7] overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16 md:mb-24">
          <GalleryHeading
            room="05"
            label="Current Exhibitions"
            title={<>把喜歡的<br />藝術，帶進<br />你的空間。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            className={`lg:col-span-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />
          <div className={`lg:col-span-4 lg:col-start-9 pb-2 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[15px] leading-[1.9] text-[#1C1C1E]/50">每一檔策展，都有自己的情緒、節奏與故事。企業可以直接觀看，找到最適合空間的一場展覽。</p>
            <a href={LINKS.customerLine} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 gap-3 text-[12px] tracking-[0.08em] border-b border-[#C4A265] pb-2">查看所有策展 <span className="text-[#C4A265]">↗</span></a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-x-5 gap-y-14 md:gap-y-20 items-start">
          {exhibitions.map((exhibition, index) => (
            <figure
              key={exhibition.title}
              className={`${spans[index]} group transition-all duration-700 ${index === 1 || index === 4 ? "md:mt-16" : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              <a href={exhibition.featured ? LINKS.customerLine : "#start"} className="block">
                <div className="gallery-frame">
                  <div className={`overflow-hidden ${index === 0 || index === 4 ? "aspect-[4/3]" : "aspect-[3/4] md:aspect-[4/5]"}`}>
                    <img src={exhibition.image} alt={exhibition.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                  </div>
                </div>
                <figcaption className="pt-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="museum-label text-[#1C1C1E]/34 mb-2">0{index + 1} · {exhibition.tag}</p>
                    <h3 className="text-[20px] md:text-[23px] font-normal text-[#1C1C1E]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{exhibition.title}</h3>
                    <p className="text-[12px] leading-[1.7] text-[#1C1C1E]/42 mt-2">{exhibition.artist}</p>
                  </div>
                  <span className="text-[#C4A265] opacity-0 group-hover:opacity-100 transition-opacity mt-6">↗</span>
                </figcaption>
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
