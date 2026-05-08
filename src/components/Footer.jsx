import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              TQ
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight text-slate-950">
                TECFIQ
              </p>
              <p className="text-xs text-slate-500">
                Elevating businesses with technology
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
            TECFIQ builds SaaS products, custom software, and AI-ready business
            systems for organizations that want to digitize and improve daily
            operations.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-slate-950">Products</p>
          <div className="grid gap-2 text-sm text-slate-600">
            <Link to="/solutions/ai-llm-chatbots">AI & LLM Chatbots</Link>
            <Link to="/solutions/xdocs-ai-dms">XDOCS AI DMS</Link>
            <Link to="/solutions/smartrestora-pos">SmartRestora POS</Link>
            <Link to="/solutions/hajirabook-payroll">HajiraBook</Link>
            <Link to="/products">All products</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-slate-950">Company</p>
          <div className="grid gap-2 text-sm text-slate-600">
            <Link to="/company/about-us">About Us</Link>
            <Link to="/company/leadership-team">Leadership</Link>
            <Link to="/company/certifications-compliance">Compliance</Link>
            <Link to="/company/client-reviews">Client Reviews</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-slate-950">Resources</p>
          <div className="grid gap-2 text-sm text-slate-600">
            <Link to="/insights/blog">Blog / Insights</Link>
            <Link to="/insights/research-lab">Research Lab</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/documentation">Documentation</Link>
            <Link to="/services">Services</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TECFIQ. All rights reserved.</p>
          <p>Software products, services, and support for business operations.</p>
        </div>
      </div>
    </footer>
  );
}