import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Gauge, Layers3 } from "lucide-react";
import ProjectGrid from "@/components/ProjectGrid";
import { featuredNotes } from "@/lib/data";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="glass sheen rgb-ring rounded-3xl p-6 sm:p-10">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-muted">Lab-grade CV. Production-grade delivery.</span>
                </span>
              </div>

              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Robust ML/CV systems that hold up under{" "}
                    <span className="bg-gradient-to-r from-[rgba(var(--a1),0.95)] via-[rgba(var(--a2),0.95)] to-[rgba(var(--a3),0.95)] bg-clip-text text-transparent">
                      real-world shift
                    </span>
                    .
                  </h1>
                  <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                    Tesseract is a portfolio-lab: fast iteration, reliable evaluation, and deployable
                    pipelines—built with discipline around constraints like latency, data noise, and domain drift.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/projects"
                      className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium transition hover:bg-white/10"
                    >
                      View Projects
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[rgba(var(--a2),0.12)] px-5 py-3 font-medium transition hover:bg-[rgba(var(--a2),0.18)]"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <MiniStat icon={<Gauge className="h-4 w-4" />} title="Performance" desc="Effects-budgeted UI + optimized media." />
                    <MiniStat icon={<ShieldCheck className="h-4 w-4" />} title="Reliability" desc="Evaluation-first workflows, calibrated confidence." />
                    <MiniStat icon={<Layers3 className="h-4 w-4" />} title="Systems" desc="Pipelines designed for maintenance & scale." />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
              <p className="mt-2 text-muted">Case studies with constraints, evaluation, and outcomes.</p>
            </div>
            <Link href="/projects" className="hidden text-sm text-muted hover:text-white sm:inline-flex">
              Browse all →
            </Link>
          </div>
          <ProjectGrid />
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="glass rgb-ring rounded-3xl p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">What I build</h3>
                <p className="mt-3 text-muted">
                  A focused set of capabilities that pair research intuition with production habits.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                <Capability title="Domain shift robustness" desc="Generalization benchmarks, error analysis, and hardening." />
                <Capability title="Detection + tracking" desc="Operating points, latency budgets, and analytics logic." />
                <Capability title="Document AI" desc="Detect → deskew → OCR → extract with confidence." />
                <Capability title="Similarity search" desc="Metric learning + retrieval UI + evaluation discipline." />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Notes */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Latest Notes</h2>
              <p className="mt-2 text-muted">Short technical writeups that show the thinking.</p>
            </div>
            <Link href="/notes" className="hidden text-sm text-muted hover:text-white sm:inline-flex">
              Read more →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredNotes.map((n) => (
              <Link key={n.slug} href={`/notes/${n.slug}`} className="glass sheen rgb-ring rounded-3xl p-5 transition hover:bg-white/10">
                <div className="text-xs text-muted">{n.date}</div>
                <div className="mt-2 text-lg font-semibold tracking-tight">{n.title}</div>
                <p className="mt-2 text-sm text-muted">{n.excerpt}</p>
                <div className="mt-4 text-sm text-muted">Read →</div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

function MiniStat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="glass rgb-ring rounded-2xl p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="text-white/80">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-sm text-muted">{desc}</div>
    </div>
  );
}

function Capability({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass rgb-ring rounded-2xl p-5">
      <div className="text-base font-semibold tracking-tight">{title}</div>
      <p className="mt-2 text-sm text-muted">{desc}</p>
    </div>
  );
}
