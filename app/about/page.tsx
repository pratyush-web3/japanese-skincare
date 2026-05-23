import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import PremiumImage from "@/components/ui/PremiumImage";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "ブランドについて",
  description:
    "Yūbi のブランド背景、ものづくりの考え方、品質への向き合い方をご紹介します。",
};

const values = [
  {
    title: "つくりすぎない",
    text: "毎日の手入れに本当に必要なものだけを残し、使い心地が重くならないように整えています。",
  },
  {
    title: "わかりやすく伝える",
    text: "成分や使い方はできるだけ平易に。選ぶときに迷いにくいよう、説明の粒度まで整えています。",
  },
  {
    title: "続けやすい実感",
    text: "短期的な派手さではなく、朝と夜のルーティンに自然に入り続けることを優先しています。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ブランドについて"
        subtitle="京都で育った感性と、現代の基準に沿った処方設計。その両方を大切にしています。"
        image={images.about}
        imageAlt="京都発スキンケアブランドの静かなビジュアル"
      />

      <section className="section-padding bg-surface">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="eyebrow-jp mb-2">私たちについて</p>
            <p className="eyebrow mb-5">ブランド概要</p>
            <span className="block h-px w-20 bg-linear-to-r from-primary/70 to-accent/55 mb-8" />
            <p className="text-lg md:text-xl leading-relaxed font-medium text-text-muted">
              Yūbi は、肌に必要なものをきちんと届けたいという思いから生まれました。静かな見た目でも、中身はきちんと伝わるブランドでありたいと考えています。
            </p>
            <p className="mt-6 leading-relaxed font-medium text-text-muted">
              京都のチームは、和の素材と現代的な処方設計を組み合わせながら、
              毎日の手入れにすっと馴染む使い心地を磨いてきました。
            </p>
            <p className="mt-6 leading-relaxed font-medium text-text-muted">
              流行よりも、信頼を積み重ねること。
              その姿勢を変えずに、長く付き合える製品をお届けしています。
            </p>

            <div className="mt-10 grid lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-7 grid gap-3 sm:grid-cols-3">
                {[
                  "京都で企画",
                  "説明を省きすぎない",
                  "毎日続けやすい設計",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-white/80 px-4 py-3 text-center text-[11px] tracking-[0.16em] text-text-light font-semibold uppercase">
                    {item}
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 frame-shoji min-h-72 relative">
                <PremiumImage
                  src={images.kyoto}
                  alt="京都の静かな空気感を映したブランドイメージ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark/45 via-transparent to-transparent" />
                <p className="absolute left-5 bottom-5 z-10 text-[#ecf5ff] text-sm font-serif tracking-wide">
                  Small team, careful direction
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding section-matcha">
        <div className="section-container">
          <FadeIn>
            <SectionHeadingInline />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <article className="card-washi p-8 h-full transform-none! hover:transform-none! text-center md:text-left bg-white/92">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-primary/35 text-primary font-serif text-sm">
                    {index + 1}
                  </span>
                  <h3 className="font-serif text-xl mt-5 mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed font-medium text-sm">
                    {value.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FadeIn>
              <div className="frame-shoji aspect-[4/3]">
                <PremiumImage
                  src={images.spa}
                  alt="京都で整えたラボとスパのイメージ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="eyebrow-jp mb-2">ものづくり</p>
              <p className="eyebrow mb-5">ものづくり</p>
              <span className="block h-px w-20 bg-linear-to-r from-primary/70 to-accent/55 mb-8" />
              <h2 className="heading-section text-3xl md:text-4xl mb-6">
                触れるたびに
                <br />
                品質が伝わるように。
              </h2>
              <p className="text-text-muted leading-relaxed font-medium">
                京都の製造パートナーと連携しながら、品質確認を丁寧に重ねています。
                余計なものは増やさず、容器の扱いやすさまで含めて整えています。見た目のきれいさだけで終わらないよう、使う前後の流れまで見ています。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeadingInline() {
  return (
    <div className="mb-14 text-center">
      <p className="eyebrow mb-2">理念</p>
      <p className="eyebrow-jp mb-4">大切にしていること</p>
      <h2 className="heading-section text-3xl md:text-4xl">3つの基準</h2>
    </div>
  );
}
