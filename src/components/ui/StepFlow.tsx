import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  label: string;
  description?: string;
}

interface StepFlowProps {
  steps: Step[];
  currentStepId: string;
}

export function StepFlow({ steps, currentStepId }: StepFlowProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStepId);

  return (
    <nav aria-label="Workflow progress" className="w-full">
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0">
        {steps.map((step, index) => {
          const isComplete = index < currentIndex;
          const isCurrent = step.id === currentStepId;

          return (
            <li key={step.id} className="flex flex-1 items-center gap-2 sm:flex-col sm:gap-1">
              <div className="flex items-center gap-2 sm:flex-col">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                    isComplete && "bg-emerald-600 text-white",
                    isCurrent && "bg-blue-600 text-white ring-4 ring-blue-100",
                    !isComplete && !isCurrent && "bg-slate-200 text-slate-500"
                  )}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isComplete ? "✓" : index + 1}
                </span>
                <div className="sm:text-center">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isCurrent ? "text-blue-700" : "text-slate-700"
                    )}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="hidden text-xs text-slate-500 sm:block">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "hidden h-0.5 flex-1 sm:block",
                    isComplete ? "bg-emerald-300" : "bg-slate-200"
                  )}
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
