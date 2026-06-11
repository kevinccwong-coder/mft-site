import type { Metadata } from "next";
import { Brain, ArrowRight, MessageCircle, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "婚姻中的溝通技巧 | 改善夫妻關係 | 香港婚姻輔導",
  description:
    "學習婚姻中的有效溝通技巧。房角石家庭服務中心教你如何打破負面溝通循環，建立真正的對話與情感連結。專業婚姻輔導陪你改善夫妻關係。",
  openGraph: {
    title: "婚姻中的溝通技巧 | 改善夫妻關係 | 房角石家庭服務中心",
    description:
      "學習婚姻中的有效溝通技巧，打破負面溝通循環，建立真正的對話與情感連結。",
  },
};

const communicationPatterns = [
  {
    pattern: "批評 vs 指責 (Criticism)",
    problem: "以「你總是⋯⋯」、「你從不⋯⋯」開頭，帶著指責和人身攻擊的語氣。這樣的話語只會引發對方的防衛反應。",
    shift: "學習使用「我訊息」：表達自己的感受和需要，而不是攻擊對方。例如：「我感到很難過，當我聽到⋯⋯」",
  },
  {
    pattern: "鄙視 (Contempt)",
    problem: "以嘲諷、冷笑、翻白眼、挖苦的方式回應對方。這是婚姻輔導研究中預測離婚率最高的溝通模式。",
    shift: "培養欣賞與尊重的習慣，刻意留意對方的優點並表達感激，建立正向的情感存款。",
  },
  {
    pattern: "防衛 (Defensiveness)",
    problem: "立刻為自己辯解：「不關我事」、「是你先⋯⋯」。防衛表面上保護了自己，實際上關閉了溝通的通道。",
    shift: "即使不完全同意對方的觀點，也可以先承認對方的感受：「我聽到你這樣說，我明白你感到難過。」",
  },
  {
    pattern: "築牆 (Stonewalling)",
    problem: "沉默、迴避、轉身離開。當情緒 overwhelm 時，有些人會選擇關閉所有溝通渠道。這通常發生在長期累積的負面互動之後。",
    shift: "學會覺察自己的情緒閾值，在需要暫停時好好表達：「我現在需要一些時間冷靜，我們半小時後再談好嗎？」",
  },
];

export default function CommunicationSkillsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              婚姻輔導
            </span>
            <h1 className="mt-4 text-2xl font-bold leading-[1.3] text-secondary sm:text-3xl">
              婚姻中的溝通技巧
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary/70">
              婚姻中的衝突無可避免，但衝突本身並不可怕——真正傷害關係的，往往是我們
              在衝突時不自覺陷入的負面溝通模式。好消息是：溝通是可以學習的。
              只要願意改變對話的方式，關係就能開始好轉。
            </p>
            <div className="mt-2">
              <a
                href="/marriage-counseling"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                ← 返回婚姻輔導主頁
              </a>
            </div>
          </div>
        </section>

        {/* Four horsemen */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              識別溝通的「四大殺手」
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              婚姻研究權威 Dr. John Gottman 經過數十年的研究，歸納出四種最具破壞性的溝通模式，
              它們是預測離婚率的關鍵指標。好消息是，只要能夠識別它們，就有機會扭轉：
            </p>

            <div className="mt-10 space-y-6">
              {communicationPatterns.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-secondary/5 bg-warm-bg p-6"
                >
                  <h3 className="text-base font-bold text-secondary">
                    {item.pattern}
                  </h3>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-red-200/60 bg-red-50/50 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                        常見問題
                      </span>
                      <p className="mt-1.5 text-sm leading-relaxed text-secondary/75">
                        {item.problem}
                      </p>
                    </div>
                    <div className="rounded-xl border border-green-200/60 bg-green-50/50 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-green-600">
                        改善方向
                      </span>
                      <p className="mt-1.5 text-sm leading-relaxed text-secondary/75">
                        {item.shift}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical tips */}
        <section className="bg-warm-bg py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              日常關係維護練習
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              除了避免破壞性的溝通模式，主動建立健康的溝通習慣同樣重要：
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-secondary/5 bg-white p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light/60 text-primary text-sm font-bold">
                  1
                </div>
                <h3 className="mt-3 text-sm font-bold text-secondary">每日情感連結</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                  每天花五分鐘，真誠地問對方「你今天怎麼樣？」，並專心聆聽，不批判、不打斷、不給建議。
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/5 bg-white p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light/60 text-primary text-sm font-bold">
                  2
                </div>
                <h3 className="mt-3 text-sm font-bold text-secondary">定期關係回顧</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                  每週找一個安靜的時段，一起回顧這週的相處——有什麼做得好，有什麼可以改善。
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/5 bg-white p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light/60 text-primary text-sm font-bold">
                  3
                </div>
                <h3 className="mt-3 text-sm font-bold text-secondary">表達欣賞與感謝</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                  不要等到出事才表達感受。刻意練習每天向伴侶表達一個具體的欣賞或感謝。
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/5 bg-white p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light/60 text-primary text-sm font-bold">
                  4
                </div>
                <h3 className="mt-3 text-sm font-bold text-secondary">學習「軟化」衝突</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                  當衝突升溫時，嘗試用「軟化的話語」——幽默、道歉、或者直接說「我不想吵架，我愛你」。
                </p>
              </div>
            </div>

            {/* Internal links */}
            <div className="mt-10 rounded-2xl border border-secondary/5 bg-white p-6">
              <span className="text-sm font-bold text-secondary">
                相關頁面
              </span>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="/marriage-counseling"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    <ArrowRight size={13} />
                    專業婚姻輔導主頁
                  </a>
                </li>
                <li>
                  <a
                    href="/marriage-counseling/emotional-focus-therapy"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    <ArrowRight size={13} />
                    情緒焦點治療 (EFT) 對婚姻的幫助
                  </a>
                </li>
                <li>
                  <a
                    href="/marriage-counseling/infidelity-recovery"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    <ArrowRight size={13} />
                    婚外情修復與信任重建
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-white to-primary-light/20 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary">
              想改善你們的溝通方式？
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              我們可以幫助你與伴侶打破溝通僵局，建立真正的對話。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                <MessageCircle size={18} aria-hidden />
                WhatsApp 諮詢
              </a>
              <a
                href="tel:+85292679822"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                <Phone size={18} aria-hidden />
                致電 9267 9822
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
