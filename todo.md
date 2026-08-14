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

# 第九輪改版待辦（2026-08-14）
- [ ] 產生客戶 LINE QR Code 圖片（https://lin.ee/yEZxsB3），上傳為 webdev 靜態資產
- [ ] StartPage 加入 QR Code 掃碼區塊（桌面可掃碼、行動可點擊按鈕）
- [ ] StartPage 方案區新增價格比較表（一般訂閱 vs 組合包），凸顯以租代買優勢
- [ ] 驗證截圖並交付

# 第十輪改版待辦（2026-08-14）
- [ ] 首頁 FAQ 區塊加入 LINE QR Code 小圖（掃碼諮詢轉換入口）
- [ ] 精簡首頁：移除與 /start 重複的方案費用內容（PlansSection），保留導覽入口連結
- [ ] 修正子頁導覽：Header 的錨點連結（關於 ArtON、企業 ESG、探索策展、常見問題等）在子頁需導回主頁對應錨點（#/why 等），而非當前頁不存在的錨點
- [ ] 驗證截圖並交付

# 第十一輪改版待辦（2026-08-14）
- [ ] 刪除 menu「開始展示」（與右側 CTA 重複）
- [ ] Menu 所有子頁連結移到右側（企業 ESG 方案、成為策展人、開始展示按鈕）
- [ ] 主頁 menu「企業 ESG」→ #enterprise；「探索策展」→ #explore；「常見問題」→ #faq（錨點捲動）
- [ ] /curator 頁尾加入策展人 LINE QR Code（需先產生 QR：https://lin.ee/7dr8uq4）
- [ ] 首頁導覽卡（PlansTeaser）加入裝置情境小圖
- [ ] /start 主標語改掉「閒置的牆」→ 更有溫度/支持空間美化方向
- [ ] /start Exhibiting Devices 加中文「展示硬體」，註明 ArtON Box 適合已有自己螢幕的人
- [ ] /b2b 稅務抵扣文案改為平台採購定位（不包裝成公益）
- [ ] /b2b 標題去掉「閒置」一詞
- [ ] 驗證截圖並交付

## 第十一輪進度與關鍵資產（更新）
已完成：
- Header 刪「開始展示」nav、B2B/策展人/開始展示移到右側、mobile nav 同步
- 策展人 QR 產生：/home/ubuntu/webdev-static-assets/line-qr-curator.png → /manus-storage/line-qr-curator_51a4f553.png（CuratorPage Final CTA 已加 QR 區塊）
- StartPage 標語改「讓每一面牆，成為支持藝術創作的美好空間。」
- PlansSection 硬體標題加「· 展示硬體」，ArtON Box subtitle 加「適合已經有自己螢幕的空間」

待完成：
- 首頁 PlansTeaserSection 加裝置情境小圖：已裁切 /manus-storage/teaser-art-d_d8627ff7.jpg（花開時節花田橫幅 1637x920，右下有簽名但可接受；或 /manus-storage/teaser-art-b_df95f8ac.jpg 夏日之青春滿版花卉）→ 選 teaser-art-e（同 d 更乾淨）未上傳；決定用 /manus-storage/teaser-art-d_d8627ff7.jpg
- /b2b 修正：標題去掉「閒置」（找 B2BPage.tsx 中「閒置牆面」）；稅務文案改為平台採購定位（不包裝公益）：「藝術支持與文化採購皆有完整憑證與授權文件，協助財務與稅務申報」→ 強調「ArtON 是藝術展示服務，企業付費採購藝術服務」
- /b2b 需確認 App.tsx import B2BPage 錯誤是否仍存在（devserver 舊 log，檢查檔案是否存在：client/src/pages/B2BPage.tsx）

## 關鍵檔案路徑
- 客戶 QR: /manus-storage/line-qr-customer_068ac53d.png
- 策展人 QR: /manus-storage/line-qr-curator_51a4f553.png
- 飛鳥海景: /manus-storage/bird-sea-art_65bd98be.jpg
- 花田橫幅: /manus-storage/teaser-art-d_d8627ff7.jpg
- 夏日之青春橫幅: /manus-storage/teaser-art-b_df95f8ac.jpg
- links.ts: customerLine https://lin.ee/yEZxsB3、curatorLine https://lin.ee/7dr8uq4、email arton.contact@gmail.com
- 首頁錨點: #about(Our Why), #enterprise, #explore, #faq（Header resolveHref 已對應）

## 第十一輪完成確認（2026-08-14）
全部八項已完成並截圖驗證：Header 刪「開始展示」、右側子頁入口、錨點連結、策展人 QR 區塊、導覽卡花田圖＋金色標籤、/start 標語改「讓每一面牆，成為支持藝術創作的美好空間。」、硬體加中文與適用說明、/b2b 去掉「閒置」與公益包裝（改為「藝術展示服務平台，企業付費採購藝術服務」）。devserver log 中的 B2BPage import 錯誤為舊記錄（01:38），檔案已存在、tsc 無錯、HMR 正常，不影響。

# 第十二輪改版待辦（2026-08-14）
- [ ] 首頁 FAQ 標題「開始之前，你可能想知道的事」字級統一為與 VenuesSection「每一種空間」相同（clamp(2.6rem,4.6vw,4.6rem) 或查閱其實際設定）
- [ ] /curator 策展人 QR 區加入「策展人常見問答」小區塊（3-4 題）
- [ ] /b2b 全面改版：Slogan 改為減碳與社會影響力工具；主推全彩電子紙 E-Paper（省電 99%、減碳度數、支持身障創作者，E+S 雙標題敘事）
- [ ] /b2b 方案改為電子紙方案（如環保電子紙方案 1,299/月，含 E-Paper 終端），保留減碳數據亮點
- [ ] 驗證截圖並交付

## 電子紙減碳數據參考（用於文案）
- 電子紙待機幾乎零耗電，比 LCD 省電約 99%；假設 LCD 65 吋 24/7 年耗約 450 度，電子紙年耗約 4-5 度
- 每度電碳排放約 0.509 kg CO2（台灣電網係數）

## 第十二輪完成確認（2026-08-14）
全部完成並截圖驗證：
- FAQ 標題字級統一 clamp(2.6,4.6vw,4.6)
- CuratorPage 策展人 FAQ 四題（加入策展人需要什麼條件 / 策展上架需付費嗎 / 收益如何計算與結算 / 上架後需要我持續管理嗎）＋ QR 掃碼區
- B2BPage：Hero 新標語「讓每一面牆，成為 2026 永續報告書裡會減碳、支持創作者的 ESG 實踐」；副標定位「藝術展示服務平台…讓 ESG 的 E 與 S 同時被記錄」；四大亮點（E·減碳展示終端 / 一鍵匯出 ESG 報告 / 合法採購與完整憑證 / S·社會影響力）；新增 Why E-Paper 深色區塊（99% 省電、446 度、227 kg CO2 三個 EcoStat＋估算基準註）；「永續電子紙方案」取代面板方案為推薦（E·S 雙效益徽章、1,499/月綁約2年附 21.5 吋全彩電子紙、年省約 446 度電減碳 227 kg）；Final CTA 改為「吃最少電的展示終端，產出最高 S&E 價值的永續實踐」
- PlansSection 電子紙卡片副標同步「1677 萬真全彩｜省電 99%｜年減碳約 227 kg」
- TS 0 errors，首頁/ /b2b/ /curator 三頁截圖正常
