"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "關於我們", href: "/#about" },
  { label: "服務範圍", href: "/services" },
  { label: "收費及預約", href: "/pricing" },
  { label: "常見問題", href: "/faq" },
  { label: "網誌", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-xs"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          {/* Custom SVG icon — cornerstone + home roof */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-label="房角石家庭服務中心標誌"
          >
            {/* Roof / shelter — primary rose */}
            <path
              d="M3 28 L20 4 L37 28"
              stroke="#B0586E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cornerstone diamond — secondary purple-gray */}
            <path
              d="M20 21 L28 28 L20 35 L12 28 Z"
              stroke="#4A3F5C"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-secondary">
              房角石家庭服務中心
            </span>
            <span className="block text-[10px] tracking-wider text-secondary/55">
              Cornerstone Family Service Centre
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-secondary/80 transition-colors hover:bg-primary-light/60 hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+85292679822"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-dark active:scale-95"
          >
            <Phone size={14} aria-hidden />
            致電預約
          </a>
          <a
            href="https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-whatsapp-dark active:scale-95"
          >
            <MessageCircle size={14} aria-hidden />
            WhatsApp 諮詢
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center rounded-lg p-2 text-secondary transition-colors hover:bg-primary-light/60 md:hidden"
          aria-label={open ? "關閉選單" : "開啟選單"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-4 top-full z-50 w-64 origin-top-right rounded-2xl border border-secondary/10 bg-white p-3 shadow-lg md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-secondary/80 transition-colors hover:bg-primary-light/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <hr className="my-3 border-secondary/10" />
            <div className="flex flex-col gap-2 px-2">
              <a
                href="tel:+85292679822"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                <Phone size={14} />
                致電預約
              </a>
              <a
                href="https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-whatsapp-dark"
              >
                <MessageCircle size={14} />
                WhatsApp 諮詢
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
