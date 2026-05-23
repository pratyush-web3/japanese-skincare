"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, FlaskConical, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import PremiumImage from "@/components/ui/PremiumImage";
import FadeIn from "@/components/ui/FadeIn";
import { images } from "@/lib/data";

const rituals = [
  {
    icon: FlaskConical,
    title: "処方の精度",
    text: "うるおいの保持、手触りのよさ、肌へのやさしさを軸に処方を組み立てています。",
  },
  {
    icon: Leaf,
    title: "日本の素材",
    text: "椿、柚子、米発酵、抹茶。機能だけでなく、使い心地の静けさも大切にしています。",
  },
  {
    icon: ShieldCheck,
    title: "肌を優先する基準",
    text: "毎日使うものとして、刺激感や重さをできるだけ抑える設計を心がけています。",
  },
];

export default function RitualGallery() {
  return (
    <section className="section-padding section-sakura border-y border-border overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14 lg:mb-16">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow-jp mb-2">機能と所作</p>
            <p className="eyebrow mb-5">特徴</p>
            <span className="block h-px w-20 bg-linear-to-r from-primary/60 to-accent/60 mb-8" />
            <h2 className="heading-section text-3xl md:text-[2.7rem]">
              上質さを、
              <br />
              日常にそのまま。
            </h2>

            <p className="mt-6 text-text-muted leading-relaxed font-medium max-w-xl">
              流行を追うためのスキンケアではありません。
              重さのない使い心地で、毎日続けたくなることを大切にしています。
            </p>

            <p className="mt-4 text-text-muted/90 leading-relaxed text-sm md:text-[15px] max-w-xl">
              使う前から使い終えるまでの流れを整えることで、製品単体ではなく体験全体が自然につながるように設計しています。
            </p>

            <div className="mt-8 space-y-4">
              {rituals.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 rounded-xl items-center justify-center border border-primary/20 text-primary bg-white/74 shrink-0">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-serif text-base tracking-tight">{item.title}</h3>
                      <p className="mt-1 text-sm text-text-muted leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/products" className="btn-secondary mt-10">
              製品一覧へ
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 items-stretch">
              <div className="frame-shoji sm:col-span-2 lg:col-span-7 min-h-96 md:min-h-[30rem] relative shadow-[0_18px_60px_rgba(8,21,45,0.15)]">
                <PremiumImage
                  src={images.spa}
                  alt="静かなスパ空間のようなスキンケアルーティン"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark/45 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 z-10 text-[#edf4ff]">
                  <p className="text-[10px] tracking-[0.16em] opacity-75 font-semibold uppercase">穏やかなケア</p>
                  <p className="font-serif text-lg mt-1">夜の保湿を整える時間</p>
                </div>
              </div>

              <div className="card-washi sm:col-span-1 lg:col-span-5 p-6 md:p-7 flex flex-col justify-between bg-white/95 min-h-96">
                <div>
                  <p className="eyebrow mb-2">代表的な考え方</p>
                  <h3 className="heading-section text-2xl md:text-[2rem]">穏やかな実感、
                    <br />
                    強すぎない仕上がり
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed font-medium text-text-muted">
                    うるおいの設計と、肌の心地よさを最優先にしています。
                    その結果として、毎日触れたくなる質感を目指します。
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  <div className="border border-border bg-background/70 rounded-xl p-4">
                    <p className="text-[10px] tracking-[0.08em] text-primary/80 font-semibold">01</p>
                    <p className="mt-2 font-serif">なじみのよさ</p>
                  </div>
                  <div className="border border-border bg-background/70 rounded-xl p-4">
                    <p className="text-[10px] tracking-[0.08em] text-primary/80 font-semibold">02</p>
                    <p className="mt-2 font-serif">軽やかな後肌</p>
                  </div>
                  <div className="border border-border bg-background/70 rounded-xl p-4">
                    <p className="text-[10px] tracking-[0.08em] text-primary/80 font-semibold">03</p>
                    <p className="mt-2 font-serif">毎日使える設計</p>
                  </div>
                  <div className="border border-border bg-background/70 rounded-xl p-4">
                    <p className="text-[10px] tracking-[0.08em] text-primary/80 font-semibold">04</p>
                    <p className="mt-2 font-serif">誠実な表示</p>
                  </div>
                </div>
              </div>

              <div className="frame-shoji sm:col-span-1 lg:col-span-5 min-h-48 md:min-h-60 relative lg:col-start-8">
                <PremiumImage
                  src={images.ritual}
                  alt="静かに整えたスキンケアの並び"
                  fill
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark/45 via-transparent to-transparent" />
                <p className="absolute left-5 bottom-5 z-10 text-[#ecf5ff] text-sm font-serif tracking-wide">
                  毎日の設計
                </p>
              </div>

              <div className="frame-shoji sm:col-span-1 lg:col-span-7 min-h-48 md:min-h-56 relative lg:col-start-6">
                <PremiumImage
                  src={images.sakura}
                  alt="やわらかな植物の構成"
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark/38 via-transparent to-transparent" />
                <p className="absolute left-5 bottom-5 z-10 text-[#ecf5ff] text-sm font-serif tracking-wide">
                  素材の誠実さ
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <FadeIn>
          <div className="rounded-2xl border border-border bg-white/84 p-6 md:p-7 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <p className="eyebrow mb-4">信頼のための設計</p>
            <p className="text-sm text-text-muted font-medium leading-relaxed mb-5 max-w-3xl">
              情報が少なく見えると、良いものでも伝わりません。だからこそ、見せ方を簡素にしすぎず、選ぶ判断に必要な情報をきちんと並べています。
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                "国内製造と品質管理",
                "成分説明はわかりやすく",
                "配送後の問い合わせ対応",
                "毎日続けやすい価格設計",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-background/70 px-4 py-3 text-center text-[11px] tracking-[0.16em] text-text-light font-semibold uppercase"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-text-light text-xs font-medium">
              <Sparkles size={14} className="text-accent" strokeWidth={1.6} />
              ブランドの使い方が伝わるよう、情報の見せ方も実用的に整えています。
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}