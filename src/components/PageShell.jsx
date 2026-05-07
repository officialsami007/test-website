import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PageShell({
  eyebrow,
  title,
  description,
  ctaText = "Contact TECFIQ",
  ctaHref = "/contact",
  secondaryText,
  secondaryHref,
  features = [],
  children,
}) {
  return (
    <main className="bg-[#f0f9ff] text-[#03045e]">
      {/* Header hero — dark */}
      <section
        className="relative overflow-hidden border-b border-[#ade8f4]/18"
        style={{ background: "linear-gradient(150deg, #03045e 0%, #023e8a 100%)" }}
      >
        <div className="hero-grid opacity-35" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center">
          {eyebrow && (
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#48cae4]"
              style={{ animation: "fadeIn 0.55s ease both" }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
            style={{ animation: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#caf0f8]/75"
              style={{ animation: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.22s both" }}
            >
              {description}
            </p>
          )}
          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animation: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.36s both" }}
          >
            <Link
              to={ctaHref}
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-4 text-sm font-bold text-white"
            >
              {ctaText} <ArrowRight size={18} />
            </Link>
            {secondaryText && secondaryHref && (
              <Link
                to={secondaryHref}
                className="btn-ghost-light inline-flex items-center gap-2 rounded-xl px-6 py-4 text-sm font-bold"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      {features.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-20 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 rounded-[1.5rem] border border-[#ade8f4]/38 bg-[#f0f9ff] p-5 transition hover:border-[#48cae4]/55 hover:bg-white hover:shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#0077b6]" size={20} />
                <p className="text-sm font-medium leading-6 text-[#03045e]">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {children}
    </main>
  );
}