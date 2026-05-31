"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white text-sm font-bold">
                CF
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-semibold">
                  房角石家庭服務中心
                </span>
                <span className="block text-[10px] tracking-wide text-white/70">
                  Cornerstone Family Service Centre
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              家庭是社會的基石，我們與你共同面對你的挑戰。
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/70">
              聯絡我們
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="tel:+85292679822"
                  className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-primary/60">
                    <Phone size={13} aria-hidden />
                  </span>
                  (852) 9267 9822
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-whatsapp/60">
                    <MessageCircle size={13} aria-hidden />
                  </span>
                  WhatsApp 9267 9822
                </a>
              </li>
              <li>
                <a
                  href="mailto:fsc.cornerstone@gmail.com"
                  className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-primary/60">
                    <Mail size={13} aria-hidden />
                  </span>
                  fsc.cornerstone@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=香港上環永樂街93-103號協成行上環中心1701室"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-primary/60">
                    <MapPin size={13} aria-hidden />
                  </span>
                  香港上環永樂街93-103號<br />
                  協成行上環中心1701室
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=香港灣仔駱克道54-62號博匯大廈8樓"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-primary/60">
                    <MapPin size={13} aria-hidden />
                  </span>
                  香港灣仔駱克道54-62號<br />
                  博匯大廈8樓
                </a>
              </li>
            </ul>
          </div>

          {/* Verse */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/70">
              金句分享
            </h3>
            <blockquote className="mt-5 border-l-2 border-primary/50 pl-4">
              <p className="text-sm leading-relaxed text-white/80 italic">
                「你們祈求，就給你們；
                <br />
                尋找，就尋見；
                <br />
                叩門，就給你們開門。」
              </p>
              <footer className="mt-2 text-xs text-white/60">
                — 馬太福音 7:7
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/60">
            &copy; {year} 房角石家庭服務中心 Cornerstone Family
            Service Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
