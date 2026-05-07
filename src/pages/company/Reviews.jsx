import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Star,
  Building2,
  FileText,
  MessageSquareText,
} from "lucide-react";

const reviewTypes = [
  {
    icon: MessageSquareText,
    title: "Product feedback",
    text: "Reviews from clients using TECFIQ products such as XDOCS, Captura, SmartRestora, HajiraBook, and education management systems.",
  },
  {
    icon: Building2,
    title: "Service experience",
    text: "Feedback about custom software development, requirement analysis, implementation, training, and long-term support.",
  },
  {
    icon: FileText,
    title: "Case-study linked reviews",
    text: "Testimonials connected to real project stories, showing the problem, solution, and outcome behind the client feedback.",
  },
];

const reviewChecklist = [
  "Client name or organization, if permission is granted",
  "Industry or business type",
  "Product or service used",
  "Short explanation of the problem solved",
  "Specific feedback about the experience",
  "Outcome or improvement where available",
];

const placeholderReviews = [
  {
    title: "Product experience",
    text: "Add a real client review here after receiving permission. The review should mention the product used and the specific workflow it improved.",
  },
  {
    title: "Implementation support",
    text: "Add feedback about onboarding, setup, training, communication, or post-launch support from a real client.",
  },
  {
    title: "Custom development project",
    text: "Add a testimonial connected to a custom software project, including the business problem and the result achieved.",
  },
];

export default function Reviews() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Client Reviews
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Real feedback from businesses that work with TECFIQ.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This page should collect authentic client feedback about TECFIQ’s
            products, custom software services, implementation support, and
            long-term collaboration. Reviews should be added only after client
            permission or from verified public sources.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              View case studies <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              Talk to TECFIQ
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEW TYPES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              What Reviews Should Show
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Useful reviews explain the experience, not just praise the company.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Good client reviews help visitors understand what TECFIQ helped
              with, how the process felt, and what changed after the software or
              service was delivered.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviewTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                    <Icon />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLACEHOLDER REVIEW STRUCTURE */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Review Examples
              </p>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Replace these placeholders with real client testimonials.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              These cards are only placeholders for structure. Before launch,
              replace them with verified client feedback, client-approved
              quotes, or public reviews.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {placeholderReviews.map((review) => (
              <article
                key={review.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>

                <Quote className="mb-5 text-blue-700" />

                <h3 className="text-xl font-bold text-slate-950">
                  {review.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {review.text}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Add real details
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Client name, industry, product used, and permission status.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFICATION GUIDELINES */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Review Guidelines
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Keep reviews specific, honest, and verifiable.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Reviews are most useful when they are specific. Instead of generic
              praise, each review should help future clients understand the
              product, service, workflow, or outcome being discussed.
            </p>

            <div className="mt-8">
              <Link
                to="/company/certifications-compliance"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
              >
                View trust & compliance <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
              <ShieldCheck />
            </div>

            <h3 className="text-3xl font-bold">
              What to include with each review
            </h3>

            <div className="mt-6 grid gap-4">
              {reviewChecklist.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Work With TECFIQ
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Want to discuss how TECFIQ can support your business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Contact the team to ask about products, services, implementation,
            customization, or support.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 hover:bg-amber-300"
            >
              Contact TECFIQ <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}