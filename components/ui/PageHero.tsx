"use client";

import { motion } from "framer-motion";
import PremiumImage from "./PremiumImage";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-10 pb-6 md:pb-8">
      <div className="absolute inset-0 pattern-kikkou opacity-70" />
      {image ? (
        <div className="hero-shell py-4 md:py-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 glass-panel rounded-[1.75rem] p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-80 md:min-h-96"
            >
              <PageHeroContent title={title} subtitle={subtitle} />
              <div className="mt-10 pt-5 border-t border-border flex flex-wrap gap-2 text-[10px] tracking-[0.16em] text-text-light font-semibold uppercase">
                <span className="rounded-full border border-border bg-white/70 px-3 py-2">Sensitive-skin conscious</span>
                <span className="rounded-full border border-border bg-white/70 px-3 py-2">Ingredient transparency</span>
                <span className="rounded-full border border-border bg-white/70 px-3 py-2">Made in Japan</span>
              </div>
            </motion.div>

            <div className="frame-shoji lg:col-span-7 min-h-80 md:min-h-96 relative shadow-[0_24px_70px_rgba(6,20,46,0.18)]">
              <PremiumImage
                src={image}
                alt={imageAlt || title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
              <div className="absolute inset-0 bg-linear-to-br from-surface-dark/35 via-transparent to-accent/10" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-surface-dark/55 px-3 py-1 text-[10px] tracking-[0.16em] text-[#ecf5ff] backdrop-blur-sm uppercase">
                Brand visual
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero-shell py-6 md:py-8 relative z-10">
          <div className="glass-panel rounded-[1.75rem] p-8 md:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-56 h-56 bg-primary/12 blur-3xl" />
            <PageHeroContent title={title} subtitle={subtitle} />
          </div>
        </div>
      )}
    </section>
  );
}

function PageHeroContent({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow mb-4">Yūbi Kyoto</p>
        <span className="block h-px w-20 bg-linear-to-r from-primary/70 to-accent/55 mb-6" />
        <h1 className="heading-display text-4xl md:text-5xl lg:text-[3.6rem] text-text">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 leading-relaxed font-medium max-w-xl text-[15px] text-text-muted">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
