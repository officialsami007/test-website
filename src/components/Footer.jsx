import { Link } from "react-router-dom";

const cols = [
  {
    title: "Products",
    links: [
      ["AI & Automation", "/solutions/ai-llm-chatbots"],
      ["Document Systems", "/solutions/xdocs-ai-dms"],
      ["SmartRestora POS", "/solutions/smartrestora-pos"],
      ["HajiraBook", "/solutions/hajirabook-payroll"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/company/about-us"],
      ["Leadership", "/company/leadership-team"],
      ["Compliance", "/company/certifications-compliance"],
      ["Reviews", "/company/client-reviews"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Insights", "/insights/blog"],
      ["Research Lab", "/insights/research-lab"],
      ["Case Studies", "/case-studies"],
      ["Documentation", "/documentation"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    /*
      Footer stays dark — it's a common pattern to anchor the page bottom.
      But the gradient is now deeper and more even so white text at any
      opacity reads cleanly. All opacity values bumped for WCAG AA.
    */
    <footer
      className="border-t border-[#ade8f4]/20"
      style={{
        background: "radial-gradient(circle, rgba(8, 205, 245, 0.16) 0%, transparent 65%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-[#0077b6]">
              TQ
            </div>
            <div>
              <p className="text-lg font-bold text-white">TECFIQ</p>
              <p className="text-xs text-[#ade8f4]">Business software solutions</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#caf0f8]/80">
            TECFIQ develops SaaS products and custom software for businesses
            that need clearer operations, organized data, and practical
            automation.
          </p>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#48cae4]">
              {col.title}
            </p>
            <div className="grid gap-3">
              {col.links.map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-sm text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} TECFIQ. All rights reserved.</p>
          <p>Malek Tower, Farmgate, Dhaka 1215</p>
        </div>
      </div>
    </footer>
  );
}