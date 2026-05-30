# SEO 部署指南 — 房角石家庭服務中心

> 本文檔涵蓋 Google Search Console 驗證、DNS 設定、Sitemap 提交及部署檢查。

---

## 一、Google Search Console 驗證（DNS TXT 記錄）

由於網域 `familycornerstone.com` 的 DNS 仍在 Wix 管理，無法使用 HTML 檔案驗證，請使用 **TXT 記錄驗證**。

### 步驟

1. 前往 [Google Search Console](https://search.google.com/search-console)
2. 按 **「開始使用」**，輸入網域：`familycornerstone.com`
   - ⚠️ 選「**網域**」而非「網址前置字元」
3. GSC 會產生一組 TXT 驗證碼，格式如：
   ```
   google-site-verification=xxxxxxxxxxxxxxxxxxxx
   ```
4. **複製整段驗證碼**
5. 登入 **Wix 後台** → **設定（Settings）** → **網域（Domains）**
   - 或直接前往：https://www.wix.com/account/domains
6. 點選 `familycornerstone.com` → **DNS 設定（DNS Records）**
7. 新增一筆 **TXT 記錄**：
   | 欄位 | 值 |
   |------|-----|
   | 主機名稱 / Name | `@` 或留空 |
   | 記錄值 / Value | `google-site-verification=xxxxxxxxxxxxxxxxxxxx` |
   | TTL | 3600（或自動） |
8. 按 **儲存**
9. DNS 生效需 **數分鐘至 48 小時**，平均約 30 分鐘
10. 回到 GSC，按 **「驗證」**

### 完成後

- 在 GSC 新增 **「網址前置字元」** 兩筆：
  - `https://familycornerstone.com`
  - `https://www.familycornerstone.com`

---

## 二、提交 Sitemap

1. 在 GSC 左側選單點 **「Sitemap」**
2. 在「輸入網站地圖網址」欄位填寫：
   ```
   sitemap.xml
   ```
3. 按 **提交**
4. 確認狀態顯示 **「成功」**

預期看到已提交的 URL 數量：**26 個**（含 16 篇部落格文章）

---

## 三、Vercel 部署設定（301 轉址檢查）

### 確認已上線

1. 登入 [Vercel Dashboard](https://vercel.com)
2. 確認最新的 commit 已成功部署
3. 開啟 Production 網址，測試以下轉址是否返回 **301**：

| 測試路徑 | 預期導向 | 工具 |
|----------|----------|------|
| `/blog.html` | `/blog` | curl -I 或瀏覽器 |
| `/single-post/test` | `/blog/test` | curl -I |
| `/about-us` | `/#about` | curl -I |
| `/contact` | `/` | curl -I |
| `/services.html` | `/services` | curl -I |
| `/faq.html` | `/faq` | curl -I |

測試指令範例：
```bash
curl -I https://familycornerstone.com/blog.html 2>&1 | grep -i location
# 預期回應：location: /blog
```

---

## 四、部署檢查清單

| # | 任務 | 執行位置 | 預期結果 | 完成 |
|---|------|----------|----------|------|
| 1 | 301 轉址程式碼已部署 | Vercel | `/blog.html` → `/blog` 等返回 301 | ☐ |
| 2 | Google Search Console 驗證 | Wix DNS → GSC | TXT 記錄驗證通過 | ☐ |
| 3 | 提交 Sitemap | GSC → Sitemap | 26 個網址成功提交 | ☐ |
| 4 | 提交網域前置字元 | GSC → 新增資源 | `https://familycornerstone.com` + `https://www.familycornerstone.com` | ☐ |
| 5 | 設定 preferred domain | GSC → 設定 | 選擇 `www.familycornerstone.com` | ☐ |
| 6 | 檢查 robots.txt 線上可存取 | 瀏覽器 | `/robots.txt` 顯示 allow: / | ☐ |
| 7 | 檢查 sitemap.xml 線上可存取 | 瀏覽器 | `/sitemap.xml` 顯示 26 條 URL | ☐ |
| 8 | 檢查 Open Graph / 社群分享預覽 | 瀏覽器 DevTools | 每個頁面有 og:title, og:description, og:image | ☐ |
| 9 | 檢查結構化資料 (JSON-LD) | [Rich Results Test](https://search.google.com/test/rich-results) | LocalBusiness Schema 有效 | ☐ |
| 10 | 檢查行動裝置相容性 | [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) | 頁面通過行動裝置測試 | ☐ |
| 11 | 檢查 Core Web Vitals | GSC → Core Web Vitals | 狀態為「良好」 | ☐ |
| 12 | 提交請求建立索引（網址審查） | GSC → 網址審查 | 提交首頁 `/` 手動建立索引 | ☐ |
| 13 | 外部連結普查 | 手動掃描 | 確認無壞連結（404） | ☐ |

---

## 五、舊網站權重移轉注意事項

### DNS 指向

當 Wix → Vercel 的 DNS 切換完成後：

| 記錄類型 | 名稱 | 值 |
|----------|------|-----|
| CNAME | `www` | `cname.vercel-dns.com` |
| A (root) | `@` | `76.76.21.21`（Vercel IP）|

### 301 轉址對 SEO 的影響

- **301 = 永久轉址**，Google 會將舊 URL 的 PageRank 權重傳遞到新 URL
- 請保留 Wix 舊站至少 **30 天** 再關閉，讓 Googlebot 有時間爬取轉址
- 轉址生效後，在 GSC 觀察 **「涵蓋範圍」** 報表，確認舊路徑逐漸消失、新路徑被收錄

### 預定時間線

```
第 1 天   部署 Vercel + 設定 301 轉址
第 1-2 天  GSC 驗證 + Sitemap 提交
第 3-7 天  Googlebot 爬取轉址，舊權重開始移轉
第 30 天   確認 GSC 收錄正常，關閉 Wix 站
第 60 天   觀察搜尋排名恢復/提升
```
