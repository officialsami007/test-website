import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Store,
  Users,
  ClipboardList,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const studies = [
  {
    icon: FileSearch,
    product: "Captura + XDOCS",
    title: "Digitizing document-heavy business records",
    summary:
      "A document management case study can show how a business moved from scattered physical files to a more searchable, secure, and organized digital record system.",
    points: [
      "Challenge: paper-heavy records and slow document retrieval",
      "Solution: scanning workflow, OCR-assisted extraction, metadata, and role-based access",
      "Outcome to add: retrieval time saved, processing accuracy, or reduction in manual review",
    ],
    href: "/solutions/xdocs-ai-dms",
  },
  {
    icon: Store,
    product: "SmartRestora",
    title: "Improving restaurant billing and order operations",
    summary:
      "A restaurant operations case study can show how SmartRestora supports billing, kitchen flow, inventory, reporting, and multi-counter coordination.",
    points: [
      "Challenge: order delays, billing errors, or disconnected counters",
      "Solution: POS billing, kitchen order flow, inventory tracking, and dashboard visibility",
      "Outcome to add: faster service, fewer errors, or clearer sales reporting",
    ],
    href: "/solutions/smartrestora-pos",
  },
  {
    icon: Users,
    product: "HajiraBook",
    title: "Connecting attendance, HR records, and payroll workflows",
    summary:
      "An HR and payroll case study can show how a company improved attendance tracking, employee records, leave, rosters, and payroll-related processes.",
    points: [
      "Challenge: manual attendance tracking and payroll mismatches",
      "Solution: biometric attendance sync, employee records, rosters, and payroll workflow",
      "Outcome to add: reduced correction time, better attendance visibility, or fewer payroll errors",
    ],
    href: "/solutions/hajirabook-payroll",
  },
];

const caseStudyStructure = [
  {
    icon: ClipboardList,
    title: "The business problem",
    text: "Each case study should begin with the client’s real operational challenge, such as slow document retrieval, manual payroll work, billing errors, or scattered reporting.",
  },
  {
    icon: ShieldCheck,
    title: "The solution delivered",
    text: "Explain what TECFIQ implemented, configured, integrated, or customized to solve the problem.",
  },
  {
    icon: BarChart3,
    title: "The result",
    text: "Add measurable outcomes where available, such as time saved, error reduction, faster reporting, smoother operations, or better user adoption.",
  },
];

export default function CaseStudies() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Case Studies
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Real examples of how software improves business operations.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This section should share client stories that explain the problem,
            the software solution, the implementation process, and the outcome.
            Until real client-approved case studies are added, the cards below
            show the recommended structure for TECFIQ’s product areas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              Discuss your project <ArrowRight size={18} />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              View products
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Example Case Study Areas
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Case studies should be specific, practical, and client-approved.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Replace these example cards with real project stories once client
              permission, screenshots, metrics, and testimonials are available.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {studies.map((study) => {
              const Icon = study.icon;

              return (
                <article
                  key={study.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                      <Icon />
                    </div>

                    <p className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">
                      {study.product}
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {study.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {study.summary}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {study.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        <p className="text-sm leading-6 text-slate-600">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={study.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                  >
                    View related product <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDY STRUCTURE */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              What A Good Case Study Includes
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A clear story helps visitors understand how TECFIQ solves real problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A useful case study should not only say that a project was
              completed. It should explain what the business needed, how TECFIQ
              approached the work, and what improved after implementation.
            </p>
          </div>

          <div className="grid gap-5">
            {caseStudyStructure.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
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
            Have a workflow or software challenge you want to improve?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Contact TECFIQ to discuss your business process, product interest,
            or custom software requirement.
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