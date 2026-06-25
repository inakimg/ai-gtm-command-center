"use client";

import Link from "next/link";
import { APP_NAME, PHASES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="flex w-full flex-col border-b border-slate-200 bg-slate-900 text-white lg:w-64 lg:border-b-0 lg:border-r">
      <div className="border-b border-slate-700 px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          Seller workflow
        </p>
        <h1 className="mt-1 text-lg font-bold leading-tight">{APP_NAME}</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-3">
        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Agents
        </p>
        <ul className="space-y-1">
          {PHASES.map((phase) => {
            const isActive = phase.status === "active";
            const isComplete = phase.status === "complete";
            const href = phase.slug === "research" ? "/research" : "#";

            return (
              <li key={phase.id}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                    isActive && "bg-blue-600 text-white",
                    !isActive && phase.status === "planned" && "text-slate-400 cursor-not-allowed",
                    isComplete && "text-emerald-300"
                  )}
                  aria-disabled={phase.status === "planned"}
                  onClick={(e) => {
                    if (phase.status === "planned") e.preventDefault();
                  }}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">
                    {phase.id}
                  </span>
                  <span>
                    <span className="block font-medium">{phase.name}</span>
                    <span
                      className={cn(
                        "block text-xs",
                        isActive ? "text-blue-100" : "text-slate-500"
                      )}
                    >
                      {phase.status === "planned" ? "Coming soon" : phase.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-700 p-4 text-xs text-slate-400">
        Facts ≠ hypotheses. Never invent customer claims.
      </div>
    </aside>
  );
}
