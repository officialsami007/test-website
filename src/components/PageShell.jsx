import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PageShell({
  eyebrow,
  title,
  description,
  ctaText = "Contact us",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  features = [],
  children,
}) {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          {eyebrow && (
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              {eyebrow}
            </p>
          )}

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              {ctaText} <ArrowRight size={18} />
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link
                to={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </section>

      {features.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="font-medium leading-6 text-slate-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {children}
    </main>
  );
}