# ArtON 第四輪改版待辦（2026-08-13）

## 使用者需求
1. FAQ「企業需要哪些設備？」答案改為「需搭配 ArtON Box 藝術盒」✅
2. 「讓創作者，靠自己的作品站穩腳步。」字縮小 ✅（WhyArtON titleSize="clamp(2.15rem,3.6vw,3.4rem)"）
3. 「身心障礙不是作品的註解…值得被公平看見。」放大加深 ✅（emphasis: true，顏色 #3D3A36 font-medium）
4. 「建立一次策展，讓價值一直走下去。」縮小 ✅
5. 「為企業打造，持續發生的 ESG。」縮小 ✅
6. Before/With ArtON 對比文字顏色加深 ✅（#3D3A36 label、#45423C 內文、#B8954F 數字）
7. 「策展一次，讓更多創作者有收入。」縮小 ✅
8. FAQ 回答文字加深 ✅（#45423C）
9. 新增方案區塊：
   - Option 01：ArtON Box 藝術盒 — 輕巧易安裝，搭配任何螢幕即可開始展示藝術作品。NT$2,200 一次購買；或租用 NT$220／月（12 個月方案）。特色：隨插即用，支援 HDMI 輸出／雲端排程與自動更新展覽／穩定流暢，適合企業與診所。按鈕：諮詢專屬播放器
   - Option 02 (RECOMMENDED)：ArtON 藝術展示面板 — 專為藝術展示打造，精準還原色彩，讓每件作品展現最佳質感。專業展示：多種尺寸｜依需求配置，提供專人規劃與報價。特色：霧面抗眩光，如同真實畫布／博物館級色彩校準與木質外框／結合 ArtON 訂閱服務一體到位。按鈕：取得專人規劃報價
   - Option 03：ArtON 真全彩電子紙展示 — 1677 萬真全彩｜零藍光護眼｜超低耗電。環保首選：多種尺寸｜依需求配置，提供專人規劃與報價。特色：採用全反射電子紙顯示技術／忠實呈現藝術作品色彩，長時間顯示舒適省電／最適合藝術展示、企業 ESG 與公共空間。按鈕：諮詢電子紙展示方案
   - 視覺參考：深色中卡（RECOMMENDED 金色標籤、深藍背景 #16202B、金色 CTA 按鈕 #F0B429）、淺色邊卡
   - 原始檔位置：https://artonexhibit-aqjalgae.manus.space/#
10. 方案價格區塊放進網站（放在 FAQ 之前或 Venues 後）

## 已上傳資源（/manus-storage/）
- 身障畫作：koi-nine_6a87b9e0.jpg, sunrise-dawn_c4eb0efb.jpg, true-happiness_b075d163.jpg, flowers-sea-island_a1502703.jpg, summer-youth_e07f5674.jpg
- 夥伴 logo：partner-logo-1_7e5ae4bc.png（小光點畫廊）、partner-logo-2_5348f15c.png（方睿）
- 情境照片：scene-living_919debff.jpg, scene-medical(未用), scene-cafe_4d400757.jpg, scene-reception_c99a43ec.jpg, scene-hotel_1b849c05.jpg, scene-clinic_2b8800f3.jpg

## 剩餘工作
- [ ] 新增 PlansSection（三個方案卡，仿附圖三欄：淺-深-淺，中間 RECOMMENDED）
- [ ] Home.tsx 組裝 PlansSection（放在 SpacesPartnersSection 前或 FAQ 前）
- [ ] FAQ room 編號可能需改為 10（若有 9 個 room 了）— 檢查重複 room 編號
- [ ] pnpm check + build
- [ ] 截圖驗證
- [ ] checkpoint 交付

## 現有 sections 順序
Header → Hero → Our Why(WhyArtON) → Process(Ecosystem) → Enterprise → Curator → Explore → Timeline → WhyEnterprise → Venues → SpacesPartners → Plans(新) → FAQ → Footer(CTA)
- Room 編號：01 Our Why, 02 Ecosystem, 03 Enterprise, 04 Curator, 05 Explore, 06 Timeline, 07 WhyEnterprise, 08 Venues, 09 SpacesPartners, 10 FAQ(現寫 09!) → FAQ 需改為 Room 10，Plans 用 Room 09 或依序調整

## CTA 連結（client/src/lib/links.ts）
- 客戶 LINE: https://lin.ee/yEZxsB3
- 策展人 LINE: https://lin.ee/7dr8uq4
- 信箱: contact@arton.gmail.com
- 上線網域: artonart-fxacsvwk.manus.space
