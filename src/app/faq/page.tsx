import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "常見問題 | 房角石家庭服務中心",
  description:
    "關於心理輔導、婚姻治療及家庭治療的常見問題：治療流程、收費、保密原則、伴侶不願出席怎麼辦等。首次接受輔導的疑問一一解答。",
  openGraph: {
    title: "常見問題 | 房角石家庭服務中心",
    description: "關於心理輔導、婚姻治療及家庭治療的常見問題。",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 常見問題",
      },
    ],
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "什麼是婚姻及家庭治療？與一般心理輔導有什麼分別？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "婚姻及家庭治療（Marriage and Family Therapy, MFT）是一種系統性的心理治療方法，著重於人際關係中的互動模式。與傳統個人心理輔導不同，MFT 認為問題不僅存在於個人內部，更存在於人與人之間的關係網絡中。美國研究證明，婚姻及家庭治療是有效的，且可能比一般個人心理治療更加有效。",
        },
      },
      {
        "@type": "Question",
        name: "我第一次接受輔導，會有什麼流程？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "首次面談主要分為三個部分：首先，治療師會了解你目前面對的困難和尋求協助的原因；其次，治療師會與你探討相關的背景資料；最後，治療師會與你共同制定治療目標和初步計劃。首次面談也是一個讓你認識治療師的機會。",
        },
      },
      {
        "@type": "Question",
        name: "婚姻輔導需要夫妻兩人都一同出席嗎？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "理想情況下雙方一同參與效果最佳。但若配偶暫無意願，個人先前來諮商也能有效改變互動模式——當一方開始改變，整個家庭系統也會隨之轉動。",
        },
      },
      {
        "@type": "Question",
        name: "輔導內容會被保密嗎？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "本中心嚴格遵守專業倫理，所有諮商內容及個人資料絕對保密。根據香港法律，只有在涉及對自己或他人構成嚴重傷害風險、兒童或長者虐待、或按法庭命令要求等極少數情況下，治療師才負有法律責任打破保密。",
        },
      },
      {
        "@type": "Question",
        name: "收費是多少？有沒有資助或減免？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "標準收費為個人輔導每節 $1,200（50分鐘）、伴侶輔導每節 $1,500（80分鐘）、家庭治療每節 $1,800（90分鐘）。本中心提供有限度的減免收費服務，經濟困難者請與我們聯絡商議。",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Banner */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              常見問題
            </span>
            <h1 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
              你對輔導的疑問，我們一一解答
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary/70">
              第一次接受輔導總會有很多疑問。以下是我們最常被問到的問題，
              <br className="hidden sm:inline" />
              如果你有其他問題，歡迎直接聯絡我們。
            </p>
          </div>
        </section>

        {/* FAQ accordion — client component */}
        <FAQContent />

        {/* Still have questions */}
        <section className="bg-warm-bg py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary">
              還有其他問題？
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              我們很樂意與你直接對話，解答你的疑問。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+85292679822"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                <Phone size={16} aria-hidden />
                (852) 9267 9822
              </a>
              <a
                href="https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                <MessageCircle size={16} aria-hidden />
                WhatsApp 查詢
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
