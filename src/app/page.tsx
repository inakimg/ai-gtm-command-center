import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/Card";
import { PHASES } from "@/lib/constants";

export default function HomePage() {
  const activePhase = PHASES.find((p) => p.status === "active");

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <header className="mb-10">
        <p className="text-sm font-medium text-blue-600">Strategic seller workflow</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          AI GTM Command Center
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
          One place to research accounts, separate facts from hypotheses, and build
          actionable account plans — without juggling ten browser tabs.
        </p>
      </header>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Sourced facts", desc: "Verified signals with sources", color: "emerald" },
          { label: "Hypotheses", desc: "Inferences to validate", color: "amber" },
          { label: "Confidence", desc: "High / medium / low on every claim", color: "blue" },
        ].map((item) => (
          <Card key={item.label} className="text-center">
            <p className="text-sm font-semibold text-slate-900">{item.label}</p>
            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
          </Card>
        ))}
      </div>

      {activePhase && (
        <Card className="mb-8 border-blue-200 bg-blue-50/40">
          <CardTitle>Start here — Phase {activePhase.id}</CardTitle>
          <p className="mt-2 text-sm text-slate-700">{activePhase.description}</p>
          <Link
            href="/research"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Open Account Research Agent →
          </Link>
        </Card>
      )}

      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Build roadmap</h2>
        <div className="space-y-2">
          {PHASES.map((phase) => (
            <div
              key={phase.id}
              className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  phase.status === "active"
                    ? "bg-blue-600 text-white"
                    : phase.status === "complete"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-200 text-slate-500"
                }`}
              >
                {phase.id}
              </span>
              <div className="flex-1">
                <p className="font-medium text-slate-900">{phase.name}</p>
                <p className="text-sm text-slate-500">{phase.description}</p>
              </div>
              <span className="text-xs font-medium capitalize text-slate-400">
                {phase.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
