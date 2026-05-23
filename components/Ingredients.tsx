"use client";

import { Leaf, Flower2, Droplets, Sun, Wheat, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import PremiumImage from "@/components/ui/PremiumImage";
import { ingredients, images } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Flower2,
  Droplets,
  Sun,
  Wheat,
};

export default function Ingredients() {
  return (
    <section className="section-padding section-matcha relative overflow-hidden">
      <div className="section-container relative">
        <SectionHeading
          eyebrow="成分について"
          eyebrowJp="処方の考え方"
          title={"日本の素材を、\nいまの肌に合わせて"}
          description="肌に必要な役割だけを見極めて、うるおい、整肌、感触のよさを静かに支える成分を選んでいます。"
        />

        <FadeIn>
          <div className="mb-8 grid lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7 rounded-2xl border border-border bg-white/84 p-6 md:p-7 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <p className="text-text-muted leading-relaxed font-medium max-w-2xl">
                成分名を並べるだけでは伝わらないことがあります。そこでYūbiでは、何を入れるかだけでなく、どう重ねると心地よいかまで含めて見せています。
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] tracking-[0.16em] text-text-light font-semibold uppercase">
                <span className="rounded-full border border-border bg-background/70 px-3 py-2">わかりやすい説明</span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-2">使い心地重視</span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-2">毎日続けやすい</span>
              </div>
            </div>

            <div className="lg:col-span-5 frame-shoji min-h-56 relative">
              <PremiumImage
                src={images.matcha}
                alt="抹茶の落ち着いた色調を表すイメージ"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-dark/45 via-transparent to-transparent" />
              <p className="absolute left-5 bottom-5 z-10 text-[#ecf5ff] text-sm font-serif tracking-wide">
                Ingredient story, not ingredient clutter
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {ingredients.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.name} delay={index * 0.08}>
                <article className="card-washi p-6 md:p-7 h-full text-center sm:text-left bg-white/92">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-primary mb-5 mx-auto sm:mx-0"
                      strokeWidth={1.25}
                    />
                  )}
                  <p className="text-[10px] tracking-[0.16em] text-text-light mb-2 font-semibold uppercase">
                    {item.nameEn}
                  </p>
                  <h3 className="font-serif text-lg text-text mb-3">{item.name}</h3>
                  <p className="text-sm text-text-muted leading-relaxed font-medium">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
