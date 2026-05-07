import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileText,
  KeyRound,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";

const securityAreas = [
  {
    icon: KeyRound,
    title: "Role-based access control",
    text: "Software should allow businesses to control who can view, edit, approve, manage, or export different types of data.",
  },
  {
    icon: LockKeyhole,
    title: "Secure authentication",
    text: "User access should be protected through proper authentication flows, account controls, and permission-aware application design.",
  },
  {
    icon: Database,
    title: "Data organization and storage",
    text: "Business data should be structured, searchable, and managed in a way that supports daily use, reporting, and long-term continuity.",
  },
  {
    icon: FileText,
    title: "Activity logs and traceability",
    text: "Important actions such as approvals, updates, uploads, and status changes should be traceable where the workflow requires it.",
  },
  {
    icon: RefreshCcw,
    title: "Backup and recovery planning",
    text: "Business-critical systems should be planned with backup, recovery, and continuity considerations based on the client’s operational needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality and release process",
    text: "Software changes should be tested, reviewed, and released in a controlled way to reduce disruption for users and business teams.",
  },
];

const complianceNotes = [
  "Formal certifications should only be listed after they are verified.",
  "Security practices should be explained clearly for business and technical readers.",
  "Access control, data handling, backup, and support policies should be documented.",
  "Client-specific security requirements should be discussed during project planning.",
];

export default function Compliance() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Certifications & Compliance
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Security, access control, and responsible software delivery.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TECFIQ’s software work should be supported by clear practices for
            user access, data handling, system reliability, quality control, and
            long-term support. This page explains the areas clients can discuss
            when evaluating TECFIQ products or custom software services.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              Discuss security requirements <ArrowRight size={18} />
            </Link>

            <Link
              to="/documentation"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              View documentation
            </Link>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                <ShieldCheck />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  Certification note
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  This page should only mention formal certifications such as
                  ISO, CMMI, SOC, or similar standards if TECFIQ has verified
                  proof. Until then, the page should focus on security practices,
                  delivery standards, data handling approach, and certification
                  roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Security & Delivery Areas
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              What clients should be able to understand before using the software.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Business software often handles sensitive operational information.
              Clients need to understand how access is managed, how important
              actions are tracked, how data is handled, and how the software is
              maintained.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {securityAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                    <Icon />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT APPLIES */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              How This Applies
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Security and compliance should match the product and business requirement.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A restaurant POS, HR system, document management platform, and
              custom enterprise application may each require different security
              and data handling decisions. TECFIQ should discuss these
              requirements during planning and implementation.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
              <UserCheck />
            </div>

            <h3 className="text-3xl font-bold">
              Questions clients can ask
            </h3>

            <div className="mt-6 grid gap-4">
              {[
                "Who can access sensitive business data?",
                "Can user roles and permissions be configured?",
                "Can important actions be tracked through logs?",
                "How is data backed up or protected from accidental loss?",
                "How are updates, fixes, and changes handled after launch?",
                "What security requirements are needed for our specific workflow?",
              ].map((question) => (
                <div key={question} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Compliance Roadmap
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A clear compliance page can grow as TECFIQ’s formal standards grow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              If TECFIQ pursues formal certifications or publishes detailed
              security documentation later, this page can be updated with
              verified certification names, policy documents, audit information,
              and product-specific security guides.
            </p>

            <div className="mt-8">
              <Link
                to="/company/about-us"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
              >
                Learn about TECFIQ <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {complianceNotes.map((note) => (
              <div
                key={note}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Have Specific Requirements?
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Discuss security, access, and data handling before implementation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If your organization has specific access, privacy, backup, audit, or
            deployment requirements, contact TECFIQ so those needs can be
            considered during planning.
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