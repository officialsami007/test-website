import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  FileSearch,
  Store,
  Users,
  GraduationCap,
  ClipboardList,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const researchIdeas = [
  {
    icon: Bot,
    title: "Bengali chatbot understanding",
    text: "Test how well AI chatbots understand native Bengali, Romanized Bengali, mixed-language customer messages, and common business questions.",
    status: "Planned research area",
  },
  {
    icon: FileSearch,
    title: "Document scanning and OCR accuracy",
    text: "Evaluate how accurately document workflows can process local formats such as trade licenses, forms, ID documents, and business records.",
    status: "Planned research area",
  },
  {
    icon: Store,
    title: "Restaurant POS operation study",
    text: "Study how billing speed, order flow, inventory tracking, and counter synchronization affect restaurant and food-court operations.",
    status: "Planned research area",
  },
  {
    icon: Users,
    title: "Attendance and payroll workflow study",
    text: "Explore how biometric attendance, roster management, leave tracking, and payroll workflows can reduce manual HR effort.",
    status: "Planned research area",
  },
  {
    icon: GraduationCap,
    title: "Education administration workflow study",
    text: "Study how schools and coaching centers manage students, batches, fees, exams, parent communication, and reporting.",
    status: "Planned research area",
  },
];

const principles = [
  "Use real business problems instead of generic technology topics",
  "Publish methods clearly so readers understand how results were measured",
  "Avoid unsupported claims or inflated numbers",
  "Connect findings to practical software decisions",
  "Update studies when products, workflows, or client needs change",
];

const futureOutputs = [
  {
    icon: ClipboardList,
    title: "Workflow observations",
    text: "Short reports explaining common operational problems found in restaurants, schools, HR teams, or document-heavy businesses.",
  },
  {
    icon: BarChart3,
    title: "Benchmarks and comparisons",
    text: "Measured comparisons such as processing time, error reduction, setup time, or before-and-after workflow improvements.",
  },
  {
    icon: ShieldCheck,
    title: "Implementation learnings",
    text: "Practical lessons from software setup, user training, access control, data migration, and long-term support.",
  },
];

export default function ResearchLab() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Research Lab
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Practical research on local software problems and business workflows.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            TECFIQ Research Lab should be a place to publish observations,
            experiments, benchmarks, and practical learnings from real software
            use cases. The goal is to help businesses understand how technology
            performs in local operational environments.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/insights/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 hover:bg-amber-300"
            >
              Read insights <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white hover:bg-white/10"
            >
              Discuss a use case
            </Link>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">
              Important publishing note
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-700">
              Research content should only include results, numbers, or claims
              after TECFIQ has actually run the study or collected reliable
              evidence. Until then, these topics should be presented as planned
              research areas or future study ideas.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Research Areas
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Topics TECFIQ can study as products and client use cases grow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              These research areas are connected to TECFIQ’s products and the
              real workflows clients may need to improve. Each topic can later
              become a full article, benchmark, whitepaper, or case-study
              extension.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {researchIdeas.map((study) => {
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

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">
                      {study.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {study.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTPUT TYPES */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              What The Lab Can Publish
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Research should make software decisions easier for businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The best research content is useful to business owners, managers,
              and technical teams. It should explain what was tested, why it
              matters, what was learned, and how the learning affects software
              selection or implementation.
            </p>
          </div>

          <div className="grid gap-5">
            {futureOutputs.map((output) => {
              const Icon = output.icon;

              return (
                <article
                  key={output.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-950">
                        {output.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {output.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Research Principles
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Publish useful findings, not exaggerated claims.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Since research content can influence buying decisions, TECFIQ
              should keep this section honest, practical, and evidence-based.
              It should clearly separate planned studies from completed results.
            </p>

            <div className="mt-8">
              <Link
                to="/company/certifications-compliance"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
              >
                View trust approach <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <h3 className="text-3xl font-bold">Publishing checklist</h3>

            <div className="mt-6 grid gap-4">
              {principles.map((item) => (
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
            Have A Workflow Worth Studying?
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Talk to TECFIQ about your business process or software challenge.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If your team has a document, HR, restaurant, education, or AI
            automation workflow that needs improvement, TECFIQ can help assess
            the problem and suggest the right next step.
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