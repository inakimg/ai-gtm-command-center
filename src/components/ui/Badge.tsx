import type { ConfidenceLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

const styles: Record<ConfidenceLevel, string> = {
  high: "bg-emerald-100 text-emerald-800 border-emerald-200",
  medium: "bg-amber-100 text-amber-800 border-amber-200",
  low: "bg-slate-100 text-slate-600 border-slate-200",
};

export function ConfidenceBadge({
  level,
  className,
}: {
  level: ConfidenceLevel;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
        styles[level],
        className
      )}
    >
      {level}
    </span>
  );
}

export function ModeBadge({ mode }: { mode: "live" | "mock" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        mode === "live"
          ? "border-blue-200 bg-blue-50 text-blue-700"
          : "border-violet-200 bg-violet-50 text-violet-700"
      )}
    >
      {mode === "live" ? "Live AI" : "Mock data"}
    </span>
  );
}

export function SignalTypeBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
      {label}
    </span>
  );
}

export function PriorityBadge({
  priority,
}: {
  priority: "high" | "medium" | "low";
}) {
  const styles = {
    high: "bg-red-100 text-red-800",
    medium: "bg-amber-100 text-amber-800",
    low: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize",
        styles[priority]
      )}
    >
      {priority}
    </span>
  );
}
