'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  CirclePlay,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { getHomeCopy } from '@/lib/i18n';

export default function HomePage() {
  const router = useRouter();
  const { language } = useLanguage();
  const copy = getHomeCopy(language);

  return (
    <main className="pb-24">
      <section className="relative mx-auto max-w-[1720px] px-4 pb-1 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            {copy.eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400 sm:text-xl">{copy.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan-100">
              <Sparkles className="h-4 w-4" /> {copy.liveBuildFlow}
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {copy.launchTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {copy.launchDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/examples"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
              >
                <CirclePlay className="h-4 w-4" /> {copy.ctas.exploreExamples}
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {copy.featureBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,42,0.9),rgba(7,13,28,0.96))] px-5 py-5 text-sm text-slate-200"
                >
                  <CheckCircle2 className="mb-3 h-4 w-4 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(13,28,61,0.95),rgba(6,17,35,0.98))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.7rem] border border-white/10 bg-[#04112a]/95 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-2xl font-medium text-white">{copy.promptWorkspace}</div>
                  <div className="mt-1 text-base text-slate-400">{copy.internalToolMinutes}</div>
                </div>
                <div className="rounded-full bg-emerald-400/12 px-4 py-2 text-sm font-medium text-emerald-200">
                  {copy.livePreview}
                </div>
              </div>

              <div className="mt-5 h-px bg-white/10" />

              <div className="mt-5 space-y-4">
                {copy.prompts.map((prompt, index) => (
                  <div
                    key={prompt}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-5 py-5"
                  >
                    <div className="text-xs uppercase tracking-[0.34em] text-slate-500">
                      {copy.promptLabel} {index + 1}
                    </div>
                    <div className="mt-4 text-[1.02rem] leading-8 text-slate-100">{prompt}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.35rem] border border-cyan-400/12 bg-[linear-gradient(180deg,rgba(9,57,88,0.88),rgba(7,37,62,0.92))] p-5">
                  <div className="text-base text-slate-200">{copy.generatedScreens}</div>
                  <div className="mt-4 text-6xl font-semibold tracking-[-0.05em] text-white">24</div>
                  <div className="mt-3 text-base leading-7 text-slate-300">
                    {copy.generatedScreensDescription}
                  </div>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-base text-slate-200">{copy.deployReadiness}</div>
                  <div className="mt-4 text-6xl font-semibold tracking-[-0.05em] text-white">98%</div>
                  <div className="mt-3 text-base leading-7 text-slate-300">
                    {copy.deployReadinessDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
