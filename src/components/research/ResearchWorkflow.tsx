"use client";

import { useState } from "react";
import { AccountInputForm } from "@/components/research/AccountInputForm";
import { AccountPlanView } from "@/components/research/AccountPlanView";
import { SignalRadar } from "@/components/research/SignalRadar";
import { Card, CardTitle } from "@/components/ui/Card";
import { StepFlow } from "@/components/ui/StepFlow";
import type {
  AccountInput,
  AccountPlanResult,
  SignalRadarResult,
  WorkflowStep,
} from "@/lib/types";

const WORKFLOW_STEPS = [
  { id: "input", label: "Account", description: "Enter target" },
  { id: "signals", label: "Signals", description: "Scan radar" },
  { id: "review", label: "Review", description: "Facts vs hypotheses" },
  { id: "plan", label: "Plan", description: "Generate plan" },
  { id: "complete", label: "Done", description: "Export actions" },
];

export function ResearchWorkflow() {
  const [step, setStep] = useState<WorkflowStep>("input");
  const [input, setInput] = useState<AccountInput | null>(null);
  const [signals, setSignals] = useState<SignalRadarResult | null>(null);
  const [plan, setPlan] = useState<AccountPlanResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runSignalRadar(accountInput: AccountInput) {
    setLoading(true);
    setError(null);
    setInput(accountInput);
    setPlan(null);

    try {
      const res = await fetch("/api/research/signals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(accountInput),
      });

      if (!res.ok) throw new Error("Signal scan failed");
      const data: SignalRadarResult = await res.json();
      setSignals(data);
      setStep("review");
    } catch {
      setError("Could not run signal radar. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function generatePlan() {
    if (!input || !signals) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/research/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, signals }),
      });

      if (!res.ok) throw new Error("Plan generation failed");
      const data: AccountPlanResult = await res.json();
      setPlan(data);
      setStep("complete");
    } catch {
      setError("Could not generate account plan. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setStep("input");
    setInput(null);
    setSignals(null);
    setPlan(null);
    setError(null);
  }

  return (
    <div className="space-y-8">
      <StepFlow steps={WORKFLOW_STEPS} currentStepId={step} />

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {step === "input" && (
        <Card>
          <CardTitle>Step 1 — Enter account details</CardTitle>
          <p className="mb-4 mt-2 text-sm text-slate-600">
            Start with the account you want to research. Your notes help the agent focus but
            are never treated as verified facts.
          </p>
          <AccountInputForm onSubmit={runSignalRadar} loading={loading} initial={input ?? undefined} />
        </Card>
      )}

      {(step === "review" || step === "plan" || step === "complete") && signals && (
        <>
          <Card variant="muted">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">Target account</p>
                <p className="text-lg font-bold text-slate-900">{signals.accountName}</p>
                {signals.domain && (
                  <p className="text-sm text-slate-500">{signals.domain}</p>
                )}
              </div>
              <button
                type="button"
                onClick={reset}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-600 hover:bg-white"
              >
                Start over
              </button>
            </div>
          </Card>

          <SignalRadar result={signals} />

          {step === "review" && (
            <Card>
              <CardTitle>Step 3 — Review, then generate plan</CardTitle>
              <p className="mb-4 mt-2 text-sm text-slate-600">
                Confirm which signals are facts vs. hypotheses before building your account plan.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep("plan");
                  generatePlan();
                }}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? "Generating plan…" : "Generate Account Plan"}
              </button>
            </Card>
          )}

          {(step === "plan" || step === "complete") && loading && (
            <Card>
              <p className="text-sm text-slate-600">Building your account plan…</p>
            </Card>
          )}

          {step === "complete" && plan && <AccountPlanView plan={plan} />}
        </>
      )}
    </div>
  );
}
