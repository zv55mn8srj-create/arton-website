import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { LINKS, consultMail } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, BarChart3, Check, FileOutput, Leaf, Users } from "lucide-react";

const comparisonRows = [
  ["適合", "單一或少量商業展示空間", "企業總部、多據點、政府、公部門與大型機構"],
  ["費用", "NT$1,499／台／月；多台享階梯優惠", "專案報價"],
  ["藝術內容", "商用策展持續更新", "企業主題／專案策展"],
  ["管理方式", "雲端管理、遠端支援", "ArtON 後台代管、多據點整合管理"],
  ["展示設備", "展示設備另行選購", "展示設備另行選購"],
  ["Impact", "可加購成果追蹤", "可納入成果追蹤、彙整與報告"],
  ["現場服務", "另行報價", "安裝、設定與到場服務另行報價"],
  ["開始方式", "線上訂閱", "線上訂閱／洽詢商用方案"],
];

const benefits = [
  {
    icon: Users,
    title: "支持藝術家數",
    body: "依實際展示與合作紀錄彙整，讓企業看見支持創作的累積。",
  },
  {
    icon: Users,
    title: "身心障礙藝術家數",
    body: "可依企業選擇的 ESG 策展與合作內容，整理對應的創作者支持紀錄。",
  },
  {
    icon: FileOutput,
    title: "展示天數／展示作品數",
    body: "以展示期間與上線內容為基礎，整理作品被看見的時間與數量。",
  },
  {
    icon: BarChart3,
    title: "多據點成果",
    body: "Enterprise／Government 方案可依據點整合展示資料，掌握不同場域的累積成果。",
  },
  {
    icon: BarChart3,
    title: "Impact Dashboard",
    body: "依合作範圍整理展示、藝術支持與據點資料，形成可閱讀的成果視圖。",
  },
  {
    icon: Leaf,
    title: "年度／專案成果報告",
    body: "可依專案需求彙整成果報告；內容以實際紀錄為基礎，不等同第三方認證或法定申報。",
  },
];

