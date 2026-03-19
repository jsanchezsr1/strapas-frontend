'use client';

import { ArrowRight, CheckCircle2, Layers3, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { PageHero } from '@/components/page-hero';
import { getHowItWorksCopy } from '@/lib/i18n';

const overviewIcons = [Sparkles, Layers3, CheckCircle2];

export default function HowItWorksPage() {
  const { language } = useLanguage();
  const copy = getHowItWorksCopy(language);

  return (
    <main className="pb-24">
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur md:p-10">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.stepsLabel}</div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {copy.stepsTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.supportingDescription}</p>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(13,28,61,0.95),rgba(6,17,35,0.98))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-10">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.overviewLabel}</div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">{copy.overviewTitle}</h2>
            <div className="mt-6 space-y-4">
              {copy.overviewPoints.map((item, index) => {
                const Icon = overviewIcons[index];

                return (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {copy.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-semibold text-cyan-200">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white md:text-2xl">{step.title}</h3>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                {step.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,42,0.96),rgba(7,13,28,0.98))] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.outputsLabel}</div>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{copy.outputsTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">{copy.whyParagraphs[0]}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.outputs.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium capitalize leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(32,93,148,0.32),rgba(5,10,21,0.98))] p-8 md:p-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-100">
              {copy.whyLabel}
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-5xl">{copy.whyTitle}</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
              {copy.whyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
              {copy.closingCallout}
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
