"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navLinks } from "@/lib/data";
import AnimatedLink from "@/components/ui/AnimatedLink";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled || open ? "py-2" : "py-2.5"
        }`}
      >
        <div className="section-container">
          <div
            className={`rounded-[1.8rem] border transition-all duration-500 overflow-hidden backdrop-blur-2xl ${
              scrolled || open
                ? "bg-[color-mix(in_srgb,var(--color-surface)_78%,transparent)] border-border/80 shadow-[0_24px_56px_rgba(7,17,29,0.16)]"
                : "bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] border-border/55 shadow-[0_14px_34px_rgba(7,17,29,0.08)]"
            }`}
          >
            <div className="hidden md:flex items-center justify-between px-5 md:px-6 py-2 border-b border-border/45 bg-white/16 text-[10px] tracking-[0.18em] font-semibold uppercase text-text-light">
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-accent" strokeWidth={1.6} />
                Kyoto-made rituals
              </div>
              <div className="flex items-center gap-3">
                <span>2-4 day dispatch</span>
                <span className="w-1 h-1 rounded-full bg-border-strong" />
                <span>Sensitive-skin conscious</span>
                <span className="w-1 h-1 rounded-full bg-border-strong" />
                <span>Ingredient transparency</span>
              </div>
            </div>

            <div className="flex items-center justify-between h-16 md:h-[4.25rem] px-3 md:px-4">
              <Link href="/" className="group flex items-center gap-3 shrink-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-linear-to-br from-white/95 to-white/70 text-primary font-serif text-xs tracking-[0.18em] shadow-[0_10px_24px_rgba(15,23,42,0.08)] group-hover:from-primary group-hover:to-[#2e6bff] group-hover:text-white transition-all duration-500">
                  YB
                </span>
                <div className="flex flex-col">
                  <span className="font-serif text-base md:text-lg tracking-[0.12em] leading-none text-text">
                    {brand.name}
                  </span>
                  <span className="text-[10px] tracking-[0.16em] text-text-light mt-1 font-medium uppercase">
                    Premium skincare studio
                  </span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
                {navLinks.map((link) => (
                  <AnimatedLink
                    key={link.href}
                    href={link.href}
                    active={pathname === link.href}
                    variant="nav"
                  >
                    {link.label}
                  </AnimatedLink>
                ))}
              </nav>

              <div className="flex items-center gap-2 md:gap-3 pr-0 md:pr-1">
                <Link
                  href="/products"
                  className="hidden md:inline-flex items-center gap-2 btn-primary py-2.5! px-5! text-[10px]!"
                >
                  View products
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </Link>

                <button
                  type="button"
                  aria-label={open ? "メニューを閉じる" : "メニューを開く"}
                  aria-expanded={open}
                  className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-border text-text bg-white/90 hover:bg-white transition-colors shadow-[0_8px_20px_rgba(15,23,42,0.07)]"
                  onClick={() => setOpen(!open)}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {open ? (
                      <motion.span
                        key="close"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <X size={18} strokeWidth={1.5} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <Menu size={18} strokeWidth={1.5} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[rgba(7,17,29,0.82)] backdrop-blur-2xl"
          >
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="h-full flex flex-col justify-center section-container pt-24 pb-10"
            >
              <div className="mb-10">
                <p className="eyebrow text-white/75! mb-2">Menu</p>
                <div className="h-px w-16 bg-white/28" />
              </div>

              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block font-serif text-3xl md:text-4xl py-4 px-3 rounded-2xl border transition-all duration-300 tracking-wide ${
                        pathname === link.href
                          ? "border-white/24 bg-white/10 text-white"
                          : "border-transparent text-white/86 hover:border-white/20 hover:bg-white/6"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={itemVariants} className="mt-16">
                <Link
                  href="/products"
                  className="btn-primary w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  View products
                </Link>

                <div className="mt-8 flex items-center gap-4 text-white/55">
                  <div className="h-px flex-1 bg-white/20" />
                  <span className="text-[10px] tracking-[0.18em]">Yūbi Kyoto</span>
                  <div className="h-px flex-1 bg-white/20" />
                </div>

                <p className="mt-6 text-sm text-white/72 leading-relaxed text-center max-w-sm mx-auto">
                  Kyoto’s quiet discipline, translated into a daily ritual.
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}