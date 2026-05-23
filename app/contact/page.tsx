import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "商品・ご注文・成分に関するご質問は、お気軽にお問い合わせください。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        subtitle="ご質問やご相談は、下記フォームよりお送りください。"
        image={images.spa}
        imageAlt="静かなスパ空間で整える相談の時間"
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <p className="text-text-muted leading-relaxed font-light">
                  商品のご購入、成分に関するご質問、
                  その他お困りのことがございましたら、
                  お気軽にご連絡ください。
                </p>
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
