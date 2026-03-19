'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { getFooterCopy, getHeaderCopy } from '@/lib/i18n';

export function SiteFooter() {
  const { language } = useLanguage();
  const footer = getFooterCopy(language);
  const header = getHeaderCopy(language);

  const productLinks = header.productLinks.map((item) => [item.href, item.label] as const);
  const useCaseLinks = [
    ['/use-cases/category/productivity', header.useCaseColumns[0].items[0][1]],
    ['/use-cases/category/education', header.useCaseColumns[0].items[1][1]],
    ['/use-cases/category/health-wellness', header.useCaseColumns[0].items[3][1]],
    ['/use-cases/roles/product-management', header.useCaseColumns[1].items[0][1]],
    ['/use-cases/roles/operations', header.useCaseColumns[1].items[1][1]],
    ['/use-cases/roles/dev-productivity', header.useCaseColumns[1].items[4][1]],
  ] as const;

  return (
    <footer className="section-border mt-12">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.75fr_0.75fr_0.65fr]">
          <div>
            <div className="text-xl font-semibold text-white">{footer.brand}</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">{footer.description}</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{footer.sections.product}</div>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              {productLinks.map(([href, label]) => (
                <Link key={href} href={href} className="block hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{footer.sections.useCases}</div>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              {useCaseLinks.map(([href, label]) => (
                <Link key={href} href={href} className="block hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{footer.sections.company}</div>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <Link href="/about" className="block hover:text-white">
                {footer.companyLinks.about}
              </Link>
              <Link href="/pricing" className="block hover:text-white">
                {footer.companyLinks.pricing}
              </Link>
              <Link href="/examples" className="block hover:text-white">
                {footer.companyLinks.examples}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
