"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/posts", label: "Posts" },
  { href: "/opinions", label: "Opinions" },
  { href: "/interests", label: "Interests" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight no-underline text-[var(--color-fg)] hover:opacity-70 transition-opacity"
      >
        Yaochen Zhu
      </Link>

      <nav className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm no-underline transition-opacity hover:opacity-70 ${
              pathname === href || pathname.startsWith(href + "/")
                ? "text-[var(--color-fg)] font-medium"
                : "text-[var(--color-muted)]"
            }`}
          >
            {label}
          </Link>
        ))}

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="ml-2 p-1.5 rounded text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        )}
      </nav>
    </header>
  );
}
