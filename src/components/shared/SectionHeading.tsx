import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.24em]",
            "text-brand-gold",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
          inverted ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverted ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
