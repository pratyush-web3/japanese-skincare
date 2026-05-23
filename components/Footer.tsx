"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { brand, navLinks } from "@/lib/data";
import { site, legalLinks } from "@/lib/site";
import AnimatedLink from "@/components/ui/AnimatedLink";
import FadeIn from "@/components/ui/FadeIn";

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
        <p className="eyebrow mb-2 text-accent-soft/90!">{labelEn}</p>
      )}
      <p className="font-serif text-sm tracking-wide text-[#ecf5ff] mb-5">{label}</p>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative section-sumi section-container py-16 md:py-20 lg:py-24 rounded-t-[2.25rem] border border-white/10">
        <div className="absolute -top-16 right-16 w-72 h-72 rounded-full bg-primary/18 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-72 h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pb-12 border-b border-white/15">
            <div className="flex items-start gap-5 lg:max-w-sm">
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl border border-primary/40 text-accent font-serif text-lg shrink-0 bg-white/8">
                YB
              </span>
              <div>
                <Link
                  href="/"
                  className="font-serif text-3xl md:text-4xl tracking-[0.08em] hover:text-accent transition-colors leading-none text-[#ecf5ff]"
                >
                  {brand.name}
                </Link>
                <p className="mt-4 text-[#ecf5ff]/75 font-medium leading-relaxed max-w-sm text-sm">
                  {brand.tagline}
                </p>
                <p className="mt-3 text-[#ecf5ff]/55 font-medium text-xs tracking-wide">
                  京都で、静かな使い心地と信頼感のある処方を目指して。
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center ml-auto text-[#ecf5ff]/65 text-sm font-medium max-w-sm leading-relaxed">
              見た目よりも、使い続けやすさを大切にしたスキンケアをお届けします。
            </div>

            <Link
              href="/contact"
              className="lg:ml-8 group inline-flex items-center gap-3 btn-primary shrink-0 self-start"
            >
              ご相談はこちら
              <ArrowUpRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pt-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <FooterColumn label="ブランド" labelEn="ブランド">
              <p className="text-sm text-[#ecf5ff]/75 leading-relaxed font-medium">
                Yūbi は、京都の感性と現代の処方設計を重ねたスキンケアブランドです。
                使うたびに落ち着きを感じられることを大切にしています。
              </p>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/25 text-[#ecf5ff]/70 hover:text-accent hover:border-accent/50 transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <div className="h-px flex-1 bg-white/20" />
                <span className="text-[10px] tracking-[0.16em] text-[#ecf5ff]/55 uppercase">Latest updates</span>
              </div>
            </FooterColumn>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <FooterColumn label="メニュー" labelEn="メニュー">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <AnimatedLink key={link.href} href={link.href} variant="footer-light">
                    {link.label}
                  </AnimatedLink>
                ))}
              </nav>
            </FooterColumn>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <FooterColumn label="お問い合わせ" labelEn="お問い合わせ">
              <ul className="space-y-4 text-sm text-[#ecf5ff]/70 font-medium">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-start gap-3 hover:text-accent transition-colors"
                  >
                    <Mail size={15} className="mt-0.5 text-accent shrink-0" strokeWidth={1.5} />
                    <span>{site.contact.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 text-accent shrink-0" strokeWidth={1.5} />
                  <span>{site.contact.address}</span>
                </li>
                <li className="pl-8 text-xs tracking-wide text-[#ecf5ff]/50">
                  {site.contact.hours}
                </li>
              </ul>
            </FooterColumn>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3 lg:text-right">
            <FooterColumn label="法的情報" labelEn="法的情報" align="right">
              <nav className="flex flex-col gap-3 lg:items-end">
                {legalLinks.map((link) => (
                  <AnimatedLink key={link.href} href={link.href} variant="footer-light">
                    {link.label}
                  </AnimatedLink>
                ))}
              </nav>

              <div className="mt-6 lg:flex lg:justify-end">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/8">
                  <Sparkles className="w-3 h-3 text-accent" strokeWidth={1.7} />
                  <span className="text-[10px] tracking-[0.16em] text-[#ecf5ff]/70 font-semibold uppercase">
                    {site.company.madeIn}
                  </span>
                </div>
              </div>
            </FooterColumn>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-[#070e1b] border-t border-white/10">
        <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.16em] text-[#ecf5ff]/50 font-medium uppercase">
          <p>© {new Date().getFullYear()} {brand.name}</p>
          <div className="flex items-center gap-6">
            <p>{site.company.footerLine}</p>
            <span className="w-1 h-1 rounded-full bg-[#ecf5ff]/30" />
            <p>すべての権利を保有します</p>
          </div>
        </div>
      </div>
    </footer>
  );
}