"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 -right-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="section-container max-w-3xl relative">
        <div className="text-center mb-12">
          <FadeIn>
            <p className="eyebrow-jp mb-2">よくあるご質問</p>
            <p className="eyebrow mb-6">FAQ</p>

            <h2 className="heading-section text-3xl md:text-[2.7rem] mb-5">
              はじめての方へ、
              <br />
              いくつかのご案内
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary/30" />
              <p className="text-text-muted font-medium text-sm">
                ご購入前に気になる点を、簡潔にまとめています。
              </p>
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </FadeIn>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={item.question} delay={index * 0.06}>
                <div className="group">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-white/90 border border-border rounded-2xl transition-all duration-300 hover:border-primary/35 hover:shadow-[0_8px_26px_rgba(8,21,45,0.08)]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-primary/35 text-primary/70 font-serif text-xs shrink-0 group-hover:border-primary/70 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-base md:text-lg leading-snug pr-4 text-text tracking-tight">
                        {item.question}
                      </span>
                    </div>

                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`shrink-0 transition-all duration-500 ${
                        isOpen 
                          ? "text-primary rotate-180" 
                          : "text-text-muted/50 group-hover:text-primary/70"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="relative">
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/60 via-accent/40 to-transparent" />

                          <p className="pl-5 pr-5 md:px-6 pb-5 md:pb-6 text-text-muted leading-relaxed font-medium text-sm pt-4">
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

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 border border-border rounded-full bg-white/90">
              <div className="w-2 h-2 rounded-full bg-primary/70 animate-slow-pulse" />
              <p className="text-sm text-text-muted font-medium">
                そのほかのご相談は、
                <a href="/contact" className="text-primary hover:underline ml-1">
                  お問い合わせください
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}