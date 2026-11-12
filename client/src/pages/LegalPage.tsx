import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

type LegalType = "privacy" | "terms";

const content: Record<LegalType, { eyebrow: string; title: string; intro: string; sections: { title: string; body: string }[] }> = {
  privacy: {
    eyebrow: "Privacy Policy · 隱私權政策",
    title: "我們如何使用你的資料。",
    intro: "ArtON 尊重你的隱私。本頁說明你透過官網、電子郵件、LINE 或諮詢流程提供的資料，將如何被使用與保護。",
    sections: [
      { title: "一、蒐集的資料", body: "當你主動聯繫 ArtON、申請方案或提供諮詢資料時，我們可能取得姓名、公司名稱、電話、電子郵件、展示據點與需求內容。網站也可能透過分析工具收集匿名的瀏覽與互動資料。" },
      { title: "二、使用目的", body: "資料用於回覆諮詢、提供方案與報價、安排展示服務、改善網站內容，以及依法律要求保存必要紀錄。我們不會將你的資料出售給第三方。" },
      { title: "三、資料保存與安全", body: "ArtON 會在提供服務所需期間保存資料，並採取合理的存取控制與安全措施。若合作服務需要委託第三方處理，我們會要求其依約保護資料。" },
      { title: "四、你的權利", body: "你可以來信 support@arton.tw 詢問資料使用情形、要求查閱、補充、更正或刪除依法可處理的個人資料。" },
    ],
  },
  terms: {
    eyebrow: "Subscription Terms · 訂閱服務條款",
    title: "清楚理解，再開始展示。",
    intro: "本頁說明 ArtON 內容訂閱、商用授權、設備採購與取消方式的基本原則；正式合作仍以雙方確認的訂單、報價或合約為準。",
    sections: [
      { title: "一、方案與授權", body: "ArtON Home 為一般／家庭展示授權；ArtON Commercial 為企業、商業與公開空間展示授權。訂閱內容、展示據點、授權範圍與使用期間，依所選方案及確認文件為準。" },
      { title: "二、訂閱與續訂", body: "訂閱週期、付款方式與續訂安排，依訂購時確認的方案說明或合約辦理。若方案有自動續訂，ArtON 會在訂購流程或確認文件中說明。" },
      { title: "三、取消與變更", body: "如需取消、變更方案或停止續訂，請於下一個計費週期前透過 support@arton.tw 或官方 LINE 聯繫。已開始的服務、已交付的內容或已採購的設備，依訂單與相關法令處理。" },
      { title: "四、設備與內容", body: "ArtON Box 與藝術展示面板屬設備採購項目，設備費與內容訂閱分開計算。內容僅得於約定的授權範圍展示，不得擅自複製、轉售、下載或提供第三方使用。" },
      { title: "五、ESG 資料", body: "Commercial 方案可提供展示與藝術支持資料整理及 ESG 報告服務。相關資料不等同第三方 ESG 認證、法定申報或固定 ESG 分數，實際內容依方案與合作資料為準。" },
    ],
  },
};

export default function LegalPage({ type }: { type: LegalType }) {
  const page = content[type];
  return <div className="min-h-screen bg-[#FAFAF8]"><Header /><main className="pt-20"><section className="py-24 md:py-36 bg-[#16203B] text-white"><div className="container max-w-4xl"><p className="text-[11px] uppercase tracking-[0.3em] text-[#E8B339] font-semibold mb-7">{page.eyebrow}</p><h1 className="text-[clamp(2.2rem,4vw,4rem)] font-light leading-[1.25] mb-8" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{page.title}</h1><p className="max-w-2xl text-[15px] leading-[2] text-white/72">{page.intro}</p></div></section><section className="py-20 md:py-28"><div className="container max-w-3xl space-y-12">{page.sections.map((section) => <article key={section.title} className="border-t border-[#1C1C1E]/12 pt-7"><h2 className="text-[21px] font-normal text-[#1C1C1E] mb-4" style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans TC', serif" }}>{section.title}</h2><p className="text-[14px] leading-[2] text-[#45423C]">{section.body}</p></article>)}<p className="text-[12px] leading-[1.8] text-[#1C1C1E]/45 border-t border-[#1C1C1E]/12 pt-7">最後更新：2026 年 10 月　｜　如有疑問，請聯繫 support@arton.tw。</p></div></section></main><FooterSection /></div>;
}
