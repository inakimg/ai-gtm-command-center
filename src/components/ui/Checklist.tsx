interface ChecklistProps {
  items: string[];
  title?: string;
}

export function Checklist({ items, title }: ChecklistProps) {
  return (
    <div className="mt-3">
      {title && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </p>
      )}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
            <span
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400"
              aria-hidden
            >
              ☐
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
