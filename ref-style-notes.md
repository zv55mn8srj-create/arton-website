# 參考風格分析（artonhome-63a9xf9j.manus.space 設計稿）

來源：用戶提供設計稿 jpg/png + 咖啡廳/企業門口情境圖。
用戶原話：「我們可以改成這種風格嗎」；設計稿註記「底部藍色區可去除」。

## 核心視覺語言（Design稿解析）
- **色彩**：大量暖白/米白背景 + **高飽和黃（#FFC107/#F5B300 系）** 作為主打色，深藍（#16203B/#1A2238）僅用於底部特性條（用戶說可去除）與 Logo。黃+深藍+白 的高對比、明快、現代商業風格，與現行 Gallery Quietism（低調金、博物館靜謐）截然不同。
- **裝飾**：大面積圓形/弧形白色色塊（左側大半圓白 shape）＋黃色實心圓點＋細黃色弧線描邊＋白色點陣（dot grid）裝飾。
- **Hero**：左側大標題「讓藝術 走進更多日常」，關鍵字「更多日常」用黃色；副標「任何藝術，都值得被看見」；兩個 CTA：黃色實心「探索作品→」＋白底描邊「合作洽詢→」，皆為膠囊形按鈕。右側大圖：空間情境照＋嵌入藍黃抽象畫作的螢幕框。
- **右側小字區**：ART CHANGES EVERYDAY.（細英文字距）＋中文「藝術，改變每一天的遇見。」
- **頂部特性條（底部藍色區，用戶說可去除）**：數位畫框／多元藝術／策展更新／空間美學／創作者支持 五個 icon 項目。
- **Header**：白底、左側 ArtON logo（深藍字＋黃電源符號）、右側 menu「作品展示、空間應用、策展服務、關於我們、登入、開始展示（黃膠囊）」
- **情境圖**：咖啡廳.png、企業門口.png（用戶提供，可用於「適用場域」區）
- 首頁圖.png：明亮辦公大廳，黃色沙發，牆上藍黃抽象畫螢幕

## 與現網站差異
現網站：Gallery Quietism（暖白、金、博物館靜謐、serif 大標）。參考風格：明快、商業、高對比黃。
需確認用戶是否要全站改、或只改 Hero/首頁。先以「首頁改版」為範圍實作，並保留子頁一致。

## 實作決定（依用戶素材）
1. 上傳用戶三張圖作為 webdev 靜態資產
2. Hero 改成：左半圓白 shape＋黃圓點＋黃弧線；標題「讓藝術 走進更多日常」黃色強調
3. Header 維持 logo 但 CTA 改用黃膠囊
4. 底部特性條（數字畫框等五項目）先去除（用戶註記可去除）
5. 情境圖區使用用戶提供的咖啡廳/企業門口圖
6. 保持 Gallery Quietism 的靜謐感不完全放棄 → 以「明快黃色系」融入，其他區塊微調色點綴即可，避免全站變成俗豔

## 素材確認
- 咖啡廳.png：明亮木質咖啡廳，牆上有黃色弧線＋黃圓點裝飾、木框風景插畫、黃色抱枕 → 用於「適用場域」咖啡館
- 企業門口.png：企業大廳接待區，牆上山水畫螢幕（直式）＋黃色弧線與黃圓點裝飾 → 用於「適用場域」企業或 Hero/場景
- 設計稿重點：標題「讓藝術走進更多日常」、黃膠囊按鈕、特性條可去除、黃圓點＋弧線＋點陣裝飾語言

## 待辦
- [ ] 上傳三張素材（manus-upload-file --webdev）
- [ ] Hero 改版：左半圓白 shape + 黃圓點 + 細黃弧線 + 標題黃色強調 + 雙膠囊 CTA
- [ ] Header CTA 黃膠囊化（保持 logo）
- [ ] 場景區使用咖啡廳/企業門口圖（VenuesSection）
- [ ] 全站黃色點綴（按鈕/標籤）統一為 #F0B429 系
- [ ] 特性條（數字畫框五項目）不加（用戶說可去除）
- [ ] 截圖驗證 + checkpoint

