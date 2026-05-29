import type { Metadata } from "next";
import { Clock, Phone, MessageCircle, Calendar, Shield, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "收費及預約 | 房角石家庭服務中心",
  description:
    "透明收費：個人輔導每節 $1,200、伴侶輔導每節 $1,500、家庭治療每節 $1,800。提供有限度減免收費，歡迎致電或 WhatsApp 預約。",
  openGraph: {
    title: "收費及預約 | 房角石家庭服務中心",
    description: "透明收費，預約簡單。香港專業心理輔導服務。",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 收費及預約",
      },
    ],
  },
};

const feeItems = [
  {
    label: "個人輔導（每節）",
    price: "$1,200",
    duration: "50 分鐘",
    note: "視乎治療師資歷及經驗",
  },
  {
    label: "伴侶輔導（每節）",
    price: "$1,500",
    duration: "80 分鐘",
    note: "適用於伴侶及婚姻輔導",
  },
  {
    label: "家庭治療（每節）",
    price: "$1,800",
    duration: "90 分鐘",
    note: "按家庭人數及需要調整",
  },
];

const steps = [
  {
    icon: Phone,
    title: "致電或 WhatsApp 聯絡我們",
    desc: "初步了解你的情況，解答你對服務的疑問，並協助你選擇適合的治療師。",
  },
  {
    icon: Calendar,
    title: "預約首次面談",
    desc: "我們會為你安排首次面談時間。首次面談主要是了解你的處境和需要，讓你認識治療師。",
  },
  {
    icon: Shield,
    title: "開展治療旅程",
    desc: "治療師會與你共同制定治療目標和計劃，以你感到舒適的節奏逐步推進。",
  },
  {
    icon: CreditCard,
    title: "收費及付款",
    desc: "每節治療完成後付款，接受現金、轉數快（FPS）及銀行轉帳。",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              收費及預約
            </span>
            <h1 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
              收費透明，預約簡單
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary/70">
              我們相信收費應該清晰透明，讓你在尋求協助的過程中感到安心。
            </p>
          </div>
        </section>

        {/* Fee table */}
        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-secondary">服務收費</h2>
              <p className="mt-2 text-sm text-secondary/60">
                以下為標準收費，實際費用可能因應治療師資歷及個別情況有所調整。
              </p>
              <div className="mt-8 divide-y divide-secondary/10 rounded-2xl border border-secondary/10">
                {feeItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-secondary">
                        {item.label}
                      </h3>
                      <div className="mt-0.5 flex items-center gap-3 text-xs text-secondary/50">
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} aria-hidden />
                          {item.duration}
                        </span>
                        {item.note && (
                          <span className="italic">{item.note}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-secondary/40">
                * 本中心提供有限度之減免收費服務，經濟困難者請與我們聯絡商議。
              </p>
            </div>
          </div>
        </section>

        {/* Booking process */}
        <section className="bg-warm-bg py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-bold text-secondary">
                預約流程
              </h2>
              <p className="mt-2 text-center text-sm text-secondary/60">
                簡單四步，讓你安心開展輔導旅程。
              </p>
              <div className="mt-12 space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light/60 text-primary">
                        <step.icon size={20} aria-hidden />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="mt-2 h-full w-px bg-primary/20" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-semibold text-secondary">
                        <span className="mr-2 text-primary">{String(i + 1).padStart(2, "0")}.</span>
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-secondary/65">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary">
              準備好預約了嗎？
            </h2>
            <p className="mt-3 text-sm text-secondary/65">
              歡迎致電或 WhatsApp 我們，我們很樂意回答你的問題。
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-whatsapp-dark hover:shadow-lg"
              >
                <MessageCircle size={16} aria-hidden />
                WhatsApp 預約
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
