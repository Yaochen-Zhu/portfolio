import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getOpinionBySlug, getAllOpinions } from "@/lib/posts";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { mdxComponents } from "@/components/MdxComponents";

export async function generateStaticParams() {
  return getAllOpinions().map((op) => ({ slug: op.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const op = getOpinionBySlug(slug);
  if (!op) return { title: "Not Found" };

  return {
    title: op.frontmatter.title,
    description: op.frontmatter.description,
  };
}

export default async function OpinionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const op = getOpinionBySlug(slug);
  if (!op) notFound();

  const { content } = await compileMDX({
    source: op.source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  const date = new Date(op.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-[680px]">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold font-sans tracking-tight mb-3">
          {op.frontmatter.title}
        </h1>
        <time dateTime={op.frontmatter.date} className="text-sm text-[var(--color-muted)]">
          {date}
        </time>
      </header>

      <div className="prose">{content}</div>
    </div>
  );
}
