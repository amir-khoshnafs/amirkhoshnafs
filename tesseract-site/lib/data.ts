export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  chips: string[];
  problem: string;
  constraints: string;
  approach: string;
  results: string;
  links: { github?: string; demo?: string };
};

export const featuredProjects: Project[] = [
  {
    slug: "similarity-search-domain-shift",
    title: "Visual Similarity Search under Domain Shift",
    summary: "Metric learning + retrieval UI with robust evaluation and failure analysis.",
    tags: ["Retrieval", "Metric Learning", "Robustness"],
    chips: ["mAP/NDCG", "Hard negatives", "UI"],
    problem: "Users need consistent retrieval results even when input domains change (lighting, devices, backgrounds).",
    constraints: "Limited labels, domain drift, and strict UX latency expectations.",
    approach: "Embedding model + hard-negative mining, domain-robust augmentation, and offline/online evaluation harness.",
    results: "Improved retrieval stability under shift; clearer failure modes and safer operating points.",
    links: {},
  },
  {
    slug: "realtime-tracking-analytics",
    title: "Real-time Detection + Tracking + Analytics",
    summary: "Operating-point decisions and analytics logic built on tracking primitives.",
    tags: ["Detection", "Tracking", "Systems"],
    chips: ["Latency budget", "FPS", "Alerts"],
    problem: "Track objects reliably and convert tracks into meaningful analytics signals.",
    constraints: "Real-time compute, cluttered scenes, and calibration across cameras.",
    approach: "Detector + tracker with tuned thresholds, smoothing, and event logic; stress-tested scenarios.",
    results: "Stable analytics under noise with transparent metrics and tunable tradeoffs.",
    links: {},
  },
  {
    slug: "document-ai-confidence",
    title: "Document AI with Calibrated Confidence",
    summary: "End-to-end pipeline with abstention to avoid high-cost mistakes.",
    tags: ["Document AI", "OCR", "Calibration"],
    chips: ["Confidence", "Abstain", "QA"],
    problem: "Extract fields from documents while knowing when not to guess.",
    constraints: "Noisy scans, layout variance, and costly downstream errors.",
    approach: "Detect → deskew → OCR → field extraction with calibration and reject option.",
    results: "Higher precision at target recall; safer outputs with explicit uncertainty.",
    links: {},
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    slug: "edge-inference-optimization",
    title: "Edge Inference Optimization Playbook",
    summary: "A repeatable path: profile → optimize → export → validate.",
    tags: ["Deployment", "ONNX", "TensorRT"],
    chips: ["Profiling", "Export", "Validation"],
    problem: "Ship models that actually meet latency and memory constraints on edge devices.",
    constraints: "VRAM limits, batch-size realities, and precision tradeoffs.",
    approach: "Profiling, operator-aware changes, quantization, export, and regression tests.",
    results: "Consistent improvements without silent accuracy regressions.",
    links: {},
  },
  {
    slug: "dataset-pipelines",
    title: "Dataset Pipelines for CV",
    summary: "From ImageFolder to COCO-style detection datasets and scalable loaders.",
    tags: ["Data", "Pipelines", "CV"],
    chips: ["COCO", "Transforms", "Repro"],
    problem: "Move beyond toy datasets to production-friendly data handling.",
    constraints: "Label noise, splits, and reproducibility.",
    approach: "Structured manifests, deterministic splits, and validation visualizations.",
    results: "More reliable training and debugging loops.",
    links: {},
  },
];

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const featuredNotes: Note[] = [
  {
    slug: "operating-points",
    title: "Operating Points: Where Models Become Systems",
    excerpt: "Why thresholds, calibration, and product constraints matter more than a single metric.",
    date: "2026-02-26",
  },
  {
    slug: "domain-shift-checklist",
    title: "A Practical Domain Shift Checklist",
    excerpt: "A short checklist to detect drift early and harden pipelines with minimal drama.",
    date: "2026-02-26",
  },
  {
    slug: "latency-budgeting",
    title: "Latency Budgeting for CV Pipelines",
    excerpt: "How to think about end-to-end latency, not just model inference time.",
    date: "2026-02-26",
  },
];

export const allNotes: Note[] = [
  ...featuredNotes,
  {
    slug: "eval-harness",
    title: "Build an Eval Harness Before You Chase SOTA",
    excerpt: "A simple harness beats a fancy model when you’re iterating fast.",
    date: "2026-02-26",
  },
  {
    slug: "abstention",
    title: "Abstention: The Most Underrated Feature",
    excerpt: "When the correct answer is 'I don't know'—and how to ship it.",
    date: "2026-02-26",
  },
  {
    slug: "debugging-data",
    title: "Debugging Data Issues Like an Engineer",
    excerpt: "Five checks that catch most dataset bugs before training wastes days.",
    date: "2026-02-26",
  },
];
