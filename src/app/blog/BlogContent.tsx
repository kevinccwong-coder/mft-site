"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { posts, formatDate, categories } from "@/lib/posts";

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((p) =>
        Array.isArray(p.category)
          ? p.category.includes(activeCategory)
          : p.category === activeCategory,
      )
    : posts;

  // Sort by date (newest first)
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      {/* Category filter */}
      <section className="bg-white -mt-4 pb-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={
                "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all " +
                (activeCategory === null
                  ? "bg-primary-light/60 text-primary-dark"
                  : "bg-secondary-light/30 text-secondary/70 hover:bg-secondary-light/60")
              }
            >
              全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all " +
                  (activeCategory === cat
                    ? "bg-primary-light/60 text-primary-dark font-semibold"
                    : "bg-secondary-light/30 text-secondary/70 hover:bg-secondary-light/60")
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog list */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {sorted.length === 0 ? (
            <p className="py-20 text-center text-sm text-secondary/70">
              此分類尚無文章，敬請期待。
            </p>
          ) : (
            <div className="space-y-6">
              {sorted.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-secondary/5 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
                >
                  <article>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-secondary/70">
                      <span className="rounded-full bg-primary-light/50 px-3 py-1 font-medium text-primary-dark">
                        {Array.isArray(post.category) ? post.category.join(" · ") : post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} aria-hidden />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold text-secondary transition-colors group-hover:text-primary sm:text-xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-secondary/75">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        <Tag size={11} className="text-secondary/50" aria-hidden />
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-secondary-light/30 px-2 py-0.5 text-[11px] text-secondary/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors">
                      閱讀更多
                      <ArrowRight size={14} aria-hidden />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
