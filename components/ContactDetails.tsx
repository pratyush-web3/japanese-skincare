import { Mail, MapPin, Clock } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { site } from "@/lib/site";

const items = [
  { icon: Mail, label: "メール", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: MapPin, label: "所在地", value: site.contact.address },
  { icon: Clock, label: "受付時間", value: site.contact.hours },
] as const;

export default function ContactDetails() {
  return (
    <>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <FadeIn key={item.label} delay={index * 0.08}>
            <div className="flex gap-4 rounded-2xl border border-border bg-white/82 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] tracking-[0.16em] text-text-light mb-1 font-semibold uppercase">
                  {item.label}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{item.value}</p>
                )}
              </div>
            </div>
          </FadeIn>
        );
      })}
    </>
  );
}
