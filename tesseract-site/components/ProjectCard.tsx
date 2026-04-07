import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group glass sheen rgb-ring rounded-3xl p-5 transition hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-muted">{project.tags.slice(0, 2).join(" · ")}</div>
          <div className="mt-2 text-lg font-semibold tracking-tight">{project.title}</div>
        </div>
        <div className="h-2 w-2 rounded-full bg-white/20 shadow-[0_0_16px_rgba(var(--a1),0.25)] group-hover:bg-[rgba(var(--a2),0.7)]" />
      </div>
      <p className="mt-3 text-sm text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.chips.map((c) => (
          <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {c}
          </span>
        ))}
      </div>
      <div className="mt-5 text-sm text-white/60 group-hover:text-white/80">Open →</div>
    </Link>
  );
}
