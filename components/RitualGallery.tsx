"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Droplets, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import PremiumImage from "@/components/ui/PremiumImage";
import FadeIn from "@/components/ui/FadeIn";
import ZenDivider from "@/components/decorative/ZenDivider";
import { images } from "@/lib/data";

const rituals = [
  {
    icon: Leaf,
    title: "植物の気配",
    text: "抹茶、椿、柚子。日本の素材が持つ静かな力だけを、肌へ。",
  },
  {
    icon: Droplets,
    title: "うるおいの余韻",
    text: "べたつかず、しっとりと包む。日中も夜も、心地よさが続きます。",
  },
  {
    icon: Sparkles,
    title: "儀式のように",
    text: "毎日のケアを、慌ただしい作業ではなく、整える時間へ。",
  },
];

export default function RitualGallery() {
  return (
    <section className="section-padding section-sakura border-b border-border overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow-jp mb-2">毎日の儀式</p>
            <p className="eyebrow mb-5">RITUAL</p>
            <ZenDivider className="mb-8" />
            <h2 className="heading-section text-3xl md:text-[2.5rem]">
              肌にふれるたび、
              <br />
              空気までやわらぐ。
            </h2>
            <p className="mt-6 text-text-muted leading-loose font-light max-w-xl">
              Yūbi は、京都の静けさをそのまま閉じ込めたようなスキンケア。
              素材、香り、質感、そのすべてが暮らしに馴染むよう設計されています。
            </p>

            <div className="mt-8 space-y-4">
              {rituals.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center border border-accent-warm/50 text-accent-aka bg-surface/70 shrink-0">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-serif text-base tracking-wide">{item.title}</h3>
                      <p className="mt-1 text-sm text-text-muted leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/products" className="btn-secondary mt-10">
              コレクションを見る
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
              <div className="frame-shoji sm:col-span-2 lg:col-span-7 min-h-96 relative">
                <PremiumImage
                  src={images.spa}
                  alt="京都の静かなスパ空間"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent-sumi/35 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 z-10 text-[#f5f0e8]">
                  <p className="text-[10px] tracking-[0.35em] opacity-75">KYOTO SPA</p>
                  <p className="font-serif text-lg mt-1">Evening reset</p>
                </div>
              </div>

              <div className="card-washi sm:col-span-1 lg:col-span-5 p-6 md:p-7 flex flex-col justify-between bg-surface/95">
                <div>
                  <p className="eyebrow mb-2">SIGNATURE</p>
                  <h3 className="heading-section text-2xl md:text-[2rem]">毎日続けたくなる心地よさ</h3>
                  <p className="mt-5 text-sm leading-loose font-light text-text-muted">
                    過剰な演出を抑え、肌が落ち着くことだけを丁寧に考えた処方。
                    穏やかな香りと、手に残る質感まで整えています。
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  <div className="border border-border bg-background/70 p-4">
                    <p className="text-[10px] tracking-[0.28em] text-accent-aka/80">01</p>
                    <p className="mt-2 font-serif">素材重視</p>
                  </div>
                  <div className="border border-border bg-background/70 p-4">
                    <p className="text-[10px] tracking-[0.28em] text-accent-aka/80">02</p>
                    <p className="mt-2 font-serif">上質な香り</p>
                  </div>
                </div>
              </div>

              <div className="frame-shoji sm:col-span-1 lg:col-span-5 min-h-48 relative lg:col-start-8">
                <PremiumImage
                  src={images.ritual}
                  alt="整えられたスキンケアのルーティン"
                  fill
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent-sumi/40 via-transparent to-transparent" />
                <p className="absolute left-5 bottom-5 z-10 text-[#f5f0e8] text-sm font-serif tracking-wide">
                  Morning ritual
                </p>
              </div>

              <div className="frame-shoji sm:col-span-1 lg:col-span-7 min-h-48 relative lg:col-start-6 lg:-mt-2">
                <PremiumImage
                  src={images.sakura}
                  alt="桜の柔らかな気配"
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent-sumi/38 via-transparent to-transparent" />
                <p className="absolute left-5 bottom-5 z-10 text-[#f5f0e8] text-sm font-serif tracking-wide">
                  Soft seasonal light
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}