import type { Metadata } from "next";
import { CheckCircle, ScrollText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "關於我們 | 房角石家庭服務中心",
  description:
    "房角石家庭服務中心由香港大學碩士、美國 AAMFT 臨床院士及核准督導主理。我們不以專家自居，以「無知」的態度與你的家庭一同探索，幫助你看到在黑暗隧道盡頭的光。",
  openGraph: {
    title: "關於我們 | 房角石家庭服務中心",
    description:
      "香港專業婚姻輔導、家庭治療及心理創傷治療服務。由香港大學碩士、美國 AAMFT 臨床院士主理。",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 關於我們",
      },
    ],
  },
};

const qualifications: { text: string; href?: string }[] = [
  {
    text: "香港大學社會科學碩士（婚姻及家庭治療）",
    href: "https://web.socsc.hku.hk/",
  },
  {
    text: "美國婚姻及家庭治療協會（AAMFT）臨床院士",
    href: "https://www.aamft.org/",
  },
  {
    text: "美國婚姻及家庭治療協會（AAMFT）核准督導",
    href: "https://www.aamft.org/",
  },
  {
    text: "亞洲家庭治療學院院士",
    href: "https://www.acafamilytherapy.org/",
  },
];

const values = [
  {
    quote:
      "我們既不是要告訴你誰是誰非，也不是誰好誰壞。我們將會與你一同發現你的現實生活和信念如何困住你。",
    author: "— 我們的專長是解開家庭的枷鎖",
  },
  {
    quote:
      "我們不以專家自居，我們以「無知」的態度與你的家庭一同探索。",
    author:
      "— 就像是從未見過你家地圖的旅人，帶著好奇心與尊重，陪你重新描繪",
  },
  {
    quote:
      "我們善於問你重要的問題，幫助你看到在黑暗隧道盡頭的光。",
    author:
      "— 因為我們相信，答案從來都在你們心中，只是暫時被塵埃遮蔽",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              關於我們
            </span>
            <h1 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
              專業與溫度並重
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary/70">
              房角石家庭服務中心由一群資深的美國婚姻及家庭治療協會臨床院士
              及輔導心理學家創立。我們相信，每個家庭都擁有自我療癒的能力，
              而治療師的角色不是給予答案，而是與你一起發掘那些早已存在的力量。
            </p>
          </div>
        </section>

        {/* Qualifications & Values */}
        <section className="bg-white pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-2">
              {/* Left: About */}
              <div>
                <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
                  我們的團隊
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-secondary/70">
                  本中心的婚姻及家庭治療師皆為
                  <a href="https://web.socsc.hku.hk/" target="_blank" rel="noopener noreferrer" className="text-primary transition-colors hover:text-primary-dark hover:underline">香港大學社會科學碩士（婚姻及家庭治療） ↗</a>畢業生，
                  並取得美國婚姻及家庭治療協會臨床院士及
                  <a href="https://www.acafamilytherapy.org/" target="_blank" rel="noopener noreferrer" className="text-primary transition-colors hover:text-primary-dark hover:underline">亞洲家庭治療學院院士 ↗</a>資歷。
                  我們致力以專業、嚴謹且充滿溫度的態度，陪伴每一個家庭走過困難的時刻。
                </p>

                <div className="mt-8 space-y-3">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-secondary">
                    <ScrollText size={16} className="text-primary" />
                    專業資格
                  </h3>
                  {qualifications.map((q, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {q.href ? (
                        <a
                          href={q.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-secondary/75 transition-colors hover:text-primary underline underline-offset-2 decoration-1 decoration-primary/30 hover:decoration-primary"
                        >
                          {q.text} ↗
                        </a>
                      ) : (
                        <span className="text-sm text-secondary/75">{q.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Values */}
              <div className="space-y-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary/70">
                  我們的信念
                </h3>
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl border border-secondary/5 bg-warm-bg p-6 shadow-sm"
                  >
                    <span
                      aria-hidden
                      className="absolute -top-3 left-5 text-4xl leading-none text-primary-light select-none"
                    >
                      &ldquo;
                    </span>
                    <p className="relative text-base leading-relaxed font-medium text-secondary">
                      {v.quote}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-secondary/70">
                      {v.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
