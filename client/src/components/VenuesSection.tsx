/**
 * Room 08 — Spaces.
 * Gallery Quietism: a paced architectural photo essay with captions,
 * using scale and silence instead of a uniform service-card grid.
 */
import GalleryHeading from "./GalleryHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const venues = [
  { name: "診所", en: "Clinic", image: "/manus-storage/venue-clinic-digital_f41d5bc2.png", description: "讓等待的時間，也有被藝術照亮的片刻。" },
  { name: "飯店", en: "Hotel", image: "/manus-storage/venue-hotel-digital_082e01f2.png", description: "旅程從踏進空間的第一眼開始。" },
  { name: "企業", en: "Workplace", image: "/manus-storage/venue-office-digital_a460b0a5.png", description: "文化不是牆上的標語，而是每天的風景。" },
  { name: "校園", en: "Campus", image: "/manus-storage/venue-campus-digital_55c365e8.png", description: "讓美感教育發生在每一次經過。" },
  { name: "公部門", en: "Public", image: "/manus-storage/venue-public-digital_7e46c4c6.png", description: "公共空間，也能成為城市的展廳。" },
  { name: "咖啡館", en: "Café", image: "/manus-storage/venue-cafe-large-digital_1fd4b18d.png", description: "一杯咖啡的時間，遇見一件作品。" },
];

export default function VenuesSection() {
  const { ref, isVisible } = useScrollAnimation(0.04);

  return (
    <section className="py-28 md:py-40 bg-white overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">
          <GalleryHeading
            room="08"
            label="Art in Space"
            title={<>每一種空間，<br />都有一種<br />遇見藝術的方式。</>}
            titleSize="clamp(2.6rem,4.6vw,4.6rem)"
            description={<>從診所、飯店到企業與校園，展示不需要離生活很遠；它就在每天會停留、會經過的地方。</>}
            className={`lg:col-span-7 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:auto-rows-[230px]">
          {venues.map((venue, index) => {
            const layout = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5 md:row-span-1",
              "md:col-span-5 md:row-span-1",
              "md:col-span-4 md:row-span-1",
              "md:col-span-4 md:row-span-1",
              "md:col-span-4 md:row-span-1",
            ][index];
            return (
              <figure
                key={venue.name}
                className={`group relative min-h-[300px] md:min-h-0 overflow-hidden ${layout} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <img src={venue.image} alt={`${venue.name}藝術展示空間`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/8 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#E3C98D] mb-2">0{index + 1} · {venue.en}</p>
                      <h3 className="text-[25px] md:text-[30px] font-light" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{venue.name}</h3>
                    </div>
                    <p className="hidden lg:block max-w-[220px] text-[12px] leading-[1.7] text-white/62 text-right">{venue.description}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
