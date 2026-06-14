import { Trophy, FileText, Rocket, Star } from "lucide-react";

const TIMELINE = [
  {
    year: "2022 – 2026",
    title: "B.Sc. (Hons.) Computer Science",
    detail: "Ramanujan College, University of Delhi.",
  },
  {
    year: "Feb. 2025 – Apr. 2025",
    title: "Full Stack Developer at LOUDER",
    detail: "Rebuilt legacy ticketing systems with the MERN stack.",
  },
  {
    year: "Aug. 2025",
    title: "Materials Science Research initiated",
    detail: "Hybrid XGBoost ensemble for electronic bandgap prediction.",
  },
  {
    year: "Apr. 2026",
    title: "Manuscript under review",
    detail: "Submitted to npj Computational Materials.",
  },
];

const PROJECTS = [
  {
    name: "CrystaLogiX",
    flagship: true,
    blurb:
      "Hybrid XGBoost ensemble for real-time electronic bandgap prediction across inorganic crystals.",
    points: [
      "Research paper under review at npj Computational Materials",
      "Materials Project data pipeline + GPU-accelerated feature engineering",
      "FastAPI · Redis · Next.js production deployment",
    ],
    stack: ["Python", "XGBoost", "FastAPI", "Redis", "Next.js"],
  },
  {
    name: "Delhi-NCR Air Quality Analysis",
    blurb:
      "Ten years of NASA Giovanni satellite data distilled into actionable environmental insight.",
    points: [
      "Large-scale preprocessing of decade-long satellite records",
      "Time-series modeling and seasonal decomposition",
      "Publication-grade visualization of pollutant trends",
    ],
    stack: ["Pandas", "NumPy", "Matplotlib", "Statsmodels"],
  },
  {
    name: "PopcornPick",
    blurb:
      "ML recommendation engine delivering personalized movie picks with real-time inference.",
    points: [
      "Content-based + collaborative filtering hybrid",
      "FastAPI backend with sub-100ms inference",
      "Cold-start handling via metadata embeddings",
    ],
    stack: ["scikit-learn", "FastAPI", "Pandas"],
  },
  {
    name: "Interactive Single-Layer Perceptron",
    blurb:
      "Educational visualization of a perceptron learning in real time — weights, bias, and decision boundary.",
    points: [
      "Live weight updates as the model trains",
      "Adjustable learning rate, dataset, and activation",
      "Built to teach the intuition behind gradient descent",
    ],
    stack: ["React", "TypeScript", "Canvas"],
  },
  {
    name: "MNISTic",
    blurb:
      "CNN digit classifier with 98%+ validation accuracy and a canvas-based prediction interface.",
    points: [
      "Trained convolutional network on MNIST",
      "Browser canvas → tensor pipeline for instant inference",
      "Deployed as a lightweight static web app",
    ],
    stack: ["TensorFlow", "Keras", "Next.js"],
  },
];

const RESEARCH_PIPELINE = [
  {
    step: "Problem",
    text: "Predict electronic bandgaps across inorganic crystals at scale.",
  },
  {
    step: "Dataset",
    text: "Curated subset of the Materials Project (>140k entries).",
  },
  {
    step: "Features",
    text: "GPU-accelerated composition, structural and electronic descriptors.",
  },
  {
    step: "Models",
    text: "Hybrid XGBoost ensemble with stacked meta-learner.",
  },
  {
    step: "Deploy",
    text: "FastAPI · Redis · Next.js, real-time inference endpoint.",
  },
  {
    step: "Publish",
    text: "Manuscript under review at npj Computational Materials.",
  },
];

const SKILLS = [
  {
    group: "Machine Learning & AI",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "CNNs",
      "OpenCV",
      "Neural Networks",
      "FastAPI Deployment",
    ],
  },
  {
    group: "Data Science",
    items: [
      "Pandas",
      "NumPy",
      "EDA",
      "Statistical Modeling",
      "Probability",
      "Linear Algebra",
      "Optimization",
    ],
  },
  {
    group: "Development",
    items: [
      "Next.js",
      "React",
      "MERN",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
    ],
  },
  { group: "Programming", items: ["Python", "JavaScript", "C++", "PHP"] },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Ranked 1st in cohort",
    subtitle: "Computer Science · Final year",
    tag: "Top of class",
    tagVariant: "info",
  },
  {
    icon: FileText,
    title: "Research publication",
    subtitle: "npj Computational Materials · 2026",
    tag: "Under review",
    tagVariant: "warning",
  },
  {
    icon: Rocket,
    title: "7+ projects shipped",
    subtitle: "4 ML models in real-world usage",
    tag: "Production",
    tagVariant: "success",
  },
  {
    icon: Star,
    title: "9.27 CGPA",
    subtitle: "Consistent academic excellence",
    tag: "Top of class",
    tagVariant: "info",
  },
] as const;

export type TagVariant = "info" | "warning" | "success";

export { TIMELINE, PROJECTS, RESEARCH_PIPELINE, SKILLS, NAV, ACHIEVEMENTS };

