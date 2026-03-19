'use client';

import { useLanguage } from '@/components/language-provider';
import { getHowItWorksCopy } from '@/lib/i18n';

export default function HowItWorksPage() {
  const { language } = useLanguage();
  const copy = getHowItWorksCopy(language);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <h1 className="text-5xl font-semibold text-white">{copy.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy.description}</p>
    </main>
  );
}
