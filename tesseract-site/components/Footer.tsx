import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/70">
            <span className="font-semibold text-white">Tesseract</span>{" "}
            <span className="text-white/50">— robust ML/CV systems.</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <Link className="hover:text-white" href="/projects">Projects</Link>
            <Link className="hover:text-white" href="/notes">Notes</Link>
            <Link className="hover:text-white" href="/about">About</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/40">
          Built with Next.js + Tailwind. Effects budgeted for performance.
        </div>
      </div>
    </footer>
  );
}
