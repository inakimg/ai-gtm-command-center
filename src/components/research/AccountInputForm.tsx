"use client";

import type { AccountInput } from "@/lib/types";

interface AccountInputFormProps {
  onSubmit: (input: AccountInput) => void;
  loading?: boolean;
  initial?: AccountInput;
}

export function AccountInputForm({
  onSubmit,
  loading,
  initial,
}: AccountInputFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    onSubmit({
      accountName: String(form.get("accountName") ?? "").trim(),
      domain: String(form.get("domain") ?? "").trim() || undefined,
      industry: String(form.get("industry") ?? "").trim() || undefined,
      notes: String(form.get("notes") ?? "").trim() || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="accountName" className="mb-1 block text-sm font-medium text-slate-700">
            Account name <span className="text-red-500">*</span>
          </label>
          <input
            id="accountName"
            name="accountName"
            required
            defaultValue={initial?.accountName}
            placeholder="e.g. Acme Corp"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div>
          <label htmlFor="domain" className="mb-1 block text-sm font-medium text-slate-700">
            Domain
          </label>
          <input
            id="domain"
            name="domain"
            defaultValue={initial?.domain}
            placeholder="acme.com"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div>
          <label htmlFor="industry" className="mb-1 block text-sm font-medium text-slate-700">
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            defaultValue={initial?.industry}
            placeholder="Financial services"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-medium text-slate-700">
          Your notes (context only — not treated as facts)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          defaultValue={initial?.notes}
          placeholder="CRM snippets, prior conversations, hypotheses to validate..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Scanning signals…" : "Run Signal Radar"}
      </button>
    </form>
  );
}
