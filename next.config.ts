import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://static.wixstatic.com;
  font-src 'self' data:;
  connect-src 'self' https://*.vercel.app;
  frame-ancestors 'none';
  form-action 'self';
  base-uri 'self';
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ── Blog ──
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/posts.html",
        destination: "/blog",
        permanent: true,
      },

      // ── Specific old blog post redirects (Wix Chinese URLs → new slugs) ──
      {
        source: "/blog/%E5%BF%83%E7%90%86%E8%BC%94%E5%B0%8E%E6%9C%89%E7%94%A8%E5%97%8E%EF%BC%9F",
        destination: "/blog/is-counseling-useful",
        permanent: true,
      },
      {
        source: "/blog/%E7%82%BA%E4%BB%80%E9%BA%BC%E9%9C%80%E8%A6%81%E5%A9%9A%E5%A7%BB%E8%BC%94%E5%B0%8E%E5%91%A2%EF%BC%9F",
        destination: "/blog/why-marriage-counseling",
        permanent: true,
      },
      {
        source: "/single-post/2016/10/12/%E5%A4%AB%E5%A6%BB%E8%A1%9D%E7%AA%81",
        destination: "/blog/marital-conflict-resolution",
        permanent: true,
      },
      {
        source: "/single-post/2017/05/14/%E9%A0%90%E9%98%B2%E3%80%8C%E5%A9%9A%E5%A4%96%E6%83%85%E5%A4%96%E9%81%87%E3%80%8D%E6%8C%87%E5%8D%97",
        destination: "/blog/prevent-affairs",
        permanent: true,
      },
      {
        source: "/single-post/2017/06/06/%E5%AE%B6%E5%BA%AD%E6%B2%BB%E7%99%82%E7%9A%84%E4%B8%80%E6%A9%AB%E4%B8%80%E7%9B%B4",
        destination: "/blog/family-therapy-basics",
        permanent: true,
      },
      {
        source: "/single-post/2018/04/16/%E5%A9%86%E5%AA%B3%E8%A1%9D%E7%AA%81",
        destination: "/blog/mother-in-law-conflict",
        permanent: true,
      },
      {
        source: "/single-post/2016/06/23/%E5%A9%86%E5%AA%B3%E8%A1%9D%E7%AA%81%EF%BC%88%E4%BA%8C%EF%BC%89",
        destination: "/blog/mother-in-law-conflict-2",
        permanent: true,
      },
      {
        source: "/single-post/2016/06/22/%E5%A9%86%E5%AA%B3%E8%A1%9D%E7%AA%81%EF%BC%88%E4%B8%80%EF%BC%89",
        destination: "/blog/mother-in-law-conflict-1",
        permanent: true,
      },

      // ── Generic single-post catch-all ──
      {
        source: "/single-post/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/blog-feed.xml",
        destination: "/blog",
        permanent: true,
      },

      // ── About ──
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      { source: "/blank-1", destination: "/about", permanent: true },

      // ── Services ──
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/:path*",
        destination: "/services",
        permanent: true,
      },

      // ── Pricing / Booking ──
      {
        source: "/pricing.html",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/booking",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/appointment",
        destination: "/pricing",
        permanent: true,
      },
      { source: "/blank-4", destination: "/pricing", permanent: true },
      { source: "/fees-booking", destination: "/pricing", permanent: true },

      // ── FAQ ──
      {
        source: "/faq.html",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/frequently-asked-questions",
        destination: "/faq",
        permanent: true,
      },
      { source: "/blank-6", destination: "/faq", permanent: true },

      // ── Contact ──
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      { source: "/blank-2", destination: "/contact", permanent: true },

      // ── Legacy Wix paths ──
      {
        source: "/forum",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/forum/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blank-5/categories/%E5%A9%9A%E5%A7%BB%E8%BC%94%E5%B0%8E",
        destination: "/blog/is-counseling-useful",
        permanent: true,
      },
      {
        source: "/blank-5/categories/:path*",
        destination: "/blog",
        permanent: true,
      },

      // ── Old file extensions → best match or home ──
      {
        source: "/(.*)\\.(html|htm|asp|aspx|php|jsp)",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
