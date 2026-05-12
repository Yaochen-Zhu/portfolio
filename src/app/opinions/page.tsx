import { getAllOpinions } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opinions",
  description: "Shorter thoughts on mathematical practice, research culture, and more.",
};

export default function OpinionsPage() {
  const opinions = getAllOpinions();

  return (
    <div className="max-w-[720px]">
      <h1 className="text-3xl font-semibold font-sans tracking-tight mb-4">
        Opinions
      </h1>
      <p className="text-[var(--color-muted)] font-serif leading-relaxed mb-8">
        Shorter, less-formal pieces — takes on mathematical practice, research
        culture, and whatever else I&apos;m thinking about.
      </p>

      {opinions.length > 0 ? (
        <div>
          {opinions.map((opinion) => (
            <PostCard key={opinion.slug} post={opinion} basePath="/opinions" />
          ))}
        </div>
      ) : (
        <p className="text-[var(--color-muted)] font-serif italic">
          No opinions yet.
        </p>
      )}
    </div>
  );
}
