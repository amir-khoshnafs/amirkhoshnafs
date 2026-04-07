import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="glass rgb-ring rounded-3xl p-6 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About Tesseract</h1>
          <p className="mt-4 text-muted">
            This is a lab-style portfolio focused on ML/CV systems that behave well under real-world constraints:
            data drift, noise, latency budgets, and deployment realities.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass rgb-ring rounded-2xl p-5">
              <div className="text-sm font-semibold tracking-tight">Principles</div>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted">
                <li>Evaluate early, evaluate often.</li>
                <li>Make constraints explicit (latency, memory, data).</li>
                <li>Prefer simple systems that are observable and testable.</li>
                <li>Build for iteration, not just demos.</li>
              </ul>
            </div>

            <div className="glass rgb-ring rounded-2xl p-5">
              <div className="text-sm font-semibold tracking-tight">Stack</div>
              <p className="mt-3 text-sm text-muted">
                PyTorch · OpenCV · ONNX/TensorRT · FastAPI · Docker · Linux · Monitoring + metrics
              </p>
              <p className="mt-3 text-sm text-muted">
                This website: Next.js · Tailwind · Framer Motion · cmdk
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
