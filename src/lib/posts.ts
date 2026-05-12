import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  draft?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: number;
}

const POSTS_DIR = path.join(process.cwd(), "content/posts");
const OPINIONS_DIR = path.join(process.cwd(), "content/opinions");

function getSlugs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function parsePost(dir: string, slug: string): Post | null {
  const filePath = path.join(dir, slug, "index.mdx");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  if (frontmatter.draft && process.env.NODE_ENV === "production") return null;

  const wordCount = raw.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return { slug, frontmatter, readingTime };
}

export function getAllPosts(): Post[] {
  return getSlugs(POSTS_DIR)
    .map((slug) => parsePost(POSTS_DIR, slug))
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getPostBySlug(slug: string): {
  frontmatter: PostFrontmatter;
  source: string;
} | null {
  const filePath = path.join(POSTS_DIR, slug, "index.mdx");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, source: content };
}

function getOpinionSlugs(): string[] {
  if (!fs.existsSync(OPINIONS_DIR)) return [];
  return fs
    .readdirSync(OPINIONS_DIR, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".mdx"))
    .map((d) => d.name.replace(/\.mdx$/, ""));
}

export function getAllOpinions(): Post[] {
  return getOpinionSlugs()
    .map((slug) => {
      const filePath = path.join(OPINIONS_DIR, `${slug}.mdx`);
      if (!fs.existsSync(filePath)) return null;
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      const frontmatter = data as PostFrontmatter;
      if (frontmatter.draft && process.env.NODE_ENV === "production") return null;
      return { slug, frontmatter, readingTime: Math.ceil(raw.split(/\s+/).length / 200) };
    })
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getOpinionBySlug(slug: string): {
  frontmatter: PostFrontmatter;
  source: string;
} | null {
  const filePath = path.join(OPINIONS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, source: content };
}
