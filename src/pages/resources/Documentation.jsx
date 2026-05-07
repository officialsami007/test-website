import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  KeyRound,
  LifeBuoy,
  Plug,
  Settings,
  ShieldCheck,
  UserCog,
} from "lucide-react";

const docSections = [
  {
    icon: BookOpen,
    title: "Getting started",
    text: "Introductory guides that explain what each TECFIQ product does, who it is for, and how a business can begin using it.",
  },
  {
    icon: Settings,
    title: "Product setup",
    text: "Step-by-step setup instructions for workspaces, branches, users, departments, roles, documents, products, or business records.",
  },
  {
    icon: UserCog,
    title: "Admin guides",
    text: "Guides for managers and administrators who configure permissions, workflows, reports, notifications, and product settings.",
  },
  {
    icon: Plug,
    title: "Integrations",
    text: "Documentation for supported integrations such as biometric devices, payment gateways, document import workflows, or future API connections.",
  },
  {
    icon: ShieldCheck,
    title: "Security and access",
    text: "Guides explaining user roles, access control, authentication, data visibility, audit logs, and recommended security settings.",
  },
  {
    icon: LifeBuoy,
    title: "Support and troubleshooting",
    text: "Help articles for common questions, onboarding issues, account setup, product usage, and support requests.",
  },
];

const setupSteps = [
  "Choose the TECFIQ product or service that matches the business need",
  "Define users, roles, departments, branches, or operational units",
  "Import existing data such as employees, documents, products, students, or records",
  "Configure workflows, permissions, reports, notifications, and integrations",
  "Train users, monitor usage, and improve the setup based on feedback",
];

const productDocs = [
  {
    title: "XDOCS documentation",
    text: "Guides for document upload, folder structure, access permissions, preview, metadata, search, and archiving workflows.",
  },
  {
    title: "Captura documentation",
    text: "Guides for scanning workflows, OCR-assisted extraction, validation, document import, and processing review.",
  },
  {
    title: "SmartRestora documentation",
    text: "Guides for menu setup, billing, orders, counters, kitchen flow, inventory, reporting, and restaurant staff access.",
  },
  {
    title: "HajiraBook documentation",
    text: "Guides for employee profiles, attendance, biometric sync, leave, rosters, overtime, payroll workflows, and HR reports.",
  },
  {
    title: "School & Coaching documentation",
    text: "Guides for student records, batches, fee collection, parent communication, exams, grades, and academic reporting.",
  },
  {
    title: "AI solution documentation",
    text: "Guides for chatbot setup, document knowledge sources, response review, escalation, and safe AI usage policies.",
  },
];

export default function Documentation() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Documentation
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Product guides, setup instructions, and support resources.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TECFIQ documentation should help clients, admins, and technical
            teams understand how products are set up, configured, secured,
            supported, and improved over time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              Ask for support <ArrowRight size={18} />
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

      {/* DOCUMENTATION HUB */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Documentation Hub
              </p>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Help users understand the product before and after implementation.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              The documentation should be written for both business users and
              technical users. It should explain setup, usage, access, security,
              and support in a simple way.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {docSections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                    <Icon />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {section.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STRIPE-LIKE DOC PREVIEW */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Documentation Layout
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A clear documentation experience for admins, users, and technical teams.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The layout below is a prototype. It can later become a full
              documentation system with searchable guides, product categories,
              screenshots, videos, and technical references.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[240px_1fr_360px]">
            {/* LEFT NAV */}
            <aside className="border-b border-slate-200 bg-slate-50 p-5 lg:border-b-0 lg:border-r">
              <p className="mb-4 text-sm font-bold text-slate-950">
                Documentation
              </p>

              {[
                "Get started",
                "Product setup",
                "Admin roles",
                "Data import",
                "Integrations",
                "Security",
                "Troubleshooting",
              ].map((item, index) => (
                <button
                  key={item}
                  className={`mb-1 block w-full rounded-xl px-3 py-2 text-left text-sm ${
                    index === 0
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </aside>

            {/* CENTER CONTENT */}
            <article className="p-7">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Get started
              </p>

              <h3 className="text-3xl font-bold text-slate-950">
                Set up a TECFIQ product for your business workflow.
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                A typical implementation starts by understanding the business
                process, selecting the right product or service, configuring
                roles and data, and training users to manage the system
                confidently.
              </p>

              <div className="mt-6 grid gap-3">
                {setupSteps.map((step) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-2xl border border-slate-200 p-4"
                  >
                    <ClipboardCheck className="mt-0.5 shrink-0 text-blue-700" />
                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* RIGHT PANEL */}
            <aside className="border-t border-slate-200 bg-slate-950 p-5 text-white lg:border-l lg:border-t-0">
              <div className="mb-4 flex items-center gap-2">
                <Code2 size={18} />
                <p className="text-sm font-bold">Technical reference</p>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                If TECFIQ products expose APIs, webhooks, or integration
                endpoints in the future, this panel can show verified technical
                examples. Until then, use this area for integration notes,
                supported devices, data import formats, and setup requirements.
              </p>

              <div className="mt-5 rounded-2xl bg-black/40 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Example format
                </p>

                <pre className="mt-3 overflow-auto text-xs leading-6 text-slate-200">{`Integration: Biometric device sync
Product: HajiraBook
Data: Employee ID, check-in time, check-out time
Setup: Device mapping + attendance rule configuration
Status: Confirm supported device before implementation`}</pre>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PRODUCT DOCUMENTATION AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Product Documentation Areas
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Each product should have its own help and setup guides.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Documentation should be practical and product-specific. It should
              help users understand what to configure, what information to
              prepare, and how to operate the system after launch.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productDocs.map((doc) => (
              <article
                key={doc.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <FileText />
                </div>

                <h3 className="text-2xl font-bold text-slate-950">
                  {doc.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {doc.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY + SUPPORT */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Security & Support Documentation
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Documentation should help teams use software safely and correctly.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Business users need to know how access works, how information is
              handled, how to avoid mistakes, and who to contact when support is
              needed.
            </p>

            <div className="mt-8">
              <Link
                to="/company/certifications-compliance"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
              >
                View security approach <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              "How to create users and assign roles",
              "How to control access to sensitive business data",
              "How to import, edit, and review information safely",
              "How to request support or report an issue",
              "How product updates and changes are communicated",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {item}
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
            Need Product Help?
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Contact TECFIQ for product setup, support, or implementation guidance.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If you are evaluating a product or need help understanding setup,
            configuration, or support, the TECFIQ team can guide you.
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