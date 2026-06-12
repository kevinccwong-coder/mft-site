import { notFound } from "next/navigation";
import { Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPostBySlug, formatDate } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | 房角石家庭服務中心`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image
        ? [{ url: post.image, width: 1000, height: 559, alt: post.title }]
        : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-b from-primary-light/40 via-warm-bg to-white pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-secondary/70">
              <span className="rounded-full bg-primary-light/60 px-3 py-1 font-medium text-primary-dark">
                {Array.isArray(post.category) ? post.category.join(" · ") : post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} aria-hidden />
                {formatDate(post.date)}
              </span>
            </div>
            <h1 className="mt-4 text-2xl font-bold leading-[1.4] text-secondary sm:text-3xl">
              {post.title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag size={12} className="text-secondary/60" aria-hidden />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary-light/40 px-2.5 py-0.5 text-xs text-secondary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="bg-white pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Featured image */}
            {post.image && (
              <div className="mb-10 overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

            {/* Article body — renders markdown-style content */}
            <article className="prose-custom">
              {post.content.split("\n").map((line, i) => {
                // Convert [text](url) markdown links to JSX
                const rendered = line.replace(
                  /\[([^\]]+)\]\(([^)]+)\)/g,
                  (_, text, url) =>
                    `<a href="${url}" class="text-primary hover:underline">${text} ↗</a>`
                );

                if (line.startsWith("### ")) {
                  return (
                    <h3 key={i} className="mt-8 mb-4 text-lg font-semibold text-secondary">
                      {line.replace("### ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p key={i} className="mt-4 mb-2 font-semibold text-secondary">
                      {line.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (line.trim() === "") {
                  return null;
                }
                return (
                  <p
                    key={i}
                    className="mb-4 text-base leading-[1.9] text-secondary/75"
                    dangerouslySetInnerHTML={{ __html: rendered }}
                  />
                );
              })}
            </article>

            {/* Back link */}
            <div className="mt-16 border-t border-secondary/10 pt-8">
              <a
                href="/blog"
                className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                ← 返回網誌列表
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
