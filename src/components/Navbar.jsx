import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { navMenus } from "../data/navigation";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setActiveMenu(null);

  const menuItems = [
    { key: "products",  label: "Products" },
    { key: "platform",  label: "Platform" },
    { key: "resources", label: "Resources" },
    { key: "company",   label: "Company" },
  ];

  const simpleLinks = [
    { label: "Services", href: "/services" },
    { label: "Contact",  href: "/contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#ade8f4]/28 bg-white/97 backdrop-blur-xl"
      onMouseLeave={closeMenu}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#03045e] text-sm font-bold text-white transition hover:bg-[#023e8a]">
            TQ
          </div>
          <div className="leading-tight">
            <p className="text-xl font-bold tracking-tight text-[#03045e]">TECFIQ</p>
            <p className="text-xs font-medium text-[#0077b6]">Business software solutions</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onMouseEnter={() => setActiveMenu(item.key)}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                activeMenu === item.key
                  ? "bg-[#caf0f8] text-[#03045e]"
                  : "text-[#03045e] hover:bg-[#caf0f8]/60"
              }`}
            >
              {item.label}
              <ChevronDown
                size={15}
                className={`transition duration-200 ${activeMenu === item.key ? "rotate-180 text-[#0077b6]" : "text-[#0096c7]"}`}
              />
            </button>
          ))}

          {simpleLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onMouseEnter={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#caf0f8] text-[#03045e]"
                    : "text-[#03045e] hover:bg-[#caf0f8]/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/documentation"
            onMouseEnter={closeMenu}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-[#0077b6] transition hover:bg-[#caf0f8]/60 hover:text-[#03045e]"
          >
            Docs
          </Link>
          <Link
            to="/login"
            onMouseEnter={closeMenu}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#03045e] transition hover:bg-[#caf0f8]/60"
          >
            <User size={16} />
            Login
          </Link>
          <Link
            to="/contact"
            onMouseEnter={closeMenu}
            className="btn-primary rounded-xl px-5 py-3 text-sm font-bold text-white shadow-sm"
          >
            Talk to us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-xl border border-[#ade8f4]/40 p-2 text-[#03045e] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {activeMenu && (
        <MegaMenu menu={navMenus[activeMenu]} closeMenu={closeMenu} />
      )}

      {mobileOpen && (
        <div className="border-t border-[#ade8f4]/25 bg-white px-5 py-5 lg:hidden">
          <div className="grid gap-1">
            {[
              ["Products",      "/products"],
              ["Platform",      "/platform"],
              ["Services",      "/services"],
              ["Company",       "/company"],
              ["Resources",     "/resources"],
              ["Documentation", "/documentation"],
              ["Contact",       "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                to={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#03045e] transition hover:bg-[#caf0f8]/60"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 rounded-xl px-4 py-3 text-center text-sm font-bold text-white"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}