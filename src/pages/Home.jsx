import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Building2,
  FileSearch,
  GraduationCap,
  Store,
  Users,
  Workflow,
  ShieldCheck,
  Headphones,
  Zap,
} from "lucide-react";

const products = [
  {
    icon: Brain,
    title: "AI & Automation",
    text: "Chatbots, document assistants, and workflow automation for business teams.",
    href: "/solutions/ai-llm-chatbots",
    badge: "Popular",
  },
  {
    icon: FileSearch,
    title: "Document Systems",
    text: "Scanning, OCR-assisted extraction, secure storage, and document management.",
    href: "/solutions/xdocs-ai-dms",
  },
  {
    icon: Store,
    title: "Restaurant POS",
    text: "Billing, orders, inventory, kitchen flow, and restaurant operations.",
    href: "/solutions/smartrestora-pos",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    text: "Attendance, employee records, rosters, leave, and payroll workflows.",
    href: "/solutions/hajirabook-payroll",
  },
  {
    icon: GraduationCap,
    title: "Education Management",
    text: "Student records, batches, fees, exams, communication, and reports.",
    href: "/solutions/coaching-management-saas",
  },
  {
    icon: Building2,
    title: "Custom Software",
    text: "Tailored systems for businesses with unique workflows and requirements.",
    href: "/services",
  },
];

const reasons = [
  {
    icon: Workflow,
    title: "Built around real workflows",
    text: "We start by understanding how your team works before recommending or building software.",
  },
  {
    icon: ShieldCheck,
    title: "Designed with control in mind",
    text: "Our systems support organized data, permissions, access control, and clearer operations.",
  },
  {
    icon: Headphones,
    title: "Support beyond launch",
    text: "We help with setup, training, support, and improvements as your business grows.",
  },
];

const steps = [
  "Understand your current workflow",
  "Recommend a product or custom build",
  "Design, develop, test, and deploy",
  "Train users and support improvements",
];

