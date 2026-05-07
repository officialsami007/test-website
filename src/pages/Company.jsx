import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  FileSearch,
  Headphones,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Software product development",
    text: "TECFIQ builds SaaS products for business operations, including document management, restaurant POS, HR and payroll, education management, and AI-powered automation.",
  },
  {
    icon: Workflow,
    title: "Business process digitization",
    text: "The company helps businesses move from manual files, spreadsheets, and disconnected tools to structured digital workflows.",
  },
  {
    icon: FileSearch,
    title: "Data and document systems",
    text: "TECFIQ supports document-heavy operations through scanning, OCR-assisted extraction, secure storage, access control, and searchable records.",
  },
  {
    icon: Headphones,
    title: "Implementation and support",
    text: "Beyond development, TECFIQ helps clients understand requirements, configure systems, train users, and improve software over time.",
  },
];

const companyLinks = [
  {
    title: "About TECFIQ",
    text: "Learn more about the company, mission, product direction, and the type of businesses TECFIQ serves.",
    href: "/company/about-us",
  },
  {
    title: "Leadership Team",
    text: "Meet the people behind TECFIQ’s software products, service delivery, and client support.",
    href: "/company/leadership-team",
  },
  {
    title: "Certifications & Compliance",
    text: "Understand TECFIQ’s approach to security, access control, data handling, quality, and responsible software delivery.",
    href: "/company/certifications-compliance",
  },
  {
    title: "Client Reviews",
    text: "Read feedback from clients and understand how TECFIQ’s products and services support business operations.",
    href: "/company/client-reviews",
  },
];

export default function Company() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Company
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            A software company helping businesses work with clearer digital systems.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TECFIQ Limited develops SaaS products and custom software for
            businesses that want to manage operations more clearly, reduce
            manual work, organize business data, and adopt practical automation
            where it adds value.
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

      {/* WHO WE ARE */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              TECFIQ combines software products, custom development, and implementation support.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The company works with businesses that need practical technology
              solutions — not just a website or an app, but systems that support
              daily work such as document handling, billing, attendance,
              reporting, student management, and customer communication.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
              <Building2 />
            </div>

            <h3 className="text-3xl font-bold">What TECFIQ focuses on</h3>

            <div className="mt-6 grid gap-4">
              {[
                "Building software products for common business operations",
                "Developing custom systems for unique workflows",
                "Helping businesses organize data, documents, and processes",
                "Supporting clients through planning, setup, training, and improvement",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                What We Do
              </p>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Practical software for real business operations.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              TECFIQ’s work sits between ready-made products and tailored
              development. That means clients can start with existing software,
              customize where needed, or build something new.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
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

      {/* WHY CLIENTS WORK WITH TECFIQ */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Why Work With TECFIQ
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              The goal is not just to build software. The goal is to make daily work easier to manage.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Businesses often come to TECFIQ when their current process depends
              too much on manual work, scattered data, repeated follow-ups, or
              tools that no longer fit how the team operates. TECFIQ helps turn
              those problems into clearer software workflows.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Understand the client’s actual business process before recommending a solution",
                "Use existing TECFIQ products when they already fit the requirement",
                "Customize workflows, reports, roles, and integrations when needed",
                "Support clients after launch through training, maintenance, and improvements",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
            <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
              <ShieldCheck />
            </div>

            <h3 className="text-3xl font-bold text-slate-950">
              Built for trust and continuity
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              For business software, trust matters. TECFIQ’s website should
              clearly present its team, company information, service process,
              security practices, client feedback, and support approach so
              visitors can understand who they are working with.
            </p>

            <Link
              to="/company/certifications-compliance"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              View security approach <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY LINKS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Learn More
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Explore TECFIQ as a company.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {companyLinks.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                  Open page{" "}
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

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                  Work With TECFIQ
                </p>

                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Looking for a software partner for your business?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Tell TECFIQ what you want to build, improve, or automate. The
                  team can help you decide whether an existing product,
                  customization, or custom development is the right path.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 hover:bg-amber-300"
                >
                  Contact TECFIQ <ArrowRight size={18} />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white hover:bg-white/10"
                >
                  View products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}