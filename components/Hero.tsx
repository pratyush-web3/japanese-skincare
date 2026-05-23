"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PremiumImage from "@/components/ui/PremiumImage";
import ZenDivider from "@/components/decorative/ZenDivider";
import { SeigaihaPattern, SakuraAccent } from "@/components/decorative/JapaneseBackdrop";
import { images } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f4ed]">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,149,106,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(212,165,165,0.08)_0%,transparent_50%)]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-asanoha opacity-50" />

      {/* Main content */}
      <div className="hero-shell relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[92svh] py-16 md:py-24 lg:py-32">
          
          {/* Left content panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Japanese subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent-aka/40" />
              <p className="eyebrow-jp">京都の静けさを、肌へ</p>
            </div>

            {/* English category */}
            <p className="eyebrow mb-6 pl-11">KYOTO RITUAL SKINCARE</p>

            {/* Decorative divider */}
            <ZenDivider className="mb-8 ml-11" />

            {/* Main heading */}
            <h1 className="heading-display text-[2.5rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.2rem] leading-[1.08] tracking-[0.02em] max-w-[8ch] text-text">
              素肌に、
              <br />
              <span className="font-serif font-light">静かなご褒美を。</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-text-muted leading-loose font-light text-[15px] md:text-[16px] max-w-md pl-11">
              日本の自然素材と、京都の美意識から生まれたスキンケア。
              <br />
              肌に触れるたび、余白のある上質さが静かに広がります。
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4 pl-11">
              <Link 
                href="/products" 
                className="btn-primary group shadow-[0_8px_24px_rgba(139,58,58,0.2)]"
              >
                商品を見る
                <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary">
                ブランドについて
              </Link>
            </div>

            {/* Trust indicators */}
            <ul className="mt-12 pt-8 border-t border-border/60 grid grid-cols-3 gap-6 pl-11">
              {[
                { num: "01", label: "創業", value: "2018" },
                { num: "02", label: "製造", value: "京都" },
                { num: "03", label: "処方", value: "天然由来" },
              ].map((item) => (
                <li key={item.num}>
                  <span className="text-[10px] tracking-[0.2em] text-accent-aka/70 font-serif">
                    {item.num}
                  </span>
                  <p className="text-[9px] text-text-muted mt-1 tracking-widest uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm mt-1 font-serif text-text">{item.value}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative order-1 lg:order-2"
          >
            <div className="grid gap-5 lg:gap-6 items-end">
              
              {/* Main hero image */}
              <div className="frame-shoji lg:col-span-8 min-h-[400px] md:min-h-[500px] relative group">
                <PremiumImage
                  src={images.hero}
                  alt="京都の静けさを感じるスキンケアの静物"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-sumi/20 via-transparent to-transparent" />
                
                {/* Premium badge */}
                <div className="absolute left-6 top-6 z-10 flex items-center gap-2 backdrop-blur-md bg-accent-sumi/40 px-4 py-2 border border-white/15">
                  <SakuraAccent className="w-4 h-4 text-accent-sakura" />
                  <span className="text-[10px] tracking-[0.3em] text-[#f5f0e8]">KYOTO EDITION</span>
                </div>

                {/* Caption card */}
                <div className="absolute right-6 bottom-6 z-10 max-w-64 backdrop-blur-md bg-surface/90 px-5 py-4 border border-border/50 shadow-lg">
                  <p className="text-[9px] tracking-[0.3em] text-accent-aka/80 mb-2 uppercase">
                    Signature Collection
                  </p>
                  <p className="font-serif text-sm leading-relaxed text-text">
                    上質な光と肌なじみを両立した、余白のある一枚。
                  </p>
                </div>
              </div>

              {/* Secondary images */}
              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                <div className="frame-shoji min-h-[180px] relative group overflow-hidden">
                  <PremiumImage
                    src={images.spa}
                    alt="静かな和のスパ空間"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-sumi/50 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 z-10">
                    <p className="text-[10px] tracking-[0.25em] text-[#f5f0e8]/80 uppercase">
                      Spa Ritual
                    </p>
                    <p className="font-serif text-sm text-[#f5f0e8] mt-0.5">
                      静寂の時間
                    </p>
                  </div>
                </div>

                <div className="frame-shoji min-h-[180px] relative group overflow-hidden">
                  <PremiumImage
                    src={images.ritual}
                    alt="整えられたスキンケアのルーティン"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-sumi/45 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 z-10">
                    <p className="text-[9px] tracking-[0.3em] text-[#f5f0e8]/70 uppercase">
                      Morning Ritual
                    </p>
                    <p className="font-serif text-sm text-[#f5f0e8] mt-0.5">
                      毎日の儀式
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical decorative text */}
            <p
              className="hidden xl:block absolute -left-6 top-1/2 -translate-y-1/2 vertical-jp text-[11px] tracking-[0.4em] text-text-muted/60 font-serif z-20"
              aria-hidden
            >
              日本の自然素材
            </p>

            {/* Decorative seigaiha pattern */}
            <div className="absolute -bottom-8 -right-8 w-32 h-20 text-accent-warm/15 hidden md:block">
              <SeigaihaPattern className="w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-10"
      >
        <span className="vertical-jp text-[10px] tracking-[0.3em] text-text-muted/60 h-10 font-light">
          スクロール
        </span>
        <motion.div
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-accent-aka/60 to-transparent origin-top"
        />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-2 h-2 text-accent-sakura/20 animate-float hidden lg:block">
        <SakuraAccent className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-20 w-3 h-3 text-accent-sakura/15 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <SakuraAccent className="w-full h-full" />
      </div>
    </section>
  );
}