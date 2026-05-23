import Link from "next/link";
import PremiumImage from "./PremiumImage";
import FadeIn from "./FadeIn";

type ProductCardProps = {
  name: string;
  nameEn?: string;
  description: string;
  price: string;
  image: string;
  href?: string;
  index?: number;
};

export default function ProductCard({
  name,
  nameEn,
  description,
  price,
  image,
  href = "/products",
  index = 0,
}: ProductCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <article className="group card-washi overflow-hidden h-full bg-white/92">
        <Link href={href} className="block">
          <div className="relative aspect-4/5 overflow-hidden bg-surface-muted border-b border-border">
            <PremiumImage
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-surface-dark/55 via-transparent to-transparent" />

            {nameEn && (
              <span className="absolute top-3 left-3 rounded-full bg-white/90 text-text text-[10px] tracking-[0.16em] px-3 py-1.5 font-semibold uppercase">
                {nameEn}
              </span>
            )}

            <span className="absolute right-3 bottom-3 rounded-full bg-[rgba(8,18,36,0.72)] text-[#ecf5ff] text-[11px] px-3 py-1.5 font-semibold tracking-[0.12em]">
              {price}
            </span>
          </div>

          <div className="p-6 md:p-7">
            <div className="flex items-baseline justify-between gap-3 pb-3 mb-3 border-b border-border/85">
              <h3 className="font-serif text-[1.12rem] tracking-tight text-text">{name}</h3>
              <span className="text-[10px] text-primary font-semibold tracking-[0.16em] shrink-0 uppercase">
                Premium
              </span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed font-medium line-clamp-3 min-h-[4.2rem]">
              {description}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-primary group-hover:text-accent transition-colors uppercase">
              詳しく見る
              <span className="h-px w-8 bg-current" />
            </div>
          </div>
        </Link>
      </article>
    </FadeIn>
  );
}
