"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navLinks } from "@/lib/data";
import AnimatedLink from "@/components/ui/AnimatedLink";
import { SeigaihaPattern } from "@/components/decorative/JapaneseBackdrop";

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

  // Close mobile menu when route changes
  useEffect(() => {
    if (pathname) {
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed z-50 left-0 right-0 transition-all duration-700 border-b ${
          scrolled || open
            ? "top-0 bg-surface/97 backdrop-blur-xl border-border shadow-[0_2px_24px_rgba(42,40,38,0.06)]"
            : "top-0 bg-transparent border-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 shrink-0 py-2"
          >
            {/* Seal stamp logo */}
            <span className="flex items-center justify-center w-9 h-9 border border-accent-aka/70 text-accent-aka font-serif text-sm bg-surface/80 group-hover:bg-accent-aka group-hover:text-white transition-colors duration-500">
              湯
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] leading-none text-text">
                {brand.name}
              </span>
              <span className="text-[8px] tracking-[0.4em] text-text-muted mt-0.5 font-light">
                京都・京都市
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
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

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 btn-primary !py-2.5 !px-6 !text-[11px] shadow-[0_8px_24px_rgba(139,58,58,0.18)] hover:shadow-[0_12px_32px_rgba(139,58,58,0.28)]"
            >
              商品を見る
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              className="lg:hidden w-11 h-11 flex items-center justify-center border border-border text-text bg-surface/80 hover:bg-surface transition-colors"
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
      </header>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-surface/99 backdrop-blur-xl"
          >
            {/* Decorative background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 text-accent-warm/5 pointer-events-none">
              <SeigaihaPattern className="w-full h-full" />
            </div>

            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="h-full flex flex-col justify-center section-container pt-24 pb-12"
            >
              {/* Menu header */}
              <div className="mb-12">
                <p className="eyebrow mb-2">NAVIGATION</p>
                <div className="h-px w-16 bg-accent-aka/40" />
              </div>

              {/* Menu links */}
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className={`block font-serif text-3xl md:text-4xl py-5 px-2 border-l-2 transition-all duration-300 tracking-wide ${
                        pathname === link.href
                          ? "border-accent-aka text-accent-aka pl-4"
                          : "border-transparent text-text hover:border-accent-aka/40 hover:text-accent-aka hover:pl-4"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Menu footer */}
              <motion.div variants={itemVariants} className="mt-16">
                <Link 
                  href="/products" 
                  className="btn-primary w-full justify-center shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  商品を見る
                </Link>
                
                <div className="mt-10 flex items-center gap-4 text-text-muted/60">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[10px] tracking-[0.3em]">YŪBI KYOTO</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <p className="mt-8 vertical-jp h-32 text-sm text-text-muted/50 font-serif tracking-[0.3em] text-center mx-auto">
                  {brand.tagline}
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}