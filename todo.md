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

# 第十三輪改版待辦（2026-08-14）
- [ ] 修正 CuratorPage 策展人 FAQ「策展上架需付費嗎？」答案：目前推廣期 ArtON 邀約的策展人不收費，日後保留收費可能；策展上架後進入 ArtON 策展目錄，企業訂閱後作品開始播放，策展人與藝術家同步獲得展示帶來的持續收益
- [ ] /start 加入「成為 ArtON 創始合作夥伴」區塊（參照附圖：左側傾斜 FOUNDING PARTNER 名牌卡、中間 FOR THE FIRST SPACES 標籤＋「成為 ArtON 創始合作夥伴。」標題＋首批合作空間期間免費體驗文案＋「體驗期間不收月費・體驗後 NT$799／月起」＋「申請免費體驗」mail 按鈕、右側花田畫作直幅照片）
- [ ] 裁切花田畫作直幅供該區塊使用並上傳 webdev 靜態資產（/home/ubuntu/webdev-static-assets/paintings/ 中的花開時節直幅）
- [ ] 驗證截圖並交付

## 附圖設計細節（pasted_file_AYnvhF_image.webp）
- 區塊背景：暖白 #FAF7F0；標籤 FOR THE FIRST SPACES（金、字距寬）
- 標題：「成為 ArtON（深藍）創始（灰底 highlight）合作夥伴。（金）」
- 副文：首批合作空間可享有期間免費體驗，讓身障藝術展覽內容、ArtON 播放設備與平台服務，先進入你的空間。
- 兩項 bullet：體驗期間不收月費｜體驗後 NT$799／月起
- 按鈕：申請免費體驗（白底黑框 + mail icon）→ mailto:arton.contact@gmail.com
- 左側：傾斜約 -6° 的白色名牌卡「ARTON FOUNDING PARTNER」金線
- 右側：花田畫作直幅（前景紅色花田＋遠景海與山）

## 第十三輪進度（截至導覽問題回報）
- 已完成（未 checkpoint）：CuratorPage FAQ 收費答案改「推廣期不收費」；/start 新增創始合作夥伴區塊（花田直幅 /manus-storage/founding-art_d2e8df21.jpg，PlansSection 之前）；截圖驗證 /start 與 /curator 渲染正常。
- 待辦：保存 checkpoint、交付第十三輪。

# 用戶回報導覽問題（2026-08-14 新需求，優先）
用戶測到：從三個子頁（/start、/curator、/b2b）點擊 menu「關於 ArtON、企業 ESG、探索策展、常見問題」，
跟在主頁點擊同樣連結，行為有問題，請實際用瀏覽器測試並修正。
- Header.tsx 現況：onAnchorClick 處理——主頁直接平滑滾動（scrollIntoView）；子頁則用 Link navigate("/") 後嘗試滾動到 hash。
- 疑點：子頁點擊後 navigate("/") 為異步導航，scrollIntoView 在頁面尚未載入時執行 → 滾到頂部、錨點失效。需在主頁導航完成後再滾動（監聽路徑或延遲重試）。
- 主頁上點擊的行為也需確認是否跳躍異常（可能 hash link 觸發 SPA 路由混淆）。

## 瀏覽器實測發現（2026-08-14）
測試：在 /start 點擊 menu「關於 ArtON」（href="#about"）。
結果：URL 變成 /start#about，但視窗仍停在頂部（Hero），頁面沒有導回主頁也沒有滾動到主頁 #about。
根因確認：Header 的 onAnchorClick 以 preventDefault + 檢查 location.pathname === "/" 決定行為。
但生產版（部署）上的 Header 可能仍保留舊版 href="#about" 原生錨點——在子頁上 hash 錨點不會跨頁跳轉（SPA），故卡在 /start#about 頂部。
需檢查 dev 版 Header.tsx 現況：若 onAnchorClick 已存在但生產版未發佈則可能是舊版；若已發佈則看邏輯：
- 主頁：element.scrollIntoView({behavior:"smooth"}) 應可工作（待實測）
- 子頁：Link("/") + 之後滾動 → 若滾動在導航完成前執行則失效
修正方案：全部改為 <a href="#about"> 原生錨點，並用 history.replaceState + scrollIntoView 監聽 popstate？
更簡單穩健方案：子頁連結改為完整路徑 href="/#about"，用 JS 監聽所有 a[href^="/#"]，導航到 "/" 後用 setTimeout/retry 滾動到目標 hash。

