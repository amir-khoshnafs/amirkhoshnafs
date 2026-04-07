"use client";

import * as React from "react";
import Link from "next/link";
import { Command } from "cmdk";
import { Search, FileText, Layers3, User, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { allProjects, allNotes } from "@/lib/data";

type Props = { open: boolean; onOpenChange: (v: boolean) => void };

export default function CommandPalette({ open, onOpenChange }: Props) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${open ? "" : "pointer-events-none opacity-0"} transition`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/60 ${open ? "opacity-100" : "opacity-0"} transition`}
        onClick={() => onOpenChange(false)}
      />
      <div className="absolute left-1/2 top-16 sm:top-20 w-[92vw] max-w-xl -translate-x-1/2">
        <div className="glass rgb-ring rounded-3xl p-3">
          <Command
            shouldFilter
            value={query}
            onValueChange={setQuery}
            className="rounded-2xl"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Search className="h-4 w-4 text-white/60" />
              <Command.Input
                placeholder="Search projects, notes, pages…"
                className="w-full bg-transparent text-base sm:text-sm text-white outline-none placeholder:text-white/40"
                autoFocus={open}
              />
            </div>

            <Command.List className="mt-3 max-h-[60vh] overflow-auto px-1 pb-2">
              <Group heading="Pages">
                <Item icon={<Layers3 className="h-4 w-4" />} label="Projects" onSelect={() => go("/projects")} />
                <Item icon={<FileText className="h-4 w-4" />} label="Notes" onSelect={() => go("/notes")} />
                <Item icon={<User className="h-4 w-4" />} label="About" onSelect={() => go("/about")} />
                <Item icon={<Mail className="h-4 w-4" />} label="Contact" onSelect={() => go("/contact")} />
              </Group>

              <Group heading="Projects">
                {allProjects.slice(0, 8).map((p) => (
                  <Item
                    key={p.slug}
                    icon={<span className="h-2 w-2 rounded-full bg-[rgba(var(--a2),0.85)]" />}
                    label={p.title}
                    hint={p.tags[0]}
                    onSelect={() => go(`/projects/${p.slug}`)}
                  />
                ))}
              </Group>

              <Group heading="Notes">
                {allNotes.slice(0, 6).map((n) => (
                  <Item
                    key={n.slug}
                    icon={<span className="h-2 w-2 rounded-full bg-[rgba(var(--a1),0.85)]" />}
                    label={n.title}
                    hint={n.date}
                    onSelect={() => go(`/notes/${n.slug}`)}
                  />
                ))}
              </Group>

              <div className="px-2 pt-2 text-xs text-white/40">
                Tip: Press <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5">Esc</span> to close.
              </div>
            </Command.List>
          </Command>
        </div>
      </div>
    </div>
  );

  function go(href: string) {
    onOpenChange(false);
    router.push(href);
  }
}

function Group({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <Command.Group heading={heading} className="mt-2">
      <div className="px-2 py-2 text-xs font-semibold tracking-wide text-white/40">{heading}</div>
      <div className="grid gap-1">{children}</div>
    </Command.Group>
  );
}

function Item({
  icon,
  label,
  hint,
  onSelect,
}: {
  icon: React.ReactNode;
  label: string;
  hint?: string;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-transparent bg-white/0 px-3 py-2 text-sm text-white/80 outline-none transition data-[selected=true]:border-white/10 data-[selected=true]:bg-white/5"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          {icon}
        </span>
        <span>{label}</span>
      </div>
      {hint ? <span className="text-xs text-white/45">{hint}</span> : null}
    </Command.Item>
  );
}
