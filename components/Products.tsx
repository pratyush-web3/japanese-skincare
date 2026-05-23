import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export default function Products() {
  const featured = products.slice(0, 3);

  return (
    <section className="section-padding bg-surface border-b border-border">
      <div className="section-container">
        <SectionHeading
          eyebrow="製品紹介"
          eyebrowJp="定番ライン"
          title={"静かに効く、\n毎日のための6製品"}
          description="保湿、洗浄、整肌。必要な役割をきちんと分け、無理なく続けやすい構成に整えました。"
        />

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            "朝と夜で使い分けやすい",
            "敏感な時期でも選びやすい設計",
            "単品でも組み合わせても使いやすい",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-border bg-white/80 px-4 py-3 text-center text-[11px] tracking-[0.16em] text-text-light font-semibold uppercase">
              {item}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((product, index) => (
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

        <div className="mt-12 md:mt-14 flex justify-center">
          <Link href="/products" className="btn-secondary">
            全製品を見る
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
