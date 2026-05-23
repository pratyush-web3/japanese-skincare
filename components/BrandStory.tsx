"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PremiumImage from "@/components/ui/PremiumImage";
import FadeIn from "@/components/ui/FadeIn";
import { images } from "@/lib/data";

export default function BrandStory() {
  return (
    <section className="section-padding section-sakura border-y border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <FadeIn className="lg:col-span-6">
            <div className="frame-shoji aspect-4/5 max-h-145 shadow-[0_22px_65px_rgba(8,21,45,0.16)]">
              <PremiumImage
                src={images.kyoto}
                alt="京都の静かな空気を映したブランドイメージ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-6">
            <p className="eyebrow-jp mb-2">ブランドの土台</p>
            <p className="eyebrow mb-5">ブランドストーリー</p>
            <span className="block h-px w-20 bg-linear-to-r from-primary/60 to-accent/60 mb-8" />
            <h2 className="heading-section text-3xl md:text-[2.45rem]">
              処方から、
              <br />
              体験まで丁寧に。
            </h2>

            <p className="mt-7 text-text-muted leading-relaxed font-medium">
              Yūbi は、京都で生まれた小さな企画室から始まりました。
              いちばん大切にしたのは、見た目の華やかさよりも、毎日使いたくなる誠実さです。
            </p>

            <p className="mt-4 text-text-muted leading-relaxed font-medium">
              椿や柚子、米ぬかのような日本らしい素材を、現代の暮らしに合う処方へ。
              静かで、清潔感があり、長く信頼できるものづくりを続けています。
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                "京都の感性",
                "現代の処方設計",
                "使い続けやすい設計",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-white/84 px-4 py-3 text-center text-[11px] tracking-[0.16em] text-text-light font-semibold uppercase">
                  {item}
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-secondary mt-10">
              ブランドの考え方を読む
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
