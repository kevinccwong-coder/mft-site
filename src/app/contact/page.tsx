import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "聯絡我們 | 房角石家庭服務中心",
  description:
    "聯絡房角石家庭服務中心：電話 (852) 9267 9822、WhatsApp、電郵。上環及灣仔兩個服務據點，提供婚姻輔導、家庭治療及心理創傷治療。",
  openGraph: {
    title: "聯絡我們 | 房角石家庭服務中心",
    description: "香港婚姻輔導、家庭治療及心理創傷治療。上環｜灣仔。",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 聯絡我們",
      },
    ],
  },
};

const contactMethods = [
  {
    icon: Phone,
    label: "電話",
    value: "(852) 9267 9822",
    href: "tel:+85292679822",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "9267 9822",
    href: "https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務",
  },
  {
    icon: Mail,
    label: "電郵",
    value: "fsc.cornerstone@gmail.com",
    href: "mailto:fsc.cornerstone@gmail.com",
  },
];

const locations = [
  {
    name: "上環中心",
    address: "香港上環永樂街93-103號\n協成行上環中心1701室",
    map: "https://maps.google.com/?q=香港上環永樂街93-103號協成行上環中心1701室",
  },
  {
    name: "灣仔中心",
    address: "香港灣仔駱克道54-62號\n博匯大廈8樓",
    map: "https://maps.google.com/?q=香港灣仔駱克道54-62號博匯大廈8樓",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              聯絡我們
            </span>
            <h1 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
              我們在這裡為你服務
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary/70">
              無論是預約諮詢、查詢服務還是單純想了解更多，
              <br className="hidden sm:inline" />
              我們都樂意與你對話。
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-secondary">
                聯絡方式
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {contactMethods.map((m, i) => (
                  <a
                    key={i}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-secondary/5 bg-warm-bg p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light/60 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <m.icon size={22} />
                    </div>
                    <span className="text-xs text-secondary/70">{m.label}</span>
                    <span className="text-sm font-semibold text-secondary">
                      {m.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="bg-warm-bg py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-secondary">
                服務據點
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {locations.map((loc, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-secondary/5 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                      <MapPin size={16} className="text-primary" />
                      {loc.name}
                    </div>
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-secondary/70">
                      {loc.address}
                    </p>
                    <a
                      href={loc.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary-dark"
                    >
                      在 Google Maps 中開啟 →
                    </a>
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
              準備好踏出第一步？
            </h2>
            <p className="mt-3 text-sm text-secondary/75">
              立即致電或 WhatsApp 我們，預約首次免費諮詢。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+85292679822"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
              >
                <Phone size={16} aria-hidden />
                (852) 9267 9822
              </a>
              <a
                href="https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-whatsapp-dark hover:shadow-md"
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
