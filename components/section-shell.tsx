export function SectionShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</div>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
