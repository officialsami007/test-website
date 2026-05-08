import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ menu, closeMenu }) {
  if (!menu) return null;

  return (
    <div className="absolute left-0 top-20 w-full border-t border-slate-200 bg-white shadow-2xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menu.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-sm font-bold text-slate-950">
                {column.title}
              </p>

              <div className="grid gap-2">
                {column.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      className="group flex gap-4 rounded-2xl p-3 transition hover:bg-slate-50"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-950 text-white">
                        <Icon size={20} />
                      </div>

                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-bold text-slate-950">
                            {item.title}
                          </p>
                          <ArrowRight
                            size={14}
                            className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </div>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
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

        <div className="grid gap-4">
          {menu.promos.map((promo, index) => (
            <Link
              key={promo.title}
              to={promo.href}
              onClick={closeMenu}
              className={`rounded-3xl p-6 transition hover:-translate-y-1 ${
                index === 0
                  ? "bg-slate-100 text-slate-950"
                  : "bg-purple-950 text-white"
              }`}
            >
              <p className="text-xl font-bold">{promo.title}</p>

              <p
                className={`mt-3 text-sm leading-6 ${
                  index === 0 ? "text-slate-600" : "text-purple-100"
                }`}
              >
                {promo.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline decoration-amber-400 decoration-2 underline-offset-4">
                Learn more <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}