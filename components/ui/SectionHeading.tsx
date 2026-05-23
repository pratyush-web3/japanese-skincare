import FadeIn from "./FadeIn";
import ZenDivider from "@/components/decorative/ZenDivider";

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowJp?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  eyebrowJp,
  title,
  description,
  align = "center",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <FadeIn
      className={`mb-14 md:mb-18 max-w-2xl flex flex-col ${alignClass} ${className}`}
    >
      <div
        className={`flex items-center gap-4 mb-5 ${align === "center" ? "justify-center" : ""}`}
      >
        {eyebrow && (
          <span className={`eyebrow ${dark ? "!text-accent-warm" : ""}`}>{eyebrow}</span>
        )}
        {eyebrowJp && (
          <span className={`eyebrow-jp ${dark ? "!text-white/50" : ""}`}>{eyebrowJp}</span>
        )}
      </div>
      <ZenDivider className={align === "center" ? "justify-center" : ""} />
      <h2
        className={`heading-section text-3xl md:text-[2.5rem] mt-6 ${
          dark ? "text-[#f5f0e8]" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 leading-[2] font-light text-[15px] md:text-base max-w-lg ${
            dark ? "text-white/65" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
