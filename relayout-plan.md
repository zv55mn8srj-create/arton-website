# 第四十七輪：全站重新排版計畫（2026-08-18）

## 盤點結果

### 頁面區塊結構
- **Home（/）**：HeroSection → WhyArtON(about) → ProcessSection(深色) → EnterpriseSection(enterprise, 淺) → WhyEnterprise(深色, Room 07) → CuratorSection(深色) → MonthlyUpdateSection → TimelineSection → ExploreSection(explore, 已移除？) → DemoShowcaseSection(demo) → VenuesSection → FAQSection(faq, 深色) → SpacesPartnersSection → PlansTeaser → Footer(深藍圓環)
  - 注意：ExploreSection 已移至 /start；Home.tsx import 需確認是否已移除
- **B2BPage**：Hero(深藍) → HighlightCards(淺) → SDG section(淺) → ESG dashboard(深藍) → plan/epaper(淺) → plans(淺 FBFAF7) → CTA(深 1C1C1E) → Footer
- **StartPage**：Hero(深) → values → plans → comparison → ExploreSection(淺) → LINE QR → Footer
- **CuratorPage**：Hero(深) → FAQ + LINE → Footer

### 色系統盤點（不一致來源）
- 深色：#1C1C1E（舊黑）、#16202B（b2b 深藍）、#16203B（頁尾新深藍）、#1C2632（舊深藍灰）、#10182E（頁尾底）
- 淺色：#FBF8F1（Hero）、#FBFAF7（主要淺）、#F7F4EF、#FAFAF8、#F2EEE7、#FBF7EF、#F6F2E9
- 決定：深色統一為 #16203B（頁尾同族）＋次選 #1C2632；淺色統一為 #FBFAF7／#F7F4EF

## 執行決策
1. **Room 07 WhyEnterprise 移至 B2BPage**：插入 ESG dashboard 之後、plan section 之前（企業讀完 ESG 能力後看到「為什麼選擇」，再進方案）
2. **Home 移除 WhyEnterprise**
3. **全站重新排版**：
   a. 統一深色底為 #16203B 族（Process、WhyEnterprise、CuratorSection 的深色、FAQSection 深色、PlansSection 深色、TimelineSection、DemoShowcaseSection 深色）
   b. HeroSection/PlansSection/FAQSection 等深色區塊標題樣式統一（Noto Serif TC 大標＋金色細 label）
   c. 間距統一：區塊 py-28 md:py-40，內文 max-w 一致
   d. B2BPage CTA 區改與頁尾同語言（深藍圓環風）→ 簡化：改深藍 #16203B 底
   e. StartPage/CuratorPage Hero 深藍改 #16203B 統一
4. 副標 museum-label、Room 標籤樣式統一

## 執行進度（更新）
已完成：Home.tsx 移除 WhyEnterprise（import+usage 皆刪）✅；B2BPage 引入 WhyEnterprise 插入於 Pain→Solution 之後、Plans 之前（line ~274-276）✅；WhyEnterprise 深色底改 #16203B、間距 py-44 ✅。

## 待做（全站排版一致性）
1. 深色底統一：ProcessSection/DemoShowcaseSection/FAQSection 深色、CuratorSection 深色、PlansSection 深色(#16202B/#1C2632)、TimelineSection(#F2EEE7 保持淺)、StartPage/CuratorPage Hero #16202B → #16203B、B2BPage Hero #16202B → #16203B、B2BPage E-Paper 深色區、B2BPage CTA #1C1C1E → #10182E 或 #16203B
2. 淺色底統一：Hero #FBF8F1 vs 全站 #FBFAF7（統一為 #FBFAF7）、#F7F4EF 保持次淺
3. 金色 museum-label：#C98F0E vs #E8B339 → 深色底統一 #E8B339
4. 間距統一：區塊 py-28 md:py-44（部分為 py-40/36/32，統一為 md:py-44）
5. B2BPage 結尾 CTA 區改深藍圓環語言（與頁尾一致）
6. 截圖四頁驗證 → checkpoint → 交付

## 關鍵檔案位置
- Home.tsx: /home/ubuntu/arton/client/src/pages/Home.tsx
- B2BPage.tsx: 區塊順序 = Hero(#16203B)→Highlight(#FBFAF7)→SDG(#F7F4EF)→Epaper(#16203B)→Pain(#F7F4EF)→WhyEnterprise(#16203B)→Plans(#FBFAF7)→CTA(#1C1C1E)→Footer
- StartPage: Hero 深色 + plans + comparison + Explore + QR
- CuratorPage: Hero 深色 + FAQ + QR
- 深色元件: ProcessSection(#1C1C1E), CuratorSection(#16203B), DemoShowcaseSection(#1C2632), FAQSection(#1C1C1E), PlansSection(#16202B+#1C2632), TimelineSection(#F2EEE7淺), SpacesPartnersSection(#FBF7EF淺), VenuesSection(淺)

## 驗證結果（全頁截圖，2026-08-18）
- 首頁：深色區（Process/Enterprise/Timeline/FAQ 等）已統一深藍 #16203B，淺色區 FBFAF7 一致，WhyEnterprise 已不在首頁 ✓
- /b2b：WhyEnterprise 已插入（企業選擇的不只是一面更好看的牆）於 Pain→Solution 與 Plans 之間，深色統一 ✓
- /start：深色 Hero 與深色方案卡統一 #16203B，價格金色 E8B339 ✓；探索策展卡已在此頁 ✓
- /curator：深色 Hero、LINE QR 深色區、FAQ 區、頁尾皆一致 ✓
- 全站間距統一 py-28 md:py-44 ✓；金色 label 深色區 E8B339、淺色區 C98F0E ✓
待辦：保存檢查點並交付。
