/**
 * Room 09 — Real exhibition spaces + Partners.
 * Gallery Quietism: documentary photography of art living in everyday
 * places (clinic, café, reception, hotel, living room), followed by a
 * quiet partnership wall led by disability-art collaborators.
 */
import GalleryHeading from "./GalleryHeading";
import { LINKS } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const spaces = [
  {
    name: "客廳",
    en: "Living Room",
    image: "/manus-storage/scene-living_919debff.jpg",
    description: "家的牆，也可以每天都是展廳。",
  },
  {
    name: "醫美診所",
    en: "Medical Aesthetic",
    image: "/manus-storage/scene-clinic_2b8800f3.jpg",
    description: "等待的時光，也能被藝術溫柔對待。",
  },
  {
    name: "咖啡廳",
    en: "Café",
    image: "/manus-storage/scene-cafe_4d400757.jpg",
    description: "一杯咖啡的時間，遇見一件作品。",
  },
  {
    name: "公司接待區",
    en: "Reception",
    image: "/manus-storage/scene-reception_c99a43ec.jpg",
    description: "訪客走進公司的第一眼，就是文化的第一頁。",
  },
  {
    name: "飯店大廳",
    en: "Hotel Lobby",
    image: "/manus-storage/scene-hotel_1b849c05.jpg",
    description: "讓每一次入住，都像走進一間美術館。",
  },
];

const partners = [
  {
    name: "小光點畫廊",
    description: "專注身心障礙藝術家創作展示的策展平台",
    logo: "/manus-storage/partner-logo-1_7e5ae4bc.png",
    type: "gallery",
  },
  {
    name: "方睿有限公司",
    description: "數位轉型與藝術科技的創新合作夥伴",
    logo: "/manus-storage/partner-logo-2_5348f15c.png",
    type: "tech",
  },
];

export default function SpacesPartnersSection() {
  const { ref, isVisible } = useScrollAnimation(0.04);

  return (
    <>
      {/* Real exhibition spaces — documentary photo essay */}
      <section className="py-28 md:py-40 bg-[#F7F4EF] overflow-hidden">
        <div className="container" ref={ref}>
          <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">
            <GalleryHeading
              room="09"
              label="Art Living In"
              title={<>藝術，<br />正在這些<br />空間裡發生。</>}
              description={<>不是想像，而是真實展示的場景。藝術走進客廳、診所、咖啡廳與接待區，成為空間的一部分，也成为創作者收入的一部分。
              </>}
              className={`lg:col-span-7 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            />
          </div>

          <div className="grid md:grid-cols-12 gap-4 md:auto-rows-[230px]">
            {spaces.map((space, index) => {
              const layout = [
                "md:col-span-7 md:row-span-2",
                "md:col-span-5 md:row-span-1",
                "md:col-span-5 md:row-span-1",
                "md:col-span-4 md:row-span-1",
                "md:col-span-4 md:row-span-1",
              ][index];
              return (
                <figure
                  key={space.name}
                  className={`group relative min-h-[300px] md:min-h-0 overflow-hidden ${layout} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <img
                    src={space.image}
                    alt={`${space.name}藝術展示空間`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/8 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#E3C98D] mb-2">0{index + 1} · {space.en}</p>
                        <h3 className="text-[25px] md:text-[30px] font-light" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                          {space.name}
                        </h3>
                      </div>
                      <p className="hidden lg:block max-w-[220px] text-[12px] leading-[1.7] text-white/62 text-right">{space.description}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners — supporting disability art creation */}
      <section className="py-28 md:py-40 bg-white overflow-hidden">
        <div className="container" ref={ref}>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p
              className={`text-[#C4A265] text-[12px] md:text-[13px] uppercase tracking-[0.35em] mb-6 font-medium transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Trusted Partners
            </p>
            <h2
              className={`text-[32px] md:text-[46px] font-light text-[#1C1C1E] leading-[1.25] mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
            >
              與 ArtON 一起，<br className="md:hidden" />
              支持身障藝術創作
            </h2>
            <p
              className={`text-[15px] leading-[1.9] text-[#1C1C1E]/50 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              ArtON 與策展人、畫廊、藝術機構合作，共同建立永續藝術展示生態。
              <br />
              若您是策展人或畫廊，歡迎聯絡我們探討合作機會。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`border border-[#E5E5E3] rounded-[1.5rem] p-10 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 90}ms` }}
              >
                <div className="h-14 flex items-center justify-center mb-6">
                  <img src={partner.logo} alt={partner.name} className="max-h-14 max-w-[180px] object-contain" />
                </div>
                <h3 className="text-[19px] font-medium text-[#1C1C1E] mb-2" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                  {partner.name}
                </h3>
                <p className="text-[13px] leading-[1.7] text-[#1C1C1E]/50">{partner.description}</p>
              </div>
            ))}

            <a
              href={LINKS.curatorLine}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-dashed border-[#E3C98D] rounded-[1.5rem] p-10 flex flex-col items-center justify-center text-center transition-all duration-700 hover:border-[#C4A265] hover:bg-[#FBF7EF] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "380ms" }}
            >
              <span className="text-[28px] text-[#1C1C1E]/70 mb-3" aria-hidden="true">+</span>
              <p className="text-[15px] font-medium text-[#B8954F] leading-[1.6]">
                邀請更多
                <br />
                策展夥伴
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
