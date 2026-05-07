import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ menu, closeMenu }) {
  return (
    <div className="mega-menu absolute left-0 top-20 w-full border-t border-[#ade8f4]/40 bg-white shadow-xl shadow-[#0077b6]/8">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[1.4fr_0.7fr]">

        {/* Link columns */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menu.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0096c7]">
                {column.title}
              </p>
              <div className="grid gap-1">
                {column.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      className="mega-item group flex gap-3 rounded-2xl p-3"
                    >
                      <div className="mega-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#caf0f8] text-[#0077b6]">
                        <Icon size={19} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-bold text-[#03045e]">{item.title}</p>
                          <ArrowRight
                            size={13}
                            className="text-[#0096c7] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </div>
                        <p className="mt-0.5 text-sm leading-6 text-[#0077b6]">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Promo cards — both light-themed now, consistent with page palette */}
        <div className="grid gap-4">
          {menu.promos.map((promo, index) => (
            <Link
              key={promo.title}
              to={promo.href}
              onClick={closeMenu}
              className={`group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:shadow-md ${
                index === 0
                  ? "border border-[#ade8f4] bg-[#caf0f8]"
                  /*
                    FIX: Was bg-[#03045e] — near-black, text invisible.
                    Now uses #ade8f4 bg with dark brand-blue text —
                    consistent with the page's light palette and
                    fully readable at all text sizes.
                  */
                  : "border border-[#90e0ef] bg-[#ade8f4]"
              }`}
            >
              {/* Heading: #03045e on #caf0f8 or #ade8f4 — both exceed WCAG AA */}
              <p className="text-xl font-bold text-[#03045e]">
                {promo.title}
              </p>
              {/* Body: #023e8a on those bgs — contrast ≈ 8:1, AAA */}
              <p className="mt-3 text-sm leading-6 text-[#023e8a]">
                {promo.description}
              </p>
              {/* CTA link: #0077b6 on light cyan — clear and on-brand */}
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0077b6]">
                Learn more{" "}
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}