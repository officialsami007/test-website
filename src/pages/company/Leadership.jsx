import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Link as LinkIcon,
  ShieldCheck,
  Users,
  Workflow,
  Code2,
  Headphones,
} from "lucide-react";

const leadershipRoles = [
  {
    icon: Users,
    title: "Founder / Managing Director",
    role: "Company direction, partnerships, and client relationships",
    text: "Responsible for guiding TECFIQ’s business direction, product vision, client partnerships, and long-term company growth.",
  },
  {
    icon: Code2,
    title: "Engineering Leadership",
    role: "Architecture, development quality, and technical delivery",
    text: "Responsible for software architecture, development practices, implementation quality, deployment decisions, and technical problem-solving.",
  },
  {
    icon: Workflow,
    title: "Product & Implementation Lead",
    role: "Product planning, onboarding, training, and workflow fit",
    text: "Responsible for understanding client workflows, planning product improvements, supporting onboarding, and helping teams adopt the software effectively.",
  },
  {
    icon: Headphones,
    title: "Client Support & Success",
    role: "Support, communication, and long-term client assistance",
    text: "Responsible for helping clients use TECFIQ products, answer questions, coordinate support, and communicate improvement needs to the product team.",
  },
];

const profileChecklist = [
  "Full name and professional role",
  "Photo or professional headshot",
  "Short biography written in a human tone",
  "Technical or business areas of responsibility",
  "LinkedIn or professional profile link",
  "Relevant product, project, or client ownership",
];

export default function Leadership() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Leadership Team
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Meet the people guiding TECFIQ’s products, services, and client work.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Business software is built on trust. This page should introduce the
            people responsible for TECFIQ’s direction, product development,
            technical delivery, implementation, and client support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/company/about-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              About TECFIQ <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </section>

      {/* ROLE CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Team Responsibilities
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Leadership should show responsibility, not just titles.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Until real team profiles are added, this section can show the
              main leadership responsibilities TECFIQ should communicate to
              visitors. Later, replace each card with real names, photos, and
              biographies.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {leadershipRoles.map((person) => {
              const Icon = person.icon;

              return (
                <article
                  key={person.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {person.title}
                  </h3>

                  <p className="mt-2 text-sm font-bold leading-6 text-blue-700">
                    {person.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {person.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-400">
                    <LinkIcon size={16} />
                    Add profile link
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY LEADERSHIP PAGE MATTERS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Why This Page Matters
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Clients want to know who is responsible for the software they depend on.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              For SaaS products and custom software projects, visitors need more
              than product descriptions. They also need confidence that there is
              a real team behind planning, delivery, support, and long-term
              improvement.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
              <ShieldCheck />
            </div>

            <h3 className="text-3xl font-bold">
              What to add before launch
            </h3>

            <div className="mt-6 grid gap-4">
              {profileChecklist.map((item) => (
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
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2rem] bg-slate-50 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  Work With The Team
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Want to discuss a product, service, or business software idea?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Contact TECFIQ to discuss your requirement. The right team
                  member can help you understand whether a product,
                  customization, or custom development path is suitable.
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