# ArtON 最新版部署至 arton.tw

## 先看結論

本壓縮檔同時包含完整的 React + Vite 原始碼，以及已經建置完成的 production 輸出。若您的主機只支援 HTML／靜態檔案，請使用 FileZilla 將壓縮檔中的 **`dist/public/` 目錄內所有檔案與資料夾** 上傳到 `arton.tw` 的網站根目錄，不要把 `dist` 資料夾本身再包一層上傳。

上傳後，網站根目錄應直接看得到以下項目：

| 項目 | 用途 |
|---|---|
| `index.html` | React/Vite 正式入口 |
| `assets/` | 編譯後 CSS、JavaScript 與靜態資源 |
| `manus-storage/` | 網站所有圖片資產 |
| `favicon*.png`、`favicon.ico` | 網站小圖示 |
| `robots.txt` | 搜尋引擎爬蟲規則 |
| `sitemap.xml` | 公開頁面索引清單 |

## FileZilla 上傳步驟

1. 先備份目前 `arton.tw` 網站根目錄的 `index.html`、`assets/`、`manus-storage/`、favicon 檔案、`robots.txt` 與 `sitemap.xml`。
2. 解壓縮本包，在本機開啟 `dist/public/`。
3. 使用 FileZilla 連線到主機後，進入 `arton.tw` 的網站根目錄；常見名稱包括 `public_html`、`www`、`htdocs` 或主機商指定的 document root。
4. 將 `dist/public/` 裡面的內容全部上傳到網站根目錄。請上傳內容本身，而不是上傳一個名為 `public` 或 `dist` 的外層資料夾。
5. 若 FileZilla 詢問同名檔案，選擇覆寫；不要刪除主機商必要的驗證檔案或既有信箱設定檔。
6. 上傳完成後，以無痕視窗開啟 `https://arton.tw/`，或清除 CDN／主機快取後重新整理。

## 上傳後檢查

請依序開啟下列網址確認回應正確：

- `https://arton.tw/`
- `https://arton.tw/start`
- `https://arton.tw/b2b`
- `https://arton.tw/curator`
- `https://arton.tw/robots.txt`
- `https://arton.tw/sitemap.xml`

在瀏覽器檢視原始碼時，首頁應可看到 `G-MX1ZYCVF40`、新的頁面標題、description、canonical 與 Open Graph 標籤。GA4 使用 `https://www.googletagmanager.com/gtag/js?id=G-MX1ZYCVF40` 載入；若主機有內容安全政策，請允許 `www.googletagmanager.com` 與 `www.google-analytics.com`。

## GA4 驗證

部署完成後，請在 Google Analytics 4 的 **報表 → 即時** 檢查自己的造訪是否出現。再點擊「為我的空間訂閱藝術」、「企業 ESG 訂閱方案」、「策展人加入」、Email 與 LINE 等 CTA，於 DebugView 或事件報表確認事件。程式會記錄頁面瀏覽，以及 `plan_selection_click`、`enterprise_esg_click`、`curator_join_click`、`email_consultation_click`、`line_consultation_click` 等事件；不會傳送姓名、電話或 Email 內容。

本地建置成功只代表檔案可正常編譯；**正式網域必須完成上傳，GA4 才會從 arton.tw 實際收集資料**。

## SEO 驗證

確認 `robots.txt` 內的 Sitemap 指向 `https://arton.tw/sitemap.xml`，且 `sitemap.xml` 列出的 URL 都能正常開啟。接著在 Google Search Console 新增 `arton.tw` 網域資產、提交 sitemap，並使用 URL 檢查工具要求重新建立索引。

## 如果網址出現 404

這個網站是 React SPA。若首頁正常但直接開啟 `/start`、`/b2b` 或 `/curator` 出現 404，請在主機控制台設定將未知路徑 rewrite 到 `/index.html`。若主機是 Apache，可在網站根目錄加入適用於該主機的 rewrite 設定；若主機只支援純靜態檔案且不能設定 rewrite，請先確認主機商是否提供 SPA fallback。

## 本次版本

本包對應目前最新 source 與 production build。GA4 Measurement ID 為 `G-MX1ZYCVF40`；正式網站 canonical 與 sitemap 使用 `https://arton.tw`。