const stats = [
  { value: "50+", label: "Businesses served" },
  { value: "5",   label: "SaaS products" },
  { value: "99%", label: "Uptime SLA" },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document
      .querySelectorAll("[data-animate], [data-animate-fade]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white text-[#03045e]">

      {/* ══ HERO — #caf0f8 background, all dark-blue text ══ */}
      <section className="hero-bg relative overflow-hidden border-b border-[#ade8f4]/60">
        <div className="hero-grid" />

        {/* Soft decorative orbs — tinted, not harsh */}
        <div
          className="hero-orb"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(0,180,216,0.18) 0%, transparent 65%)",
            top: "-220px",
            right: "-120px",
            animation: "floatB 12s ease-in-out infinite",
          }}
        />
        <div
          className="hero-orb"
          style={{
            width: 420,
            height: 420,
            background: "radial-gradient(circle, rgba(72,202,228,0.18) 0%, transparent 65%)",
            bottom: "-80px",
            left: "-60px",
            animation: "floatA 9s ease-in-out infinite 2.5s",
          }}
        />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col items-center justify-center px-5 py-28 text-center">

          {/* Eyebrow pill */}
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0077b6]/25 bg-white/70 px-5 py-2 text-sm font-semibold text-[#0077b6] backdrop-blur-sm"
            style={{ animation: "fadeIn 0.6s ease both" }}
          >
            <Zap size={14} className="text-[#0096c7]" />
            Business software for growing teams
          </div>

          {/* Headline — deep brand blue on light cyan = excellent contrast */}
          <h1
            className="max-w-5xl text-5xl font-semibold leading-[1.07] tracking-tight text-[#03045e] md:text-[4.75rem]"
            style={{ animation: "fadeInUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            Build, manage, and improve your operations with{" "}
            <span className="g-text-light">better software.</span>
          </h1>

          {/* Body */}
          <p
            className="mt-7 max-w-2xl text-lg leading-8 text-[#023e8a]"
            style={{ animation: "fadeInUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
          >
            TECFIQ Limited develops SaaS products and custom software for teams
            that need organized data, smoother workflows, and practical automation.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animation: "fadeInUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
          >
            <Link
              to="/products"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-sm font-bold text-white"
            >
              Explore products <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="btn-ghost-light inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-sm font-bold"
            >
              Talk to us
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-14 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
            style={{ animation: "fadeInUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="g-text-dark text-4xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-[#0077b6]">{label}</p>
              </div>
            ))}
          </div>

          {/* Feature pill cards — white surface on light cyan bg */}
          <div
            className="mt-14 grid w-full max-w-4xl gap-4 rounded-[2rem] border border-[#ade8f4] bg-white/60 p-4 backdrop-blur-sm md:grid-cols-3"
            style={{ animation: "fadeInUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.68s both" }}
          >
            {[
              ["SaaS products",  "Ready-made tools for common operations"],
              ["Custom systems", "Software built around your workflow"],
              ["Automation",     "Practical technology where it adds value"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#ade8f4]/70 bg-white p-5 text-left transition hover:shadow-sm"
              >
                <p className="font-bold text-[#03045e]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#0077b6]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE DO — white bg ══ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0096c7]" data-animate>
              What We Do
            </p>
            <h2
              className="text-4xl font-semibold tracking-tight text-[#03045e] md:text-5xl"
              data-animate
              style={{ transitionDelay: "0.1s" }}
            >
              Moving businesses from manual work to{" "}
              <span className="g-text-dark">reliable digital systems.</span>
            </h2>
            <p
              className="mt-5 text-lg leading-8 text-[#0077b6]"
              data-animate
              style={{ transitionDelay: "0.2s" }}
            >
              From documents and payroll to restaurant operations, education
              workflows, and AI automation — TECFIQ builds software that helps
              teams work with more clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PRODUCT AREAS — #caf0f8 bg ══ */}
      <section className="border-y border-[#ade8f4]/50" style={{ background: "#caf0f8" }}>
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p
                className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0096c7]"
                data-animate
              >
                Product Areas
              </p>
              <h2
                className="max-w-3xl text-4xl font-semibold tracking-tight text-[#03045e] md:text-5xl"
                data-animate
                style={{ transitionDelay: "0.1s" }}
              >
                Software for the teams that run your business.
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#0077b6] transition hover:text-[#0096c7]"
              data-animate
              style={{ transitionDelay: "0.15s" }}
            >
              View all products{" "}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.title}
                  to={product.href}
                  className="product-card group rounded-[1.5rem] border border-[#ade8f4] bg-white p-6 shadow-sm"
                  data-animate
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#caf0f8] text-[#0077b6] transition duration-200 group-hover:bg-[#0077b6] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    {product.badge && (
                      <span className="rounded-full bg-[#caf0f8] px-3 py-1 text-xs font-bold text-[#0077b6]">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#03045e]">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#0077b6]">{product.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0096c7]">
                    Learn more{" "}
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WHY TECFIQ — white bg ══ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div data-animate>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0096c7]">
                Why TECFIQ
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-[#03045e] md:text-5xl">
                Practical software, built with{" "}
                <span className="g-text-dark">implementation in mind.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#0077b6]">
                TECFIQ helps businesses understand what they need, choose the
                right software path, and implement systems that teams can
                actually use.
              </p>
              <div className="mt-8">
                <Link
                  to="/company"
                  className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-4 text-sm font-bold text-white"
                >
                  Learn about TECFIQ <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="reason-card rounded-[1.5rem] border border-[#ade8f4]/60 bg-[#caf0f8] p-6"
                    data-animate
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex gap-4">
                      <div className="reason-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0077b6] shadow-sm">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#03045e]">{reason.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#0077b6]">{reason.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CUSTOM DEVELOPMENT — #ade8f4 bg, all dark-blue text ══ */}
      <section className="dev-bg relative overflow-hidden border-y border-[#90e0ef]/50">
        <div className="hero-grid opacity-50" />

        {/* Soft decorative orbs */}
        <div
          className="hero-orb"
          style={{
            width: 460,
            height: 460,
            background: "radial-gradient(circle, rgba(0,180,216,0.16) 0%, transparent 65%)",
            top: "-120px",
            right: "-80px",
            animation: "orbPulse 9s ease-in-out infinite",
          }}
        />
        <div
          className="hero-orb"
          style={{
            width: 280,
            height: 280,
            background: "radial-gradient(circle, rgba(72,202,228,0.14) 0%, transparent 65%)",
            bottom: "-60px",
            left: "18%",
            animation: "floatB 10s ease-in-out infinite 3s",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">

            {/* Left — dark text on #ade8f4: excellent contrast */}
            <div data-animate>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0077b6]">
                Custom Development
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-[#03045e] md:text-5xl">
                Need software built around your exact workflow?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#023e8a]">
                If a ready-made product is not enough, TECFIQ can help design
                and build custom software based on your business process,
                reporting needs, users, and integrations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/services"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold text-white"
                >
                  View services <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="btn-ghost-light inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold"
                >
                  Discuss a project
                </Link>
              </div>
            </div>

            {/* Right — step cards: white surface on #ade8f4 bg */}
            <div
              className="rounded-[2rem] border border-[#90e0ef]/60 bg-white/55 p-6 backdrop-blur-sm"
              data-animate
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="grid gap-3">
                {steps.map((step, i) => (
                  <div
                    key={step}
                    className="step-card flex gap-4 rounded-2xl border border-[#ade8f4] bg-white/70 p-4"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
                      style={{ background: "linear-gradient(135deg, #0077b6, #00b4d8)" }}
                    >
                      {i + 1}
                    </div>
                    {/* Dark text on white/70 over #ade8f4 — perfect contrast */}
                    <p className="self-center text-base font-semibold text-[#03045e]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA — white bg ══ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div
            className="relative overflow-hidden rounded-[2rem] p-[2px]"
            style={{
              background: "linear-gradient(135deg, #0077b6, #00b4d8, #48cae4, #0096c7)",
            }}
            data-animate
          >
            <div className="rounded-[1.85rem] bg-white px-6 py-16 text-center md:px-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0096c7]">
                Start A Conversation
              </p>
              <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-[#03045e] md:text-5xl">
                Tell us what you want to{" "}
                <span className="g-text-dark">build, improve, or automate.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0077b6]">
                TECFIQ can help you choose the right product, customize an
                existing workflow, or build a new software system.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white"
                >
                  Contact TECFIQ <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}