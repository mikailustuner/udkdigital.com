/* Reusable top navigation with theme toggle. */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#contact") return pathname === "/";
    return pathname === href;
  };

  return (
    <nav className="glass sticky top-4 z-20 mb-2 flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-[var(--fg-strong)] backdrop-blur-xl">
      <div className="flex items-center gap-2 font-semibold text-[var(--fg-strong)]">
        <span className="relative h-8 w-8">
          <Image
            src="/udklogo/white.png"
            alt="UDK Digital - Technology Platform Logo - Excellence in Innovation"
            fill
            sizes="32px"
            className="logo-dark object-contain"
            priority
          />
          <Image
            src="/udklogo/black.png"
            alt="UDK Digital - Technology Platform Logo - Excellence in Innovation"
            fill
            sizes="32px"
            className="logo-light object-contain"
            priority
          />
        </span>
        <span>UDK Digital</span>
      </div>
      <div className="hidden items-center gap-2 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition hover:text-[var(--fg-strong)] ${
              isActive(link.href)
                ? "glass border border-[var(--accent)] text-[var(--fg-strong)]"
                : "text-[var(--fg-muted)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <ThemeToggle />
        <Link
          href="/#contact"
          className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 px-4 py-2 text-xs font-semibold text-black shadow-[0_16px_40px_-25px_rgba(0,240,255,0.7)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_50px_-24px_rgba(179,136,255,0.9)]"
        >
          Get in touch
        </Link>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default TopNav;

