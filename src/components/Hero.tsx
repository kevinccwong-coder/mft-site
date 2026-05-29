"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const painPoints = [
  {
    title: "當孩子變得陌生",
    desc: "如果你有一個不受控制的孩子，你已用盡一切方法，但家中的張力卻越滾越大……",
  },
  {
    title: "當婚姻出現裂痕",
    desc: "如果你的配偶喜歡了另一個人，你感到被背叛，卻不知這段關係還有沒有出路……",
  },
  {
    title: "當家庭陷入危機",
    desc: "如果你的家庭生病了——暴力、冷漠、疏離——你甚至不想回家……",
  },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 opacity-20">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl" />
      </div>
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 opacity-10">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-secondary/20 to-primary-light/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline — only h1 on the page */}
        <div
          className={
            "mx-auto max-w-3xl text-center transition-all duration-700 " +
            (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          <span className="mb-4 inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
            香港專業婚姻及家庭治療
          </span>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-secondary sm:text-4xl lg:text-5xl lg:leading-tight">
            家庭是社會的基石，
            <br />
            我們願意與你共同面對挑戰
          </h1>
          <p className="mt-5 text-base leading-relaxed text-secondary/70 sm:text-lg">
            由香港大學畢業、美國認證的婚姻及家庭治療師主理，
            <br className="hidden sm:inline" />
            提供專業、保密、貼心的心理輔導服務。
          </p>
        </div>

        {/* Pain point cards */}
        <div
          className={
            "mx-auto mt-16 grid max-w-5xl gap-5 transition-all delay-200 duration-700 sm:grid-cols-3 " +
            (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-secondary/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light/60 text-primary-dark text-sm font-bold"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="text-lg font-semibold text-secondary">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-secondary/65">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={
            "mt-12 text-center transition-all delay-500 duration-700 " +
            (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          <p className="mb-6 text-lg font-medium text-secondary/80">
            你可能需要婚姻及家庭治療師的協助。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+85292679822"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg active:scale-95 sm:w-auto"
            >
              立即致電預約
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg active:scale-95 sm:w-auto"
            >
              WhatsApp 免費諮詢
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex animate-pulse justify-center">
          <ChevronDown size={20} className="text-secondary/30" />
        </div>
      </div>
    </section>
  );
}
