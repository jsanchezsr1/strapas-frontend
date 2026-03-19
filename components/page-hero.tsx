import React from 'react';

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-90" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="glass max-w-4xl rounded-[2rem] p-8 md:p-12">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-100">
            {eyebrow}
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
      </div>
    </section>
  );
}
