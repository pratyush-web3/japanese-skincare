import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/ui/ProductCard";
import { products, images } from "@/lib/data";

export const metadata: Metadata = {
  title: "商品一覧",
  description:
    "椿オイルセラム、桜モイスチャークリーム、抹茶フェイスマスクなど、Yūbi のスキンケア商品をご覧ください。",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="商品一覧"
        subtitle="日本の自然素材を、毎日の肌ケアに。"
        image={images.lifestyle}
        imageAlt="やさしい光に包まれた、スキンケアの時間"
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                nameEn={product.nameEn}
                description={product.description}
                price={product.price}
                image={product.image}
                index={index}
              />
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-text-muted font-light">
            ご購入・在庫に関するお問い合わせは、
            <a href="/contact" className="text-accent-aka hover:underline ml-1 underline-offset-4">
              お問い合わせフォーム
            </a>
            よりご連絡ください。
          </p>
        </div>
      </section>
    </>
  );
}
