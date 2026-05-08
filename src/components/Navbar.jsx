import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { navMenus } from "../data/navigation";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setActiveMenu(null);

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white"
      onMouseLeave={closeMenu}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
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

        <nav className="hidden items-center gap-8 lg:flex">
          {Object.entries(navMenus).map(([key, menu]) => (
            <button
              key={key}
              type="button"
              onMouseEnter={() => setActiveMenu(key)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-950"
            >
              {menu.label}
              <ChevronDown
                size={16}
                className={`transition ${
                  activeMenu === key ? "rotate-180" : ""
                }`}
              />
            </button>
          ))}

          <Link
            to="/services"
            onMouseEnter={closeMenu}
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onMouseEnter={closeMenu}
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/documentation"
            onMouseEnter={closeMenu}
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            Docs
          </Link>

          <Link
            to="/login"
            onMouseEnter={closeMenu}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            <User size={18} />
            Login
          </Link>

          <Link
            to="/contact"
            onMouseEnter={closeMenu}
            className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300"
          >
            See a demo
          </Link>
        </div>

        <button
          type="button"
          className="rounded-xl border border-slate-200 p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {activeMenu && <MegaMenu menu={navMenus[activeMenu]} closeMenu={closeMenu} />}

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white p-5 lg:hidden">
          <div className="grid gap-3 text-sm font-semibold text-slate-700">
            <Link to="/products" onClick={() => setMobileOpen(false)}>
              Products
            </Link>
            <Link to="/platform" onClick={() => setMobileOpen(false)}>
              Platform
            </Link>
            <Link to="/services" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            <Link to="/company" onClick={() => setMobileOpen(false)}>
              Company
            </Link>
            <Link to="/insights/blog" onClick={() => setMobileOpen(false)}>
              Resources
            </Link>
            <Link to="/documentation" onClick={() => setMobileOpen(false)}>
              Documentation
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}