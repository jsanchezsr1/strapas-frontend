'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { InfoGrid } from '@/components/info-grid';
import { PageHero } from '@/components/page-hero';
import { SectionShell } from '@/components/section-shell';
import {
  getBackendPlatformFlowCopy,
  getProductPageCopy,
  getProductTemplateCopy,
  getTemplatesMarketplaceFlowCopy,
  type ProductPageKey,
} from '@/lib/i18n';

export function ProductTemplate({ pageKey }: { pageKey: ProductPageKey }) {
  const { language } = useLanguage();
  const page = getProductPageCopy(language, pageKey);
  const copy = getProductTemplateCopy(language);
  const blueprintPage = pageKey === 'blueprint' ? page.blueprint : null;
  const structuredFlow =
    pageKey === 'prompt-deployment'
      ? getBackendPlatformFlowCopy(language)
      : pageKey === 'how-it-works'
        ? getTemplatesMarketplaceFlowCopy(language)
        : null;

  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      {structuredFlow ? (
        <>
          <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{structuredFlow.introLabel}</div>
              <div className="mt-5 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
                {structuredFlow.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {structuredFlow.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-semibold text-cyan-200">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{section.title}</div>
                      <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{section.lead}</h2>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pt-8 pb-12 lg:px-8">
            <div className="rounded-[2rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(32,93,148,0.32),rgba(5,10,21,0.98))] p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-100">
                  {structuredFlow.closing.eyebrow}
                </div>
                <h2 className="mt-5 text-3xl font-semibold text-white md:text-5xl">{structuredFlow.closing.title}</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
                  {structuredFlow.closing.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                  {structuredFlow.closing.callout}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {blueprintPage ? (
        <>
          <SectionShell
            eyebrow={blueprintPage.whatIs.eyebrow}
            title={blueprintPage.whatIs.title}
            description={blueprintPage.whatIs.paragraphs[0]}
          >
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <div className="space-y-5 text-base leading-8 text-slate-300 md:text-lg">
                {blueprintPage.whatIs.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </SectionShell>

          <SectionShell
            eyebrow={blueprintPage.whyItMatters.eyebrow}
            title={blueprintPage.whyItMatters.title}
          >
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="glass rounded-[2rem] p-8 md:p-10">
                <div className="space-y-5 text-base leading-8 text-slate-300 md:text-lg">
                  {blueprintPage.whyItMatters.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{blueprintPage.coordinates.panelEyebrow}</div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{blueprintPage.coordinates.panelTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                  {blueprintPage.coordinates.description}
                </p>
              </div>
            </div>
          </SectionShell>

          <SectionShell
            eyebrow={blueprintPage.coordinates.eyebrow}
            title={blueprintPage.coordinates.title}
            description={blueprintPage.coordinates.description}
          >
            <InfoGrid items={blueprintPage.coordinates.items} />
          </SectionShell>

          <SectionShell
            eyebrow={blueprintPage.benefits.eyebrow}
            title={blueprintPage.benefits.title}
            description={blueprintPage.benefits.intro}
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(32,93,148,0.32),rgba(5,10,21,0.98))] p-8 md:p-10">
                <div className="space-y-5 text-base leading-8 text-slate-200 md:text-lg">
                  {blueprintPage.benefits.benefits.map((benefit) => (
                    <div key={benefit} className="flex gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-[2rem] p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{copy.whyPages}</div>
                <p className="mt-5 text-lg leading-8 text-slate-300">{blueprintPage.benefits.closing}</p>
              </div>
            </div>
          </SectionShell>
        </>
      ) : !structuredFlow ? (
        <>
          <SectionShell
            eyebrow={copy.coreValue}
            title={copy.communicateTitle}
            description={copy.communicateDescription}
          >
            <InfoGrid items={page.pillars} />
          </SectionShell>

          <SectionShell eyebrow={copy.whyPages} title={copy.whyTitle}>
            <div className="grid gap-5 md:grid-cols-3">
              {copy.whyBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-slate-300"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell eyebrow={copy.nextSteps} title={copy.nextTitle}>
            <div className="glass flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 md:flex-row md:items-center">
              <div>
                <div className="text-2xl font-semibold text-white">{copy.nextCardTitle}</div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  {copy.nextCardDescription}
                </p>
              </div>
              <Link
                href="/product/features"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                {copy.viewProductFeatures} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionShell>
        </>
      ) : null}
    </main>
  );
}
