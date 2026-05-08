import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Star,
  ShieldCheck,
  Workflow,
  BarChart3,
  FileSearch,
  Users,
  Store,
  Brain,
  Building2,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const productCards = [
    {
      icon: Brain,
      title: "AI",
      subtitle: "Chatbots & automation",
      status: "Helping teams answer and automate faster",
    },
    {
      icon: FileSearch,
      title: "Documents",
      subtitle: "Scanning & management",
      status: "Turning files into searchable records",
    },
    {
      icon: Store,
      title: "POS",
      subtitle: "Restaurant operations",
      status: "Supporting billing, orders, and reports",
    },
    {
      icon: Users,
      title: "HR",
      subtitle: "Attendance & payroll",
      status: "Connecting employee data with payroll workflows",
    },
  ];

  const products = [
    {
      title: "AI & LLM Enterprise Integration",
      text: "Build AI chatbots, document assistants, and automation workflows for customer service, internal knowledge, and business operations.",
      href: "/solutions/ai-llm-chatbots",
    },
    {
      title: "Captura Data Scanning",
      text: "Digitize paper records and extract useful information from documents through scanning, OCR-assisted workflows, and validation.",
      href: "/solutions/captura-data-scanning",
    },
    {
      title: "XDOCS AI Document Management",
      text: "Store, organize, preview, secure, and retrieve business documents through a structured document management system.",
      href: "/solutions/xdocs-ai-dms",
    },
    {
      title: "SmartRestora Restaurant POS",
      text: "Manage restaurant billing, orders, inventory, kitchen workflows, and reporting from one operational POS system.",
      href: "/solutions/smartrestora-pos",
    },
    {
      title: "HajiraBook HR & Payroll",
      text: "Manage employee records, attendance, biometric data, rosters, leave, overtime, and payroll-related workflows.",
      href: "/solutions/hajirabook-payroll",
    },
    {
      title: "School & Coaching Management SaaS",
      text: "Help schools and coaching centers manage students, batches, fees, parent communication, exams, and reports.",
      href: "/solutions/coaching-management-saas",
    },
  ];

  const reasons = [
    {
      icon: Building2,
      title: "Built around local business workflows",
      text: "TECFIQ designs software with the practical needs of Bangladeshi businesses in mind, from restaurant counters to HR attendance rules and education operations.",
    },
    {
      icon: Workflow,
      title: "Products plus customization",
      text: "Clients can use existing TECFIQ products or work with the team to customize workflows, dashboards, integrations, and business-specific features.",
    },
    {
      icon: ShieldCheck,
      title: "Structured and secure systems",
      text: "The software is designed around role-based access, organized records, operational visibility, and controlled business processes.",
    },
    {
      icon: Headphones,
      title: "Implementation and support",
      text: "TECFIQ helps clients understand requirements, set up systems, train users, and improve the software as business needs grow.",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#3b005d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,183,0,0.22),transparent_28%),radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.35),transparent_25%),linear-gradient(135deg,#2b0047_0%,#4b006e_45%,#3b005d_100%)]" />

        <div className="absolute right-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#4b006e]">
                <Star size={15} fill="currentColor" />
              </span>
              Software solutions for growing businesses in Bangladesh
            </div>

            <h1 className="max-w-3xl text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Build, manage, and automate your business with better software.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-purple-100">
              TECFIQ Limited develops SaaS products and custom software for
              businesses that want to digitize operations, manage data more
              clearly, improve daily workflows, and use AI where it adds real
              value.
            </p>

            <div className="mt-9 max-w-2xl rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 sm:flex">
              <input
                className="min-h-14 flex-1 rounded-xl px-5 text-base text-slate-950 outline-none"
                placeholder="Work email address"
              />

              <Link
                to="/contact"
                className="mt-2 inline-flex min-h-14 items-center justify-center rounded-xl bg-amber-400 px-6 text-sm font-bold text-slate-950 transition hover:bg-amber-300 sm:mt-0"
              >
                Talk to us
              </Link>
            </div>

            <p className="mt-4 text-sm text-purple-200">
              Tell us what you want to build, improve, or automate. Our team
              will guide you through the next step.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-base font-bold text-white"
              >
                Explore our products <ArrowRight size={19} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-base font-bold text-purple-100"
              >
                <PlayCircle size={22} />
                See how we can help
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
              {[
                ["SaaS", "Ready-made products"],
                ["Custom", "Business software"],
                ["AI", "Practical automation"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-sm text-purple-200">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -left-10 top-10 z-10 rounded-3xl bg-white/10 p-4 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                  <ShieldCheck />
                </div>
                <div>
                  <p className="text-sm font-bold">Controlled access</p>
                  <p className="text-xs text-purple-100">Roles and permissions</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-16 z-10 rounded-3xl bg-white/10 p-4 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <BarChart3 />
                </div>
                <div>
                  <p className="text-sm font-bold">Clear reporting</p>
                  <p className="text-xs text-purple-100">Data for decisions</p>
                </div>
              </div>
            </div>

            <div className="relative ml-auto w-full max-w-[680px] rotate-[-4deg] rounded-[2.2rem] bg-[#12001f] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.45)] ring-1 ring-white/20">
              <div className="rounded-[1.6rem] bg-white p-5 text-slate-950">
                <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      TECFIQ Software Ecosystem
                    </p>
                    <h3 className="text-2xl font-bold">
                      Tools for everyday business operations
                    </h3>
                  </div>

                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Active
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {productCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <div
                        key={card.title}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4b006e] text-white">
                            <Icon />
                          </div>

                          <CheckCircle2 className="text-emerald-600" />
                        </div>

                        <h4 className="text-xl font-bold">{card.title}</h4>
                        <p className="mt-1 text-sm text-slate-500">
                          {card.subtitle}
                        </p>

                        <div className="mt-5 rounded-2xl bg-white p-3">
                          <div className="mb-2 h-2 w-2 rounded-full bg-emerald-500" />
                          <p className="text-xs font-semibold text-slate-600">
                            {card.status}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-3xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                      <Workflow />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        From idea to working system
                      </p>
                      <p className="text-xs text-slate-300">
                        We help with planning, development, deployment,
                        training, and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TRUST ROW */}
        <div className="relative border-t border-white/10 bg-black/15">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-3">
            {[
              ["Product + service", "Use ready-made tools or build custom systems"],
              ["Local understanding", "Designed around practical business workflows"],
              ["Long-term support", "From implementation to ongoing improvement"],
            ].map(([source, text]) => (
              <div key={source} className="text-center md:text-left">
                <p className="text-amber-400">★★★★★</p>
                <p className="mt-2 font-bold text-white">{source}</p>
                <p className="mt-1 text-sm text-purple-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TECFIQ DOES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                What We Do
              </p>

              <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                We help businesses move from manual work to reliable digital systems.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Many businesses still depend on spreadsheets, paper records,
                disconnected tools, and repeated manual tasks. TECFIQ helps
                replace those gaps with software that is easier to manage,
                easier to scale, and easier for teams to use every day.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-white p-3 text-blue-700 shadow-sm">
                      <Icon />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SUITES */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Software Products
              </p>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Products for documents, people, operations, and automation.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                TECFIQ offers software products for common business needs, while
                also supporting customization when a company needs something
                more specific.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700"
            >
              View all products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.title}
                to={product.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <CheckCircle2 className="mb-5 text-emerald-600" />

                <h3 className="text-xl font-bold text-slate-950">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {product.text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                  Learn more{" "}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PATH */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Custom Development
            </p>

            <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Need something built around your exact workflow?
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              If a ready-made product is not enough, TECFIQ can help design and
              develop a custom system based on your business process, team
              structure, reports, integrations, and operational needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
              >
                Explore services <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-50"
              >
                Discuss a project
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-2xl font-bold text-slate-950">
              How we usually help
            </h3>

            <div className="mt-6 grid gap-4">
              {[
                "Understand your current workflow and pain points",
                "Recommend an existing product or custom development path",
                "Design the system structure and user experience",
                "Build, test, deploy, train, and support the solution",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl bg-white p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Contact TECFIQ
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Let’s talk about the software your business needs.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you want to use a TECFIQ product, customize an existing
            workflow, or build a new system, our team can help you choose the
            right next step.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 hover:bg-amber-300"
            >
              Contact us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}