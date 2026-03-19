import { ReactNode } from 'react';

export function InfoGrid({ items }: { items: { title: string; text: string; icon?: ReactNode }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10">
          {item.icon ? <div className="mb-4 text-cyan-300">{item.icon}</div> : null}
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
