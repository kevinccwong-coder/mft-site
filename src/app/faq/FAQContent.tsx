"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "什麼是婚姻及家庭治療？與一般心理輔導有什麼分別？",
    a: "婚姻及家庭治療（Marriage and Family Therapy, MFT）是一種系統性的心理治療方法，著重於人際關係中的互動模式。與傳統個人心理輔導不同，MFT 認為問題不僅存在於個人內部，更存在於人與人之間的關係網絡中。因此，治療過程中可能會邀請伴侶或家庭成員一同參與，從關係層面入手，促進系統性的改變。美國研究證明，婚姻及家庭治療是有效的，且可能比一般個人心理治療更加有效。",
  },
  {
    q: "我第一次接受輔導，會有什麼流程？",
    a: "首次面談主要分為三個部分：首先，治療師會了解你目前面對的困難和尋求協助的原因；其次，治療師會與你探討相關的背景資料，包括家庭歷史、關係模式等；最後，治療師會與你共同制定治療目標和初步計劃。首次面談也是一個讓你認識治療師的機會，你可以感受這位治療師是否適合你。治療關係是輔導成效的關鍵，所以找到讓你感到安全和信任的治療師非常重要。",
  },
  {
    q: "我需要治療多久才能見效？",
    a: "治療的長度因人而異，取決於你所面對的問題性質、嚴重程度以及你的個人目標。有些人可能在 6-8 節短期治療後已有明顯改善（如特定壓力事件）；而對於較複雜的創傷或長期的關係問題，可能需要中長期（20 節以上）的治療。治療師會在過程中定期與你檢討進度，確保治療方向符合你的需要。",
  },
  {
    q: "治療過程保密嗎？",
    a: "保密是心理輔導的核心原則。你在治療中所分享的所有內容均會嚴格保密，未經你的書面同意，不會向任何第三方披露。然而，根據香港法律，在某些特殊情況下治療師有責任打破保密（例如：涉及對自己或他人構成嚴重傷害的風險、涉及兒童或長者虐待、按法庭命令要求披露）。治療師會在首次面談時與你清晰說明保密原則。",
  },
  {
    q: "我的伴侶不願意一起來，還可以進行婚姻輔導嗎？",
    a: "可以的。即使伴侶不願出席，個人婚姻輔導仍然有幫助。治療師可以協助你理解關係中的互動模式，並探討你個人可以如何改變以促進關係的改善。很多時候，當一方開始改變，整個關係系統也會隨之轉變。當伴侶看到正面的變化，可能會更願意後來加入治療。",
  },
  {
    q: "收費是多少？有沒有資助或減免？",
    a: "我們的標準收費為個人輔導每節 $1,200（50分鐘）、伴侶輔導每節 $1,500（80分鐘）、家庭治療每節 $1,800（90分鐘）。本中心提供有限度的減免收費服務，經濟困難者請與我們聯絡商議。我們相信經濟狀況不應成為尋求專業協助的障礙。",
  },
  {
    q: "你們接受甚麼付款方式？",
    a: "我們接受現金、轉數快（FPS）及銀行轉帳。每節治療完成後付款。",
  },
  {
    q: "應急情況怎麼辦？我可以在非辦公時間聯絡你們嗎？",
    a: "我們會在辦公時間內盡快回覆來電和訊息。如果你正面對緊急情況，或出現傷害自己或他人的念頭，請立即致電香港緊急服務熱線 999，或致電香港撒瑪利亞防止自殺會 24 小時熱線 2389 2222。",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-secondary/10">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
      >
        <span className="text-sm font-medium text-secondary sm:text-base">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={
            "mt-0.5 shrink-0 text-secondary/40 transition-transform duration-300 " +
            (isOpen ? "rotate-180" : "")
          }
          aria-hidden
        />
      </button>
      <div
        className={
          "overflow-hidden transition-all duration-300 " +
          (isOpen ? "max-h-96 pb-5" : "max-h-0")
        }
      >
        <p className="text-sm leading-relaxed text-secondary/65">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-secondary/10 rounded-2xl border border-secondary/10 px-6">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
