import type { Metadata } from "next";
import Script from "next/script";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className="h-full antialiased">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R3239YGY8P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R3239YGY8P');
          `}
        </Script>
      </body>
    </html>
  );
}
