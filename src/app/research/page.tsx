import { ResearchWorkflow } from "@/components/research/ResearchWorkflow";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <header className="mb-8">
        <p className="text-sm font-medium text-blue-600">Phase 1</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Account Research Agent</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Run Signal Radar to collect sourced facts and hypotheses, then generate a structured
          account plan with checklists and next actions.
        </p>
      </header>

      <ResearchWorkflow />
    </div>
  );
}
