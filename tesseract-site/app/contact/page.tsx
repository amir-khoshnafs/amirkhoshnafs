import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="glass rgb-ring rounded-3xl p-6 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
          <p className="mt-3 text-muted">
            Keep it lightweight: use a form service later (Resend/Formspree). For now, wire your email + socials.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass rgb-ring rounded-2xl p-5">
              <div className="text-sm font-semibold tracking-tight">Email</div>
              <p className="mt-2 text-sm text-muted">you@tesseract.com</p>
            </div>
            <div className="glass rgb-ring rounded-2xl p-5">
              <div className="text-sm font-semibold tracking-tight">Links</div>
              <p className="mt-2 text-sm text-muted">GitHub · LinkedIn · X</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
