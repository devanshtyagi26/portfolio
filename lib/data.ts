const TIMELINE = [
  {
    year: "2022",
    title: "Began B.Sc. (Hons.) Computer Science",
    detail: "Ramanujan College, University of Delhi.",
  },
  {
    year: "2024",
    title: "Pivoted toward AI/ML research",
    detail:
      "Deep dive into scikit-learn, TensorFlow, and applied deep learning.",
  },
  {
    year: "2025",
    title: "Full Stack Developer at LOUDER",
    detail: "Rebuilt legacy ticketing systems with the MERN stack.",
  },
  {
    year: "2025",
    title: "CrystaLogiX research initiated",
    detail: "Hybrid XGBoost ensemble for electronic bandgap prediction.",
  },
  {
    year: "2026",
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

const METRICS = [
  { value: "9.27", label: "CGPA" },
  { value: "Under Review", label: "Research Paper" },
  { value: "5+", label: "Production Projects" },
  { value: "FastAPI · Next.js", label: "Full-stack ML" },
];

export { TIMELINE, PROJECTS, RESEARCH_PIPELINE, SKILLS, NAV, METRICS };