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

# 第十九輪改版待辦（2026-08-14）：B2B 企業客製方案卡片
- [ ] 閱讀 B2BPage.tsx 方案區結構
- [ ] 新增「企業客製方案（多據點 5 台以上）」卡片：多據點優惠、專人到場評估、年度合約彈性，導向 Email 聯繫
- [ ] 截圖驗證並保存 checkpoint
- [ ] 交付

# 第二十輪改版待辦（2026-08-14）：/start 創始夥伴 CTA 與硬體區塊隱藏
- [ ] 創始合作夥伴「申請免費體驗」按鈕改連 arton.contact@gmail.com
- [ ] 隱藏「Exhibiting Devices · 展示硬體」三個區塊（保留程式碼，日後可啟用）
- [ ] 確認 PlansSection 是否也在 /start 使用（計畫區塊內硬體三項是否也需處理）
- [ ] 截圖驗證並交付

# 第二十一輪改版待辦（2026-08-14）：B2B 移除兩張方案卡
- [ ] 移除 B2BPage plans 陣列中「無痛體驗方案 999」與「ArtON 藝術展示面板 1499」
- [ ] 方案區改為只保留電子紙（OPTION 03）與企業客製（OPTION 04）區塊，檢查標題與結尾文案是否需要調整
- [ ] 截圖驗證並交付

# 第二十二輪改版待辦（2026-08-14）：策展人 FAQ 收費答案簡化
- [ ] CuratorPage FAQ「策展上架需付費嗎？」答案改為「由 ArtON 主動邀約的策展人不收費」
- [ ] 確認無其他類似文案（如 /start 創始夥伴區）需同步，截圖驗證並交付

# 第二十三輪改版待辦（2026-08-14）：B2B 敘事重構——身障創作者即 ESG 核心
- [ ] 查證支持身障創作者對應的 ESG 指標與 SDG 目標（SDG 1/8/10 等、GRI、企業永續報告社會指標）
- [ ] B2B Hero 與定位調整：支持身障創作者 = ESG 核心；電子紙只是升級選項
- [ ] 新增「支持身障創作者 = ESG」符合事項區塊（SDG/指標對照）
- [ ] 方案區重構：999/1499 訂閱＋ESG 報告為企業日常 ESG 基礎；彩色電子紙降為升級選項
- [ ] 截圖驗證並交付

# 第二十四輪待辦（2026-08-14）：提供完整網站原始碼與佈署教學
- [ ] 打包專案原始碼為 zip（排除 node_modules、.manus-logs）
- [ ] 撰寫部署教學文件（Vercel/Netlify/Cloudflare Pages/GitHub Pages 與 VPS）
- [ ] 交付 zip 與教學文件

## 打包進度（2026-08-14）
- 已下載 29 個 /manus-storage/ 資產到 client/public/assets/（共 6.9MB），所有 src 引用已 sed 改為 /assets/
- pnpm build 成功（dist/public/index.html 368KB、JS 787KB gzip 199KB）
- 用 python3 http.server 8899 於 dist/public 測試：首頁與圖片正常（/assets/hero-gallery 200）
- /start 直接路由 404 為預期（靜態伺服器無 SPA fallback）；/#/start hash 正常，Vercel/Netlify 等平台 deploy 後 /start 會正常（SPA fallback）
- 佈署教學需說明：推薦 Vercel/Netlify（自動 SPA fallback）；GitHub Pages 需 hash router 或 404 fallback
- 待辦：打包 zip（排除 node_modules/.manus-logs）、寫 DEPLOY.md 教學、交付

