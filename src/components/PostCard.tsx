import Link from "next/link";
import type { Post } from "@/lib/posts";

export function PostCard({
  post,
  basePath = "/posts",
}: {
  post: Post;
  basePath?: string;
}) {
  const date = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-6 border-b border-[var(--color-border)] last:border-b-0">
      <Link
        href={`${basePath}/${post.slug}`}
        className="no-underline group"
      >
        <h2 className="text-xl font-semibold font-sans text-[var(--color-fg)] group-hover:opacity-70 transition-opacity mb-1 tracking-tight">
          {post.frontmatter.title}
        </h2>
        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)] mb-2">
          <time dateTime={post.frontmatter.date}>{date}</time>
          <span>&middot;</span>
          <span>{post.readingTime} min read</span>
        </div>
        <p className="text-[var(--color-muted)] leading-relaxed font-serif">
          {post.frontmatter.description}
        </p>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-code-bg)] text-[var(--color-muted)] border border-[var(--color-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
