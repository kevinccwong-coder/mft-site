import type { Metadata } from "next";
import { Heart, Brain, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "專業心理輔導、婚姻及家庭治療服務 | 房角石家庭服務中心",
  description:
    "房角石家庭服務中心提供專業、保密、貼心的心理輔導服務。專長處理夫妻衝突、婚外情修復、家庭暴力創傷、隱蔽青年及婆媳衝突。辦事處位於香港上環及灣仔。",
  openGraph: {
    title: "專業心理輔導、婚姻及家庭治療服務 | 房角石家庭服務中心",
    description:
      "房角石家庭服務中心提供專業、保密、貼心的心理輔導服務。專長處理夫妻衝突、婚外情修復、家庭暴力創傷、隱蔽青年及婆媳衝突。辦事處位於香港上環及灣仔。",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 香港婚姻輔導及家庭治療",
      },
    ],
  },
};

const services = [
  {
    icon: Heart,
    title: "婚姻輔導及家庭治療",
    subtitle: "Marriage & Family Therapy",
    desc: "我們專注於改善婚姻及家庭關係、處理家庭危機、調解親子間衝突。美國研究證明，婚姻及家庭治療是有效的，且可能比一般個人心理治療更加有效。",
    areas: [
      "婚姻危機、離婚或再婚家庭問題",
      "婚外情／外遇創傷修復",
      "家庭暴力創傷處理",
      "三代相處之矛盾與張力",
      "親子關係緊張及溝通障礙",
      "家庭系統重整",
    ],
  },
  {
    icon: Brain,
    title: "情緒與壓力輔導",
    subtitle: "Emotional & Stress Counseling",
    desc: "在安全、不被批判的空間裡，我們陪你面對內心的風暴，學習與情緒共處，重新找回內在的平靜與力量。",
    areas: [
      "焦慮症／驚恐症",
      "抑鬱及情緒失調",
      "長期壓力與 burnout",
      "哀傷輔導（分離、喪失）",
      "學習正確表達負面情緒",
      "人生遭逢巨變或衝擊",
    ],
  },
  {
    icon: Shield,
    title: "心理創傷治療",
    subtitle: "Trauma Therapy",
    desc: "以實證為本的療法，陪你走過創傷復原之路。我們特別擅長處理複雜性創傷（C-PTSD），幫助你重新建立安全感。",
    areas: [
      "創傷後壓力症（PTSD）",
      "複雜性創傷（C-PTSD）",
      "童年創傷及虐待",
      "校園欺凌創傷",
      "失戀及關係創傷",
    ],
  },
];

const otherIssues = [
  "濫藥或酗酒",
  "兒童及青少年行為問題",
  "自殘或沉溺行為",
  "拒絕上學",
  "過度活躍症（ADHD）",
  "飲食失調",
  "個人心理問題（自尊、身份認同）",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page banner */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              服務範圍
            </span>
            <h1 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
              專業輔導，照顧你的需要
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary/70">
              我們提供個人、伴侶及家庭的全面心理輔導服務，按你的獨特處境，度身訂造治療方案。
              <br />
              所有服務均由美國婚姻及家庭治療協會（AAMFT）臨床院士主理。
            </p>
          </div>

          {/* Banner image */}
          <div className="mt-10 flex justify-center px-4 sm:px-0">
            <img
              src="/cornerstone-family-service-centre-services.webp"
              alt="房角石家庭服務中心 - 專業婚姻與家庭系統治療輔導"
              loading="lazy"
              className="h-auto w-full max-w-md rounded-2xl object-cover shadow-sm sm:max-w-lg"
            />
          </div>
        </section>

        {/* Service details */}
        <section className="bg-white pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="grid items-start gap-8 md:grid-cols-5"
                >
                  {/* Icon & title */}
                  <div className="md:col-span-2">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light/60 text-primary"
                      aria-hidden
                    >
                      <s.icon size={28} />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-secondary">
                      {s.title}
                    </h2>
                    <p className="mt-0.5 text-sm text-secondary/50">
                      {s.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-secondary/70">
                      {s.desc}
                    </p>
                  </div>

                  {/* Areas */}
                  <div className="rounded-2xl border border-secondary/5 bg-white p-6 md:col-span-3">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary/50">
                      治療範圍
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {s.areas.map((area, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-secondary/75"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden
                          />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other issues */}
        <section className="bg-warm-bg py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-secondary-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary">
                其他治療範圍
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
                我們也處理這些議題
              </h2>
              <p className="mt-3 text-sm text-secondary/65">
                如果你面對的問題未有在此列出，歡迎 WhatsApp 我們查詢。
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
              {otherIssues.map((issue, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-secondary/5 bg-white px-5 py-4 text-sm font-medium text-secondary/75 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-primary/50" aria-hidden />
                  {issue}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary">
              準備好踏出第一步？
            </h2>
            <p className="mt-3 text-sm text-secondary/65">
              預約初步諮詢，讓我們了解你的需要。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+85292679822"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                致電預約
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                WhatsApp 諮詢
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                查看收費詳情
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
