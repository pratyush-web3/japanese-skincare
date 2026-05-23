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
    base: "text-xs font-light tracking-[0.15em] relative py-1",
    active: "text-accent-aka",
    idle: "text-text hover:text-accent-aka",
    line: "bg-accent-aka",
  },
  "footer-light": {
    base: "text-sm font-light tracking-wide relative inline-block py-0.5",
    active: "text-text",
    idle: "text-text-muted hover:text-accent-aka",
    line: "bg-accent-warm",
  },
  "footer-dark": {
    base: "text-sm font-light tracking-wide relative inline-block py-0.5",
    active: "text-[#f5f0e8]",
    idle: "text-[#f5f0e8]/65 hover:text-[#f5f0e8]",
    line: "bg-accent-warm",
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
