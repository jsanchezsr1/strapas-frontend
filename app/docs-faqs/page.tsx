'use client';

import { BookOpen, MessageSquareText } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { PageHero } from '@/components/page-hero';
import { SectionShell } from '@/components/section-shell';
import { getDocsFaqsPageCopy } from '@/lib/i18n';

export default function Page() {
  const { language } = useLanguage();
  const copy = getDocsFaqsPageCopy(language);

  return (
    <main>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <SectionShell eyebrow={copy.docs.eyebrow} title={copy.docs.title} description={copy.docs.description}>
        <div className="grid gap-5 md:grid-cols-3">
          {copy.docs.cards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                {index === 0 ? <BookOpen className="h-5 w-5" /> : <MessageSquareText className="h-5 w-5" />}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">{card.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow={copy.faqs.eyebrow} title={copy.faqs.title} description={copy.faqs.description}>
        <div className="space-y-4">
          {copy.faqs.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 open:border-cyan-300/30 open:bg-white/[0.06]"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-white marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">{item.answer}</p>
            </details>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