## 盤點結果（2026-08-18）
已上傳資產：
- /manus-storage/ref-office-lobby_e82c8f1e.png（辦公大廳直式電子畫框）
- /manus-storage/ref-cafe-digital_62d19e12.png（咖啡廳電子畫框）
- /manus-storage/ref-corporate-lobby_458eac41.png（企業門口直式電子畫框）

現況：
- scene-* 與 VenuesSection 圖大部分已是「畫面帶 UI 的電子畫框」（黑框螢幕、含標題與 QR code），不需全改
- hero-gallery_f188e269.jpg：企業大廳「靜態掛畫」+ 雕塑 → **需改電子畫框版**（參考 ref-office-lobby 的藍黃抽象畫電子畫框或重生成）
- VenuesSection 企業卡 office-art_3453b208.jpg、cafe-art_65055682.jpg、clinic/hotel/venue-school/venue-government 需檢視（小圖待放大確認）
- SpacesPartnersSection 使用 scene-*（電子畫框 OK）
- /b2b 可能也有場景圖（hotel-art、office-art 等）

改造決策：
1. 用 AI 生成新版 Hero 背景圖：明亮辦公大廳、暖白色牆、左側留白（放標題文字），右側牆上電子畫框顯示藍黃抽象畫（呼應用戶「首頁圖.png」）、加入黃圓點＋細弧線裝飾元素、黃色沙發。1920x1080。
2. 若 hero-gallery 改為電子畫框版 Hero，則 VenuesSection 企業卡直接改用 ref-corporate-lobby_458eac41.png，咖啡館卡改用 ref-cafe-digital_62d19e12.png
3. 檢查 clinic-art/hotel-art/venue-school/venue-government 是否為靜態掛畫，若是則生成對應電子畫框版
4. 風格色：黃 #F0B429（深金黃）、#16203B 深藍

## 實作關鍵資訊（防壓縮備忘，2026-08-18）
已生成的電子畫框圖 URL（生成中，自動替換）：
- Hero 背景（16:9，左側留白＋右側直式電子畫框藍黃抽象畫）: /manus-storage/hero-digital-frame-yellow_156c19d5.png
- 診所 venue（3:2）: /manus-storage/venue-clinic-digital_f41d5bc2.png
- 飯店 venue（3:2）: /manus-storage/venue-hotel-digital_082e01f2.png
- 企業 venue（3:2）: /manus-storage/venue-office-digital_a460b0a5.png
- 咖啡廳大圖（3:2）: /manus-storage/venue-cafe-large-digital_1fd4b18d.png
用戶提供已上傳：ref-office-lobby_e82c8f1e.png、ref-cafe-digital_62d19e12.png、ref-corporate-lobby_458eac41.png

現狀盤點結論：
- office-art_3453b208.jpg：企業走廊「靜態掛畫」→ 改用 venue-office-digital_a460b0a5.png
- clinic-art_3362e13a.jpg、hotel-art_81b3cbf6.jpg：待檢視（可能靜態掛畫）→ 改用 venue-clinic-digital / venue-hotel-digital
- cafe-art_65055682.jpg：待檢視 → 可改用 ref-cafe-digital_62d19e12.png 或 venue-cafe-large-digital_1fd4b18d.png
- venue-school_5b921e0e.jpg、venue-government_7559ed8c.jpg：待檢視
- scene-*（SpacesPartnersSection）：已是電子畫框畫面 UI，不用改
- hero-gallery_f188e269.jpg：靜態掛畫大廳 → 改用 hero-digital-frame-yellow_156c19d5.png
- HeroSection.tsx：深色覆蓋 + 白字（Gallery Quietism）→ 改版：淺色調 Hero（白底、深藍字 #16203B、黃字強調「更多日常」、雙膠囊 CTA：黃色「探索作品→」#F5B300 + 白底描邊「合作洽詢→」）
- Header.tsx：CTA 圓形 pill 用 #C4A265 金 → 改 #F5B300 黃；未滾動時白底？參考稿 Header 是白底深色字 → 改為白底半透＋深藍字、黃色 pill「選擇方案」
- 參考稿設計：黃 #F5B300/#F0B429、深藍 #16203B、白底、dot grid + 黃圓 + 黃弧線裝飾（CSS 實作即可，不需入圖）