export default function B2BPage() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />
      <main>
        <section className="relative py-28 md:py-40 bg-[#16203B] text-white overflow-hidden">
          <div className="absolute -bottom-20 left-[3%] text-[20rem] leading-none text-white/[0.035] font-light select-none" aria-hidden="true">B2B</div>
          <div className="container relative" ref={ref}>
            <div className="max-w-4xl">
              <p className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-[#E8B339] mb-8 font-semibold">For Enterprises · 商業展示方案</p>
              <h1 className="text-[clamp(2.35rem,4.7vw,4.4rem)] leading-[1.16] font-light tracking-[-0.03em] mb-8" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>
                讓企業選對方案，
                <br />
                讓藝術與 ESG
                <br />
                <span className="text-[#E8B339]">持續發生。</span>
              </h1>
              <p className="text-white/72 text-[15px] md:text-[17px] leading-[2] max-w-2xl mb-10">
                ArtON 提供 Commercial Standard 與 Enterprise／Government 兩種企業合作方式。單一或少量商業空間可選標準方案；企業總部、多據點、政府、公部門與大型機構，則依主題、場域與專案需求規劃。
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-white/95 p-3 pr-5 text-[#16202B] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <img src={LINKS.lineQr} alt="ArtON 企業方案官方 LINE QR Code" className="h-32 w-32 rounded-lg object-contain" />
                  <div className="pr-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B38A44]">Official LINE</p>
                    <p className="mt-1 text-[16px] font-semibold">掃碼諮詢企業方案</p>
                    <p className="mt-1 max-w-[12rem] text-[12px] leading-[1.6] text-[#1C1C1E]/55">直接加入官方 LINE，與顧問討論據點與方案。</p>
                  </div>
                </div>
                <a href="#plans" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-[15px] font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  查看方案差異 <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="plans" className="py-24 md:py-32 bg-[#FBFAF7]">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1C1C1E]/35 font-semibold mb-6 text-center">Choose the right license · 先分清楚授權</p>
            <h2 className="text-center text-[clamp(2rem,3.6vw,3.5rem)] font-light text-[#1C1C1E] mb-5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>兩種企業合作方式。</h2>
            <p className="max-w-2xl mx-auto text-center text-[15px] leading-[2] text-[#45423C] mb-14">從 Commercial Standard 標準商用服務，到 Enterprise／Government 多據點與公部門專案合作，依展示規模與管理需求選擇。</p>
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-[#E2DCCF] bg-white shadow-[0_18px_50px_rgba(44,37,27,0.06)]">
              <table className="w-full min-w-[760px] text-[13.5px]">
                <thead>
                  <tr className="border-b border-[#E2DCCF]">
                    <th className="w-[24%] px-6 py-6 text-left text-[12px] font-medium text-[#1C1C1E]/45">比較項目</th>
                    <th className="w-[38%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top"><p className="text-[10px] uppercase tracking-[0.22em] text-[#C98F0E] mb-2">COMMERCIAL · STANDARD</p><p className="text-[22px] font-normal text-[#1C1C1E]">Commercial Standard</p><p className="text-[#1C1C1E]/55 mt-2">標準商用服務</p></th>
                    <th className="w-[38%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top bg-[#F3F7F1]"><p className="text-[10px] uppercase tracking-[0.22em] text-[#2D5A3D] mb-2">ENTERPRISE · GOVERNMENT</p><p className="text-[22px] font-normal text-[#1C1C1E]">Enterprise / Government</p><p className="text-[#1C1C1E]/55 mt-2">企業與公部門專案</p></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, home, commercial]) => <tr key={label} className="border-b border-[#E2DCCF] last:border-b-0"><td className="px-6 py-5 font-medium text-[#1C1C1E]/55">{label}</td><td className="border-l border-[#E2DCCF] px-6 py-5 text-[#45423C]">{home}</td><td className="border-l border-[#E2DCCF] bg-[#F3F7F1]/70 px-6 py-5 text-[#2D5A3D] font-medium">{commercial}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[#F7F4EF]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#2D5A3D] font-semibold mb-5">ESG · 成果服務</p>
              <h2 className="text-[clamp(2rem,3.5vw,3.4rem)] font-light text-[#1C1C1E] mb-5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>藝術展示，不只美化空間，<br />也留下支持創作者的成果。</h2>
              <p className="text-[15px] leading-[2] text-[#45423C]">從單一商業空間到多據點企業與公部門專案，ArtON 依實際展示與合作紀錄，整理支持藝術家、展示內容與場域成果，讓企業的文化行動有跡可循。</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map(({ icon: Icon, title, body }) => <article key={title} className="bg-white border border-[#E7E0D5] rounded-xl p-8"><span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#2D5A3D]/10 mb-6"><Icon className="w-5 h-5 text-[#2D5A3D]" strokeWidth={1.6} /></span><h3 className="text-[21px] font-normal text-[#1C1C1E] mb-4" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{title}</h3><p className="text-[14px] leading-[1.9] text-[#45423C]">{body}</p></article>)}
            </div>
            <p className="max-w-3xl mx-auto text-center text-[12px] leading-[1.8] text-[#1C1C1E]/45 mt-10">實際指標、彙整範圍與報告形式，依方案、據點數量與專案需求確認；不等同第三方 ESG 認證、法定申報或固定 ESG 分數。</p>
          </div>
        </section>


        <section className="py-24 md:py-32 bg-[#F7F4EF]">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#2D5A3D] font-semibold mb-5">ESG in the everyday · 企業日常場域</p>
              <h2 className="text-[clamp(2rem,3.5vw,3.4rem)] font-light text-[#1C1C1E] mb-5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>讓藝術展示，<br />進入企業每天發生的地方。</h2>
              <p className="text-[15px] leading-[2] text-[#45423C]">從員工休憩區到工作現場，企業可以依照空間與團隊的使用情境安排展示，讓藝術支持成為組織文化裡自然的一部分。</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
              {[
                { image: "/assets/scene-pantry.webp", title: "茶水間／員工休憩區", text: "在日常休息的片刻，讓作品成為同事之間自然發生的交流。" },
                { image: "/assets/scene-factory.webp", title: "工廠／工作現場", text: "讓支持創作者的企業行動，也被每天投入工作的團隊看見。" },
              ].map((scene) => <figure key={scene.title} className="bg-white border border-[#E7E0D5] rounded-xl overflow-hidden"><div className="aspect-[16/9] overflow-hidden"><img src={scene.image} alt={`${scene.title}藝術展示情境`} className="w-full h-full object-cover" /></div><figcaption className="p-6"><h3 className="text-[21px] font-normal text-[#1C1C1E] mb-2" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{scene.title}</h3><p className="text-[13px] leading-[1.8] text-[#45423C]">{scene.text}</p></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-36 bg-[#F5F0EB]">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#B38A44] font-semibold mb-6">A lasting collaboration · 聯名展示</p>
                <h2 className="text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.25] font-light text-[#1C1C1E] mb-6" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>讓企業空間，<br />持續遇見不同的創作者。</h2>
                <p className="text-[15px] leading-[2] text-[#45423C] mb-7">企業可以依照每期策展與空間需求，選擇不同藝術家與主題的作品進行展示；也可以在符合合作條件時，支持身心障礙藝術創作者。讓作品被看見、被記錄，成為持續發生的企業文化行動。</p>
                <p className="text-[13px] leading-[1.9] text-[#1C1C1E]/52">實際展示內容、授權範圍與合作名稱，於確認策展與企業需求後共同規劃。</p>
              </div>
              <figure className="lg:col-span-7 overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(44,37,27,0.1)]"><img src="/assets/scene-corporate-lobby.webp" alt="企業空間長期展示身心障礙藝術作品的情境" className="w-full aspect-[4/3] object-cover" /><figcaption className="px-6 py-4 text-[12px] tracking-[0.12em] text-[#1C1C1E]/55">企業空間 · 聯名藝術展示情境</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FBFAF7] text-center"><div className="container"><p className="text-[13px] text-[#45423C] mb-6">需要多據點配置或企業成果規劃？</p><a href={consultMail("ArtON 企業 ESG 方案諮詢")} className="inline-flex items-center gap-3 px-8 py-4 bg-[#16203B] text-white rounded-full text-[14px] font-semibold hover:bg-[#263354] transition-colors">了解企業方案 <ArrowRight className="w-4 h-4" /></a></div></section>
      </main>
      <FooterSection />
    </div>
  );
}
