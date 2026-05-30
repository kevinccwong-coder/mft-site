"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const painPoints = [
  {
    title: "當孩子變得陌生",
    desc: "不受控制、衝突不斷，你已用盡一切方法，家中的張力卻越滾越大。",
  },
  {
    title: "當婚姻出現裂痕",
    desc: "背叛、沉默、疏離——你感到迷失，卻不知道這段關係還有沒有出路。",
  },
  {
    title: "當家庭陷入危機",
    desc: "暴力、冷戰、隱蔽——你甚至不想回家，但心底仍渴望改變。",
  },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-light/30 via-warm-bg to-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative background elements */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 opacity-15">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl" />
      </div>
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 opacity-10">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-secondary/15 to-primary-light/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline — exactly ONE h1 per SEO rule */}
        <div
          className={
            "mx-auto max-w-3xl text-center transition-all duration-700 " +
            (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          <span className="mb-5 inline-block rounded-full border border-primary/20 bg-primary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
            香港專業婚姻及家庭治療
          </span>
          <h1 className="text-3xl font-bold leading-[1.4] tracking-tight text-secondary sm:text-4xl lg:text-5xl">
            家庭是社會的基石，
            <br />
            我們願意與你共同面對挑戰
          </h1>
          <p className="mt-5 text-base leading-relaxed text-secondary/65 sm:text-lg">
            由香港大學畢業、美國認證的婚姻及家庭治療師主理，
            <br className="hidden sm:inline" />
            提供專業、保密、貼心的心理輔導服務。
          </p>
        </div>

        {/* Pain points — elegant card grid */}
        <div
          className={
            "mx-auto mt-16 grid max-w-4xl gap-4 transition-all delay-200 duration-700 sm:grid-cols-3 " +
            (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-secondary/5 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Top accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/40 to-primary-light/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />

              {/* Number badge */}
              <div
                className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light/50 text-xs font-bold tracking-wide text-primary-dark"
                aria-hidden
              >
                0{i + 1}
              </div>

              <h3 className="text-base font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-secondary/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={
            "mt-14 text-center transition-all delay-500 duration-700 " +
            (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          <p className="mb-7 text-base font-medium text-secondary/70">
            你可能需要婚姻及家庭治療師的協助。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+85292679822"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-md active:scale-95 sm:w-auto"
            >
              <Phone size={16} aria-hidden />
              立即致電預約
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-whatsapp-dark hover:shadow-md active:scale-95 sm:w-auto"
            >
              <MessageCircle size={16} aria-hidden />
              WhatsApp 免費諮詢
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex animate-pulse justify-center">
          <ChevronDown size={18} className="text-secondary/25" />
        </div>
      </div>
    </section>
  );
}
