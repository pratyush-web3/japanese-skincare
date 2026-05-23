import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import PremiumImage from "@/components/ui/PremiumImage";
import { products, images } from "@/lib/data";

export const metadata: Metadata = {
  title: "商品一覧",
  description:
    "Yūbi の定番スキンケア製品をご覧ください。",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="製品一覧"
        subtitle="毎日の手入れに無理なく続けやすい、6つの定番製品をそろえました。"
        image={images.lifestyle}
        imageAlt="やわらかな自然光の中に並ぶスキンケア製品"
      />

      <section className="section-padding">
        <div className="section-container">
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10 md:mb-12">
              <div className="lg:col-span-7">
                <p className="eyebrow-jp mb-2">製品の見方</p>
                <p className="eyebrow mb-5">選び方の目安</p>
                <span className="block h-px w-20 bg-linear-to-r from-primary/70 to-accent/55 mb-6" />
                <p className="text-text-muted leading-relaxed font-medium max-w-2xl">
                  気になる1本をクリックすると、使い心地、相性、使い方まで見られる詳細ページが開きます。朝向きか夜向きか、軽さ重視か保湿重視かで比べながら選んでください。
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="frame-shoji min-h-40 relative">
                  <PremiumImage
                    src={images.ritual}
                    alt="丁寧に並んだスキンケアのイメージ"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="frame-shoji min-h-40 relative">
                  <PremiumImage
                    src={images.matcha}
                    alt="抹茶を思わせる静かな素材のイメージ"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                nameEn={product.nameEn}
                description={product.description}
                price={product.price}
                image={product.image}
                href={`/products/${product.id}`}
                index={index}
              />
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-text-muted font-medium">
            在庫や配送、成分についてのご相談は、
            <a href="/contact" className="text-primary hover:underline ml-1 underline-offset-4">
              お問い合わせください
            </a>
            。
          </p>
        </div>
      </section>
    </>
  );
}
