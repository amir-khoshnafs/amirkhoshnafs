import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { allProjects } from "@/lib/data";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="glass rgb-ring rounded-3xl p-6 sm:p-10">
          <div className="text-xs text-muted">{project.tags.join(" · ")}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-4 text-muted">{project.summary}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoBlock title="Problem" text={project.problem} />
            <InfoBlock title="Constraints" text={project.constraints} />
            <InfoBlock title="Approach" text={project.approach} />
            <InfoBlock title="Results" text={project.results} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/projects" className="text-sm text-muted hover:text-white">← Back to projects</Link>
            <div className="flex gap-3">
              {project.links.github ? (
                <a className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10" href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
              {project.links.demo ? (
                <a className="rounded-2xl border border-white/10 bg-[rgba(var(--a2),0.12)] px-4 py-2 text-sm hover:bg-[rgba(var(--a2),0.18)]" href={project.links.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="glass rgb-ring rounded-2xl p-5">
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </div>
  );
}
