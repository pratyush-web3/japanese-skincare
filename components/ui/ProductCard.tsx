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
      <article className="group card-washi">
        <Link href={href} className="block">
          <div className="relative aspect-[3/4] overflow-hidden bg-surface-beige border-b border-border">
            <PremiumImage
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
            />
            {nameEn && (
              <span className="absolute top-0 left-0 bg-accent-sumi text-[#f5f0e8] text-[9px] tracking-[0.25em] px-3 py-2 font-light">
                {nameEn}
              </span>
            )}
          </div>
          <div className="p-6 md:p-7">
            <div className="flex items-baseline justify-between gap-3 border-b border-border pb-4 mb-4">
              <h3 className="font-serif text-lg tracking-wide">{name}</h3>
              <span className="text-sm text-accent-aka font-serif shrink-0">
                {price}
              </span>
            </div>
            <p className="text-sm text-text-muted leading-[1.85] font-light line-clamp-2">
              {description}
            </p>
          </div>
        </Link>
      </article>
    </FadeIn>
  );
}
