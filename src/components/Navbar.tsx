"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "關於我們", href: "/#about" },
  { label: "服務範圍", href: "/services" },
  { label: "收費及預約", href: "/pricing" },
  { label: "常見問題", href: "/faq" },
  { label: "網誌", href: "/blog" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="relative px-3 py-2 text-sm font-medium text-secondary/75 transition-colors duration-300 hover:text-secondary
        after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300
        hover:after:left-0 hover:after:w-full"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/logo.jpg"
            alt="房角石家庭服務中心 Cornerstone Family Service Centre"
            className="h-16 w-auto sm:h-[72px]"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href="tel:+85292679822"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary-light/30 active:scale-95"
          >
            <Phone size={13} aria-hidden />
            致電預約
          </a>
          <a
            href="https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-whatsapp-dark hover:shadow-md active:scale-95"
          >
            <MessageCircle size={13} aria-hidden />
            WhatsApp 諮詢
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center rounded-lg p-2 text-secondary transition-colors hover:bg-primary-light/50 md:hidden"
          aria-label={open ? "關閉選單" : "開啟選單"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/15 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-3 top-full z-50 w-64 origin-top-right rounded-2xl border border-secondary/10 bg-white/95 backdrop-blur-xl p-3 shadow-lg md:hidden">
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-secondary/75 transition-colors hover:bg-primary-light/50 hover:text-secondary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <hr className="my-3 border-secondary/10" />
            <div className="flex flex-col gap-2 px-2">
              <a
                href="tel:+85292679822"
                className="flex items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary-light/30"
              >
                <Phone size={13} aria-hidden />
                致電預約
              </a>
              <a
                href="https://wa.me/85292679822?text=你好，我想查詢關於家庭/婚姻輔導服務"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-whatsapp-dark"
              >
                <MessageCircle size={13} aria-hidden />
                WhatsApp 諮詢
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
