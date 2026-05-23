"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Truck, ConciergeBell } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Sparkles,
    title: "お手入れのご相談",
    description:
      "肌の状態や季節に合わせて、無理のない組み合わせをご提案します。",
  },
  {
    icon: Shield,
    title: "成分の説明",
    description:
      "配合意図をできるだけ明確に伝え、わかりにくい言い回しは使いません。",
  },
  {
    icon: Truck,
    title: "丁寧な発送",
    description:
      "商品が届くまでの時間も品質の一部と考え、梱包まで静かに整えます。",
  },
  {
    icon: ConciergeBell,
    title: "ご購入後のサポート",
    description:
      "使い方や組み合わせの見直しも、実用的な目線でお手伝いします。",
  },
];

const stats = [
  { value: "京都", label: "企画拠点" },
  { value: "4.9/5", label: "平均評価" },
  { value: "48h", label: "返信目安" },
  { value: "9割超", label: "継続意向" },
];

export default function Services() {
  return (
    <section className="section-padding bg-background border-y border-border">
      <div className="section-container">
        <SectionHeading
          eyebrow="サポート"
          eyebrowJp="ご購入前後のご案内"
          title={"製品だけで終わらない、\nきめ細かな対応"}
          description="購入前の相談から、配送後のフォローまで。安心して選べることを大切にしています。"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-white/88 p-4 md:p-5 text-center shadow-[0_10px_22px_rgba(15,23,42,0.04)]"
            >
              <p className="font-serif text-2xl md:text-3xl text-text">{item.value}</p>
              <p className="mt-1 text-[11px] tracking-[0.16em] text-text-light font-semibold uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="card-washi p-6 h-full bg-white/90"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-primary/20 text-primary bg-surface-muted mb-5">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <h3 className="font-serif text-xl tracking-tight text-text mb-3">{service.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed font-medium">{service.description}</p>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
