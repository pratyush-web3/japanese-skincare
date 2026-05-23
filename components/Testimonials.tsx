"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-padding border-b border-border bg-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="お客様の声"
          eyebrowJp="ご使用後の感想"
          title={"静かな使い心地を、\n日々の中で実感"}
          description="派手な実感ではなく、続けるほどにわかる手触りのよさを大切にしています。"
        />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.1}>
              <blockquote className="card-washi p-7 md:p-8 h-full flex flex-col border border-border bg-white/94 transform-none! hover:transform-none! min-h-[20rem]">
                <span className="font-serif text-5xl text-primary/24 leading-none">
                  “
                </span>
                <p className="text-text-muted leading-relaxed font-medium flex-1 text-[15px] mt-2">
                  {review.text}
                </p>
                <footer className="mt-8 pt-5 border-t border-border flex justify-between items-end">
                  <cite className="not-italic font-serif text-base tracking-tight">{review.name}</cite>
                  <span className="text-[10px] tracking-[0.16em] text-text-light font-semibold uppercase">
                    {review.location}
                  </span>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
