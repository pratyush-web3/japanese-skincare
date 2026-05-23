"use client";

import { Leaf, Flower2, Droplets, Sun, Wheat, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { ingredients } from "@/lib/data";

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
          eyebrow="INGREDIENTS"
          eyebrowJp="成分"
          title="日本の天然素材"
          description="古来より肌と向き合ってきた、やさしい恵みだけを選びました。"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {ingredients.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.name} delay={index * 0.08}>
                <article className="card-washi p-7 md:p-8 h-full text-center sm:text-left">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-accent-matcha mb-5 mx-auto sm:mx-0"
                      strokeWidth={1.25}
                    />
                  )}
                  <p className="text-[9px] tracking-[0.28em] text-accent-matcha mb-2">
                    {item.nameEn}
                  </p>
                  <h3 className="font-serif text-xl text-text mb-3">{item.name}</h3>
                  <p className="text-sm text-text-muted leading-[1.85] font-light">
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
