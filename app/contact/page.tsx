import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import PremiumImage from "@/components/ui/PremiumImage";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "商品、ご注文、成分に関するご相談は、こちらからお問い合わせください。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        subtitle="製品選びやご注文、成分のご質問まで。静かに、丁寧にお手伝いします。"
        image={images.spa}
        imageAlt="上質な相談体験を表現したスキンケアサポートのビジュアル"
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <p className="text-text-muted leading-relaxed font-medium">
                  製品の選び方、肌との相性、配送に関するご案内まで。必要なことを、必要な分だけわかりやすくお伝えします。返信はできるだけ具体的に、短くても役立つ内容を心がけています。
                </p>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="frame-shoji min-h-56 relative">
                  <PremiumImage
                    src={images.texture}
                    alt="やわらかな質感を伝えるスキンケアイメージ"
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface-dark/45 via-transparent to-transparent" />
                  <p className="absolute left-5 bottom-5 z-10 text-[#ecf5ff] text-sm font-serif tracking-wide">
                    Quick, calm, and human replies
                  </p>
                </div>
              </FadeIn>

              <ContactDetails />
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
