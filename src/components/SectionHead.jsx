export default function SectionHead({ eyebrow, title, copy, light = false, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="mb-4 flex items-center gap-3" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
        <span className="h-px w-8 bg-brabus" aria-hidden="true" />
        <span className={`eyebrow ${light ? "text-graphite" : "text-ash"}`}>{eyebrow}</span>
      </div>
      <h2 className={`font-display text-3xl font-medium leading-[1.1] md:text-4xl lg:text-[2.75rem] ${light ? "text-obsidian" : "text-ivory"}`}>
        {title}
      </h2>
      {copy && <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-graphite" : "text-ash"}`}>{copy}</p>}
    </div>
  );
}
