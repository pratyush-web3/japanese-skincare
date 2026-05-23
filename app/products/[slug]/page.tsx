import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import PremiumImage from "@/components/ui/PremiumImage";
import FadeIn from "@/components/ui/FadeIn";
import ProductCard from "@/components/ui/ProductCard";
import { images, products, productDetails } from "@/lib/data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const detailImageMap: Record<string, string> = {
  "tsubaki-serum": images.texture,
  "sakura-cream": images.sakura,
  "matcha-mask": images.matcha,
  "yuzu-toner": images.lifestyle,
  "rice-essence": images.kyoto,
  "camellia-cleanser": images.spa,
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) {
    return {
      title: "製品詳細",
    };
  }

  return {
    title: `${product.name}の詳細`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  const detail = productDetails[product.id as keyof typeof productDetails];
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={detail.intro}
        image={product.image}
        imageAlt={product.name}
      />

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <FadeIn className="lg:col-span-7">
              <p className="eyebrow-jp mb-2">製品詳細</p>
              <p className="eyebrow mb-5">{product.nameEn || "製品"}</p>
              <span className="block h-px w-20 bg-linear-to-r from-primary/70 to-accent/55 mb-8" />
              <h2 className="heading-section text-3xl md:text-[2.65rem]">
                毎日の手入れに
                <br />
                きちんと馴染む一本。
              </h2>

              <p className="mt-6 text-text-muted leading-relaxed font-medium max-w-2xl">
                {detail.intro}
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {detail.idealFor.map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-white/82 px-4 py-4 text-sm text-text-muted font-medium leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 card-washi p-6 md:p-7 bg-white/92">
                <p className="eyebrow mb-3">使い方</p>
                <div className="space-y-4">
                  {detail.howToUse.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full border border-primary/25 text-primary font-serif text-xs shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-text-muted leading-relaxed font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="lg:col-span-5">
              <div className="frame-shoji min-h-112 relative">
                <PremiumImage
                  src={detailImageMap[product.id]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark/45 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 right-5 rounded-3xl bg-white/90 backdrop-blur-md border border-white/60 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                  <p className="text-[10px] tracking-[0.18em] text-primary/70 font-semibold uppercase">
                    Texture notes
                  </p>
                  <p className="mt-1 text-sm text-text leading-relaxed">
                    {detail.texture}
                  </p>
                </div>
              </div>

              <div className="mt-5 card-washi p-6 md:p-7 bg-white/92">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.6} />
                  <div>
                    <p className="font-serif text-xl text-text mb-2">組み合わせの目安</p>
                    <p className="text-sm text-text-muted leading-relaxed font-medium">{detail.pairing}</p>
                    <p className="mt-4 text-sm text-text-muted leading-relaxed font-medium">{detail.note}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding section-matcha border-y border-border">
        <div className="section-container">
          <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
            <div>
              <p className="eyebrow-jp mb-2">次に見る製品</p>
              <p className="eyebrow mb-4">Related products</p>
              <h2 className="heading-section text-3xl md:text-[2.45rem]">合わせて見ておくと選びやすい製品</h2>
            </div>
            <Link href="/products" className="hidden md:inline-flex items-center gap-2 btn-secondary">
              製品一覧へ
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.id}
                name={relatedProduct.name}
                nameEn={relatedProduct.nameEn}
                description={relatedProduct.description}
                price={relatedProduct.price}
                image={relatedProduct.image}
                href={`/products/${relatedProduct.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}