## 導覽連結修正狀態（2026-08-14）
- 已完成 Header.tsx 重寫：AnchorLink 元件，主頁直接 scrollToAnchor（帶重試），子頁 navigate('/#anchor')。
- 已在 App.tsx 掛上 useHashScroll（從 Header 匯入），路由到達 / 帶 hash 時自動滾到目標區塊。
- 實測（生產 /start）：點擊「關於 ArtON」→ URL 變 /start#about，但頁面停在 /start 沒有滾動到主頁 about 區塊 —— 說明 navigate('/#about') 未觸發路由導航（可能 wouter 把 hash 當成路徑 or 已在 /start）。
- 下一步排查：wouter navigate('/#about') 的行為；測試 dev server 版是否同樣問題。

### 第二次測試（dev 環境 /start）
點「企業 ESG」→ URL 變 /start#enterprise，但頁面完全停在 /start 頂部，沒有導回主頁也沒有滾動。確認 navigate('/#enterprise') 在 wouter 中不觸發導航（同一頁面 hash 變化不觸發 Route 改變，且 wouter 可能忽略 hash）。修復方向：改為 navigate('/') 強制回到主頁，useHashScroll 在 hash 存在時於主頁掛載後滾動。需驗證 production 版使用最新版本（可能用戶測試的是舊版）。注意：sandbox 瀏覽器可能開啟的是 auto-publish 的生產版，而我們剛修的代碼需 checkpoint 才會發佈（auto-publish 開啟）。

# 第十四輪改版待辦（2026-08-14）：/b2b 方案區調整
- [ ] /b2b 方案區：NT$1,499/月 改為「ArtON 藝術展示面板」方案（專為藝術展示打造，精準還原色彩，霧面抗眩光、博物館級色彩校準、木質外框，多種尺寸依需求配置，提供專人規劃與報價）
- [ ] 新增「ArtON 真全彩電子紙展示」方案（參照附圖）：環保首選標籤、多種尺寸依需求配置、提供專人規劃與報價、不寫價格；特點：採用全反射電子紙顯示技術、1677 萬真全彩｜零藍光護眼｜超低耗電、忠實呈現藝術作品色彩長時間顯示舒適省電、最適合藝術展示/企業 ESG/公共空間；按鈕「諮詢電子紙展示方案」→ arton.contact@gmail.com
- [ ] 方案區若有「永續電子紙方案」或舊電子紙方案需整合
- [ ] 驗證截圖並交付

附圖重點（pasted_file_RqfzQq_image.png）：OPTION 03 / ArtON 真全彩電子紙展示 / 1677 萬真全彩｜零藍光護眼｜超低耗電 / 環保首選 / 多種尺寸｜依需求配置 / 提供專人規劃與報價 / 三個勾選點 / 諮詢電子紙展示方案按鈕

# 第十五輪改版待辦（2026-08-14）：/b2b 強化身障敘事
- [ ] /b2b 主標題強化「身障創作者」字眼（如：「讓每一面牆，成為 2026 永續報告書裡會減碳、支持身障創作者的 ESG 實踐。」）
- [ ] S 面向（社會影響力）文案明確診斷身障創作者持續收入
- [ ] 驗證截圖並交付

# 第十六輪改版待辦（2026-08-14）：/start 組合包補年度 ESG 報告
- [ ] 檢查 /start 頁 1,499 組合包方案 feature 列表
- [ ] 補上「年度 ESG 報告」權益（與 $799/999 方案一致）
- [ ] 檢查 999 方案是否也有年度 ESG 報告，一併確認完整性
- [ ] 驗證截圖並交付

# 第十七輪改版待辦（2026-08-14）：/b2b 頁尾標語修正
- [ ] 修正 /b2b 頁尾 Final CTA 標語「吃最少電的展示終端，產出最高 S&E 價值的永續實踐。」
- [ ] 驗證截圖並交付

# 第十八輪改版待辦（2026-08-14）：Hero CTA 雙軌分類
- [ ] 閱讀 HeroSection.tsx 現況 CTA 結構
- [ ] 重構 CTA 為雙軌：「我是企業：瀏覽 ESG 方案」（導 /b2b）、「我是創作者/策展人：加入合作」（導 /curator）
- [ ] 確認行動版排版
- [ ] 驗證截圖並交付
