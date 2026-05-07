import {
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  MessageSquareText,
  Building2,
  Headphones,
} from "lucide-react";

export default function Contact() {
  const contactReasons = [
    {
      icon: MessageSquareText,
      title: "Request a product demo",
      text: "See how TECFIQ products like XDOCS, SmartRestora, HajiraBook, or other solutions can fit your workflow.",
    },
    {
      icon: Building2,
      title: "Discuss custom software",
      text: "Share your business process, current challenges, and what kind of system you want to build or improve.",
    },
    {
      icon: Headphones,
      title: "Get support or guidance",
      text: "Contact the team for product questions, implementation support, training, or technical assistance.",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Contact TECFIQ
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Let’s talk about the software your business needs.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you want to use a TECFIQ product, customize an existing
            workflow, build a new system, or ask a product-related question, our
            team can help you understand the best next step.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS + FORM */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              How can we help?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Use the form to tell us what you are looking for. You do not need
              to know the exact technical solution yet — just describe the
              problem, workflow, or product you are interested in.
            </p>

            <div className="mt-8 grid gap-4">
              {contactReasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-950">
                          {reason.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
              <h3 className="text-xl font-bold">Contact details</h3>

              <div className="mt-5 grid gap-4 text-sm text-slate-300">
                <div className="flex gap-3">
                  <MapPin className="shrink-0 text-amber-400" size={20} />
                  <p>Malek Tower, Farmgate, Dhaka 1215</p>
                </div>

                <div className="flex gap-3">
                  <Mail className="shrink-0 text-amber-400" size={20} />
                  <p>info@tecfiq.com</p>
                </div>

                <div className="flex gap-3">
                  <Phone className="shrink-0 text-amber-400" size={20} />
                  <p>Add phone number here</p>
                </div>

                <div className="flex gap-3">
                  <Clock className="shrink-0 text-amber-400" size={20} />
                  <p>Sunday - Thursday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Send us a message
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share a few details and the TECFIQ team will get back to you.
              </p>
            </div>

            <div className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Your name
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Company name
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Phone number
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  What do you need help with?
                </label>

                <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
                  <option>Request a product demo</option>
                  <option>Use or customize an existing TECFIQ product</option>
                  <option>Build custom software</option>
                  <option>Digitize a manual workflow</option>
                  <option>AI chatbot or automation solution</option>
                  <option>Product support or technical question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Product or service interest
                </label>

                <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
                  <option>Not sure yet</option>
                  <option>AI & LLM Chatbots</option>
                  <option>Captura Data Scanning</option>
                  <option>XDOCS Document Management</option>
                  <option>SmartRestora POS</option>
                  <option>HajiraBook HR & Payroll</option>
                  <option>School / Coaching Management</option>
                  <option>Custom Software Development</option>
                  <option>Website or Mobile App Development</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Tell us briefly about your requirement
                </label>

                <textarea
                  className="min-h-40 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="Example: We run a restaurant and need billing, inventory, and reporting. Or: We want to digitize HR attendance and payroll."
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Send message <ArrowRight size={18} />
              </button>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-600">
                    After receiving your message, the team can respond with a
                    product recommendation, demo plan, or consultation path based
                    on your requirement.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}