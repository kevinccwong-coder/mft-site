import type { Metadata } from "next";
import { Shield, ArrowRight, MessageCircle, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "婚外情修復與信任重建 | 香港婚姻輔導 | 房角石家庭服務中心",
  description:
    "經歷婚外情創傷？房角石提供專業婚外情修復輔導，協助伴侶走過外遇後的傷痛，重建信任與連結。立即預約保密諮詢。",
  openGraph: {
    title: "婚外情修復與信任重建 | 房角石家庭服務中心",
    description:
      "經歷婚外情創傷？房角石提供專業婚外情修復輔導，協助伴侶走過外遇後的傷痛，重建信任與連結。",
  },
};

const healingPhases = [
  {
    phase: "危機處理與穩定",
    desc: "當婚外情剛被發現時，雙方通常處於極度情緒化的狀態——震驚、憤怒、悲傷、自責紛至沓來。這個階段的首要任務是穩定局勢，提供安全空間讓雙方表達感受，並防止衝動決定造成進一步傷害。我們也會協助雙方設定基本界線，避免二次傷害。",
  },
  {
    phase: "探索與理解",
    desc: "在情緒稍為平復後，我們會協助伴侶深入探索婚外情發生的脈絡——不是為了合理化傷害，而是理解關係中哪些需求未被滿足，哪些互動模式出現了缺口。這個階段的目標是從「誰對誰錯」的對立，轉向「我們的關係發生了什麼」的共同理解。",
  },
  {
    phase: "修復與重建信任",
    desc: "重建信任是整個修復過程中最艱難也最關鍵的一環。我們會協助被背叛的一方表達創傷，同時引導出軌的一方以真誠、一致的行動來重建可信度。這個過程需要時間、耐心與持續的努力。",
  },
  {
    phase: "重新定義關係",
    desc: "經歷婚外情後的婚姻，不可能也不應該回到原點。這個階段的目標是協助伴侶在創傷的基礎上，建立一個比以前更真實、更健康的關係——一個雙方都更懂得珍惜與經營的關係。",
  },
];

export default function InfidelityRecoveryPage() {
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
              婚外情修復與信任重建
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary/70">
              婚外情的發生對任何一段婚姻都是沉重的打擊。無論你是發現伴侶出軌的一方，
              還是出軌後深感自責的一方，此刻的你很可能正經歷著巨大的情緒風暴——
              混亂、憤怒、罪疚、悲傷、羞恥，種種感受交織在一起，讓人喘不過氣。
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

        {/* Understanding infidelity */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              理解婚外情：從譴責到理解
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary/75">
              社會普遍將婚外情簡單歸咎於道德問題或個人意志薄弱，但在專業輔導的視角下，
              婚外情的成因往往遠比想像中複雜。它可能與婚姻中長期積累的 unmet needs、
              溝通系統的癱瘓、個人成長經歷帶來的依附創傷，甚至人生階段的重大轉變有關。
            </p>
            <p className="mt-4 text-sm leading-relaxed text-secondary/75">
              這並不是說出軌行為不需要承擔責任。而是當我們能夠理解婚外情發生的整體脈絡，
              而非停留在指責與懲罰的層面時，修復才有可能真正開始。
            </p>
          </div>
        </section>

        {/* Healing phases */}
        <section className="bg-warm-bg py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              修復歷程：從創傷到重建
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              修復一段被婚外情衝擊的婚姻沒有捷徑，但我們可以陪你一步一步走過。
              以下是一個概括的修復框架，實際進度會因每對伴侶的狀況而異：
            </p>

            <div className="mt-10 space-y-6">
              {healingPhases.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-secondary/5 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <h3 className="text-base font-bold text-secondary">
                      {item.phase}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-secondary/75">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key principles */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              修復過程中的幾個重要原則
            </h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary/75">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                <span><strong className="text-secondary">誠實是重建的起點：</strong>被背叛的一方需要真相來理解發生了什麼，而出軌的一方需要以一致的誠實態度來開啟修復。</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary/75">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                <span><strong className="text-secondary">創傷需要被承認：</strong>被背叛所帶來的創傷是真實的，不應該被輕視或迴避。我們需要給創傷足夠的空間被看見、被承認。</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary/75">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                <span><strong className="text-secondary">修復沒有時間表：</strong>信任重建無法速成。每對伴侶的節奏不同，重要的是保持耐心，尊重彼此的步伐。</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary/75">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                <span><strong className="text-secondary">專業同行至關重要：</strong>婚外情修補是婚姻輔導中最複雜的範疇之一，專業治療師的介入能大大提升成功修復的機會。</span>
              </li>
            </ul>

            {/* Internal links */}
            <div className="mt-10 rounded-2xl border border-secondary/5 bg-warm-bg p-6">
              <span className="text-sm font-bold text-secondary">
                相關頁面與文章
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
                    href="/blog/why-affairs-common"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    <ArrowRight size={13} />
                    為什麼婚外情如此普遍？
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
              準備好踏上修復之路？
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              我們明白踏出第一步並不容易。所有的查詢內容均受嚴格保密。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                <MessageCircle size={18} aria-hidden />
                保密 WhatsApp 查詢
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
