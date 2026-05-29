import { BookOpen, ExternalLink } from "lucide-react";

export default function Resources() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="text-center">
            <span className="inline-block rounded-full bg-secondary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary">
              參考資源
            </span>
            <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
              推薦閱讀及專業參考
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary/65">
              我們深信知識就是力量。以下資源能幫助你更深入了解婚姻及家庭治療，
              <br className="hidden sm:inline" />
              也見證了我們所信賴的專業傳統。
            </p>
          </div>

          {/* Resource cards */}
          <div className="mt-12 space-y-5">
            <a
              href="https://www1.hkej.com/features/article?q=%23李維榕"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-secondary/5 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light/60 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <BookOpen size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-base font-semibold text-secondary transition-colors group-hover:text-primary">
                  李維榕博士 — 信報專欄
                  <ExternalLink size={13} className="shrink-0" />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary/65">
                  李維榕博士為亞洲家庭治療學院院士，多年於《信報》撰寫家庭治療專欄，
                  以深入淺出的筆觸剖析家庭關係的奧秘，是華人家庭治療領域的重要啟蒙讀物。
                </p>
                <span className="mt-2 inline-block text-xs font-medium text-primary">
                  閱讀專欄文章 →
                </span>
              </div>
            </a>

            <div className="rounded-2xl border border-secondary/5 bg-white p-6">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light/60 text-primary">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-secondary">
                    婚姻及家庭治療相關書籍
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-secondary/65">
                    我們出版及推薦多本關於婚姻及家庭治療的書籍，涵蓋家庭系統理論、
                    夫妻溝通技巧、家庭治療個案分析等範疇。歡迎向我們查詢書目推薦。
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "家庭系統與治療",
                      "情感的橋樑",
                      "家庭治療個案集",
                    ].map((book, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-secondary-light/30 px-3 py-1 text-xs text-secondary/60"
                      >
                        {book}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
