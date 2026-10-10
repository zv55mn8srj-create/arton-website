import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ExploreSection from "@/components/ExploreSection";
import { LINKS, consultMail } from "@/lib/links";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Check, FileOutput, Leaf, Mail, MessageCircle, Users } from "lucide-react";

const comparisonRows = [
  ["適用對象", "家庭、個人生活空間", "企業、診所、飯店、店家與公開空間"],
  ["授權方式", "家庭展示授權", "商用／公開空間展示授權"],
  ["內容訂閱", "NT$699／月", "NT$999／月"],
  ["展示紀錄", "依方案提供基本紀錄", "含展示與藝術支持紀錄整理"],
  ["ESG 報告", "不含", "含 ESG 報告整理服務"],
  ["設備配置", "可搭配 ArtON Box 或展示面板", "可依據點與場域配置設備"],
];

const benefits = [
  {
    icon: FileOutput,
    title: "Commercial 方案含 ESG 報告",
    body: "以展示紀錄、藝術支持內容與合作資料為基礎，整理企業可查閱的 ESG 行動素材；不等同第三方認證或法定申報。",
  },
  {
    icon: Users,
    title: "讓支持成為日常展示",
    body: "企業可選擇具 ESG 標誌的策展，支持身心障礙創作者與策展夥伴，讓作品在空間裡持續被看見。",
  },
  {
    icon: Leaf,
    title: "想加強 E，再選全彩電子紙",
    body: "全彩電子紙是額外的展示設備選項，具全反射與低耗能特性；實際節能效果依尺寸、更新頻率與場域條件估算。",
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
                ArtON Commercial 是給企業與公開空間的商用授權。除了藝術內容訂閱，也包含 ESG 報告整理；若希望進一步強化節能展示，再選擇全彩電子紙。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={LINKS.customerLine} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E8B339] text-[#16202B] text-[15px] font-semibold rounded-full hover:bg-[#F0B429] transition-all duration-300 active:scale-[0.97]">
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  諮詢 Commercial 內容訂閱
                </a>
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
            <h2 className="text-center text-[clamp(2rem,3.6vw,3.5rem)] font-light text-[#1C1C1E] mb-5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>一般方案，與商業方案。</h2>
            <p className="max-w-2xl mx-auto text-center text-[15px] leading-[2] text-[#45423C] mb-14">兩種方案的差異不只是價格，而是使用對象、展示授權與企業 ESG 需求不同。</p>
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-[#E2DCCF] bg-white shadow-[0_18px_50px_rgba(44,37,27,0.06)]">
              <table className="w-full min-w-[760px] text-[13.5px]">
                <thead>
                  <tr className="border-b border-[#E2DCCF]">
                    <th className="w-[24%] px-6 py-6 text-left text-[12px] font-medium text-[#1C1C1E]/45">比較項目</th>
                    <th className="w-[38%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top"><p className="text-[10px] uppercase tracking-[0.22em] text-[#C98F0E] mb-2">HOME</p><p className="text-[22px] font-normal text-[#1C1C1E]">ArtON Home</p><p className="text-[#1C1C1E]/55 mt-2">一般／家庭授權</p></th>
                    <th className="w-[38%] border-l border-[#E2DCCF] px-6 py-6 text-left align-top bg-[#F3F7F1]"><p className="text-[10px] uppercase tracking-[0.22em] text-[#2D5A3D] mb-2">COMMERCIAL</p><p className="text-[22px] font-normal text-[#1C1C1E]">ArtON Commercial</p><p className="text-[#1C1C1E]/55 mt-2">商用／公開空間授權</p></th>
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
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#2D5A3D] font-semibold mb-5">Commercial · 商業方案內容</p>
              <h2 className="text-[clamp(2rem,3.5vw,3.4rem)] font-light text-[#1C1C1E] mb-5" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>不只是展示藝術，<br />也把 ESG 行動整理好。</h2>
              <p className="text-[15px] leading-[2] text-[#45423C]">Commercial NT$999／月，適用企業、診所、飯店、店家與其他公開空間。方案包含公開策展內容訂閱、商用展示授權、展示與藝術支持紀錄，以及 ESG 報告整理服務。</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map(({ icon: Icon, title, body }) => <article key={title} className="bg-white border border-[#E7E0D5] rounded-xl p-8"><span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#2D5A3D]/10 mb-6"><Icon className="w-5 h-5 text-[#2D5A3D]" strokeWidth={1.6} /></span><h3 className="text-[21px] font-normal text-[#1C1C1E] mb-4" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{title}</h3><p className="text-[14px] leading-[1.9] text-[#45423C]">{body}</p></article>)}
            </div>
            <p className="max-w-3xl mx-auto text-center text-[12px] leading-[1.8] text-[#1C1C1E]/45 mt-10">ESG 報告內容依方案與合作資料整理，不等同第三方 ESG 認證、法定申報或固定 ESG 分數。</p>
          </div>
        </section>

        <ExploreSection />

        <section className="py-24 md:py-32 bg-[#16203B] text-white">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] font-semibold mb-6">E · Optional upgrade</p>
                <h2 className="text-[clamp(2rem,3.7vw,3.6rem)] leading-[1.25] font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>想再加強 ESG 的 E，<br /><span className="text-[#E8B339]">再選全彩電子紙。</span></h2>
                <p className="text-white/72 text-[15px] leading-[2] mb-8">全彩電子紙是額外的展示設備，不取代 Commercial 內容訂閱。全反射、雙穩態與低耗能特性，適合長時間展示藝術作品；其他尺寸與數量請洽詢。</p>
                <a href={consultMail("全彩電子紙展示方案諮詢")} className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#E8B339] text-[#16203B] rounded-full text-[14px] font-semibold hover:bg-[#F0B429] transition-colors">諮詢電子紙升級 <Mail className="w-4 h-4" /></a>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {["全反射顯示，借助環境光呈現畫面", "畫面靜止時維持顯示，適合長時間展示", "真全彩 1,677 萬色，呈現作品色彩", "設備依尺寸、數量與場域條件配置"].map((text) => <div key={text} className="border border-white/12 rounded-lg p-6"><Check className="w-5 h-5 text-[#E8B339] mb-5" strokeWidth={2} /><p className="text-[14px] leading-[1.8] text-white/78">{text}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-36 bg-[#F5F0EB]">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#B38A44] font-semibold mb-6">A lasting collaboration · 聯名展示</p>
                <h2 className="text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.25] font-light text-[#1C1C1E] mb-6" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>讓一間公司，<br />長期展出一群創作者的作品。</h2>
                <p className="text-[15px] leading-[2] text-[#45423C] mb-7">企業可以選擇與身心障礙藝術創作者進行聯名展示，讓作品在辦公空間、接待區或公共場域持續展出。這不是一次性的活動，而是一個能被看見、被記錄、持續發生的企業行動。</p>
                <p className="text-[13px] leading-[1.9] text-[#1C1C1E]/52">實際展示內容、授權範圍與合作名稱，於確認策展與企業需求後共同規劃。</p>
              </div>
              <figure className="lg:col-span-7 overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(44,37,27,0.1)]"><img src="/assets/venue-office-digital_a460b0a5.png" alt="企業空間長期展示身心障礙藝術作品的情境" className="w-full aspect-[4/3] object-cover" /><figcaption className="px-6 py-4 text-[12px] tracking-[0.12em] text-[#1C1C1E]/55">企業空間 · 聯名藝術展示情境</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FBFAF7] text-center"><div className="container"><p className="text-[13px] text-[#45423C] mb-6">需要多據點配置、電子紙或聯名展示規劃？</p><a href={consultMail("ArtON Commercial 商業方案諮詢")} className="inline-flex items-center gap-3 px-8 py-4 bg-[#16203B] text-white rounded-full text-[14px] font-semibold hover:bg-[#263354] transition-colors">洽詢 Commercial 商業方案 <ArrowRight className="w-4 h-4" /></a></div></section>
      </main>
      <FooterSection />
    </div>
  );
}
