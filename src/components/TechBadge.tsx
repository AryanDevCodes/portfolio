import { cn } from "@/lib/utils";

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
}

export function TechBadge({ tech, variant = "default", size = "sm" }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "font-mono inline-flex items-center rounded-md transition-colors",
        {
          "bg-secondary text-secondary-foreground": variant === "default",
          "border border-border text-muted-foreground hover:border-primary hover:text-primary": variant === "outline",
          "text-muted-foreground hover:text-foreground": variant === "ghost",
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
        }
      )}
    >
      {tech}
    </span>
  );
}
