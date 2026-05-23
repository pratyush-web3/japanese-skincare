"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PremiumImage from "@/components/ui/PremiumImage";
import FadeIn from "@/components/ui/FadeIn";
import ZenDivider from "@/components/decorative/ZenDivider";
import { images } from "@/lib/data";

export default function BrandStory() {
  return (
    <section className="section-padding section-sakura border-y border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <FadeIn className="lg:col-span-6">
            <div className="frame-shoji aspect-[4/5] max-h-[580px]">
              <PremiumImage
                src={images.kyoto}
                alt="京都の庭園と、和の静けさ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-6">
            <p className="eyebrow-jp mb-2">私たちについて</p>
            <p className="eyebrow mb-5">OUR STORY</p>
            <ZenDivider className="mb-8" />
            <h2 className="heading-section text-3xl md:text-[2.35rem]">
              肌と、
              <br />
              静かに向き合う時間。
            </h2>
            <p className="mt-8 text-text-muted leading-[2] font-light">
              Yūbiは、京都の小さな工房から始まりました。
              派手な約束はせず、素材の声に耳を傾け、肌が本当に求めるものだけを届けたい——
              そんな想いが、一本一本の製品に込められています。
            </p>
            <p className="mt-5 text-text-muted leading-[2] font-light">
              忙しい毎日のなかで、ほんの少し立ち止まる。
              それが、私たちの考える、いちばん贅沢なスキンケアです。
            </p>
            <Link href="/about" className="btn-secondary mt-10">
              ブランドストーリーを読む
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
