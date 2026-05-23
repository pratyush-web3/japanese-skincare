"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import PremiumImage from "@/components/ui/PremiumImage";
import { brandStats, images } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-8 lg:pt-10 pb-10 md:pb-12">
      <div className="absolute inset-0 pattern-asanoha opacity-60" />
      <div className="absolute -top-24 right-[6%] h-80 w-80 rounded-full bg-accent/18 blur-3xl" />
      <div className="absolute -bottom-32 left-[3%] h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="hero-shell relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center min-h-[82svh] pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-border bg-white/84 px-4 py-2 mb-6 shadow-[0_10px_24px_rgba(15,23,42,0.07)]">
              <Sparkles size={13} className="text-accent" strokeWidth={1.8} />
              <p className="text-[11px] font-semibold tracking-[0.18em] text-text-light uppercase">
                Kyoto / modern ritual skincare
              </p>
            </div>

            <p className="eyebrow-jp mb-5">京都発のプレミアムスキンケア</p>

            <h1 className="heading-display text-[3rem] sm:text-[3.9rem] md:text-[4.6rem] lg:text-[5.35rem] max-w-[10ch] text-text">
              肌の印象を、
              <br />
              静かに格上げする。
            </h1>

            <p className="mt-7 text-text-muted leading-ja font-medium text-[15px] md:text-[17px] max-w-[60ch] tracking-ja">
              椿、柚子、米ぬか、抹茶。
              素材の個性をそのまま見せるのではなく、毎日続けられる軽さと信頼感に整えた、静かなプレミアムケアです。
            </p>

            <p className="mt-5 text-text-muted/92 leading-ja text-[14px] md:text-[15px] max-w-[58ch]">
              朝はベタつかず、夜は重すぎない。肌の調子を上げたいけれど、派手な手応えはいらない。そんな日常の使い方に合わせて、処方と使い心地のバランスを細かく整えています。
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] tracking-[0.16em] text-text-light font-semibold uppercase">
              <span className="rounded-full border border-border bg-white/75 px-3 py-2">Sensitive-skin conscious</span>
              <span className="rounded-full border border-border bg-white/75 px-3 py-2">Patch-test friendly design</span>
              <span className="rounded-full border border-border bg-white/75 px-3 py-2">Ingredient transparency</span>
              <span className="rounded-full border border-border bg-white/75 px-3 py-2">Made in Japan</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3.5">
              <Link
                href="/products"
                className="btn-primary group"
              >
                製品を見る
                <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link href="/about" className="btn-secondary group">
                ブランドについて
                <ArrowRight size={15} strokeWidth={1.5} className="text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3 max-w-3xl">
              {[
                { label: "使用感", value: "軽く、静かに、あと残りしない" },
                { label: "設計", value: "日常のルーティンに合わせて最適化" },
                { label: "品質", value: "国内生産と丁寧な確認体制" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-white/78 px-4 py-4 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
                  <p className="text-[10px] tracking-[0.18em] text-text-light font-semibold uppercase">{item.label}</p>
                  <p className="mt-2 text-sm text-text leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>

            <ul className="mt-10 pt-7 border-t border-border/80 grid sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-3xl">
              {brandStats.map((item) => (
                <li key={item.label} className="rounded-2xl border border-border bg-white/75 px-4 py-4 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
                  <p className="font-serif text-2xl md:text-[2rem] text-text leading-none">{item.value}</p>
                  <p className="mt-2 text-[10px] tracking-[0.18em] text-text-light font-semibold uppercase">{item.label}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative order-1 lg:order-2"
          >
            <div className="grid gap-4 lg:gap-5 items-end">
              <div className="frame-shoji min-h-95 md:min-h-125 relative group shadow-[0_24px_80px_rgba(7,17,29,0.22)]">
                <PremiumImage
                  src={images.hero}
                  alt="自然光の中に置かれたプレミアムスキンケアの構成"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-br from-surface-dark/35 via-transparent to-accent/12" />

                <div className="absolute left-5 bottom-5 z-10 rounded-3xl bg-white/88 backdrop-blur-md border border-white/60 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
                  <p className="text-[10px] tracking-[0.18em] text-primary/70 font-semibold uppercase">
                    Skin-safety focused
                  </p>
                  <p className="mt-1 text-sm text-text leading-relaxed max-w-56">
                    毎日使う前提で、刺激感・使い心地・見た目のすべてを整えました。
                  </p>
                </div>

                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full backdrop-blur-md bg-[rgba(9,19,38,0.55)] px-3.5 py-2 border border-white/16">
                  <CheckCircle2 className="w-4 h-4 text-accent" strokeWidth={1.7} />
                  <span className="text-[10px] tracking-[0.18em] text-[#ecf5ff] uppercase">Sensitive-skin conscious</span>
                </div>

                <div className="absolute right-5 bottom-5 z-10 max-w-72 rounded-3xl backdrop-blur-md bg-white/88 px-5 py-4 border border-white/70 shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
                  <p className="text-[10px] tracking-[0.18em] text-primary/80 mb-2 font-semibold uppercase">
                    Signature line
                  </p>
                  <p className="font-medium text-sm leading-relaxed text-text">
                    すっとなじみ、後肌に重さを残さない。日常に置いても違和感のない静かな質感を目指しました。
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="frame-shoji min-h-45 relative group overflow-hidden">
                  <PremiumImage
                    src={images.spa}
                    alt="静かなスパ空間で整えるスキンケアのひととき"
                    fill
                    sizes="(max-width: 1024px) 50vw, 24vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface-dark/60 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 z-10 text-[#eef6ff]">
                    <p className="text-[10px] tracking-[0.16em] opacity-85 font-semibold uppercase">
                      Spa finish
                    </p>
                    <p className="font-serif text-sm mt-0.5">
                      しっとり、でも軽い
                    </p>
                  </div>
                </div>

                <div className="frame-shoji min-h-45 relative group overflow-hidden">
                  <PremiumImage
                    src={images.ritual}
                    alt="丁寧に並べたスキンケアルーティン"
                    fill
                    sizes="(max-width: 1024px) 50vw, 24vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface-dark/60 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 z-10 text-[#eef6ff]">
                    <p className="text-[10px] tracking-[0.16em] opacity-75 font-semibold uppercase">
                      Routine design
                    </p>
                    <p className="font-serif text-sm mt-0.5">
                      静かに、きちんと
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-10 md:pb-16">
          {[
            "京都で企画・監修",
            "国内配送に対応",
            "必要なものだけを丁寧に",
            "¥10,000以上で送料無料",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-white/76 px-4 py-3 text-[11px] md:text-xs tracking-widest text-text-light font-semibold text-center shadow-[0_10px_22px_rgba(15,23,42,0.04)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}