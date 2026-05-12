import { readFileSync } from "fs";
import path from "path";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { mdxComponents } from "@/components/MdxComponents";

export const metadata: Metadata = {
  title: "Interests",
  description: "Research areas and topics I care about.",
};

export default async function InterestsPage() {
  const filePath = path.join(process.cwd(), "content/interests.mdx");
  const source = readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  return (
    <div className="max-w-[720px]">
      <h1 className="text-3xl font-semibold font-sans tracking-tight mb-8">
        Interests
      </h1>

      <div className="prose">{content}</div>
    </div>
  );
}
