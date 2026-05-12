import type { MDXComponents } from "mdx/types";
import { GifFigure } from "./GifFigure";

export const mdxComponents: MDXComponents = {
  GifFigure,
  img: (props) => (
    <img
      {...props}
      alt={props.alt || ""}
      loading="lazy"
      className="max-w-full h-auto rounded"
    />
  ),
  a: (props) => (
    <a
      {...props}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="font-mono text-sm bg-[var(--color-code-bg)] border border-[var(--color-border)] rounded-md p-4 overflow-x-auto leading-relaxed"
    />
  ),
  code: (props) => {
    if (typeof props.className === "string") {
      return <code {...props} />;
    }
    return (
      <code className="font-mono text-[0.875em] bg-[var(--color-code-bg)] px-[0.35em] py-[0.15em] rounded border border-[var(--color-border)]">
        {props.children}
      </code>
    );
  },
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table {...props} className="w-full border-collapse text-sm" />
    </div>
  ),
  th: (props) => (
    <th
      {...props}
      className="border border-[var(--color-border)] px-3 py-2 text-left font-semibold bg-[var(--color-code-bg)]"
    />
  ),
  td: (props) => (
    <td
      {...props}
      className="border border-[var(--color-border)] px-3 py-2"
    />
  ),
};
