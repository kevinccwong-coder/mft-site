import type { Metadata } from "next";
import { Heart, ArrowRight, CheckCircle, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "情緒焦點治療 (EFT) 對婚姻的幫助 | 香港婚姻輔導",
  description:
    "了解情緒焦點治療 (EFT) 如何幫助伴侶改善婚姻關係。EFT 是國際公認對伴侶關係輔導極具成效的治療方法，專注處理底層情緒與依附需求。",
  openGraph: {
    title: "情緒焦點治療 (EFT) 對婚姻的幫助 | 房角石家庭服務中心",
    description:
      "了解情緒焦點治療 (EFT) 如何幫助伴侶改善婚姻關係。EFT 是國際公認對伴侶關係輔導極具成效的治療方法。",
  },
};

const coreConcepts = [
  {
    title: "依附理論：關係安全的基礎",
    desc: "依附理論指出，人類天生需要與重要他人建立安全的情感連結。當伴侶感到連結安全時，他們能夠更好地應對壓力、表達需要，並在衝突中保持連結。E F T 以此為核心，協助伴侶重新建立這種安全感。",
  },
  {
    title: "情緒循環：解開負面的互動舞步",
    desc: "每段婚姻都有自己的「舞步」。當一方退縮，另一方可能追逐；當一方指責，另一方可能防衛。E F T 幫助伴侶看清這些循環，並學會跳出新的、更健康的互動模式。",
  },
  {
    title: "重塑關鍵時刻：創造新的情感經驗",
    desc: "治療中的關鍵不是理性分析，而是在安全的治療環境中，讓伴侶體驗到新的情感連結。當一方能夠向另一方表達深層的脆弱，而對方能夠以接納和關懷回應時，改變就真正發生了。",
  },
];

export default function EFTClusterPage() {
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
              情緒焦點治療 (EFT) 對婚姻的幫助
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary/70">
              情緒焦點治療（Emotionally Focused Therapy，簡稱 EFT）由 Dr. Sue Johnson 創立，
              是目前國際上極具實證支持的伴侶治療方法之一。不同於傳統著重行為改變或溝通的技巧訓練，
              EFT 從依附理論出發，專注於改變伴侶之間的「情緒經驗」與「互動模式」。
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

        {/* Core concepts */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              EFT 的三大核心概念
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              EFT 之所以有效，是因為它不單止「教方法」，而是從關係的根源——情感連結——入手。
            </p>

            <div className="mt-10 space-y-8">
              {coreConcepts.map((concept, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-secondary/5 bg-warm-bg p-6"
                >
                  <h3 className="flex items-center gap-2 text-base font-bold text-secondary">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {concept.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                    {concept.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EFT stages */}
        <section className="bg-warm-bg py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              EFT 的三階段歷程
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              EFT 治療一般分為三個階段，每個階段有其特定的治療目標：
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-secondary/5 bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  階段一
                </span>
                <h3 className="mt-2 text-base font-bold text-secondary">
                  去循環化
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/75">
                  協助伴侶識別並停止負面的互動循環——指責—防衛、追—退等模式。
                  幫助雙方看到問題是「循環」本身，而非對方的錯。
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/5 bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  階段二
                </span>
                <h3 className="mt-2 text-base font-bold text-secondary">
                  重塑依附連結
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/75">
                  在安全的治療環境中，協助伴侶探索並表達深層情緒——恐懼、悲傷、渴望被愛。
                  創造「重新投入」的關鍵時刻，讓雙方再次感受到情感連結。
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/5 bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  階段三
                </span>
                <h3 className="mt-2 text-base font-bold text-secondary">
                  鞏固與整合
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/75">
                  協助伴侶將新的互動模式內化為日常習慣，並裝備他們在未來面對挑戰時，
                  能夠自行識別情緒訊號並作出健康的回應。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why EFT works */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-l-4 border-primary bg-primary-light/30 p-6">
              <h3 className="text-base font-bold text-secondary">
                為什麼 EFT 對華人夫婦同樣有效？
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                有些夫婦擔心 EFT 源自西方，是否適合華人文化。研究與臨床經驗均顯示，
                EFT 的核心——依附需求——是跨文化的人類共通經驗。華人夫婦同樣需要安全感、
                被接納和情感連結。我們的治療師在應用 EFT 時，會充分考慮香港本地文化背景，
                包括家庭價值觀、溝通習慣及角色期望，讓治療更貼合你的處境。
              </p>
            </div>

            {/* Internal links */}
            <div className="mt-10 rounded-2xl border border-secondary/5 bg-warm-bg p-6">
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
                    專業婚姻輔導：陪伴您修復關係與重建信任
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
                <li>
                  <a
                    href="/marriage-counseling/communication-skills"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    <ArrowRight size={13} />
                    婚姻中的溝通技巧
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
              想了解更多 EFT 如何幫助你們的關係？
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              預約初步諮詢，讓我們為你詳細講解。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                <MessageCircle size={18} aria-hidden />
                WhatsApp 預約
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