# 第二十五輪改版待辦（2026-08-16）：依反饋轉為產品價值導向文案
反饋重點：核心句「讓藝術，持續發生在生活裡」；ArtON 是「持續更新的數位藝術展示」；產品三步驟（選內容→ArtON Box→中控遠端更新）；每月更新視覺（1 藝術家+5 作品=1 場數位展覽，本月→下月）；企業方案 CTA 企業合作；頁尾 CTA 觀看 Demo/聯絡我們；文字精簡+對比加強；LOGO 不變；小光點作品需標藝術家姓名或改實播畫面。
- [ ] 盤點 Home.tsx 各區塊結構，記錄需要修改的區塊與元件清單
- [ ] 確認 assets 中是否有實播畫面素材；評估「本月→下月」視覺實現方式
- [ ] Hero 改版：標題「讓藝術，持續發生在生活裡。」副標精簡，CTA 改「觀看 Demo」
- [ ] 新增「ArtON 是什麼」區：持續更新數位藝術展示
- [ ] 運作流程改「一次安裝，持續更新」三步驟
- [ ] 「你會看到什麼」區：藝術家/作品/創作故事/展覽資訊，實際播放畫面為主
- [ ] 每月更新區：本月→下月視覺
- [ ] 企業方案改「讓空間，每個月都有新的內容」+ CTA 企業合作
- [ ] 頁尾 CTA 改「讓下一場展覽，從你的空間開始。」+ 觀看 Demo/聯絡我們
- [ ] 全站文案精簡、對比度檢查（hero 字加遮罩/加深）
- [ ] 截圖驗證全頁、存 checkpoint、交付

