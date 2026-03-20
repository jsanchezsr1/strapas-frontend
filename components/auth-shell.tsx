import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function AuthShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <section className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="absolute left-4 top-6 flex items-center gap-3 text-white sm:left-6 sm:top-8 lg:left-8 lg:top-10"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(88,220,255,0.22),rgba(10,26,60,0.9))] shadow-glow">
            <Sparkles className="h-5 w-5 text-cyan-200" />
          </div>
          <span className="text-lg font-semibold tracking-wide">Strapas</span>
        </Link>

        <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#06132c]/88 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mx-auto max-w-md text-center">
            <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Strapas
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
          </div>

          <div className="mx-auto mt-10 max-w-md">{children}</div>
        </div>
      </section>
    </main>
  );
}
