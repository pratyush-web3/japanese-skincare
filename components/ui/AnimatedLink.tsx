"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  active?: boolean;
  variant?: "nav" | "footer-light" | "footer-dark";
  onClick?: () => void;
};

const variantStyles = {
  nav: {
    base: "text-[11px] font-semibold tracking-[0.16em] relative py-1 uppercase",
    active: "text-primary",
    idle: "text-text-muted hover:text-primary",
    line: "bg-primary",
  },
  "footer-light": {
    base: "text-sm font-medium tracking-wide relative inline-block py-0.5",
    active: "text-text",
    idle: "text-text-muted hover:text-primary",
    line: "bg-primary",
  },
  "footer-dark": {
    base: "text-sm font-medium tracking-wide relative inline-block py-0.5",
    active: "text-[#ecf5ff]",
    idle: "text-[#ecf5ff]/70 hover:text-[#ecf5ff]",
    line: "bg-accent",
  },
};

export default function AnimatedLink({
  href,
  children,
  className = "",
  active = false,
  variant = "nav",
  onClick,
}: AnimatedLinkProps) {
  const styles = variantStyles[variant];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group ${styles.base} ${active ? styles.active : styles.idle} ${className}`}
    >
      {children}
      <motion.span
        className={`absolute left-0 bottom-0 h-px ${styles.line}`}
        initial={false}
        animate={{ width: active ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}
