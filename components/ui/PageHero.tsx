"use client";

import { motion } from "framer-motion";
import PremiumImage from "./PremiumImage";
import ZenDivider from "@/components/decorative/ZenDivider";

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
    <section className="relative overflow-hidden pt-16 md:pt-18 border-b border-border">
      {image ? (
        <div className="hero-shell py-6 md:py-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 bg-surface/92 border border-border shadow-[0_20px_60px_rgba(42,40,38,0.08)] p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-80 md:min-h-96"
            >
              <PageHeroContent title={title} subtitle={subtitle} />
              <div className="mt-10 pt-5 border-t border-border flex items-center justify-between text-[10px] tracking-[0.28em] text-text-muted">
                <span>YŪBI</span>
                <span>KYOTO</span>
                <span>RITUAL</span>
              </div>
            </motion.div>

            <div className="frame-shoji lg:col-span-7 min-h-80 md:min-h-96 relative">
              <PremiumImage
                src={image}
                alt={imageAlt || title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
              <div className="absolute inset-0 bg-linear-to-br from-accent-sumi/28 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-accent-sumi/50 px-3 py-1 text-[10px] tracking-[0.35em] text-[#f5f0e8] backdrop-blur-sm">
                SELECTED SCENE
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero-shell py-8 md:py-10">
          <div className="bg-surface-beige border border-border shadow-[0_20px_60px_rgba(42,40,38,0.08)] p-8 md:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-56 h-56 bg-accent-warm/10 blur-3xl" />
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
        <p className="eyebrow mb-4">YŪBI</p>
        <ZenDivider className="mb-6" />
        <h1 className="heading-display text-4xl md:text-5xl text-text">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 leading-loose font-light max-w-xl text-[15px] text-text-muted">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
