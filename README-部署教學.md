# ArtON 網站 — 完整原始碼部署教學

本壓縮檔為 ArtON 網站的 **完整原始碼專案**（React 19 + Vite + Tailwind CSS 4），所有網站圖片（含電子畫框情境圖、作品圖、logo）皆已打包進專案內的 `client/public/manus-storage/` 目錄，**上傳到 GitHub 或任何雲端主機都不會再出現圖片載不出來的問題**。

---

## 一、壓縮檔內容

| 項目 | 說明 |
|---|---|
| `client/src/pages/` | 四個頁面：Home（首頁）、B2BPage（企業 ESG）、StartPage（選擇方案）、CuratorPage（策展人加入） |
| `client/src/components/` | 各區塊元件（Hero、流程、方案、FAQ 等） |
| `client/public/manus-storage/` | 網站全部 24 張圖片（本次本地化重點） |
| `client/public/assets/` | LINE QR Code、夥伴 logo、ESG 報告範本等素材 |
| `package.json` / `vite.config.ts` | 專案設定 |

---

## 二、方式 A：上傳 GitHub（推薦）

GitHub 本身不直接執行網站，但它是最方便的版本管理與備份方式，搭配 **GitHub Pages** 或 **Netlify / Vercel** 即可免費上線。

**步驟一：建立 GitHub 倉庫並上傳**
1. 解壓壓縮檔，進入資料夾
2. 到 [GitHub](https://github.com) 登入後按 **New repository**，命名（如 `arton`），不要勾選初始化檔案
3. 在專案資料夾開終端機，依序執行：
   ```
   git init
   git add .
   git commit -m "ArtON website initial"
   git branch -M main
   git remote add origin https://github.com/您的帳號/arton.git
   git push -u origin main
   ```
4. 若從未裝過 Git，先到 https://git-scm.com 下載安裝

**步驟二：免費上線（三擇一）**
- **Netlify（最簡單）**：到 https://netlify.com 登入 GitHub，按 "Add new site → Import an existing project"，選剛建立的 arton 倉庫，Build command 填 `pnpm build`，Publish directory 填 `dist/public`，按 Deploy 即可自動上線並支援子頁面
- **Vercel**：到 https://vercel.com，操作類似 Netlify，自動識別 Vite 專案，幾乎零設定
- **GitHub Pages + 靜態檔**：若不設 CI，請直接用下方「方式 B」編譯後上傳 static 檔

Netlify / Vercel 皆支援單頁應用路由，子頁面（/start、/b2b、/curator）可直接開啟，不需另外設定回退規則。

---

## 三、方式 B：自行編譯成靜態檔案上傳雲端空間（FileZilla）

若您要上傳到只支援 HTML 的雲端主機，請先在本機編譯出靜態成品。

**步驟一：安裝開發環境（僅需一次）**
1. 安裝 Node.js：https://nodejs.org（下載 LTS 版本）
2. 安裝 pnpm：開啟終端機執行 `npm install -g pnpm`

**步驟二：編譯靜態檔案**
1. 開啟終端機，進入解壓後的專案資料夾
2. 執行 `pnpm install`（安裝依賴，僅需一次）
3. 執行 `pnpm build`，完成後會產生 `dist/public/` 資料夾
4. 將 `dist/public/` 內的 **全部檔案** 上傳至雲端空間的網站根目錄（public_html / www）

**步驟三：設定子頁面回退**
網站採單頁應用架構，子頁面網址（/start 等）需回退到 index.html：
- **Apache 主機**：在根目錄放上 .htaccess（內容如下），通常自動生效
  ```
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ /index.html [L]
  ```
- **Nginx 主機**：請主機商加入 `try_files $uri /index.html;`
- 若子頁面出現 404 且主機不支援上述設定，請告知主機類型，可改為產出各子頁面獨立的 HTML

---

## 四、開發與修改

- 本機開發預覽：`pnpm dev`，開啟 http://localhost:3000
- 修改程式碼後，重新 `pnpm build` 即產生新版靜態檔
- 修改後再上傳 GitHub：`git add . && git commit -m "更新說明" && git push`

## 五、注意事項

- 請不要在 GitHub 上傳 `.env` 等含有金鑰的檔案（本專案無敏感金鑰，可安心上傳原始碼）
- 聯絡入口：信箱 support@arton.tw、客戶 LINE https://lin.ee/yEZxsB3、策展人 LINE https://lin.ee/7dr8uq4，如需更換請編輯 `client/src/lib/links.ts`
- 本次已修正的問題：原本部分圖片引用 Manus 雲端專屬路徑（/manus-storage/），在您自行部署的主機上無法存取；現已全部改為專案內本地路徑，任何主機皆可正常顯示
