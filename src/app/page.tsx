import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-[680px]">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-semibold font-sans tracking-tight mb-4">
          Yaochen Zhu
        </h1>
        <p className="text-xl text-[var(--color-muted)] font-serif leading-relaxed mb-6">
          Applied Math PhD @ Brown
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed font-serif">
          This is my personal corner of the internet — a collection of research
          notes too small for papers, opinions on mathematical practice, and
          explorations of ideas I can&apos;t stop thinking about.
        </p>
      </section>

      {/* Recent posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-semibold font-sans tracking-tight">
            Recent posts
          </h2>
          <Link
            href="/posts"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors no-underline"
          >
            All posts &rarr;
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-[var(--color-muted)] font-serif italic">
            No posts yet. Check back soon.
          </p>
        )}
      </section>

      {/* Links */}
      <section className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <div className="flex gap-8">
          <Link
            href="/opinions"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors no-underline"
          >
            Opinions &rarr;
          </Link>
          <Link
            href="/interests"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors no-underline"
          >
            Interests &rarr;
          </Link>
          <a
            href="mailto:your@email.com"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors no-underline"
          >
            Email &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
