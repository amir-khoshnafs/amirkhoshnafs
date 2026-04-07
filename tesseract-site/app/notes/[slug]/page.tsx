import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { allNotes } from "@/lib/data";

export default function NoteDetail({ params }: { params: { slug: string } }) {
  const note = allNotes.find((n) => n.slug === params.slug);
  if (!note) return notFound();

  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="glass rgb-ring rounded-3xl p-6 sm:p-10">
          <div className="text-xs text-muted">{note.date}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{note.title}</h1>
          <p className="mt-4 text-muted">{note.excerpt}</p>

          <div className="mt-8 space-y-4 text-sm text-muted">
            <p>
              This is a placeholder note page. Next step: convert notes to MDX so you can write in markdown with code blocks.
            </p>
            <p>
              Keep posts short: constraints, failures, metrics, and what you learned.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/notes" className="text-sm text-muted hover:text-white">← Back to notes</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
