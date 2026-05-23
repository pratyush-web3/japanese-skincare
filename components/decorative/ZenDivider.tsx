import { SakuraAccent } from "./JapaneseBackdrop";

type ZenDividerProps = {
  className?: string;
  variant?: "horizontal" | "vertical" | "double";
};

export default function ZenDivider({
  className = "",
  variant = "horizontal",
}: ZenDividerProps) {
  if (variant === "vertical") {
    return (
      <div
        className={`w-px h-16 bg-gradient-to-b from-transparent via-accent-aka/50 to-transparent ${className}`}
        aria-hidden
      />
    );
  }

  if (variant === "double") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`} aria-hidden>
        <div className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-accent-aka/60" />
          <span className="flex-1 max-w-[3rem] h-px bg-gradient-to-r from-accent-aka/40 to-transparent" />
        </div>
        <div className="flex items-center gap-3">
          <span className="flex-1 max-w-[3rem] h-px bg-gradient-to-l from-accent-aka/40 to-transparent" />
          <SakuraAccent className="w-2 h-2 text-accent-sakura/60" />
          <span className="flex-1 max-w-[3rem] h-px bg-gradient-to-r from-accent-aka/40 to-transparent" />
        </div>
        <div className="flex items-center gap-3">
          <span className="flex-1 max-w-[3rem] h-px bg-gradient-to-r from-transparent to-accent-aka/40" />
          <span className="w-1 h-1 rounded-full bg-accent-aka/60" />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="w-1.5 h-1.5 rounded-full bg-accent-aka/70" />
      <span className="flex-1 max-w-[5rem] h-px bg-gradient-to-r from-accent-aka/50 to-transparent" />
      <SakuraAccent className="w-2.5 h-2.5 text-accent-sakura/50 shrink-0" />
      <span className="flex-1 max-w-[5rem] h-px bg-gradient-to-l from-accent-aka/50 to-transparent" />
      <span className="w-1.5 h-1.5 rounded-full bg-accent-aka/70" />
    </div>
  );
}