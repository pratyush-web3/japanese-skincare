"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { brand, navLinks } from "@/lib/data";
import { site, legalLinks } from "@/lib/site";
import AnimatedLink from "@/components/ui/AnimatedLink";
import FadeIn from "@/components/ui/FadeIn";
import { SeigaihaPattern, SakuraAccent } from "@/components/decorative/JapaneseBackdrop";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FooterColumn({
  label,
  labelEn,
  children,
  align = "left",
}: {
  label: string;
  labelEn?: string;
  children: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "lg:text-right" : ""}>
      {labelEn && (
        <p className="eyebrow mb-2">{labelEn}</p>
      )}
      <p className="font-serif text-sm tracking-wide text-text mb-5">{label}</p>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main footer content */}
      <div className="relative bg-surface-warm section-container py-16 md:py-20 lg:py-24">
        {/* Decorative background pattern */}
        <div className="absolute top-0 right-0 w-80 h-80 text-accent-warm/5 pointer-events-none">
          <SeigaihaPattern className="w-full h-full" />
        </div>

        <FadeIn>
          {/* Top section with logo and CTA */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pb-12 border-b border-border/70">
            {/* Logo and tagline */}
            <div className="flex items-start gap-5 lg:max-w-sm">
              <span className="flex items-center justify-center w-14 h-14 border-2 border-accent-aka text-accent-aka font-serif text-lg shrink-0 bg-surface/60">
                湯
              </span>
              <div>
                <Link
                  href="/"
                  className="font-serif text-3xl md:text-4xl tracking-[0.2em] hover:text-accent-aka transition-colors leading-none"
                >
                  {brand.name}
                </Link>
                <p className="mt-4 text-text-muted font-light leading-loose max-w-sm text-sm">
                  {brand.tagline}
                </p>
                <p className="mt-3 text-text-light font-light text-xs tracking-wide">
                  京都の静けさと、日本の自然素材から生まれたスキンケア。
                </p>
              </div>
            </div>

            {/* Vertical decorative text */}
            <div className="hidden lg:flex items-center ml-auto">
              <p
                className="vertical-jp font-serif text-sm tracking-[0.4em] text-text-muted/50 h-40"
                aria-hidden
              >
                素肌に、静かなご褒美を。
              </p>
            </div>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="lg:ml-8 group inline-flex items-center gap-3 btn-secondary shrink-0 self-start shadow-[0_8px_20px_rgba(42,40,38,0.04)]"
            >
              お問い合わせ
              <ArrowUpRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Footer columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pt-12"
        >
          {/* Brand description */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <FooterColumn label="ブランド" labelEn="BRAND">
              <p className="text-sm text-text-muted leading-loose font-light">
                Yūbiは、京都の小さな工房から始まりました。
                <br />
                派手な約束はせず、素材の声に耳を傾け、
                <br />
                肌が本当に求めるものだけを届けたい——
                <br />
                そんな想いが、一本一本の製品に込められています。
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-border text-text-muted hover:text-accent-aka hover:border-accent-aka/50 transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <div className="h-px flex-1 bg-border/50" />
                <span className="text-[10px] tracking-[0.2em] text-text-muted/60">FOLLOW US</span>
              </div>
            </FooterColumn>
          </motion.div>

          {/* Navigation links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <FooterColumn label="メニュー" labelEn="MENU">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <AnimatedLink key={link.href} href={link.href} variant="footer-light">
                    {link.label}
                  </AnimatedLink>
                ))}
              </nav>
            </FooterColumn>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <FooterColumn label="お問い合わせ" labelEn="CONTACT">
              <ul className="space-y-4 text-sm text-text-muted font-light">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-start gap-3 hover:text-accent-aka transition-colors"
                  >
                    <Mail size={15} className="mt-0.5 text-accent-aka shrink-0" strokeWidth={1.5} />
                    <span>{site.contact.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 text-accent-aka shrink-0" strokeWidth={1.5} />
                  <span>{site.contact.address}</span>
                </li>
                <li className="pl-8 text-xs tracking-wide text-text-light">
                  {site.contact.hours}
                </li>
              </ul>
            </FooterColumn>
          </motion.div>

          {/* Legal links */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:text-right">
            <FooterColumn label="法的情報" labelEn="LEGAL" align="right">
              <nav className="flex flex-col gap-3 lg:items-end">
                {legalLinks.map((link) => (
                  <AnimatedLink key={link.href} href={link.href} variant="footer-light">
                    {link.label}
                  </AnimatedLink>
                ))}
              </nav>
              
              {/* Made in Japan badge */}
              <div className="mt-6 lg:flex lg:justify-end">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-border/50 bg-surface/50">
                  <SakuraAccent className="w-3 h-3 text-accent-sakura" />
                  <span className="text-[10px] tracking-[0.2em] text-text-muted">
                    {site.company.madeIn}
                  </span>
                </div>
              </div>
            </FooterColumn>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="section-sumi border-t border-border-dark">
        <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.25em] text-[#f5f0e8]/50 font-light">
          <p>© {new Date().getFullYear()} {brand.name}</p>
          <div className="flex items-center gap-6">
            <p>{site.company.footerLine}</p>
            <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
            <p>ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}