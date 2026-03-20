'use client';

import { useState } from 'react';
import { Check, CircleHelp } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { getPricingCopy } from '@/lib/i18n';

type BillingPeriod = 'yearly' | 'monthly';

const MONTHLY_HIDDEN_DOMAIN_HIGHLIGHTS = new Set([
  'Free domain for 1 year',
  'Domaine offert pendant 1 an',
  'Dominio gratis por 1 ano',
  'Dominio gratis per 1 anno',
]);

const MONTHLY_HIDDEN_DOMAIN_PLANS = new Set(['Elite', 'Pro', 'Builder']);

function getVisibleHighlights(
  plan: ReturnType<typeof getPricingCopy>['plans'][number],
  billingPeriod: BillingPeriod
) {
  if (billingPeriod !== 'monthly' || !MONTHLY_HIDDEN_DOMAIN_PLANS.has(plan.name)) {
    return plan.highlights;
  }

  return plan.highlights.filter((item) => !MONTHLY_HIDDEN_DOMAIN_HIGHLIGHTS.has(item));
}

function PricingCard({
  plan,
  billingPeriod,
  billedAnnually,
  pricePeriodSuffix,
  planHighlightsLabel,
  getStartedLabel,
  featured = false,
}: {
  plan: ReturnType<typeof getPricingCopy>['plans'][number];
  billingPeriod: BillingPeriod;
  billedAnnually: string;
  pricePeriodSuffix: string;
  planHighlightsLabel: string;
  getStartedLabel: string;
  featured?: boolean;
}) {
  const displayPrice =
    typeof plan.price === 'number' ? plan.price : plan.price[billingPeriod];
  const visibleHighlights = getVisibleHighlights(plan, billingPeriod);

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border backdrop-blur-sm transition duration-300 ${
        featured
          ? 'border-cyan-400/30 bg-white/[0.08] shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_20px_80px_rgba(0,0,0,0.35)]'
          : 'border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.28)]'
      }`}
    >
      {featured ? (
        <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900">
          Popular
        </div>
      ) : null}

      <div className="border-b border-white/10 p-7">
        <h2 className="text-[2.1rem] font-semibold leading-none tracking-[-0.04em] text-white">
          {plan.name}
        </h2>

        <p className="mt-5 min-h-[56px] text-[1rem] leading-6 text-slate-300">{plan.description}</p>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div className="flex items-end gap-1 text-white">
            <span className="text-[3.5rem] font-semibold leading-none tracking-[-0.06em]">
              ${displayPrice}
            </span>
            {displayPrice > 0 ? (
              <span className="mb-1.5 text-[1.35rem] text-slate-400">{pricePeriodSuffix}</span>
            ) : null}
          </div>

          {displayPrice > 0 && billingPeriod === 'yearly' ? (
            <div className="pb-1 text-sm font-medium text-slate-400">{billedAnnually}</div>
          ) : null}
        </div>
      </div>

      <div className="border-b border-white/10 px-7 py-6 text-[1rem] text-slate-200">
        <div className="flex items-center gap-2 font-medium">
          <span>{plan.credits}</span>
          <CircleHelp className="h-4 w-4 text-slate-500" />
        </div>
        <div className="mt-2 text-slate-400">{plan.integrations}</div>
      </div>

      <div className="border-b border-white/10 p-7">
        <button
          className={`inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-semibold transition ${
            featured
              ? 'bg-white text-slate-950 hover:bg-slate-100'
              : 'border border-white/10 bg-transparent text-white hover:bg-white/8'
          }`}
        >
          {getStartedLabel}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="text-base font-semibold text-white">{planHighlightsLabel}</div>

        <ul className="mt-5 space-y-3.5 text-[1rem] text-slate-300">
          {visibleHighlights.map((item) => (
            <li key={item} className="flex items-start gap-3 leading-6">
              <Check className="mt-0.5 h-5 w-5 flex-none text-cyan-300" strokeWidth={2.2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {plan.footnote ? (
          <p className="mt-4 text-[0.98rem] leading-6 text-slate-500">{plan.footnote}</p>
        ) : null}
      </div>
    </article>
  );
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('yearly');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { language } = useLanguage();
  const copy = getPricingCopy(language);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <section className="relative mx-auto flex min-h-screen max-w-[1720px] flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            {copy.eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400 sm:text-xl">{copy.description}</p>

          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-base font-medium text-cyan-100 sm:text-lg">{copy.subcopy}</p>

            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm">
              {([
                ['yearly', copy.toggle.yearly],
                ['monthly', copy.toggle.monthly],
              ] as const).map(([value, label]) => {
                const active = billingPeriod === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setBillingPeriod(value)}
                    aria-pressed={active}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 sm:text-base ${
                      active
                        ? 'bg-white text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.15)]'
                        : 'text-slate-300 hover:bg-white/8 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-5">
          {copy.plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billingPeriod={billingPeriod}
              billedAnnually={copy.billedAnnually}
              pricePeriodSuffix={copy.pricePeriodSuffix}
              planHighlightsLabel={copy.planHighlightsLabel}
              getStartedLabel={copy.getStarted}
              featured={plan.name === 'Pro'}
            />
          ))}
        </div>

        <section className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-cyan-400/15 bg-cyan-400/10 px-8 py-9 backdrop-blur-sm lg:flex-row lg:items-center lg:px-10">
          <div>
            <h3 className="text-[1.9rem] font-semibold tracking-[-0.04em] text-white">
              {copy.enterprise.title}
            </h3>
            <p className="mt-2 max-w-4xl text-lg leading-7 text-slate-300">
              {copy.enterprise.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            {copy.enterprise.cta}
          </button>
        </section>
      </section>

      {isContactModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-white/10 bg-[#07111f]/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] sm:p-8">
            <button
              type="button"
              aria-label="Close contact sales modal"
              onClick={() => setIsContactModalOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>

            <div className="pr-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">{copy.contactSalesForm.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.2rem]">
                {copy.contactSalesForm.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                {copy.contactSalesForm.description}
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-200">{copy.contactSalesForm.firstNameLabel}</span>
                  <input
                    type="text"
                    required
                    placeholder={copy.contactSalesForm.firstNamePlaceholder}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-200">{copy.contactSalesForm.lastNameLabel}</span>
                  <input
                    type="text"
                    required
                    placeholder={copy.contactSalesForm.lastNamePlaceholder}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-200">{copy.contactSalesForm.emailLabel}</span>
                  <input
                    type="email"
                    required
                    placeholder={copy.contactSalesForm.emailPlaceholder}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-200">{copy.contactSalesForm.roleLabel}</span>
                  <input
                    type="text"
                    required
                    placeholder={copy.contactSalesForm.rolePlaceholder}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-200">{copy.contactSalesForm.websiteLabel}</span>
                <input
                  type="text"
                  required
                  inputMode="url"
                  placeholder="www.company.com"
                  className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-200">{copy.contactSalesForm.discussLabel}</span>
                <textarea
                  required
                  rows={5}
                  placeholder={copy.contactSalesForm.discussPlaceholder}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                />
              </label>

              <div className="mt-4 flex justify-center">
                <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-base font-semibold leading-none text-slate-950 transition hover:bg-slate-100 sm:w-auto sm:min-w-[180px]"
                >
                  {copy.contactSalesForm.submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
