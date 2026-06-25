import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "fact" | "hypothesis" | "muted";
}

const variantStyles = {
  default: "border-slate-200 bg-white",
  fact: "border-emerald-200 bg-emerald-50/50",
  hypothesis: "border-amber-200 bg-amber-50/50",
  muted: "border-slate-100 bg-slate-50",
};

export function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-5 shadow-sm",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-3 flex items-start justify-between gap-3", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-base font-semibold text-slate-900", className)}>
      {children}
    </h3>
  );
}
