import Link from "next/link";
import Section from "@/components/Section";
import { allNotes } from "@/lib/data";

export default function NotesPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rgb-ring rounded-3xl p-6 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Notes</h1>
          <p className="mt-3 text-muted">Short technical writeups. (Placeholders for now.)</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allNotes.map((n) => (
              <Link key={n.slug} href={`/notes/${n.slug}`} className="glass sheen rgb-ring rounded-3xl p-5 hover:bg-white/10">
                <div className="text-xs text-muted">{n.date}</div>
                <div className="mt-2 text-lg font-semibold tracking-tight">{n.title}</div>
                <p className="mt-2 text-sm text-muted">{n.excerpt}</p>
                <div className="mt-4 text-sm text-muted">Read →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
