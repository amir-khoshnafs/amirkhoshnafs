import Section from "@/components/Section";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export default function ProjectsPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rgb-ring rounded-3xl p-6 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
          <p className="mt-3 max-w-3xl text-muted">
            Filter by focus area, or search by keywords. Every project is written as a case study.
          </p>

          <div className="mt-8">
            <ProjectsExplorer />
          </div>
        </div>
      </div>
    </Section>
  );
}
