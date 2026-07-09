# Eric｜製造流程與資訊工具

這是一個純前端的個人技能與服務介紹網站，定位為「結合金屬加工、品質管理、製造現場與資訊系統經驗的流程改善服務」。網站用來介紹可協助的內部系統、自動化工具、製造品質資料管理、Python 工具與工作流程改善。

## 如何直接開啟網站

直接用瀏覽器開啟 `index.html` 即可，不需要安裝套件、資料庫或後台。

## 聯絡資訊設定區

聯絡資訊集中在 `script.js` 最上方：

```js
const CONTACT = {
  lineId: "scpxxx",
  lineUrl: "https://line.me/ti/p/~scpxxx",
  email: "scpxxx@gmail.com"
};
```

所有 LINE ID、LINE 連結、Email 顯示文字與複製功能都會從這個設定讀取。

## 如何修改姓名或品牌文字

品牌文字也在 `script.js` 最上方：

```js
const BRAND = {
  full: "Eric｜製造流程與資訊工具",
  short: "Eric｜資訊工具"
};
```

`full` 是電腦版導覽列名稱，`short` 是手機版較短的名稱。

## 如何修改 LINE ID

修改 `script.js` 的：

```js
lineId: "scpxxx"
```

## 如何修改 LINE 加好友連結

修改 `script.js` 的：

```js
lineUrl: "https://line.me/ti/p/~scpxxx"
```

若未來改用 LINE 官方帳號網址，也只要替換這個值。

## 如何修改 Email

修改 `script.js` 的：

```js
email: "scpxxx@gmail.com"
```

Email 按鈕會自動使用 `mailto:` 連結，複製 Email 功能也會同步更新。

## 如何修改文字內容

主要頁面內容都在 `index.html`：

- 首頁：搜尋 `hero-copy`
- 關於我：搜尋 `about`
- 服務項目：搜尋 `services`
- 作品經驗：搜尋 `works`
- 合作流程：搜尋 `process`
- 合作前說明：搜尋 `notes`
- 聯絡區塊：搜尋 `contact`

## 如何新增作品卡片

在 `index.html` 的 `work-grid` 裡複製一個：

```html
<article class="work-card reveal">
  ...
</article>
```

修改標題、說明與 `tag-list` 內的技術標籤即可。手機版會自動排列為單欄。

## 如何替換作品示意圖

目前作品卡片使用 CSS 示意圖，不使用假截圖。可在 `style.css` 搜尋：

```css
.visual-stock
.visual-drawing
.visual-sheet
.visual-batch
.visual-cad
.visual-quality
```

可調整漸層、線條或背景圖。若未來要放真實作品截圖，建議先遮蔽公司名稱、客戶資料、金額、料號與機密欄位。

## 如何替換網站配色

網站主要配色在 `style.css` 最上方的 `:root`：

```css
:root {
  --bg: #07111f;
  --bg-2: #0b1728;
  --text: #eef7ff;
  --muted: #b5c6d8;
  --primary: #2dd4bf;
  --blue: #38bdf8;
  --purple: #a78bfa;
}
```

建議一次只調整 1 到 2 個色票，確認對比與手機版閱讀性後再繼續修改。

## 如何部署至 GitHub Pages

1. 建立 GitHub repository。
2. 將 `index.html`、`style.css`、`script.js`、`README.md` 放在 repository 根目錄。
3. 進入 repository 的 `Settings`。
4. 點選 `Pages`。
5. `Source` 選擇 `Deploy from a branch`。
6. Branch 選擇 `main`，資料夾選擇 `/root`，按下 `Save`。
7. 等待 GitHub Pages 產生網址。

## 如何測試手機版

可用瀏覽器開發者工具測試：

1. 開啟 `index.html`。
2. 按 `F12` 開啟開發者工具。
3. 切換裝置工具列。
4. 選擇手機寬度，例如 390px。
5. 檢查漢堡選單、導覽捲動、作品卡片單欄排列、LINE 與 Email 按鈕、複製 Toast、返回頂端按鈕。

## 維護提醒

- 不要把公司或客戶的機密資料放進作品截圖。
- 若新增導覽項目，請確認 `href="#..."` 與對應 section 的 `id` 相同。
- 若新增互動按鈕，請補上 hover、focus 與鍵盤可操作狀態。
