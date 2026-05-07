import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20">
      <h1 className="text-5xl font-bold text-slate-950">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white"
      >
        Go home
      </Link>
    </main>
  );
}