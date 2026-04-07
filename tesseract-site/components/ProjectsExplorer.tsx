"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/data";

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function ProjectsExplorer() {
  const [q, setQ] = React.useState("");
  const [tag, setTag] = React.useState<string>("All");

  const tags = React.useMemo(() => {
    return ["All", ...uniq(allProjects.flatMap((p) => p.tags)).sort()];
  }, []);

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return allProjects.filter((p) => {
      const matchesTag = tag === "All" || p.tags.includes(tag);
      const hay = [
        p.title,
        p.summary,
        p.problem,
        p.constraints,
        p.approach,
        p.results,
        p.tags.join(" "),
        p.chips.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !query || hay.includes(query);
      return matchesTag && matchesQuery;
    });
  }, [q, tag]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <div className="glass rgb-ring rounded-2xl px-3 py-2">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-white/60" />
              {/* text-base prevents iOS zoom on focus */}
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search: domain shift, tracking, OCR, latency…"
                className="w-full bg-transparent text-base sm:text-sm text-white outline-none placeholder:text-white/40"
              />
              {q ? (
                <button
                  onClick={() => setQ("")}
                  className="rounded-xl border border-white/10 bg-white/5 p-1 text-white/70 hover:bg-white/10"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => {
              const active = t === tag;
              return (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={[
                    "rounded-full border px-3 py-1 text-xs transition",
                    active
                      ? "border-white/15 bg-[rgba(var(--a2),0.14)] text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 text-xs text-white/55">
        <div>
          Showing <span className="text-white/80">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "project" : "projects"}
        </div>
        {(q || tag !== "All") ? (
          <button
            onClick={() => {
              setQ("");
              setTag("All");
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"
          >
            Reset
          </button>
        ) : (
          <div />
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
