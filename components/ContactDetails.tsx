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
            <div className="flex gap-4">
              <Icon
                className="w-5 h-5 text-accent-aka shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-xs tracking-[0.15em] text-text-muted mb-1 font-light">
                  {item.label}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-light hover:text-accent-aka transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-light">{item.value}</p>
                )}
              </div>
            </div>
          </FadeIn>
        );
      })}
    </>
  );
}
