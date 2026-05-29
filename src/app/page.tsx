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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.familycornerstone.com#sheungwan",
      name: "房角石家庭服務中心（上環）",
      alternateName: "Cornerstone Family Service Centre (Sheung Wan)",
      url: "https://www.familycornerstone.com",
      telephone: "+85292679822",
      description:
        "香港專業婚姻輔導、家庭治療及心理創傷治療服務。由香港大學碩士、美國 AAMFT 臨床院士主理。",
      image:
        "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
      priceRange: "$$",
      areaServed: "香港",
      serviceType: [
        "婚姻輔導",
        "家庭治療",
        "心理創傷治療",
        "情緒與壓力輔導",
        "音樂治療",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "永樂街93-103號協成行上環中心1701室",
        addressLocality: "上環",
        addressRegion: "香港",
        addressCountry: "HK",
      },
      hasMap: "https://maps.google.com/?q=香港上環永樂街93-103號協成行上環中心1701室",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.familycornerstone.com#wanchai",
      name: "房角石家庭服務中心（灣仔）",
      alternateName: "Cornerstone Family Service Centre (Wan Chai)",
      url: "https://www.familycornerstone.com",
      telephone: "+85292679822",
      description:
        "香港專業婚姻輔導、家庭治療及心理創傷治療服務。由香港大學碩士、美國 AAMFT 臨床院士主理。",
      image:
        "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
      priceRange: "$$",
      areaServed: "香港",
      serviceType: [
        "婚姻輔導",
        "家庭治療",
        "心理創傷治療",
        "情緒與壓力輔導",
        "音樂治療",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "駱克道54-62號博匯大廈8樓",
        addressLocality: "灣仔",
        addressRegion: "香港",
        addressCountry: "HK",
      },
      hasMap: "https://maps.google.com/?q=香港灣仔駱克道54-62號博匯大廈8樓",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
