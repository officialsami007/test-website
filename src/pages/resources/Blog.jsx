import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileSearch,
  Store,
  Users,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const featuredArticles = [
  {
    icon: Bot,
    tag: "AI & Automation",
    title: "How AI chatbots can support customer service and internal teams",
    text: "A practical guide for businesses considering AI chatbots, document assistants, or automation workflows.",
    href: "/solutions/ai-llm-chatbots",
  },
  {
    icon: FileSearch,
    tag: "Document Management",
    title: "How to move from paper records to a searchable document system",
    text: "Learn how document scanning, access control, metadata, and organized storage can improve daily operations.",
    href: "/solutions/xdocs-ai-dms",
  },
  {
    icon: Store,
    tag: "Restaurant Operations",
    title: "What to consider before choosing restaurant POS software",
    text: "A guide for restaurants, cafes, and food courts comparing billing, inventory, kitchen flow, and reporting needs.",
    href: "/solutions/smartrestora-pos",
  },
  {
    icon: Users,
    tag: "HR & Payroll",
    title: "How attendance, rosters, and payroll can work together",
    text: "Understand how HR teams can reduce manual work by connecting attendance data, employee records, and payroll workflows.",
    href: "/solutions/hajirabook-payroll",
  },
];

const categories = [
  {
    icon: Bot,
    title: "AI & automation",
    text: "Guides about AI chatbots, document assistants, workflow automation, and practical ways to use AI in business operations.",
  },
  {
    icon: FileSearch,
    title: "Documents & data",
    text: "Articles about scanning, document management, OCR, file organization, permissions, and data visibility.",
  },
  {
    icon: Store,
    title: "Restaurant software",
    text: "Resources for restaurants and food businesses evaluating POS systems, billing workflows, inventory, and reporting.",
  },
  {
    icon: Users,
    title: "HR & payroll",
    text: "Guides about attendance, biometric devices, rosters, leave, overtime, employee records, and payroll workflows.",
  },
  {
    icon: GraduationCap,
    title: "Education management",
    text: "Articles for schools, coaching centers, and training institutes managing students, batches, fees, exams, and communication.",
  },
  {
    icon: BookOpen,
    title: "Implementation advice",
    text: "Practical guidance on choosing software, preparing requirements, training teams, and improving systems after launch.",
  },
];

export default function Blog() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Blog / Insights
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Practical software guides for business teams.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TECFIQ Insights should help business owners, managers, HR teams,
            restaurant operators, education administrators, and technical teams
            understand how to choose, implement, and use software more
            effectively.
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
              Ask for guidance
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Featured Guides
              </p>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Start with guides that answer real client questions.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              These article ideas should be written in plain language and
              connected to real business problems, product use cases, and
              implementation decisions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredArticles.map((article) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="inline-flex rounded-2xl bg-purple-950 p-3 text-white">
                      <Icon />
                    </div>

                    <p className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">
                      {article.tag}
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {article.text}
                  </p>

                  <Link
                    to={article.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                  >
                    Related product <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Insight Topics
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Content should help visitors understand the problem before choosing the software.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A useful blog does more than announce company news. It should help
              visitors compare options, understand tradeoffs, prepare
              requirements, and make better software decisions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {category.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARTICLE QUALITY */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Writing Approach
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Keep articles useful, specific, and connected to real operations.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Before publishing an article, ask whether it helps a real buyer,
              administrator, or technical decision-maker understand a business
              problem more clearly.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <h3 className="text-3xl font-bold">Each article should include</h3>

            <div className="mt-6 grid gap-4">
              {[
                "A clear answer to the main question",
                "Simple explanation of the business problem",
                "Examples from local workflows where possible",
                "Practical points for decision-makers",
                "Connection to a relevant TECFIQ product or service",
                "A clear next step for readers who need help",
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

      {/* CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Need Help Choosing Software?
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Talk to TECFIQ about your current workflow and software needs.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If you are not sure which product or service fits your business,
            describe your workflow and the team can guide you.
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