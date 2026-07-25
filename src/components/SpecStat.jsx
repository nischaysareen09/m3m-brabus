export function SpecStatRow({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border border-carbonline bg-carbonline md:grid-cols-3 lg:grid-cols-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-obsidian px-5 py-7">
          <div className="flex items-baseline gap-1 font-display text-3xl font-medium text-ivory md:text-4xl">
            {s.value}
            <span className="font-label text-xs text-brabus">{s.unit}</span>
          </div>
          <div className="eyebrow mt-2 text-ash">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function SpecList({ specs }) {
  return (
    <dl className="spec-grid">
      {specs.map((s) => (
        <div key={s.label} className="flex items-center justify-between gap-6 py-4 first:pt-0">
          <dt className="eyebrow text-ash">{s.label}</dt>
          <dd className="text-right font-body text-sm text-ivory">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
