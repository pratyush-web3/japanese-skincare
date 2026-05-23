"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FadeIn>
        <div className="card-washi overflow-hidden text-center bg-white/92">
          <div className="border-b border-border bg-surface-muted px-6 py-5 md:px-8 md:py-6">
            <p className="eyebrow mb-2">送信完了</p>
            <h3 className="font-serif text-2xl tracking-tight">お問い合わせを受け付けました</h3>
          </div>
          <div className="px-6 py-10 md:px-8 md:py-12">
            <p className="text-text-muted font-medium text-sm leading-relaxed max-w-md mx-auto">
              内容を確認のうえ、通常は2〜3営業日以内にご返信します。
              <br />
              少々お待ちください。
            </p>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="card-washi overflow-hidden bg-white/92"
      >
        <div className="border-b border-border bg-surface-muted px-6 py-5 md:px-8 md:py-6">
          <p className="eyebrow mb-2">ご相談フォーム</p>
          <h2 className="font-serif text-2xl tracking-tight">ご希望をお聞かせください</h2>
          <p className="mt-3 text-sm text-text-muted font-medium leading-relaxed max-w-lg">
            製品選び、成分のご質問、配送に関するご案内まで、落ち着いてご対応します。
          </p>
        </div>

        <div className="space-y-6 px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-6 md:grid-cols-2 md:gap-5">
            <div>
            <label htmlFor="name" className="block text-sm mb-2 font-semibold text-text-muted">
              お名前
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 border border-border rounded-xl bg-background/70 text-sm font-medium focus:outline-none focus:border-primary transition-colors"
              placeholder="山田 花子"
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-sm mb-2 font-semibold text-text-muted">
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 border border-border rounded-xl bg-background/70 text-sm font-medium focus:outline-none focus:border-primary transition-colors"
              placeholder="example@email.com"
            />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm mb-2 font-semibold text-text-muted">
              ご相談内容
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-border rounded-xl bg-background/70 text-sm font-medium focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">お選びください</option>
              <option value="product">製品のご相談</option>
              <option value="order">ご注文について</option>
              <option value="ingredient">成分・肌相談</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2 font-semibold text-text-muted">
              詳細
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-xl bg-background/70 text-sm font-medium resize-none focus:outline-none focus:border-primary transition-colors"
              placeholder="肌の状態や、気になっていることをできる範囲でお知らせください。"
            />
          </div>

          <div className="rounded-2xl border border-border bg-surface-muted/70 px-4 py-4 md:px-5 md:py-5">
            <p className="text-[10px] tracking-[0.18em] text-primary font-semibold uppercase mb-2">記入の目安</p>
            <p className="text-sm text-text-muted leading-relaxed font-medium">
              肌質、気になる季節、現在使っている製品名があれば、より具体的にご案内できます。
            </p>
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            送信する
            <Send size={16} strokeWidth={1.5} />
          </button>
        </div>
      </form>
    </FadeIn>
  );
}
