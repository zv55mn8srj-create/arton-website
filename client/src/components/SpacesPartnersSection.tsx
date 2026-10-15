/**
 * Room 09 — Partners.
 * Gallery Quietism: a quiet partnership wall led by disability-art
 * collaborators.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const _unused = [
  {
    name: "客廳",
    en: "Living Room",
    image: "/assets/scene-living_919debff.jpg",
    description: "家的牆，也可以每天都是展廳。",
  },
  {
    name: "醫美診所",
    en: "Medical Aesthetic",
    image: "/assets/scene-clinic_2b8800f3.jpg",
    description: "等待的時光，也能被藝術溫柔對待。",
  },
  {
    name: "咖啡廳",
    en: "Café",
    image: "/assets/scene-cafe_4d400757.jpg",
    description: "一杯咖啡的時間，遇見一件作品。",
  },
  {
    name: "公司接待區",
    en: "Reception",
    image: "/assets/scene-reception_c99a43ec.jpg",
    description: "訪客走進公司的第一眼，就是文化的第一頁。",
  },
  {
    name: "飯店大廳",
    en: "Hotel Lobby",
    image: "/assets/scene-hotel_1b849c05.jpg",
    description: "讓每一次入住，都像走進一間美術館。",
  },
];

const partners = [
  {
    name: "方睿有限公司",
    tagEn: "FOUNDER & OPERATOR",
    tagZh: "品牌創辦與營運單位",
    description: "ArtON 由方睿有限公司創立與營運，負責品牌、平台技術、策展服務、藝術授權與企業合作。",
    logo: "/assets/fangrui-logo-new_63324092.webp",
    icon: "tech",
  },
  {
    name: "小光點畫廊",
    tagEn: "FOUNDING CURATORIAL PARTNER",
    tagZh: "創始策展夥伴",
    description: "ArtON 首波共融藝術策展夥伴，長期陪伴身心障礙藝術創作者，與 ArtON 共同推動作品進入更多生活與企業空間。",
    logo: "/assets/partner-logo-1_7e5ae4bc.png",
    icon: "gallery",
  },
  {
    name: "中華工商資源整合策進會",
    tagEn: "DISPLAY & ENTERPRISE PARTNER",
    tagZh: "展示與企業夥伴",
    description: "整合工商產業資源與跨域網絡，協助 ArtON 串聯企業場域與合作夥伴，共同拓展創新應用與藝術展示機會。",
    logo: "/assets/partner-logo-chinese-business-association.png",
    icon: "enterprise",
  },
];

export default function SpacesPartnersSection() {
  const { ref, isVisible } = useScrollAnimation(0.04);

  return (
    // Partners — supporting disability art creation
    <section className="py-28 md:py-44 bg-white overflow-hidden">
      <div className="container" ref={ref}>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p
              className={`text-[#F5B300] text-[12px] md:text-[13px] uppercase tracking-[0.35em] mb-6 font-medium transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Room 09 · Trusted Partners
            </p>
            <h2
              className={`text-[32px] md:text-[46px] font-light text-[#1C1C1E] leading-[1.25] mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}
            >
              與 ArtON 一起，<br className="md:hidden" />
              讓藝術持續被看見
            </h2>
            <p
              className={`text-[15px] leading-[1.9] text-[#1C1C1E]/50 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              ArtON 與不同領域的夥伴攜手，<br className="md:hidden" />
              讓藝術走進更多生活場景。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`border border-[#E5E5E3] rounded-[1.5rem] p-10 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 90}ms` }}
              >
                <span className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-[#C98F0E] font-medium mb-5">
                  {partner.tagEn}
                  <span className="mx-2 text-[#E5E5E3]">｜</span>
                  {partner.tagZh}
                </span>
                <div className="h-14 flex items-center justify-center mb-6">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="max-h-14 max-w-[180px] object-contain" />
                  ) : (
                    <span className="text-[34px] text-[#1C1C1E]/60" aria-hidden="true">✦</span>
                  )}
                </div>
                <h3 className="text-[19px] font-medium text-[#1C1C1E] mb-3" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                  {partner.name}
                </h3>
                <p className="text-[13px] leading-[1.7] text-[#1C1C1E]/50">{partner.description}</p>
              </div>
            ))}

          </div>
      </div>
      </section>
  );
}
