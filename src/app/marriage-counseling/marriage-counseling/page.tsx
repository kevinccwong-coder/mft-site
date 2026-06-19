import type { Metadata } from "next";
import {
  Heart,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Phone,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "香港婚姻輔導 | 專業婚姻治療、婚外情修復與信任重建 | 房角石家庭服務中心",
  description:
    "面對婚姻危機？房角石家庭服務中心提供專業香港婚姻輔導。採用婚姻及家庭治療，協助伴侶修復婚外情創傷、重建溝通與信任。立即預約專業評估。",
  openGraph: {
    title: "香港婚姻輔導 | 專業婚姻治療、婚外情修復與信任重建 | 房角石家庭服務中心",
    description:
      "面對婚姻危機？房角石家庭服務中心提供專業香港婚姻輔導。採用婚姻及家庭治療，協助伴侶修復婚外情創傷、重建溝通與信任。立即預約專業評估。",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 香港婚姻輔導及婚姻治療",
      },
    ],
  },
};

const therapyApproaches = [
  {
    icon: Heart,
    title: "情緒聚焦治療 (EFT)",
    subtitle: "Emotionally Focused Therapy",
    desc: "EFT 是國際公認對伴侶關係輔導極具成效的實證為本療法。核心信念是：伴侶之間的衝突與疏離，往往源於深層的「依附需求」未被滿足。每個人在關係中都需要感到安全、被接納、被重視。",
    points: [
      "協助伴侶識別爭吵背後隱藏的真實情緒——例如憤怒之下可能是恐懼被拋棄，冷漠背後可能是受傷",
      "重塑互動模式：從「指責—防衛」的惡性循環，轉化為安全的情感連結",
      "修復依附創傷：讓雙方重新成為彼此的情感安全基地",
    ],
  },
  {
    icon: Brain,
    title: "系統式家庭治療",
    subtitle: "Systemic Family Therapy",
    desc: "我們不將問題視為「某個人的錯」，而是從「互動循環」與「系統動力」的角度去理解婚姻困境。家庭系統理論認為，伴侶的行為模式會在不知不覺中形成循環，並代代相傳。",
    points: [
      "拆解負面互動循環：看清「你追我躲」、「互相指責」等溝通模式是如何形成的",
      "探索原生家庭影響：了解各自成長背景如何影響今天的相處方式",
      "重建健康的界線與溝通規則：從系統層面打破僵化模式",
    ],
  },
  {
    icon: Shield,
    title: "創傷治療 (PTSD / C-PTSD)",
    subtitle: "Trauma-Informed Therapy",
    desc: "婚姻危機往往不僅是溝通問題，背後可能涉及未處理的創傷經歷——無論是童年創傷、過往關係創傷，還是婚姻中發生的創傷事件（如婚外情、家庭暴力）。",
    points: [
      "採用創傷知情照顧 (Trauma-Informed Care) 框架，確保輔導過程不會再次造成傷害",
      "引入 EMDR 及其他實證創傷療法，協助處理與創傷相關的情緒反應",
      "在安全穩固的治療關係中，逐步修復創傷對婚姻信任的侵蝕",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "初次評估與目標制定",
    desc: "在首次會談中，我們會詳細了解你們的故事、目前的困擾以及期望達成的改變。這是一個雙向了解的過程——你也可藉此感受我們的輔導風格是否適合你們。我們會共同制定清晰的輔導目標與計劃。",
  },
  {
    number: "02",
    title: "定期會談與深入介入",
    desc: "按你們的需要，一般每週或每兩週進行一次會談。我們會運用 EFT、系統式治療等專業介入方法，協助你們逐步拆解問題核心，在安全的環境中重新對話。",
  },
  {
    number: "03",
    title: "技能學習與實踐",
    desc: "輔導不僅在會談室內發生。我們會引導你們學習具體的溝通技巧與情緒調節方法，並在生活中實踐。你將學會如何辨識自己的情緒觸發點、如何有效地表達需要，以及如何回應伴侶的情感呼喚。",
  },
  {
    number: "04",
    title: "鞏固與結束",
    desc: "當你們感覺到關係已顯著改善，並掌握了自行解決矛盾的能力，我們會逐步減少會談頻率，進入鞏固階段。最終，你們將帶著更健康的關係模式畢業，並知道將來如有需要，隨時可以回來。",
  },
];

const eeatPoints = [
  {
    title: "專業資格與臨床經驗",
    desc: "我們的治療團隊由美國婚姻及家庭治療協會（AAMFT）臨床院士、香港大學碩士級心理輔導專業人員組成，多年來專注處理婚姻危機、婚外情創傷及各類家庭關係問題。",
  },
  {
    title: "實證為本，持續進修",
    desc: "我們堅持採用國際認可的實證治療方法（如 EFT、EMDR、系統式治療），並定期參與專業培訓與臨床督導，確保服務質素緊貼最新研究發展。",
  },
  {
    title: "嚴格保密，安全環境",
    desc: "所有輔導內容均受專業保密原則保障。我們提供私密、安全、不帶批判的輔導空間——無論是你的個人故事還是伴侶間的私密對話，都會得到最大程度的尊重。",
  },
  {
    title: "度身訂造，非教科書式",
    desc: "每段婚姻都是獨特的。我們不會使用千篇一律的輔導方案，而是按你們的關係歷史、文化背景、價值觀及具體處境，設計最合適的介入策略。",
  },
];

export default function MarriageCounselingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ===== Banner ===== */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              婚姻輔導
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-[1.3] text-secondary sm:text-4xl">
              專業婚姻輔導：陪伴您修復關係與重建信任
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary/70">
              婚姻是一段需要用心經營的旅程。當風浪來襲，專業的同行者可以為你們
              點亮前路。我們以實證為本的治療方法，陪伴你與伴侶重新連結。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                <MessageCircle size={18} aria-hidden />
                WhatsApp 預約評估
              </a>
              <a
                href="tel:+85292679822"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                <Phone size={18} aria-hidden />
                致電查詢
              </a>
            </div>
            <p className="mt-4 text-xs text-secondary/60">
              即日預約・嚴格保密・提供上環及灣仔輔導室
            </p>
          </div>
        </section>

        {/* ===== 痛點共鳴 ===== */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
                你並不孤單
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
                當婚姻走到十字路口
              </h2>
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-[2] text-secondary/75">
              <p>
                不知道從什麼時候開始，你們之間的話題只剩下孩子和家庭開支。同一張飯桌上，你們各自低頭看著手機，空氣中瀰漫著沉默。躺在床上，背對著背，中間隔著的不是半張床的距離，而是說不清的疏離與無力感。
              </p>
              <p>
                或者，你們的情況更激烈一些——爭吵成了唯一的溝通方式。翻舊帳、互相指責、冷戰、摔門而出⋯⋯每一次衝突都在消耗曾經的愛意。你問自己：「這段婚姻還有救嗎？」甚至，你已經在某個深夜動過離婚的念頭。
              </p>
              <p>
                更痛苦的是婚外情的衝擊。當信任在一瞬間崩塌，被背叛的憤怒、恥辱、悲傷排山倒海而來；而出軌的一方同樣可能充滿自責、混亂與迷茫。兩個人都傷痕累累，卻不知道如何修復。
              </p>
              <div className="rounded-2xl border-l-4 border-primary bg-primary-light/30 p-5">
                <p className="text-base leading-[1.9] text-secondary/80">
                  <strong className="text-secondary">面對婚姻危機並不容易，但你不需要獨自承受。</strong>
                  尋求專業輔導不是軟弱的表現，而是對關係負責任的勇敢選擇。我們的治療師會以溫暖、不帶批判的態度，陪伴你們走過這段最艱難的路。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 介入方法 ===== */}
        <section className="bg-warm-bg py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-secondary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary">
                實證為本治療
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
                我們的專業介入方法
              </h2>
              <p className="mt-3 text-sm text-secondary/75">
                我們採用國際認可的治療取向，按你們的獨特需要度身訂造輔導方案。
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {therapyApproaches.map((approach, i) => (
                <div key={i} className="grid items-start gap-8 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light/60 text-primary"
                      aria-hidden
                    >
                      <approach.icon size={28} />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-secondary">
                      {approach.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-secondary/70">
                      {approach.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-secondary/70">
                      {approach.desc}
                    </p>
                    {i === 0 && (
                      <a
                        href="/marriage-counseling/emotional-focus-therapy"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                      >
                        了解更多 EFT 如何運作
                        <ArrowRight size={13} />
                      </a>
                    )}
                    {i === 1 && (
                      <a
                        href="/marriage-counseling/communication-skills"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                      >
                        改善溝通的具體方法
                        <ArrowRight size={13} />
                      </a>
                    )}
                    {i === 2 && (
                      <a
                        href="/marriage-counseling/infidelity-recovery"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                      >
                        婚外情修復與重建信任
                        <ArrowRight size={13} />
                      </a>
                    )}
                  </div>

                  <div className="rounded-2xl border border-secondary/5 bg-white p-6 md:col-span-3">
                    <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-secondary/70">
                      治療重點
                    </span>
                    <ul className="space-y-4">
                      {approach.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-secondary/75"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 輔導流程 ===== */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
                輔導流程
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
                一步一步，我們陪你走過
              </h2>
              <p className="mt-3 text-sm text-secondary/75">
                首次輔導或會感到緊張——以下流程可以幫助你了解將會發生什麼，減少未知的焦慮。
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {processSteps.map((step, i) => (
                <div key={i} className="group relative">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-primary-light/40 hidden sm:block" />
                  )}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {/* Number */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary text-sm font-bold sm:h-12 sm:w-12">
                      {step.number}
                    </div>
                    {/* Content */}
                    <div className="min-w-0 flex-1 rounded-2xl border border-secondary/5 bg-warm-bg p-5 transition-shadow hover:shadow-sm sm:p-6">
                      <h3 className="text-base font-bold text-secondary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary/75">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 為什麼選擇房角石 ===== */}
        <section className="bg-gradient-to-b from-white to-warm-bg py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-secondary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary">
                專業資格
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
                為什麼選擇房角石？
              </h2>
              <p className="mt-3 text-sm text-secondary/75">
                選擇合資格的輔導服務至關重要。
                我們以最高的專業標準、倫理操守及臨床經驗要求自己。
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {eeatPoints.map((point, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-secondary/5 bg-white p-6 transition-shadow hover:shadow-sm"
                >
                  <h3 className="text-base font-bold text-secondary">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Related resources */}
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="rounded-2xl border border-secondary/5 bg-white p-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" aria-hidden />
                  <span className="text-sm font-bold text-secondary">
                    相關文章
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/blog/why-affairs-common"
                      className="group inline-flex items-center gap-1.5 text-sm text-secondary/75 transition-colors hover:text-primary"
                    >
                      <ChevronRight size={13} className="shrink-0 text-primary/60" aria-hidden />
                      <span className="group-hover:underline">
                        為什麼婚外情如此普遍？
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/marriage-relationship-reconstruction"
                      className="group inline-flex items-center gap-1.5 text-sm text-secondary/75 transition-colors hover:text-primary"
                    >
                      <ChevronRight size={13} className="shrink-0 text-primary/60" aria-hidden />
                      <span className="group-hover:underline">
                        婚姻關係的系統性重構：從互動循環到深層連結
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/family-counseling-benefits"
                      className="group inline-flex items-center gap-1.5 text-sm text-secondary/75 transition-colors hover:text-primary"
                    >
                      <ChevronRight size={13} className="shrink-0 text-primary/60" aria-hidden />
                      <span className="group-hover:underline">
                        為何家庭輔導對心理健康很有用？
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 深入閱讀 (Cluster Pages) ===== */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
                深入閱讀
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
                了解更多婚姻輔導專題
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {/* Cluster card 1 */}
              <a
                href="/marriage-counseling/emotional-focus-therapy"
                className="group rounded-2xl border border-secondary/5 bg-warm-bg p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light/60 text-primary">
                  <Heart size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-secondary group-hover:text-primary transition-colors">
                  情緒焦點治療 (EFT) 對婚姻的幫助
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                  深入了解 EFT 如何協助伴侶解開情緒糾結，重建安全的依附連結。
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  閱讀更多 <ArrowRight size={13} />
                </span>
              </a>

              {/* Cluster card 2 */}
              <a
                href="/marriage-counseling/infidelity-recovery"
                className="group rounded-2xl border border-secondary/5 bg-warm-bg p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light/60 text-primary">
                  <Shield size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-secondary group-hover:text-primary transition-colors">
                  婚外情修復與信任重建
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                  探討婚外事後如何修復關係創傷，一步步重建信任。
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  閱讀更多 <ArrowRight size={13} />
                </span>
              </a>

              {/* Cluster card 3 */}
              <a
                href="/marriage-counseling/communication-skills"
                className="group rounded-2xl border border-secondary/5 bg-warm-bg p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light/60 text-primary">
                  <Brain size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-secondary group-hover:text-primary transition-colors">
                  婚姻中的溝通技巧
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                  學習如何打破負面溝通循環，建立真正有效的對話模式。
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  閱讀更多 <ArrowRight size={13} />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-gradient-to-b from-white to-primary-light/20 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              踏出第一步
            </span>
            <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
              準備好為你們的關係努力嗎？
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-secondary/75">
              改變需要勇氣，而勇氣的第一步就是行動。讓我們在這個關鍵時刻與你同行。
              你的查詢將被嚴格保密，首次電話諮詢完全免費。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                <MessageCircle size={18} aria-hidden />
                透過 WhatsApp 預約
              </a>
              <a
                href="tel:+85292679822"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                <Phone size={18} aria-hidden />
                致電 9267 9822
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-secondary/60">
              🔒 所有查詢及輔導內容均受專業保密原則保障，未經你的同意絕不對外披露。
              <br />
              我們遵守香港個人資料（私隱）條例及心理輔導專業操守指引。
            </p>
          </div>
        </section>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "房角石家庭服務中心 — 婚姻輔導",
              description:
                "提供專業香港婚姻輔導服務，包括情緒聚焦治療（EFT）、系統式家庭治療及創傷治療（EMDR）。由AAMFT臨床院士主理。",
              url: "https://www.familycornerstone.com/marriage-counseling",
              telephone: "+85292679822",
              areaServed: "香港",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "婚姻輔導服務",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "婚姻輔導及伴侶治療",
                      description:
                        "採用EFT情緒聚焦治療及系統式家庭治療，協助伴侶修復關係、改善溝通。",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "婚外情修復輔導",
                      description:
                        "專為經歷婚外情創傷的伴侶提供專業輔導，重建信任。",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "婚前及婚姻關係評估",
                      description: "協助伴侶了解關係狀況，制定改善目標。",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
