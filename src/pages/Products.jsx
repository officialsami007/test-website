import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  Store,
  Users,
  Workflow,
} from "lucide-react";

const products = [
  {
    icon: Brain,
    category: "AI & Automation",
    title: "AI & LLM Chatbots",
    desc: "Build AI chatbots, internal knowledge assistants, and automation workflows that help teams respond faster and reduce repetitive work.",
    href: "/solutions/ai-llm-chatbots",
    bestFor: ["Customer support", "Internal knowledge", "Document Q&A"],
  },
  {
    icon: FileSearch,
    category: "Document Digitization",
    title: "Captura Data Scanning",
    desc: "Digitize paper records, scan documents, and extract useful information through OCR-assisted workflows and validation steps.",
    href: "/solutions/captura-data-scanning",
    bestFor: ["Paper records", "Data extraction", "Document processing"],
  },
  {
    icon: FileSearch,
    category: "Document Management",
    title: "XDOCS AI DMS",
    desc: "Organize, secure, preview, search, and manage business documents in one structured document management system.",
    href: "/solutions/xdocs-ai-dms",
    bestFor: ["File archiving", "Access control", "Document search"],
  },
  {
    icon: Store,
    category: "Restaurant Operations",
    title: "SmartRestora POS",
    desc: "Manage billing, orders, inventory, kitchen workflows, sales reporting, and multi-counter restaurant operations.",
    href: "/solutions/smartrestora-pos",
    bestFor: ["Restaurants", "Cafes", "Food courts"],
  },
  {
    icon: Users,
    category: "HR & Payroll",
    title: "HajiraBook HR & Payroll",
    desc: "Manage attendance, employee records, biometric sync, rosters, leave, overtime, and payroll-related workflows.",
    href: "/solutions/hajirabook-payroll",
    bestFor: ["HR teams", "Factories", "Offices"],
  },
  {
    icon: GraduationCap,
    category: "Education Management",
    title: "School & Coaching SaaS",
    desc: "Support student records, batch scheduling, fee tracking, parent communication, exams, grades, and institutional reporting.",
    href: "/solutions/coaching-management-saas",
    bestFor: ["Schools", "Coaching centers", "Training institutes"],
  },
];

const productGroups = [
  {
    title: "For teams that manage information",
    text: "Use Captura and XDOCS to digitize, organize, secure, and retrieve business documents more easily.",
  },
  {
    title: "For teams that manage people",
    text: "Use HajiraBook to handle attendance, employee records, rosters, leave, and payroll-related operations.",
  },
  {
    title: "For teams that serve customers",
    text: "Use SmartRestora and AI chatbot solutions to improve order handling, support, communication, and daily service workflows.",
  },
  {
    title: "For institutions that manage students",
    text: "Use school and coaching management software to manage batches, fees, exams, communication, and academic operations.",
  },
];

export default function Products() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            TECFIQ Products
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Software products for the operations your business runs every day.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TECFIQ offers SaaS products for document management, restaurant
            operations, HR and payroll, education management, and AI-powered
            automation. Each product is designed to help teams replace manual
            work with clearer, more reliable digital workflows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              Talk to us <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              Need custom software?
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Product Areas
              </p>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Choose the software area that matches your business need.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              Not sure which product fits? Contact TECFIQ and describe your
              workflow. The team can suggest a product, customization, or custom
              development path.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.title}
                  to={product.href}
                  className="group flex min-h-[360px] flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                      <Icon />
                    </div>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {product.desc}
                  </p>

                  <div className="mt-6 grid gap-2">
                    {product.bestFor.map((item) => (
                      <div key={item} className="flex gap-2 text-sm text-slate-600">
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-blue-700">
                    View product{" "}
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT FIT SECTION */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                How Products Fit Your Business
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Start with a product, then adapt it to your workflow.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Many businesses need software that fits the way they already
                work. TECFIQ products provide a starting point, and the team can
                help configure, customize, or extend them depending on your
                operations.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Ask for product guidance <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {productGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Workflow />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {group.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM SOFTWARE CTA */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Need Something Different?
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              If a ready-made product is not enough, TECFIQ can build around
              your exact requirement.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Some organizations need custom dashboards, special approval flows,
              integrations, reports, mobile apps, or industry-specific
              workflows. TECFIQ can help turn those requirements into practical
              software.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
              <Building2 />
            </div>

            <h3 className="text-3xl font-bold">Custom software services</h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Talk to TECFIQ about your current process, business goals, and the
              software gap you want to solve. The team can recommend whether to
              use an existing product, customize one, or build a new system.
            </p>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              Explore services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}