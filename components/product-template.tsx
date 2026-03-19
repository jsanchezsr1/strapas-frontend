'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { InfoGrid } from '@/components/info-grid';
import { PageHero } from '@/components/page-hero';
import { SectionShell } from '@/components/section-shell';
import {
  getProductPageCopy,
  getProductTemplateCopy,
  type ProductPageKey,
} from '@/lib/i18n';

export function ProductTemplate({ pageKey }: { pageKey: ProductPageKey }) {
  const { language } = useLanguage();
  const page = getProductPageCopy(language, pageKey);
  const copy = getProductTemplateCopy(language);

  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

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
    </main>
  );
}
