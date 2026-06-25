"use client";

import {
  ConfidenceBadge,
  ModeBadge,
  SignalTypeBadge,
} from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { SIGNAL_TYPE_LABELS } from "@/lib/constants";
import type { SignalRadarResult } from "@/lib/types";

interface SignalRadarProps {
  result: SignalRadarResult;
}

export function SignalRadar({ result }: SignalRadarProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <ModeBadge mode={result.mode} />
        <span className="text-xs text-slate-500">
          Researched {new Date(result.researchedAt).toLocaleString()}
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Executive summary</CardTitle>
        </CardHeader>
        <p className="text-sm leading-relaxed text-slate-700">{result.summary}</p>
      </Card>

      <section aria-labelledby="facts-heading">
        <div className="mb-3 flex items-center gap-2">
          <h2 id="facts-heading" className="text-lg font-semibold text-emerald-800">
            Sourced facts
          </h2>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
            {result.facts.length}
          </span>
        </div>
        <p className="mb-4 text-sm text-slate-600">
          Verified or source-linked observations. These are not guesses.
        </p>
        <div className="space-y-3">
          {result.facts.map((fact) => (
            <Card key={fact.id} variant="fact">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <SignalTypeBadge
                    label={SIGNAL_TYPE_LABELS[fact.signalType] ?? fact.signalType}
                  />
                  <ConfidenceBadge level={fact.confidence} />
                  {fact.dateObserved && (
                    <span className="text-xs text-slate-500">{fact.dateObserved}</span>
                  )}
                </div>
              </CardHeader>
              <p className="text-sm font-medium text-slate-900">{fact.claim}</p>
              <p className="mt-2 text-xs text-slate-500">
                Source:{" "}
                {fact.sourceUrl ? (
                  <a
                    href={fact.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {fact.source}
                  </a>
                ) : (
                  fact.source
                )}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="hypotheses-heading">
        <div className="mb-3 flex items-center gap-2">
          <h2 id="hypotheses-heading" className="text-lg font-semibold text-amber-800">
            Hypotheses
          </h2>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
            {result.hypotheses.length}
          </span>
        </div>
        <p className="mb-4 text-sm text-slate-600">
          Inferences to validate in discovery. Never present these as customer claims.
        </p>
        <div className="space-y-3">
          {result.hypotheses.map((hypothesis) => (
            <Card key={hypothesis.id} variant="hypothesis">
              <CardHeader>
                <ConfidenceBadge level={hypothesis.confidence} />
              </CardHeader>
              <p className="text-sm font-medium text-slate-900">{hypothesis.statement}</p>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium">Reasoning:</span> {hypothesis.reasoning}
              </p>
              {hypothesis.validationQuestions.length > 0 && (
                <div className="mt-3 rounded-lg bg-white/60 p-3">
                  <p className="mb-2 text-xs font-semibold uppercase text-amber-800">
                    Validate in discovery
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
                    {hypothesis.validationQuestions.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