## 檔案結構
- Home.tsx 區塊順序：Hero→WhyArtON→Process→Enterprise→Curator→Explore→Timeline→WhyEnterprise→Venues→FAQ→SpacesPartners→Plans→Footer
- GalleryHeading props: room, label, title, titleSize, description, className
- 全站黃色色值採用 #F5B300（與官方 logo 黃一致）
- 用戶需求：底部特性條不加

## 盤點最終結論（已確認）
五張 VenuesSection 圖全部為「靜態掛畫」，需全數替換：
- clinic-art_3362e13a.jpg（診所大廳，暖米色靜態畫）→ 已生成 venue-clinic-digital_f41d5bc2.png
- hotel-art_81b3cbf6.jpg（飯店走廊靜態畫）→ 已生成 venue-hotel-digital_082e01f2.png
- office-art_3453b208.jpg（企業走廊靜態畫）→ 已生成 venue-office-digital_a460b0a5.png
- cafe-art_65055682.jpg（咖啡館牆上多幅靜態畫）→ 已生成 venue-cafe-large-digital_1fd4b18d.png
- venue-school_5b921e0e.jpg（校園多幅靜態畫）→ 需生成 venue-school-digital
- venue-government_7559ed8c.jpg（公部門木雕靜態畫）→ 需生成 venue-public-digital
hero-gallery_f188e269.jpg（靜態大廳）→ hero-digital-frame-yellow_156c19d5.png
還需生成：campus（校園）與 public（公部門）兩張電子畫框圖。

## 第四十五輪改版進度（2026-08-18 驗證中）

### 已完成
- HeroSection 全面改版：明亮白底 #FBF8F1 + hero-digital-frame-yellow_156c19d5.png（電子畫框大廳背景）
  - 標題「讓藝術，走進更多日常。」（深藍 #16203B + 黃 #F5B300 強調）
  - 副標：ArtON 是一個持續更新的數位藝術展示。結合數位展示設備與中控系統，讓藝術作品進入你的空間，遠端持續更新。
  - 宣言：任何藝術，都值得被看見。
  - 雙膠囊 CTA：黃色「探索作品→」(#demo)、白底描邊「合作洽詢→」(/b2b)
- Header 改版：半透明白底導覽列、深藍文字、黃膠囊「選擇方案」、描邊「企業訂閱方案」
- VenuesSection 六張 venue 圖全換電子畫框：clinic/venue-clinic-digital_f41d5bc2、hotel/venue-hotel-digital_082e01f2、office/venue-office-digital_a460b0a5、campus/venue-campus-digital_55c365e8、public/venue-public-digital_7e46c4c6、cafe/venue-cafe-large-digital_1fd4b18d
- EnterpriseSection 左側大圖也換 venue-office-digital
- 全站色替換：#C4A265 系金色 → #F5B300 品牌黃（sed 批次，排除 ArtONLogo.tsx）
- scene-* 五張圖已確認是電子畫框（不需改）

### 待確認
- 全頁截圖：中上段 Rooms 深色區塊仍顯示舊風格（gallery quietism 深色），需決定是否淺色化
- DemoShowcaseSection、MonthlyUpdateSection、FAQSection、Footer 是否需跟進淺色黃系
- spaces scene-living_919debff.jpg 是居家客廳電子畫框（OK）

### 下一步
- 檢查其餘元件（Hero 下方各 room 區）是否需要浅色化調整
- 保存 checkpoint 並交付
