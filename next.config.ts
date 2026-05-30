import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
