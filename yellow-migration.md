# 品牌黃升級色替換策略（2026-08-18）

全站由 Gallery Quietism 金（#C4A265 系）升級為明快品牌黃（#F5B300 系）。

| 用途 | 舊值 | 新值 |
|---|---|---|
| 主 CTA 填色 | #C4A265 | #F5B300 |
| CTA hover | #b8954f | #e5a800 |
| 深金黃文字/label | #D6B876 / #E2C88E / #B8954F | #C98F0E |
| 淡金底 | #C4A265/18 | #F5B300/15 |
| 淡金線 | #C4A265/42 | #F5B300/40 |

執行方式：使用 sed 批次替換 client/src 全域（.tsx / .ts / .css），再檢查 ArtONLogo.tsx 與 index.css 是否需保留原 Logo 用色（Logo 有官方黃，不動）。

保留不動：
- ArtONLogo.tsx（官方 logo 用色）
- index.css 中的 #C4A265 若為通用 token，一併改為 #F5B300 以維持一致
