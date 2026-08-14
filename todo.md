# ArtON 第五輪改版待辦（字級放大，2026-08-13）

## 使用者需求
1. Our Why 左側「讓創作者，靠自己的作品站穩腳步」要比右側大 ✅
2. The Ecosystem 左側「建立一次策展，讓價值一直走下去」要比右側大 ✅（用戶截圖顯示太小）

## 關鍵技術結論
- 原 GalleryHeading 用 `text-[${titleSize}]` 插值 className，Tailwind 無法掃描生成 CSS 規則 → 字級放大不生效（根因）
- 已修復：h2 改 inline style `fontSize: titleSize`，clamp 值現已實效
- 1440px 視窗測量結果（已生效）：
  - 讓創作者站穩腳步：83.5px（clamp 3.4/5.8/5.8rem）✓ 大於右側 37.8px
  - 建立一次策展：66.2px（clamp 2.6/4.6/4.6rem）✓ 大於右側步驟 29px
  - 為企業打造：51.8px、策展一次：51.8px（前輪用戶要求縮小，未抱怨）
  - 其餘主標題（Hero/Explore/Timeline/WhyEnterprise/Venues/SpacesPartners）：89.3px（預設 clamp 3.4/6.2/6.2rem）
  - Plans 標題：54.7px

## 剩餘工作
- [ ] webdev_take_screenshot 目視確認左右比例
- [ ] webdev_save_checkpoint（自動發佈）
- [ ] result 訊息告知用戶

## 前輪已完成（checkpoint fa83d3be）
- 方案三按鈕 mailto:contact@arton.gmail.com、FAQ 刪 Samsung TV、新增作品更新與 ESG 成果兩題

## 其他已知設定
- links.ts: email=mailto:contact@arton.gmail.com, customerLine=https://lin.ee/yEZxsB3, curatorLine=https://lin.ee/7dr8uq4
- 正式網址: artonart-fxacsvwk.manus.space（自動發佈）
- 測量腳本: /tmp/measure.mjs（playwright 在 /tmp，node 執行）


# ArtON 第八輪改版待辦（設計意見全面落實，2026-08-13）

## Phase 1：首頁修改
- [ ] Hero 副標改為「把空間轉化為持續展示藝術的場域，讓企業創造可被記錄的 ESG 影響力，也讓創作者獲得持續的展示與收益。」
- [ ] Hero 金句改為「每一次展示，不只是美化空間，更是企業最直觀的永續行動與創作者的持續收入。」
- [ ] Hero 主 CTA 改為「企業免費諮詢」導向子頁 /start；加入「把閒置的牆，變成企業的 ESG 實踐與創作者的穩定收入。」
- [ ] FAQ 新增「空間沒有多餘螢幕，能參加嗎？」（ArtON Box 輕量訂閱方案）
- [ ] Email 全域由 contact@arton.gmail.com 改為 arton.contact@gmail.com（links.ts 為主）
- [ ] Room 03 Cultural ESG：數據盤點區加「完整數據存證與認證憑證」標註；ESG 報告按鈕旁加「下載 ESG 報告範本 (PDF)」

## Phase 2：子頁面
- [ ] 建立「開始展示」子頁 /start：Room 09 訂閱與硬體方案移入，LINE 連結放子頁內
- [ ] 建立「策展人介紹」子頁 /curator：策展人價值介紹，LINE 連結
- [ ] 首頁與頁尾 CTA 按鈕改導向子頁

## Phase 3：B2B 與方案重組
- [ ] B2B Landing Page /b2b：標題「讓企業閒置牆面，變成永續報告書裡最亮眼的 Social KPI」+ 四大亮點 + CTA
- [ ] 方案重組：新增「無痛體驗方案 $999/月（綁約1年送 ArtON Box）」與「全包輕量面板方案 $1,499/月（綁約2年附 21.5 吋藝術面板）」

## Phase 4：驗證交付
- [ ] 全頁截圖驗證、型別檢查、儲存檢查點並交付


## 關鍵上下文（防壓縮備忘）
- 用戶意見（2026-08-13 訊息，見 user message 全文）：8 項需求，其中 B2B LP CTA 未指定導向，已問用戶，若無回覆統一定向子頁
- 已完成（Phase 1）：links.ts email 改 arton.contact@gmail.com；Hero 副標/金句/閒置牆文案/企業免費諮詢CTA(→/start)；FAQ 加螢幕題；EnterpriseSection 加數據存證標註+下載 ESG 報告範本 PDF 連結（/arton-esg-report-sample.pdf，待做 PDF）；Footer CTA 改 /curator 與 /start
- PlansSection.tsx 有完整訂閱大版塊（左 #1C2632 故事+三步流程、右 #F6F2E9 卡片 799）與硬體三項（Box 2200/220租、面板、電子紙），CTA 用 LINKS.email
- Home.tsx 區塊順序：Hero→WhyArtON→Process→Enterprise→Curator→Explore→Timeline→WhyEnterprise→Venues→FAQ→SpacesPartners→Plans→Footer
- GalleryHeading props: room, label, title, titleSize, description, className；PowerGlyph 為裝飾圖標
- 網站字體系統：Cormorant Garamond + Noto Sans TC；色：暖白 #FAFAF8、cream #F5F0EB/#F7F4EF、金 #C4A265/#E8B339、深 #1C1C1E、墨綠 #2D5A3D、深藍 #16202B/#1C2632
- Hero 圖片: /manus-storage/hero-gallery_f188e269.jpg；九鯉魚 /manus-storage/subscription-art2_d94ae0fc.jpg（PlansSection 123行）
- 用戶提供新方案資訊：無痛體驗方案 $999/月綁約1年送 ArtON Box（退訂收回）；全包輕量面板方案 $1,499/月綁約2年附 21.5 吋藝術面板
- B2B LP 標題：讓企業閒置牆面，變成 2026 永續報告書裡最亮眼的 Social KPI；亮點：一鍵匯出 ESG 報告、稅務抵扣憑證、零施工雲端管理、企業 CSR 品牌形象加分

## 截圖驗證發現（Phase 4）
1. 首頁 Hero（行動版）：副標與金句、新增痛點句並排，行動版字體在小螢幕略擠但可讀，桌面版需確認無重疊；主 CTA 已是「企業免費諮詢」→ /start，OK。
2. /start：組合包（999/1,499）出現在訂閱版塊與硬體三項之間，結構正確；LINE 連結在 CTA 中，OK。
3. /curator：完整正常，LINE 連結為 CTA 終點，OK。
4. /b2b：完整正常，四大亮點、痛點→解方、兩組合包方案、LINE CTA，OK。
5. 所有頁面 TypeScript 0 errors，devserver 無新錯誤。
6. 尚待檢查：桌面版 Hero 是否因新增副標文字過長而溢位（截圖未細看），需放大檢視首頁首屏。
