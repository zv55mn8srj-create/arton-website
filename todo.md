# ArtON 第三輪改版待辦

## 使用者需求（來自 2026-08-13 訊息）
1. 聯絡處導向 contact@arton.gmail.com ✅（Footer 已更新，links.ts 常量）
2. 「我要開始展示/開始訂閱」CTA → https://lin.ee/yEZxsB3（客戶 LINE）✅ Hero/Header/Footer/CuratorSection 已更新
3. 「我要成為策展人」CTA → https://lin.ee/7dr8uq4（策展人 LINE）✅ 已更新
4. 新增「與 ArtON 一起支持身障藝術創作」區塊（參考截圖：小光點畫廊、方睿有限公司、邀請更多策展夥伴）⬜ 待新增 PartnersSection
5. 情境照片加入網頁：客廳、醫美診所、牙醫診所、咖啡廳（來自 /home/ubuntu/upload/ChatGPTImage2026年7月31日下午10_07_10.png 範例）⬜ 待加
6. 身障畫作（封存.zip 5 張）⬜ 部分使用
7. 身障藝術放在「把喜歡的藝術，帶進你的空間」第一個 ✅（已移至首位，封面用 koi-nine）

## 已上傳的靜態資源（/manus-storage/）
- 身障畫作（裁切後純畫作）：
  - /manus-storage/koi-nine_6a87b9e0.jpg（九鯉魚）
  - /manus-storage/sunrise-dawn_c4eb0efb.jpg（日出晨曦）
  - /manus-storage/true-happiness_b075d163.jpg（真的幸福了）
  - /manus-storage/flowers-sea-island_a1502703.jpg（花開時節與海與島）
  - /manus-storage/summer-youth_e07f5674.jpg（夏日之青春）
- 合作夥伴 logo：
  - /manus-storage/partner-logo-1_7e5ae4bc.png（小光點畫廊）
  - /manus-storage/partner-logo-2_5348f15c.png（方睿有限公司）
- 原情境圖檔：/home/ubuntu/upload/ChatGPTImage2026年7月31日下午10_07_10.png（1536x1024，含：客廳沙發、醫美診所接待、牙醫診所候診、咖啡廳、公司接待區、飯店大廳、診所候診區）
- 合作夥伴截圖：/home/ubuntu/upload/pasted_file_qtnldL_image.webp（2048x1118）

## 夥伴資訊
- 小光點畫廊：專注身心障礙藝術家創作展示的策展平台
- 方睿有限公司：數位轉型與藝術科技的創新合作夥伴
- 第三格：＋ 邀請更多策展夥伴（金色虛線框）
- 底部語句：ArtON 與策展人、畫廊、藝術機構合作，共同建立永續藝術展示生態。若您是策展人或畫廊，歡迎聯絡我們探討合作機會。

## 本輪已完成
- Hero/Header/Footer/CuratorSection 的 CTA 已接 LINE 連結（links.ts 常量）
- 身障藝術展已移至「把喜歡的藝術，帶進你的空間」首位，封面用九鯉魚畫作
- 新增 SpacesPartnersSection（Venues 後、FAQ 前）：含 5 張真實情境照片（客廳/醫美診所/咖啡廳/公司接待區/飯店大廳）＋合作夥伴區塊（小光點畫廊、方睿、邀請更多策展夥伴虛線卡）
- pnpm check 與 build 皆通過
- 全頁截圖驗證新區塊渲染正常

## 剩餘工作
- [ ] 更新 todo 狀態（此項）
- [ ] webdev_save_checkpoint 交付
- [ ] result 訊息告知用戶新上線內容


- [ ] 從 ChatGPT 情境圖裁切 4 張情境（客廳、醫美診所、牙醫診所、咖啡廳）並上傳
- [ ] 確認 logo 裁切品質，必要時重新裁切
- [ ] 新增 PartnersSection（放在 VenuesSection 之後、FAQ 之前）
- [ ] 新增「展示空間」情境照片區塊
- [ ] pnpm check + build 驗證
- [ ] 截圖確認（桌面 + 行動）
- [ ] 存 checkpoint 交付

## 現有 sections 順序（Home.tsx）
Header → Hero → Our Why(WhyArtON) → 流程(ProcessSection) → Enterprise(企業ESG+Dashboard) → Curator → Explore(策展) → Timeline → WhyEnterprise → Venues → FAQ → Footer(CTA+Footer)
