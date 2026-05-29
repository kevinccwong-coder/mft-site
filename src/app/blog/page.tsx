import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "網誌 | 房角石家庭服務中心 — 心理健康知識庫",
  description:
    "婚姻輔導、家庭治療、情緒管理、心理創傷復原等專業文章。由香港婚姻及家庭治療師撰寫，分享實證為本的心理健康知識。",
  openGraph: {
    title: "網誌 | 房角石家庭服務中心 — 心理健康知識庫",
    description: "婚姻輔導、家庭治療、情緒管理、心理創傷復原等專業文章。",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 心理健康知識庫",
      },
    ],
  },
};

const posts = [
  {
    title: "婚姻輔導有用嗎？— 美國研究的肯定答案",
    excerpt:
      "許多夫婦在面對婚姻危機時，都會猶豫應否尋求專業協助。美國婚姻及家庭治療協會的研究指出，超過 97% 的受訪者表示從婚姻及家庭治療中獲得協助……",
    date: "2025-12-15",
    category: "婚姻輔導",
  },
  {
    title: "如何辨識伴侶關係中的警號？",
    excerpt:
      "關係中的問題往往不是突然出現的。學習辨識早期警號，可以在問題惡化前及時尋求協助，避免關係走向無可挽回的地步……",
    date: "2025-11-28",
    category: "婚姻輔導",
  },
  {
    title: "認識複雜性創傷（C-PTSD）— 與 PTSD 有什麼不同？",
    excerpt:
      "複雜性創傷後壓力症（C-PTSD）與一般的 PTSD 有所不同。本文介紹 C-PTSD 的主要特徵、成因，以及有效的治療方法……",
    date: "2025-11-10",
    category: "心理創傷",
  },
  {
    title: "給家長的 5 個溝通技巧：改善親子關係",
    excerpt:
      "親子衝突往往是溝通方式出了問題。本文分享 5 個實證為本的溝通技巧，幫助家長與孩子建立更健康的關係……",
    date: "2025-10-22",
    category: "家庭關係",
  },
  {
    title: "焦慮症不藥而癒？認識非藥物治療方案",
    excerpt:
      "藥物不是處理焦慮的唯一方法。認知行為治療（CBT）、靜觀為本治療等心理治療方法，對焦慮症有顯著的療效……",
    date: "2025-10-05",
    category: "情緒健康",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-light/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark">
              網誌
            </span>
            <h1 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
              心理健康知識庫
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary/70">
              從婚姻關係到情緒管理，我們分享專業的心理健康知識，
              <br className="hidden sm:inline" />
              幫助你更了解自己與家人的需要。
            </p>
          </div>
        </section>

        {/* Blog list */}
        <section className="bg-white pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {posts.map((post, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-secondary/5 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-secondary/50">
                    <span className="rounded-full bg-primary-light/50 px-3 py-1 font-medium text-primary-dark">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} aria-hidden />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-secondary group-hover:text-primary sm:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/65">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    閱讀更多
                    <ArrowRight size={14} aria-hidden />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
