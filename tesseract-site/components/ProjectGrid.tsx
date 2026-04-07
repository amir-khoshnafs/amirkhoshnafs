import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/data";

export default function ProjectGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
