import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Smartphone,
  Globe,
  Palette,
  BarChart3,
  Workflow,
  Headphones,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    text: "Build business systems around your actual workflow, including dashboards, approvals, records, reporting, user roles, and operational tools.",
    examples: [
      "Internal business systems",
      "Admin dashboards",
      "Approval workflows",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Develop mobile applications for customers, employees, field teams, delivery teams, service teams, or internal operations.",
    examples: [
      "Customer mobile apps",
      "Employee portals",
      "Field operation apps",
    ],
  },
  {
    icon: Globe,
    title: "Website & Web Application Development",
    text: "Create company websites, SaaS landing pages, business portals, CMS websites, eCommerce platforms, and web-based systems.",
    examples: [
      "Corporate websites",
      "Business portals",
      "SaaS landing pages",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Design clean, usable interfaces for software products, admin panels, mobile apps, dashboards, and customer-facing platforms.",
    examples: [
      "Wireframes and prototypes",
      "Dashboard UI",
      "Design systems",
    ],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    text: "Reduce repetitive manual work by automating approvals, notifications, data entry, reporting, document flows, and routine operations.",
    examples: [
      "Automated approvals",
      "Document workflows",
      "Task notifications",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboard & Reporting Systems",
    text: "Turn business data into dashboards and reports that help teams track operations, understand performance, and make decisions faster.",
    examples: [
      "Management dashboards",
      "Sales reports",
      "Operational analytics",
    ],
  },
];

const process = [
  {
    title: "Understand your requirement",
    text: "We start by learning how your current process works, what problems your team faces, and what outcome you want from the software.",
  },
  {
    title: "Recommend the right path",
    text: "Depending on your need, we may suggest an existing TECFIQ product, customization, or a fully custom software solution.",
  },
  {
    title: "Design and build the system",
    text: "The team plans the structure, interface, workflow, user roles, data model, and development approach before implementation.",
  },
  {
    title: "Deploy, train, and support",
    text: "After development, TECFIQ helps with deployment, training, support, and future improvements as your business grows.",
  },
];

export default function Services() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            IT Services
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Software services for businesses that need practical digital systems.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TECFIQ helps organizations design, build, customize, and maintain
            software that supports real business operations — from internal
            systems and mobile apps to dashboards, websites, automation, and
            reporting tools.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              Discuss a project <ArrowRight size={18} />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              View TECFIQ products
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                What We Can Build
              </p>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Choose the service based on what your business needs to improve.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              You do not need to define the full technical solution before
              contacting TECFIQ. Share the problem or workflow, and the team can
              help shape the right approach.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                    <Icon />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.text}
                  </p>

                  <div className="mt-6 grid gap-2">
                    {service.examples.map((example) => (
                      <div
                        key={example}
                        className="flex gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              How We Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              From first conversation to working software.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              TECFIQ’s service process is built around understanding the
              business problem first, then choosing the right product,
              customization, or custom development path.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
              >
                Start a conversation <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO CONTACT */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              When To Contact TECFIQ
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Reach out when your current tools no longer fit how your business works.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Many teams come to TECFIQ when spreadsheets, paper forms,
              disconnected software, or manual processes start slowing down
              daily operations. The service team can help you move toward a more
              reliable system.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
              <Search />
            </div>

            <h3 className="text-3xl font-bold">A few common reasons</h3>

            <div className="mt-6 grid gap-4">
              {[
                "You need a system that matches your business workflow",
                "Your team is using too many manual or disconnected tools",
                "You want to digitize documents, records, or approvals",
                "You need dashboards or reports for better visibility",
                "You want to improve an existing website, app, or software system",
              ].map((reason) => (
                <div key={reason} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-6 text-slate-300">{reason}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              Contact TECFIQ <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}