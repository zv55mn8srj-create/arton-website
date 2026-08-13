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
