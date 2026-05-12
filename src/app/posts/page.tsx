import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Research notes and results — mathematical explorations with visualizations.",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[680px]">
      <h1 className="text-3xl font-semibold font-sans tracking-tight mb-8">
        Posts
      </h1>

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-[var(--color-muted)] font-serif italic">
          No posts yet. Check back soon.
        </p>
      )}
    </div>
  );
}
