import FadeIn from "./FadeIn";

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
      className={`mb-12 md:mb-14 max-w-4xl flex flex-col ${alignClass} ${className}`}
    >
      <div
        className={`flex items-center gap-2.5 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        {eyebrow && (
          <span className={`eyebrow ${dark ? "text-accent-soft!" : ""}`}>{eyebrow}</span>
        )}
        {eyebrowJp && (
          <span className={`eyebrow-jp ${dark ? "text-white/55!" : ""}`}>{eyebrowJp}</span>
        )}
      </div>

      <span
        className={`h-px w-20 bg-linear-to-r from-primary/60 via-accent/55 to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />

      <h2
        className={`heading-section text-3xl md:text-[2.8rem] mt-6 ${
          dark ? "text-[#edf4ff]" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 leading-relaxed font-medium text-[15px] md:text-base max-w-3xl ${
            dark ? "text-white/72" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
