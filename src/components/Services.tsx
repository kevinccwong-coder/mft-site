import { Heart, Brain, Shield } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const services = [
  {
    icon: Heart,
    title: "婚姻輔導及家庭治療",
    desc: "處理夫妻衝突、家庭危機、婚外情修復、親子關係緊張。我們幫助家庭成員重新聽見彼此的聲音，亦擅長處理家庭暴力創傷、家人長期隱蔽在家（隱蔽青年／雙失）及三代之間的矛盾張力（婆媳衝突／隔代教養）。我們亦提供專業外遇輔導及移民前後的婚姻問題調適。",
    highlights: [
      "夫妻溝通修復",
      "婚外情創傷處理／專業外遇輔導",
      "移民前後婚姻問題調適",
      "家庭暴力／家暴創傷輔導",
      "隱蔽青年／雙失青年家庭介入",
      "婆媳衝突／三代爭鬥調解",
    ],
  },
  {
    icon: Brain,
    title: "情緒與壓力輔導",
    desc: "焦慮、驚恐症、抑鬱、情緒失控、長期壓力、哀傷失落。在安全的空間裡，讓情緒被聽見、被理解。我們幫助你學習正確表達負面情緒，應對職場過勞（burnout／爆煲），重新找回內在的平靜。我們亦提供產後抑鬱心理輔導及一般精神健康諮詢服務。",
    highlights: [
      "焦慮症／驚恐症",
      "抑鬱情緒處理／產後抑鬱心理輔導",
      "精神健康及心理輔導諮詢",
      "壓力管理及 burnout（職場過勞）",
      "哀傷輔導",
      "學習正確表達負面情緒",
    ],
  },
  {
    icon: Shield,
    title: "心理創傷治療",
    desc: "PTSD、童年創傷、虐待、欺凌、失戀創傷。我們以實證為本的療法，陪你走過復原之路。",
    highlights: [
      "創傷後壓力症 (PTSD)",
      "童年創傷修復",
      "複雜性創傷 (C-PTSD)",
      "虐待及欺凌創傷",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary">
            服務範圍
          </span>
          <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
            專業輔導，照顧你的需要
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/75">
            我們提供個人、伴侶及家庭的全面心理輔導服務，
            <br className="hidden sm:inline" />
            按你的獨特處境，度身訂造治療方案。
          </p>
        </div>

        {/* Service cards grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-secondary/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light/60 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                aria-hidden
              >
                <s.icon size={22} />
              </div>

              <h3 className="text-lg font-semibold text-secondary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/75">
                {s.desc}
              </p>

              {/* Highlights */}
              <ul className="mt-5 space-y-2">
                {s.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-secondary/70">
                    <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                    {h.includes("C-PTSD") ? (
                      <a
                        href="https://oxfordhealth.nhs.uk/ohspic/problems/c-ptsd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {h} ↗
                      </a>
                    ) : h.includes("PTSD") ? (
                      <a
                        href="https://www.nhs.uk/mental-health/conditions/ptsd-post-traumatic-stress-disorder/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {h} ↗
                      </a>
                    ) : (
                      h
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-secondary/70">
            想了解更多服務詳情？
          </p>
          <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              查看所有服務 →
            </a>
            <span className="hidden text-secondary/50 sm:inline" aria-hidden>|</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              WhatsApp 免費諮詢 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
