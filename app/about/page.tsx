import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import PremiumImage from "@/components/ui/PremiumImage";
import ZenDivider from "@/components/decorative/ZenDivider";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "ブランドについて",
  description:
    "京都から、肌と静かに向き合うスキンケアブランド Yūbi の想いをご紹介します。",
};

const values = [
  {
    title: "素材への敬意",
    text: "抹茶、桜、椿——産地と作り手を大切にし、無理のない配合だけを選びます。",
  },
  {
    title: "静けさの美学",
    text: "派手な変化ではなく、肌が本来持つバランスを、やさしく整えることを目指します。",
  },
  {
    title: "続けられる心地よさ",
    text: "香りもテクスチャーも、毎日使いたくなるほど控えめに。それが、私たちの贅沢です。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ブランドについて"
        subtitle="京都の静けさから、肌へ届けるやさしさ。"
        image={images.about}
        imageAlt="京都の庭園と、和の静けさ"
      />

      <section className="section-padding bg-surface">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="eyebrow-jp mb-2">私たちの名前</p>
            <p className="eyebrow mb-5">ABOUT</p>
            <ZenDivider className="mb-8" />
            <p className="text-lg md:text-xl leading-[2] font-light text-text-muted font-serif">
              Yūbi（ゆうび）は、「肌を慈しむ」という意味を込めた名前です。
            </p>
            <p className="mt-6 leading-[2] font-light text-text-muted">
              2018年、京都の小さな工房で始まった私たちは、
              日本の自然素材と、伝統的な知恵に学びながら、
              一本一本、手仕事に近い形で製品をつくり続けています。
            </p>
            <p className="mt-6 leading-[2] font-light text-text-muted">
              流行を追うのではなく、肌が本当に喜ぶものだけを。
              静けさのなかに宿る、本物の贅沢だと信じています。
            </p>
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
                <article className="card-washi p-8 h-full !transform-none hover:!transform-none text-center md:text-left">
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-accent-matcha text-accent-matcha font-serif text-sm">
                    {index + 1}
                  </span>
                  <h3 className="font-serif text-xl mt-5 mb-4">{value.title}</h3>
                  <p className="text-text-muted leading-[1.9] font-light text-sm">
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
                  alt="和のスパで、心と肌を整える時間"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="eyebrow-jp mb-2">製造について</p>
              <p className="eyebrow mb-5">CRAFT</p>
              <ZenDivider className="mb-8" />
              <h2 className="heading-section text-3xl md:text-4xl mb-6">
                小さな工房から、
                <br />
                丁寧に。
              </h2>
              <p className="text-text-muted leading-[2] font-light">
                すべての製品は、京都府内の認定工房で製造しています。
                動物実験は行わず、環境への配慮も欠かしません。
                パッケージは再生紙を使用し、必要最小限の印刷にとどめています。
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
      <p className="eyebrow mb-2">PHILOSOPHY</p>
      <p className="eyebrow-jp mb-4">大切にしていること</p>
      <h2 className="heading-section text-3xl md:text-4xl">私たちの想い</h2>
    </div>
  );
}
