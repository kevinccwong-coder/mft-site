"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "婚姻輔導需要夫妻兩人都一同出席嗎？",
    a: "理想情況下雙方一同參與效果最佳，因為治療師可以直接觀察兩人之間的互動模式，並協助雙方建立更有效的溝通橋樑。但若配偶暫無意願，個人先前來諮商也能有效改變互動模式——當一方開始改變，整個家庭系統也會隨之轉動，逐步解開家庭枷鎖。",
  },
  {
    q: "輔導內容會被保密嗎？",
    a: "本中心嚴格遵守專業倫理，所有諮商內容及個人資料絕對保密，讓您在安全、安心的空間裡調適心靈。根據香港法律，只有在涉及對自己或他人構成嚴重傷害風險、兒童或長者虐待、或按法庭命令要求等極少數特殊情況下，治療師才負有法律責任打破保密。",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-warm-bg py-20 sm:py-24"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              常見問題
            </span>
            <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
              你對輔導的疑問
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary/75">
              第一次接受輔導總會有很多疑問，以下是我們最常被問到的問題。
            </p>
          </div>

          {/* FAQ accordion */}
          <div className="mt-12 divide-y divide-secondary/10 rounded-2xl border border-secondary/10 bg-white px-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
                >
                  <span
                    className="text-sm font-medium text-secondary sm:text-base"
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={
                      "mt-0.5 shrink-0 text-secondary/60 transition-transform duration-300 " +
                      (openIndex === i ? "rotate-180" : "")
                    }
                    aria-hidden
                  />
                </button>
                <div
                  className={
                    "overflow-hidden transition-all duration-300 " +
                    (openIndex === i ? "max-h-96 pb-5" : "max-h-0")
                  }
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="text-sm leading-relaxed text-secondary/75"
                    itemProp="text"
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
