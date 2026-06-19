import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "房角石家庭服務中心 | 香港婚姻輔導、家庭治療及心理創傷治療",
    template: "%s | 房角石家庭服務中心",
  },
  description:
    "提供香港專業、保密的個人心理輔導、婚姻治療、家庭治療及心理創傷輔導（如外遇修復、情緒抑鬱、童年創傷、PTSD）。由香港大學碩士、美國 AAMFT 臨床院士主理。",
  keywords: [
    "婚姻輔導",
    "家庭治療",
    "心理輔導",
    "香港婚姻輔導",
    "婚姻治療",
    "伴侶治療",
    "情緒聚焦治療",
    "EFT",
    "婚外情修復",
    "外遇修復",
    "信任重建",
    "夫妻溝通",
    "心理創傷治療",
    "情緒輔導",
    "PTSD",
    "EMDR",
    "童年創傷",
  ],
  metadataBase: new URL("https://www.familycornerstone.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "房角石家庭服務中心 | 香港婚姻輔導、家庭治療及心理創傷治療",
    description:
      "提供香港專業、保密的個人心理輔導、婚姻治療、家庭治療及心理創傷輔導。由香港大學碩士、美國 AAMFT 臨床院士主理。",
    locale: "zh_HK",
    type: "website",
    siteName: "房角石家庭服務中心",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.familycornerstone.com#organization",
      name: "房角石家庭服務中心",
      alternateName: "Cornerstone Family Service Centre",
      url: "https://www.familycornerstone.com",
      telephone: "+85292679822",
      description:
        "香港專業婚姻輔導、家庭治療及心理創傷治療服務。由香港大學碩士、美國 AAMFT 臨床院士主理。",
      areaServed: "香港",
      priceRange: "$$",
      image:
        "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
      sameAs: [],
      subOrganization: [
        { "@id": "https://www.familycornerstone.com#sheungwan" },
        { "@id": "https://www.familycornerstone.com#wanchai" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.familycornerstone.com#sheungwan",
      name: "房角石家庭服務中心（上環）",
      alternateName: "Cornerstone Family Service Centre (Sheung Wan)",
      parentOrganization: {
        "@id": "https://www.familycornerstone.com#organization",
      },
      url: "https://www.familycornerstone.com",
      telephone: "+85292679822",
      description: "上環分址 — 香港專業婚姻輔導、家庭治療及心理創傷治療。",
      image:
        "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
      priceRange: "$$",
      areaServed: "香港",
      serviceType: ["婚姻輔導", "家庭治療", "心理創傷治療", "婚姻治療", "家庭輔導"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "永樂街93-103號協成行上環中心1701室",
        addressLocality: "上環",
        addressRegion: "香港",
        addressCountry: "HK",
      },
      hasMap:
        "https://maps.google.com/?q=香港上環永樂街93-103號協成行上環中心1701室",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "10:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.familycornerstone.com#wanchai",
      name: "房角石家庭服務中心（灣仔）",
      alternateName: "Cornerstone Family Service Centre (Wan Chai)",
      parentOrganization: {
        "@id": "https://www.familycornerstone.com#organization",
      },
      url: "https://www.familycornerstone.com",
      telephone: "+85292679822",
      description: "灣仔分址 — 香港專業婚姻輔導、家庭治療及心理創傷治療。",
      image:
        "https://static.wixstatic.com/media/b709e0_ec1a15e211554eb49239af1b26aff339%7Emv2.jpg",
      priceRange: "$$",
      areaServed: "香港",
      serviceType: ["婚姻輔導", "家庭治療", "心理創傷治療", "婚姻治療", "家庭輔導"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "駱克道54-62號博匯大廈8樓",
        addressLocality: "灣仔",
        addressRegion: "香港",
        addressCountry: "HK",
      },
      hasMap:
        "https://maps.google.com/?q=香港灣仔駱克道54-62號博匯大廈8樓",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "10:00",
          closes: "19:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className="h-full antialiased">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <GoogleAnalytics gaId="G-R3239YGY8P" />
      </body>
    </html>
  );
}
