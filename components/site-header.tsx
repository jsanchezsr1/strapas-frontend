'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Globe2, Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { getHeaderCopy } from '@/lib/i18n';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-2 text-sm transition ${
        active ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function DesktopDropdown({
  label,
  open,
  setOpen,
  children,
}: {
  label: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm transition ${
          open ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'
        }`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute left-0 top-full pt-2 transition ${
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function LanguageSelector({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const { language, setLanguage, languages } = useLanguage();
  const copy = getHeaderCopy(language);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label={copy.languageMenu.buttonLabel}
        onClick={() => setOpen(!open)}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
          open
            ? 'border-cyan-300/40 bg-white/10 text-white'
            : 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/30 hover:text-white'
        }`}
      >
        <Globe2 className="h-4.5 w-4.5" />
      </button>

      <div
        className={`absolute right-0 top-full pt-2 transition ${
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="w-52 rounded-[1.35rem] border border-white/10 bg-[#081327] p-2 shadow-2xl shadow-black/40">
          {languages.map((option) => {
            const active = option.code === language;

            return (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setLanguage(option.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm transition ${
                  active
                    ? 'bg-white text-slate-950'
                    : 'text-slate-200 hover:bg-white/6 hover:text-white'
                }`}
              >
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'product' | 'use-cases' | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { language, setLanguage, languages } = useLanguage();
  const copy = getHeaderCopy(language);

  useEffect(() => {
    setMobileOpen(false);
    setMobileLanguageOpen(false);
    setOpenMenu(null);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setLanguageOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-5 z-50 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <div
        ref={wrapperRef}
        className="rounded-[1.9rem] border border-cyan-300/10 bg-[#06132c]/92 px-5 py-4 shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(88,220,255,0.22),rgba(10,26,60,0.9))] shadow-glow">
              <Sparkles className="h-5 w-5 text-cyan-200" />
            </div>
            <span className="text-lg font-semibold tracking-wide">{copy.brand}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <DesktopDropdown
              label={copy.productLabel}
              open={openMenu === 'product'}
              setOpen={(value) => setOpenMenu(value ? 'product' : null)}
            >
              <div className="w-[40rem] rounded-[1.5rem] border border-white/10 bg-[#081327] p-4 shadow-2xl shadow-black/40">
                <div className="grid gap-3 md:grid-cols-2">
                  {copy.productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
                    >
                      <div className="text-sm font-semibold text-white">{item.label}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-400">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </DesktopDropdown>

            <DesktopDropdown
              label={copy.useCasesLabel}
              open={openMenu === 'use-cases'}
              setOpen={(value) => setOpenMenu(value ? 'use-cases' : null)}
            >
              <div className="w-[42rem] rounded-[1.5rem] border border-white/10 bg-[#081327] p-5 shadow-2xl shadow-black/40">
                <div className="grid gap-5 md:grid-cols-2">
                  {copy.useCaseColumns.map((column) => (
                    <div key={column.title}>
                      <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                        {column.title}
                      </div>
                      <div className="space-y-2">
                        {column.items.map(([href, label]) => (
                          <Link
                            key={href}
                            href={href}
                            className="block rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.06] hover:text-white"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DesktopDropdown>

            <NavLink href="/product/features">{copy.nav.features}</NavLink>
            <NavLink href="/examples">{copy.nav.examples}</NavLink>
            <NavLink href="/how-it-works">{copy.nav.howItWorks}</NavLink>
            <NavLink href="/about">{copy.nav.about}</NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-cyan-300/18 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/5"
            >
              {copy.ctas.viewPricing}
            </Link>
            <LanguageSelector open={languageOpen} setOpen={setLanguageOpen} />
            <Link
              href="/product/backend-platform"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              {copy.ctas.startBuilding}
            </Link>
          </div>

          <button
            type="button"
            aria-label={copy.languageMenu.openMenu}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-4 max-h-[calc(100vh-7rem)] space-y-5 overflow-y-auto border-t border-white/10 pt-4 lg:hidden">
            <div className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-3">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  {copy.languageMenu.mobileLabel}
                </div>
                <div className="mt-1 text-sm text-white">
                  {languages.find((option) => option.code === language)?.label}
                </div>
              </div>
              <button
                type="button"
                aria-label={copy.languageMenu.buttonLabel}
                onClick={() => setMobileLanguageOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100"
              >
                <Globe2 className="h-4.5 w-4.5" />
              </button>
            </div>

            {mobileLanguageOpen ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {languages.map((option) => {
                  const active = option.code === language;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => {
                        setLanguage(option.code);
                        setMobileLanguageOpen(false);
                      }}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        active
                          ? 'border-white bg-white text-slate-950'
                          : 'border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/8'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            ) : null}

            <div>
              <div className="mb-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                {copy.productLabel}
              </div>
              <div className="space-y-2">
                {copy.productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.desc}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                {copy.useCasesLabel}
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {copy.useCaseColumns.flatMap((column) => column.items).map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <NavLink href="/product/features">{copy.nav.features}</NavLink>
              <NavLink href="/examples">{copy.nav.examples}</NavLink>
              <NavLink href="/how-it-works">{copy.nav.howItWorks}</NavLink>
              <NavLink href="/about">{copy.nav.about}</NavLink>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/18 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/5"
              >
                {copy.ctas.viewPricing}
              </Link>
              <Link
                href="/product/backend-platform"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                {copy.ctas.startBuilding}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
