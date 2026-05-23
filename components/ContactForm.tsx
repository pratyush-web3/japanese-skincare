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
        <div className="card-washi overflow-hidden text-center">
          <div className="border-b border-border bg-surface-warm px-6 py-5 md:px-8 md:py-6">
            <p className="eyebrow mb-2">THANK YOU</p>
            <h3 className="font-serif text-2xl tracking-wide">お問い合わせを受け付けました</h3>
          </div>
          <div className="px-6 py-10 md:px-8 md:py-12">
            <p className="text-text-muted font-light text-sm leading-relaxed max-w-md mx-auto">
              内容を確認のうえ、2〜3営業日以内にご返信いたします。
              <br />
              しばらくお待ちください。
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
        className="card-washi overflow-hidden"
      >
        <div className="border-b border-border bg-surface-warm px-6 py-5 md:px-8 md:py-6">
          <p className="eyebrow mb-2">PRIVATE CONSULTATION</p>
          <h2 className="font-serif text-2xl tracking-wide">ご相談内容をお聞かせください</h2>
          <p className="mt-3 text-sm text-text-muted font-light leading-relaxed max-w-lg">
            商品選び、成分のご質問、配送についてなど、気になることをお送りください。
          </p>
        </div>

        <div className="space-y-6 px-6 py-8 md:px-8 md:py-10">
          <div>
            <label htmlFor="name" className="block text-sm mb-2 font-light">
              お名前
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 border border-border bg-background/80 text-sm font-light focus:outline-none focus:border-accent-warm transition-colors"
              placeholder="山田 花子"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 font-light">
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 border border-border bg-background/80 text-sm font-light focus:outline-none focus:border-accent-warm transition-colors"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm mb-2 font-light">
              件名
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-border bg-background/80 text-sm font-light focus:outline-none focus:border-accent-warm transition-colors"
            >
              <option value="">選択してください</option>
              <option value="product">商品について</option>
              <option value="order">ご注文について</option>
              <option value="ingredient">成分・アレルギーについて</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2 font-light">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-border bg-background/80 text-sm font-light resize-none focus:outline-none focus:border-accent-warm transition-colors"
              placeholder="お気軽にご記入ください"
            />
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
