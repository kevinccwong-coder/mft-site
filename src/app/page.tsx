import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Resources from "@/components/Resources";
import HomeFAQ from "@/components/HomeFAQ";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "房角石家庭服務中心 | 香港婚姻輔導、家庭治療及心理創傷治療",
  description:
    "提供香港專業、保密的個人心理輔導、婚姻治療、家庭治療及心理創傷輔導（如外遇修復、情緒抑鬱、童年創傷、PTSD）。由香港大學碩士、美國 AAMFT 臨床院士主理。",
  keywords: [
    "婚姻輔導",
    "家庭治療",
    "心理輔導",
    "香港婚姻輔導",
    "心理創傷治療",
    "家庭暴力輔導",
    "婚外情輔導",
    "婆媳衝突",
    "隱蔽青年",
    "情緒輔導",
    "PTSD",
    "外遇修復",
    "童年創傷",
  ],
  openGraph: {
    title: "房角石家庭服務中心 | 香港婚姻輔導、家庭治療及心理創傷治療",
    description:
      "提供香港專業、保密的個人心理輔導、婚姻治療、家庭治療及心理創傷輔導。由香港大學碩士、美國 AAMFT 臨床院士主理。（上環｜灣仔）",
    url: "https://www.familycornerstone.com",
    siteName: "房角石家庭服務中心",
    locale: "zh_HK",
    type: "website",
    images: [
      {
        url: "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
        width: 2500,
        height: 1330,
        alt: "房角石家庭服務中心 — 香港婚姻輔導、家庭治療及心理創傷治療",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Resources />
        <HomeFAQ />
      </main>
      <Footer />
    </>
  );
}
