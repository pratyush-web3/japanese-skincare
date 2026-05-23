import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-4xl border border-border bg-linear-to-br from-surface-dark via-surface-dark-soft to-[#10284a] px-6 py-12 md:px-10 md:py-16 lg:px-14 shadow-[0_24px_80px_rgba(7,17,29,0.18)]">
          <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent/24 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow text-accent-soft mb-4">次の一歩</p>
            <h2 className="heading-section text-[2rem] md:text-[2.8rem] text-[#ecf5ff]">
              仕上げに、
              <br />
              ひとつ上の静けさを。
            </h2>
            <p className="mt-5 text-[#ecf5ff]/75 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
              Yūbi の製品は、見た目の派手さよりも、毎日使い続けられる心地よさを大切にしています。
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[10px] tracking-[0.16em] font-semibold uppercase text-[#ecf5ff]/72">
              <span className="rounded-full border border-white/18 bg-white/8 px-3 py-2">Sensitive-skin conscious</span>
              <span className="rounded-full border border-white/18 bg-white/8 px-3 py-2">Ingredient transparency</span>
              <span className="rounded-full border border-white/18 bg-white/8 px-3 py-2">Patch-test friendly design</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                製品を見る
                <ArrowUpRight size={15} strokeWidth={1.6} />
              </Link>
              <Link href="/contact" className="btn-secondary bg-white/10 text-[#ecf5ff] border-white/35 hover:bg-white/16">
                ご相談はこちら
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
