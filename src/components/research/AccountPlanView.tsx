"use client";

import { ConfidenceBadge, ModeBadge, PriorityBadge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Checklist } from "@/components/ui/Checklist";
import type { AccountPlanResult } from "@/lib/types";

interface AccountPlanViewProps {
  plan: AccountPlanResult;
}

export function AccountPlanView({ plan }: AccountPlanViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <ModeBadge mode={plan.mode} />
        <span className="text-xs text-slate-500">
          Generated {new Date(plan.generatedAt).toLocaleString()}
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Executive summary</CardTitle>
        </CardHeader>
        <p className="text-sm leading-relaxed text-slate-700">{plan.executiveSummary}</p>
      </Card>

      <Card variant="fact">
        <CardHeader>
          <CardTitle>Why now</CardTitle>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              plan.whyNow.type === "fact"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-amber-100 text-amber-800"
            }`}
          >
            {plan.whyNow.type === "fact" ? "Sourced fact" : "Hypothesis"}
          </span>
        </CardHeader>
        <p className="text-sm font-medium text-slate-900">{plan.whyNow.label}</p>
      </Card>

      <section aria-labelledby="plan-sections">
        <h2 id="plan-sections" className="mb-4 text-lg font-semibold text-slate-900">
          Account plan sections
        </h2>
        <div className="space-y-4">
          {plan.sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <p className="text-sm leading-relaxed text-slate-700">{section.content}</p>
              {section.checklist && section.checklist.length > 0 && (
                <Checklist items={section.checklist} title="Checklist" />
              )}
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="next-actions">
        <h2 id="next-actions" className="mb-4 text-lg font-semibold text-slate-900">
          Next actions
        </h2>
        <div className="space-y-2">
          {plan.nextActions.map((action) => (
            <div
              key={action.action}
              className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-slate-400" aria-hidden>
                  ☐
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-900">{action.action}</p>
                  {action.owner && (
                    <p className="text-xs text-slate-500">Owner: {action.owner}</p>
                  )}
                </div>
              </div>
              <PriorityBadge priority={action.priority} />
            </div>
          ))}
        </div>
      </section>

      {plan.risks.length > 0 && (
        <section aria-labelledby="plan-risks">
          <h2 id="plan-risks" className="mb-4 text-lg font-semibold text-amber-800">
            Low-confidence risks to validate
          </h2>
          <div className="space-y-3">
            {plan.risks.map((risk) => (
              <Card key={risk.id} variant="hypothesis">
                <CardHeader>
                  <ConfidenceBadge level={risk.confidence} />
                </CardHeader>
                <p className="text-sm text-slate-800">{risk.statement}</p>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
