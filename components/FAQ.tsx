"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { faqs } from "@/lib/data";
import { SeigaihaPattern } from "@/components/decorative/JapaneseBackdrop";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-20 -left-20 w-64 h-64 text-accent-warm/3 pointer-events-none">
        <SeigaihaPattern className="w-full h-full" />
      </div>

      <div className="section-container max-w-3xl relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <FadeIn>
            <p className="eyebrow-jp mb-2">よくあるご質問</p>
            <p className="eyebrow mb-6">FAQ</p>
            
            <h2 className="heading-section text-3xl md:text-[2.5rem] mb-6">
              ご質問
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-accent-aka/30" />
              <p className="text-text-muted font-light text-sm">
                ご不明な点は、お気軽にお問い合わせください。
              </p>
              <div className="h-px w-12 bg-accent-aka/30" />
            </div>
          </FadeIn>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={item.question} delay={index * 0.06}>
                <div className="group">
                  {/* Question button */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-surface border border-border transition-all duration-300 hover:border-accent-warm/50 hover:shadow-[0_4px_16px_rgba(42,40,38,0.04)]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      {/* Question number */}
                      <span className="hidden sm:flex items-center justify-center w-8 h-8 border border-accent-aka/30 text-accent-aka/70 font-serif text-xs shrink-0 group-hover:border-accent-aka/60 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-base md:text-lg leading-snug pr-4 text-text">
                        {item.question}
                      </span>
                    </div>
                    
                    {/* Chevron indicator */}
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`shrink-0 transition-all duration-500 ${
                        isOpen 
                          ? "text-accent-aka rotate-180" 
                          : "text-text-muted/50 group-hover:text-accent-aka/70"
                      }`}
                    />
                  </button>
                  
                  {/* Answer content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="relative">
                          {/* Left accent border */}
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-aka/60 via-accent-warm/40 to-transparent" />
                          
                          <p className="pl-5 pr-5 md:px-6 pb-5 md:pb-6 text-text-muted leading-[2] font-light text-sm pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Contact CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 border border-border bg-surface">
              <div className="w-2 h-2 rounded-full bg-accent-aka/60 animate-slow-pulse" />
              <p className="text-sm text-text-muted font-light">
                その他、ご質問がございましたら
                <a href="/contact" className="text-accent-aka hover:underline ml-1">
                  お問い合わせフォーム
                </a>
                よりお気軽にお送りください。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}