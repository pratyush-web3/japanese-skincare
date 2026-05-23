"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-padding border-b border-border">
      <div className="section-container">
        <SectionHeading
          eyebrow="VOICES"
          eyebrowJp="お客様の声"
          title="肌と、向き合った方々から"
          description="言葉は控えめに。でも、続けたくなる——そんな声をいただいています。"
        />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.1}>
              <blockquote className="card-washi p-8 md:p-9 h-full flex flex-col !transform-none hover:!transform-none border-l-2 border-l-accent-sakura">
                <span className="font-serif text-5xl text-accent-sakura/30 leading-none">
                  「
                </span>
                <p className="text-text-muted leading-[2] font-light flex-1 text-[15px] -mt-2">
                  {review.text}
                </p>
                <footer className="mt-8 pt-5 border-t border-border flex justify-between items-end">
                  <cite className="not-italic font-serif text-base">{review.name}</cite>
                  <span className="text-[10px] tracking-[0.2em] text-text-muted">
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
