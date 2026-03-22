'use client';

import Link from 'next/link';
import { ArrowRight, Layers3, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { PageHero } from '@/components/page-hero';
import { getAboutCopy } from '@/lib/i18n';

const icons = [Sparkles, Layers3, ShieldCheck, Rocket];

export default function AboutPage() {
  const { language } = useLanguage();
  const copy = getAboutCopy(language);

  return (
    <main className="pb-24">
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description}
      />

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.missionEyebrow}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {copy.missionTitle}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
              {copy.missionParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(13,28,61,0.95),rgba(6,17,35,0.98))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.atAGlance}</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {copy.stats.map(([value, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-3xl font-semibold text-white">{value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.valuesEyebrow}</div>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{copy.valuesTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">{copy.valuesDescription}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {copy.values.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,42,0.96),rgba(7,13,28,0.98))] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.audienceEyebrow}</div>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{copy.audienceTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">{copy.audienceDescription}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.audienceBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(32,93,148,0.32),rgba(5,10,21,0.98))] p-8 text-center md:p-12">
          <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.ctaEyebrow}</div>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {copy.ctaDescription}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/product/deployment"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              {copy.ctas.exploredeployment}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              {copy.ctas.viewPricing}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