## 本輪執行進度（截至最新編輯）
- 背景：首頁各元件與 section id：HeroSection(no id)、WhyArtON(#about)、ProcessSection(no id)、EnterpriseSection(#enterprise)、CuratorSection(#curator)、ExploreSection(#explore)、TimelineSection(no id)、WhyEnterprise(no id)、VenuesSection(no id)、FAQSection(#faq)、SpacesPartnersSection(no id)、Home 內 PlansTeaserSection(no id)、FooterSection 內 footer CTA section id="start"
- assets 已有（29 檔，在 client/public/assets/，代碼引用 /assets/xxx）：hero-gallery_f188e269.jpg、teaser-art-d_d8627ff7.jpg、curator-laptop_38899225.jpg、exhibition-{spring,healing,abstract,nature,taiwan}_*.jpg、koi-nine_6a87b9e0.jpg（身障展封面）、flowers-sea-island_a1502703.jpg、scene-{cafe,clinic,hotel,living,reception}_*.jpg、office/clinic/hotel/cafe-art_*.jpg、founding-art_d2e8df21.jpg、bird-sea-art_65bd98be.jpg、partner-logo-{1,2}_*.png、line-qr-customer_068ac53d.png、line-qr-curator_51a4f553.png、arton-esg-sample_90a82260.pdf
- 已完成：
  1. HeroSection.tsx 已重寫：標題「讓藝術，持續發生在生活裡。」副標「ArtON 是一個持續更新的數位藝術展示…遠端持續更新」「每月新的藝術家 × 新的作品 × 新的展覽」，CTA 改為「觀看 Demo」(導/start) 金色主 +「企業合作」(導/b2b) 描邊
  2. WhyArtON.tsx 已改「ArtON 是什麼」：title「一個持續更新的數位藝術展示。」desc「今天看見一場展覽，下個月，又是一場新的展覽。」三卡改為 Remote Update 中控遠端更新 / Monthly Renewal 每月新內容（1藝術家+5作品=1場數位展覽，emphasis）/ Everyday Space 進入日常空間；正文精簡為3段
- 待辦：
  3. ProcessSection.tsx 改「一次安裝，持續更新」三步驟：①選擇藝術內容（典藏或每月更新）②ArtON Box 播放 ③中控遠端更新（每月更新新內容）
  4. 新增「每月更新」區（本月→下月視覺，可在 Home.tsx 加入 MonthlyUpdateSection 元件，用 existing exhibition 圖片輪替呈現 1位藝術家+5幅作品=1場數位展覽）
  5. CuratorSection 文案精簡（「你會看到什麼」：藝術家/作品/創作故事/展覽資訊，文字維持精簡）
  6. EnterpriseSection 改「讓空間，每個月都有新的內容」+ 藝術展示/空間美學/企業文化/ESG + CTA 企業合作（導/b2b）
  7. FooterSection CTA 改「讓下一場展覽，從你的空間開始。」+ 想看看 ArtON 放在你的空間會是什麼樣子？+ CTA 觀看 Demo(/start)/聯絡我們(mmailto:arton.contact@gmail.com)
  8. PlansTeaserSection 文案精簡、EnterpriseSection/Timeline/WhyEnterprise/Venues 各區檢查文字對比與精簡
  9. 全站字色對比檢查（尤 hero 遮罩已加深 black/82）
  10. 截圖全頁驗證、存 checkpoint、交付

## 進度更新（第二十五輪，已完成大部分）
- 已完成（新增）：
  3. ProcessSection 已改「一次安裝，持續更新」三步驟（選擇藝術內容→ArtON Box 播放→中控遠端更新）
  4. MonthlyUpdateSection.tsx 已新增：「每個月，看見新的藝術家。」本月(小光點/花卉與海島/flowers-sea-island)→下月(新的藝術家/全新作品與策展主題/exhibition-healing 灰階)卡片對照+「持續更新·永不重複」分隔線
  5. CuratorSection 已改「你會看到什麼」：主圖改 flowers-sea-island 顯示「藝術家·小光點《花卉與海島》·持續展示中」，卡片改「正在播放」含藝術家/作品/創作故事/展覽資訊四欄+01藝術家/05作品/1展覽，標題「一件作品，也可以成為一場展覽。」（未使用的 tools 陣列與 lucide import 已刪除）
  6. EnterpriseSection 已改「讓空間，每個月都有新的內容」：label For Enterprise、desc「ArtON 將藝術、空間與企業品牌連結…」、1-4 關鍵字（藝術展示/空間美學/企業文化/ESG）、CTA「企業合作」導 /b2b（未使用 import 已清理：Building2/RefreshCw/Share2 等）
  7. FooterSection CTA 已改：標題「讓下一場展覽，從你的空間開始。」副標「想看看 ArtON 放在你的空間會是什麼樣子？」CTA：觀看 Demo(導/start)、聯絡我們(mmailto LINKS.email)
  8. Home.tsx 已置入 MonthlyUpdateSection（CuratorSection 之後，ExploreSection 之前）
- 待辦（Phase 3）：
  9. TS 檢查：curatorSection/EnterpriseSection 已清理；需跑 tsc 全檢
  10. 其餘區塊微調：WhyArtON 描述文字已為 /58 透明度（可考慮 /68）、ExploreSection/WhyEnterprise/TimelineSection/VenuesSection 檢查對比度（白字 on 深色用 white/72 以上；淺灰字加深）
  11. 截圖全頁驗證（含 /start、/curator、/b2b 子頁）→ checkpoint → 交付

# 第二十六輪改版待辦（2026-08-16）：官方 Logo 套用 + 「身障」→「身心障礙」用語統一
- [ ] 上傳官方 Logo 圖檔（/home/ubuntu/upload/LOGOPNG檔(1).png）至 webdev 資產並取得 URL
- [ ] Header 導覽列 Logo 改為官方圖檔（透明底、深色文字在淺底導覽列）
- [ ] 頁尾 / 各子頁 Hero / FAQ 等處的 SVG 文字 Logo（Art + 電源符號 + N）改為官方圖檔
- [ ] 製作 favicon（從 Logo 裁出電源符號或整枚縮圖）並更新 index.html 與設定
- [ ] 全站搜尋「身障」字眼並改為「身心障礙」（含「身心障礙藝術展」提及處）
- [ ] 截圖驗證各頁 Logo 顯示 → checkpoint → 交付

## 關鍵資訊（第二十六輪）
- 官方 Logo 上傳成功，URL：/manus-storage/arton-logo-official_fa5df696.png（1114x518，淺灰/白底，黑灰字+黃色電源符號 ArtON，下方有 TURN ART ON. tagline）
- 全站 Logo 待改位置：Header.tsx（導覽列）、FooterSection.tsx（頁尾 Brand 區）、可能在 WhyArtON/其他地方出現的 Art+電源+N SVG wordmark
- 用字替換：所有「身障」→「身心障礙」（含「身心障礙藝術展」）

## 第二十六輪進度與關鍵資訊（持續更新）
- 官方 Logo URL（已上傳）：/manus-storage/arton-logo-official_fa5df696.png（透明底，1114x518：深灰字 ArtON + 黃電源符號 + TURN ART ON. tagline）
- Header.tsx Logo 已改 → 官方 img，h-16（含導覽列深色/淺色皆適用，logo 透明底+深灰字）
- FooterSection.tsx Brand 區 Logo 已改 → 官方 img，h-14（深色頁尾 #1C1C1E 底）
- favicon 裁切參數（PIL 分析結果）：黃圓 x=599-840（寬241），直線 x~715，整體黃色 y=46-443；圓心約 (720,256)，正在用 d*1.25 裁切生成 favicon.png（512）與 favicon-32.png（32）於 client/public/
- favicon 引用待辦：client/index.html 需加 <link rel="icon"> 指向 /favicon.png
- 「身障」→「身心障礙」待改位置（grep 結果）：
  - ExploreSection.tsx L11: 卡片 title "身障藝術展"（保留展名？用戶說「所有身障改為身心障礙藝術展」→ 改為「身心障礙藝術展」）
  - PlansSection.tsx L166/170: alt 與「支持身障藝術創作」→「身心障礙」
  - SpacesPartnersSection.tsx L75: 「支持身障藝術創作」→「身心障礙」
  - B2BPage.tsx 多處 L16/54/73/87/99/151/158/200/204/207/232/280：「身障創作者」→「身心障礙創作者」等
  - StartPage.tsx L188/215: 「身障藝術展覽內容」→「身心障礙藝術展」
- 子頁 Hero/其他處若有舊 SVG wordmark 未發現（已 grep 過）
- 做完 favicon 後：跑 tsc → 截圖驗證 → checkpoint → 交付

## Favicon 完成（2026-08-16）
favicon.png 已完成：黃色電源符號（圓環+直線）、透明背景、512x512，位於 /home/ubuntu/arton/client/public/favicon.png。裁切腳本在 /home/ubuntu/make_favicon.py。

## 第二十六輪剩餘待辦
- [ ] 全站「身障」用語改為「身心障礙」（grep -rn "身障" 找出所有位置逐一修改，含 Home/HeroSection/WhyArtON/ProcessSection/CuratorSection/EnterpriseSection/FooterSection/TimelineSection/WhyEnterprise/MonthlyUpdateSection/StartPage/CuratorPage/B2BPage/header.tsx）
- [ ] 檢查 header.tsx、links.ts、NotFound 是否也需改
- [ ] pnpm tsc --noEmit 驗證
- [ ] 截圖驗證 Hero logo 顯示正常
- [ ] checkpoint 並交付（附註：官方 logo URL /manus-storage/arton-logo-official.png，深色底導覽列用白色版）

## 截圖驗證結果（2026-08-16）
首頁與 B2B 頁截圖顯示：官方 Logo 已出現在導覽列左上，但**黃色電源符號部分在深色導覽列背景中顯示異常（幾乎隱形）**，「ArtN」深色字體可辨識。原因推測：Header 中對 logo 加了白色濾鏡的 img（filter: brightness）導致黃色部分反白消失；或官方 logo 的透明背景區域包含「半透明黑色」像素（原圖有灰色漸層底紋），需處理。需修正 Header logo 處理：使用 logo 的黃色圓點做 icon，或將白色濾鏡作用於深色字體部分。頁尾部分尚未檢查。
- 「身心障礙」用語已完成全站替換（B2B 首頁標題已正確顯示「支持身心障礙創作者的 ESG 實踐」）。
- 剩餘：修 Header logo 濾鏡問題 → 檢查 Footer logo → checkpoint → 交付。

## Logo 診斷（2026-08-16）
官方 logo 上傳於 /manus-storage/arton-logo-official_fa5df696.png（本地 /home/ubuntu/webdev-static-assets/arton-logo-official.png，1114x518）。分析結果：無白色像素、無半透明灰色漸層問題；logo 本身是深灰字+黃圓。截圖中黃色圓「隱形」的原因：導覽列未滾動時透明底，logo 放在深色 hero 照片上——深灰字可辨識，但**黃色電源圓與 hero 背景的暖色調幾乎同色**；另外截圖顯示圓圈幾乎不可見（可能 hero 照片該區域偏黃灰）。解法：為 logo 加白色柔和陰影/光暈濾鏡？不行——白影在淺色導航列上會髒。較穩健方案：導覽列未滾動時 logo 加 drop-shadow(0 1px 6px rgba(0,0,0,0.55))；或使用 CSS filter: brightness 只在深色底。先試統一加柔和深色投影，兩種背景都可用。

## 驗證結果（2026-08-16，第二次截圖）
- 首頁/策展人頁導覽列：官方 logo 清晰可辨（深灰字+黃圓），drop-shadow 有效。
- 頁尾：全頁截圖太小看不清 logo；需 viewport 級截圖檢查頁尾 logo 區塊。
- 剩餘：viewport 截圖檢查頁尾 logo → checkpoint → 交付。

## 導航列 logo 診斷（2026-08-16，viewport 截圖）
深色 hero 背景上 logo 的「Art」與「N」深灰字幾乎不可見（與深背景融為一體），只有黃圓稍可見。drop-shadow 對深灰字無幫助。根本原因：官方 logo 字體顏色為深灰（#2A2E35 類），放在深色 hero 上必然隱形。
**解法**：導覽列透明（未滾動）時改用 CSS filter: brightness(0) invert(1) 把深灰字變白色？這會連黃圓也變白。更好做法：製作兩個版本——白字版 logo（將深灰字換白、保留黃圓）。用 PIL 將 logo 的深色像素（r,g,b 均 <180 且非黃）轉白，生成 arton-logo-white.png 上傳。透明底未滾動導覽列用白版，滾動後白色導航列+頁尾用原始深灰版。

## 白色版 logo
/manus-storage/arton-logo-white_de90f326.png（深灰字轉白、保留黃圓，透明底）
- 透明（未滾動）導覽列：白色版
- 滾動後白底導覽列 / 深色頁尾：原始深灰版

## Logo 最終驗證（2026-08-16）
- 首頁未滾動：白色版 logo 清晰（Art白字+黃圓+N白字+細小 tagline），深色 hero 對比良好 ✓
- /b2b 深色 hero：白色版 logo 清晰 ✓
- 滾動後白色導航列 + 頁尾深灰底：用原始深灰版（含 drop-shadow 補對比）
- 剩餘：確認滾動後白色導覽列 logo 顯示深灰版正常（可省，HMR 後行為可預期）→ checkpoint → 交付

# 第二十七輪改版待辦（2026-08-16）：「你會看到什麼」區塊標題改寫
- [ ] 閱讀 CuratorSection.tsx 現有標題與文案
- [ ] 構思更直覺的標題（此區是實際作品播放畫面＋藝術家姓名），改寫主標與副標
- [ ] 驗證並保存 checkpoint 交付

# 第二十八輪改版待辦（2026-08-16）：CTA 文案直覺化
- [ ] Hero：「企業合作」→「為我的空間訂閱藝術」
- [ ] 導覽列：「企業 ESG 方案」→「企業訂閱方案」、「開始展示」→「選擇方案」、「成為策展人」→「策展人加入」
- [ ] 檢查 Footer/各頁是否有重複的舊 CTA 需同步
- [ ] 驗證並保存交付

# 第二十九輪改版待辦（2026-08-16）：策展人區塊去銅臭味
- [ ] 找出「策展一次，讓更多創作者有收入」出現位置（主頁 CuratorSection / CuratorPage / Home）
- [ ] 主標改為價值導向：「讓更多人看見你的作品、在更多空間展示、提升美學素養」方向
- [ ] 補入機制說明：策展人可自行定價上架，讓更多人訂閱、看到創作
- [ ] 檢查全站其他收益導向文案是否需同步弱化
- [ ] 驗證並保存交付

## 第二十九輪關鍵位置（2026-08-16）
- CuratorPage.tsx:96 主標「策展一次，讓更多創作者<span className='text-[#E8B339]'>有收入。</span>」→ 需改為「被看見」導向
- CuratorPage.tsx:46 FAQ 收費答案已含「同步獲得展示收益」
- CuratorPage.tsx:59-62 Steps 04「持續獲得回報」
- CuratorSection.tsx（主頁 Room 04）標題已於上輪改為「你看到的，就是一場正在發生的展覽」（不含收入字樣，不需改）
- 用戶要補機制：策展人可自行定價後上架，讓更多人訂閱、看到創作
- 改寫方向：主標「策展一次，讓你的作品走進更多空間。」（副標：更多人看見、提升美學素養）；加「自行定價、上架、被訂閱」機制句

# 第三十輪改版待辦（2026-08-16）：頁尾 CTA 區塊刪除與縮小
- [ ] 找出 FooterSection 中「想看看 ArtON 放在你的空間會是什麼樣子？」區塊（含觀看 Demo／聯絡我們按鈕）
- [ ] 刪除該區塊並縮小頁尾整體空間（減少 padding）
- [ ] 驗證各頁頁尾並保存交付

## 第三十輪進度（2026-08-16）
已完成：FooterSection.tsx 刪除整個 CTA Section（「想看看 ArtON 放在你的空間會是什麼樣子？」＋觀看 Demo／聯絡我們按鈕＋背景圖區塊），footer 上下 padding 由 py-16/py-20 縮為 py-10/py-14。Footer 內仍保留「聯絡我們」欄位（email、LINE 客戶、IG、FB）不受影響。
待辦：檢查 Home.tsx 是否有 id="start" 錨點對應問題、截圖驗證首頁頁尾、跑 tsc、checkpoint、交付。

# 第三十一輪改版待辦（2026-08-16）：展示情境 Demo 示意圖
- [ ] 解壓 /home/ubuntu/upload/鄭美珠老師-20260816T052414Z-1-001.zip 並檢視畫作，選定 3-4 幅代表作
- [ ] 生成 4 張情境示意圖（參考用戶範例：企業大廳/會議室洽談室/員工休憩區/接待櫃檯）：
  - 橫式螢幕：作品全圖
  - 直式螢幕：作者介紹（鄭美珠）
  - 橫式螢幕：作品介紹（標題+簡介）
  - 直式螢幕：作品全圖或介紹
- [ ] 將示意圖加到網站 Demo 區塊（首頁 CuratorSection 或新增區）
- [ ] 驗證並保存交付

## 第三十一輪素材檢視（2026-08-16）
解壓目錄：/home/ubuntu/zheng-art/鄭美珠老師/（22 檔）
- 直式海報_鄭美珠.jpg（2000x3556）：作者介紹海報，含鄭美珠肖像圓形照片（粉紅格紋上衣、白襯衫領、眼鏡）、身心障礙藝術主題、ArtON 官方 Logo、「身心障礙 藝術」「以藝術，看見勇氣與生命的光」「輕度魚鱗癬與顱顏併發症」「鄭美珠｜輕度魚鱗癬與顱顏併發症，以繪畫與分享，找回被祝福的人生。她的作品，帶來溫暖與勇氣。」QR Code（策展人 lin.ee/7dr8uq4）、底部深藍條「每一次展示，都是一份支持 TURN ART ON」
- 1.作品全圖_九鯉魚_橫.jpg（3000x1688）：橫式九鯉魚油畫＋右側白底文字區「游向光，也游向自己。」「《九鯉魚》鄭美珠｜油畫｜10F (53 x 45.5 cm)」＋QR
- 2.作品全圖_日出晨曦_全圖.jpg（3000x1688）：橫式日出海景油畫（黃橙天空、海面反光、白鳥飛翔、綠苔岩岸），印象派厚塗，無文字區
- 其他可用：3.真的幸福了（全圖/直/橫）、4.花開時節與海與島（全圖/直/橫）、5.夏日之青春（全圖/直/橫）

## 示意圖生成計畫（參考用戶範例 pasted_file_vASdBe_image.png：2x2 網格，標題「展示情境應用」，下方企業大廳/會議室洽談室/員工休憩區/接待櫃檯）
生成 4 張情境照（螢幕內嵌對應作品）：
1. 企業大廳：橫式螢幕放「日出晨曦」全圖（橫幅海景）
2. 會議室/洽談室：直式螢幕放「直式海報_鄭美珠」作者介紹
3. 員工休憩區：橫式螢幕放「九鯉魚」作品介紹版（含標題文字）
4. 接待櫃檯/公共空間：直式螢幕放「真的幸福了_直」或「花開時節直」作品全圖
生成指令需描述：溫暖現代室內空間、壁掛電視螢幕、螢幕顯示指定油畫內容、自然光、留白、Gallery Quietism 暖白米色調

## 情境圖生成結果（2026-08-16）
生成 URL（直接使用）：
- 企業大廳（橫式螢幕日出晨曦作品全圖）：/manus-storage/demo-lobby-sunrise_85ece1de.png
- 會議室洽談室（直式螢幕作者介紹海報）：/manus-storage/demo-meeting-author_d10ba69e.png
- 員工休憩區（橫式螢幕九鯉魚作品介紹）：/manus-storage/demo-lounge-koi_cc1b3b7b.png
- 接待櫃檯（直式螢幕花開時節作品全圖）：/manus-storage/demo-reception-flowers_0c36330d.png

## 網站結構（Home.tsx 區塊順序）
HeroSection → WhyArtON → ProcessSection → EnterpriseSection → CuratorSection → MonthlyUpdateSection → ExploreSection → TimelineSection → WhyEnterprise → VenuesSection → FAQSection → SpacesPartnersSection → PlansTeaserSection → FooterSection
- VenuesSection（Room 08）現為 6 格照片網格：診所/飯店/企業/校園/公部門/咖啡館，無「展示情境應用」螢幕情境圖
- 計畫：在 VenuesSection 前新增「展示情境應用」Demo 區（新元件 DemoShowcaseSection），4 張圖 + 標題「展示情境應用」+ 四格標籤（企業大廳/會議室洽談室/員工休憩區/接待櫃檯），對應螢幕內容：作品全圖/作者介紹/作品介紹/作品全圖（直橫式皆有）

## Demo 區塊驗證（2026-08-16，全頁截圖）
新增的「展示情境應用 Demo」區塊（米色底 #F5F0EB）已正確出現在 WhyEnterprise 之後、VenuesSection 之前。四張情境圖皆正常載入（生成圖已替換 placeholder），標籤分別為 01 作品全圖·橫式（企業大廳）、02 作者介紹·直式（會議室）、03 作品介紹·橫式（員工休憩區）、04 作品全圖·直式（接待櫃檯），底部有「鄭美珠老師創作、每月更新」註記與 CTA。Hero「觀看 Demo」按鈕已改為平滑滾動到 #demo。全頁其他區塊無異常。
剩餘：保存 checkpoint → 交付（生成圖 URL 已用 /manus-storage/ 直接引用，部署後同樣有效）。
