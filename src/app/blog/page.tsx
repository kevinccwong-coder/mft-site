import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";

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

        <BlogContent />
      </main>
      <Footer />
    </>
  );
}
