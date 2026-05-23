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
          eyebrow="COLLECTION"
          eyebrowJp="商品"
          title="人気のスキンケア"
          description="椿、桜、抹茶——日本の恵みを、毎日のルーティンに。"
        />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((product, index) => (
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

        <div className="mt-14 flex justify-center">
          <Link href="/products" className="btn-secondary">
            すべての商品を見る
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
