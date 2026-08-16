# ArtON 官網自行佈署教學

本文件說明如何將 ArtON 官網（React 19 + Tailwind CSS 4 + Vite 的純靜態前端網站）佈署到您自己的主機或平台。網站包含四個路由：首頁 `/`、開始展示 `/start`、策展人 `/curator`、企業 ESG 方案 `/b2b`。

---

## 一、快速總覽

| 項目 | 說明 |
|---|---|
| 技術架構 | React 19 + Vite（純前端靜態網站，不需要後端伺服器） |
| 建置輸出 | `dist/public/` 目錄（index.html + 打包後的 JS/CSS + assets 圖片） |
| 建置指令 | `pnpm install` 後執行 `pnpm build` |
| 圖片檔案 | 全部圖片已內建於 `client/public/assets/`，打包後隨 dist 一起上傳即可，不需要額外圖床 |
| 聯絡資訊 | LINE 連結與 arton.contact@gmail.com 已直接寫在程式碼中 |

**推薦佈署平台（依容易度排序）：** Vercel、Netlify、Cloudflare Pages，三者皆免費且支援 SPA 路由（子頁面 /start、/curator、/b2b 直接存取不會 404）。

---

## 二、前置作業（本地電腦準備）

### 1. 安裝 Node.js

先到 [nodejs.org](https://nodejs.org/) 下載安裝 **Node.js 20 或 22（LTS 版本）**。安裝完成後打開終端機（Windows 用「命令提示字元」或「PowerShell」，Mac 用「終端機」）驗證：

```bash
node -v
npm -v
```

### 2. 安裝 pnpm（套件管理工具）

```bash
npm install -g pnpm
```

### 3. 解壓縮專案

將 `arton-website.zip` 解壓縮到您想放的資料夾，例如桌面上的 `arton-website`。

---

## 三、方式 A：佈署到 Vercel（最推薦，免費、最快）

Vercel 提供免費方案，支援自訂網域，且自動處理 SPA 路由。

1. 前往 [vercel.com](https://vercel.com)，用 Google 或 GitHub 帳號註冊。
2. 點選 **Add New → Project**，然後選擇 **Import Git Repository**。
3. 先把專案上傳到 GitHub（見下方「補充：上傳到 GitHub」），再從列表選擇您的 ArtON 儲存庫。
4. 建置設定保持預設即可（Vercel 會自動偵測 Vite 專案）。若有需要，可手動設定：
   - **Framework Preset**：Vite
   - **Build Command**：`pnpm build`
   - **Output Directory**：`dist/public`
5. 點選 **Deploy**，約 1～3 分鐘後即可獲得 `your-project.vercel.app` 網址。
6. 若要綁定自有網域（例如 www.arton.com），在 Vercel 專案的 **Settings → Domains** 加入您的網域，依指示到網域商後台修改 DNS 即可。

### 補充：上傳到 GitHub 的步驟

1. 前往 [github.com](https://github.com) 註冊帳號。
2. 建立新的儲存庫（New repository），名稱例如 `arton-website`，**不要**勾選初始化。
3. 在專案資料夾打開終端機，依序執行：

```bash
git init
git add .
git commit -m "ArtON website"
git branch -M main
git remote add origin https://github.com/您的帳號/arton-website.git
git push -u origin main
```

之後每次透過 Manus 或自己修改程式碼，只需 `git add . && git commit -m "更新說明" && git push`，Vercel 就會自動重新佈署。

---

## 四、方式 B：佈署到 Netlify（免費，拖拉上傳即可）

Netlify 支援直接上傳資料夾，不需要 GitHub：

1. 前往 [netlify.com](https://netlify.com) 註冊帳號。
2. 開啟專案資料夾，在終端機執行 `pnpm install` 然後 `pnpm build`，產生 `dist/public` 資料夾。
3. 在 Netlify 控制台點選 **Add new site → Deploy manually**，把 **dist/public** 整個資料夾**拖拉**到網頁上傳區。
4. 幾秒鐘後即完成佈署，可取得隨機網域並改為自訂名稱；自訂網域設定方式與 Vercel 類似（Site settings → Domain management）。

Netlify 預設已為 SPA 處理 404 重導向；若子頁面仍 404，在 `dist/public` 新增一個 `_redirects` 檔案，內容如下：

```
/*    /index.html    200
```

---

## 五、方式 C：佈署到 Cloudflare Pages（免費、速度快）

1. 前往 [dash.cloudflare.com](https://dash.cloudflare.com) 註冊 Cloudflare 帳號。
2. 側欄選擇 **Workers & Pages → Create → Pages**，連結您的 GitHub 儲存庫。
3. 建置設定：**Framework preset** 選 Vite、**Build command** 填 `pnpm build`、**Build output directory** 填 `dist/public`。
4. 完成後即可獲得 `xxx.pages.dev` 網址。

---

## 六、方式 D：佈署到自己的主機（VPS 或任何靜態主機）

如果您的公司有自己的伺服器，只要把 `dist/public` 資料夾放上伺服器並用任何網頁伺服器提供服務即可：

**Nginx 範例配置**（網站根目錄指向 dist/public）：

```nginx
server {
    listen 80;
    server_name www.arton.com;
    root /var/www/arton;   # 把 dist/public 內容放進這裡
    index index.html;

    # 處理 SPA 路由：找不到檔案時都回傳 index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 圖片快取
    location ~* \.(jpg|jpeg|png|gif|webp|svg|pdf)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

重新載入 Nginx：`sudo systemctl reload nginx`。

**Apache** 可在 `dist/public` 放一個 `.htaccess`：

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**本地測試（不用伺服器）**：在 `dist/public` 目錄執行以下指令，即可在 `http://localhost:8080` 瀏覽（注意：直接雙擊 index.html 打開可能因路徑問題顯示空白，建議用以下方式）：

```bash
cd dist/public
python3 -m http.server 8080
```

---

## 七、常見問題 FAQ

**Q1：打開網頁只有空白畫面？**
通常是因為沒有走「網址存取」而是直接雙擊 index.html。請務必使用本地伺服器（`python3 -m http.server 8080`）或正式佈署後的網址開啟。

**Q2：子頁面 /start、/curator、/b2b 出現 404？**
這是 SPA 路由的正常現象。請確認您的平台已啟用 SPA fallback：Vercel 與 Netlify 自動支援；Nginx 用 `try_files`；Apache 用 `.htaccess`；Cloudflare Pages 可加 `public/_routes.json`（`{"version":1,"include":["/*"],"exclude":[]}`）。

**Q3：之後如何修改內容（價格、文案、圖片）？**
方式一（推薦）：回來 Manus 對話中直接請我修改，改完後 Manus 會自動發布；您再從專案控制台下載最新程式碼同步。方式二：自行編輯 `client/src` 底下的 `.tsx` 檔案（文案與價格在這些檔案中），改完執行 `pnpm build` 並重新上傳 `dist/public`。

**Q4：想改 LINE 連結或 Email？**
搜尋程式碼中的 `https://lin.ee/yEZxsB3`（客戶 LINE）、`https://lin.ee/7dr8uq4`（策展人 LINE）與 `arton.contact@gmail.com` 直接替換即可。

**Q5：圖片放在哪裡？可以自己換嗎？**
所有圖片都在 `client/public/assets/` 資料夾。要替換圖片時，用**相同的檔名**覆蓋原圖即可（不需要改程式碼）。新增圖片則把圖放進 assets 後，在程式碼中以 `/assets/您的檔名.jpg` 引用。

**Q6：需要付費的伺服器嗎？**
這個網站是純靜態前端，**不需要**付費主機。Vercel／Netlify／Cloudflare Pages 的免費方案流量對品牌官網綽綽有餘；只有當您需要「用戶登入、後台管理、金流」等動態功能時，才需要升級為後端架構（可再透過 Manus 升級）。

---

## 八、指令速查表

| 目的 | 指令 |
|---|---|
| 安裝依賴 | `pnpm install` |
| 本地開發模式（含熱更新） | `pnpm dev` |
| 產出生產版網站 | `pnpm build` |
| 產出位置 | `dist/public/`（整個資料夾上傳到主機即可） |
