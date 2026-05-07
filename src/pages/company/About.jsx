import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  FileSearch,
  Lightbulb,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const values = [
  {
    icon: Workflow,
    title: "Practical digital transformation",
    text: "TECFIQ focuses on software that improves real daily work, such as document handling, attendance, billing, reporting, student management, and workflow automation.",
  },
  {
    icon: Building2,
    title: "Local business understanding",
    text: "The company builds with local operational realities in mind, including how teams in Bangladesh manage people, customers, records, payments, and internal approvals.",
  },
  {
    icon: Code2,
    title: "Product and custom development",
    text: "TECFIQ develops its own SaaS products while also helping clients build custom systems when their workflow requires something more specific.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and long-term support",
    text: "Business software needs reliability, clarity, and support. TECFIQ aims to support clients beyond launch through setup, training, maintenance, and future improvements.",
  },
];

const areas = [
  "Document scanning and management",
  "Restaurant POS and operational software",
  "HR, attendance, and payroll systems",
  "School and coaching management software",
  "AI chatbots and automation workflows",
  "Custom web, mobile, and enterprise applications",
];

export default function About() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            About TECFIQ
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Building software that helps businesses work with more clarity.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TECFIQ Limited is a Bangladesh-based software company developing
            SaaS products and custom digital systems for businesses that want to
            manage operations, data, documents, people, and customer workflows
            more effectively.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              Explore products <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              Contact TECFIQ
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Our Purpose
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              We help organizations replace scattered manual work with reliable software systems.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Many growing businesses reach a point where spreadsheets, paper
              files, manual follow-ups, and disconnected tools are no longer
              enough. Teams need a clearer way to manage daily work, track
              information, control access, and make decisions from reliable
              data.
            </p>

            <p>
              TECFIQ works on that problem by building software products and
              custom systems that support real operational needs. The company’s
              work covers areas such as document management, restaurant
              operations, HR and payroll, education management, AI automation,
              and custom business applications.
            </p>

            <p>
              The goal is not simply to build technology for its own sake. The
              goal is to create software that is understandable, useful, and
              practical for the people who use it every day.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              What We Build
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Software for documents, people, operations, education, and automation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              TECFIQ combines ready-made SaaS products with custom development
              services. This allows businesses to start from an existing
              solution when it fits, or build something more tailored when their
              workflow requires it.
            </p>

            <div className="mt-8">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
              >
                View product areas <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES / APPROACH */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              How We Think
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Our approach is shaped by practical business needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              TECFIQ’s work is guided by the idea that good software should fit
              the way people actually work. It should reduce confusion, organize
              data, support decision-making, and make daily operations easier to
              manage.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Why It Matters
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Better software gives teams more control over daily work.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              When business information is scattered, teams lose time searching,
              checking, correcting, and repeating work. A well-designed system
              helps people know what is happening, who is responsible, and what
              needs to happen next.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Less dependence on manual tracking and repeated follow-ups",
              "Clearer visibility over documents, employees, customers, and operations",
              "Better control over access, approvals, and business records",
              "More reliable reporting for managers and decision-makers",
              "A stronger foundation for future automation and AI features",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" />
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2rem] bg-slate-50 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  Work With TECFIQ
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Have a workflow you want to digitize or improve?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Share your requirement with TECFIQ. The team can help you
                  decide whether an existing product, product customization, or
                  custom development is the right direction.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Contact TECFIQ <ArrowRight size={18} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}