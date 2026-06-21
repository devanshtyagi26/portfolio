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
    name: "CrystaLogiX - Materials Informatics Platform",
    flagship: true,
    blurb:
      "Full-stack materials informatics platform for real-time electronic bandgap prediction using a two-stage XGBoost hurdle framework with conformal uncertainty quantification.",
    points: [
      "Research manuscript under peer review at npj Computational Materials proposing a hybrid XGBoost-ensemble architecture for bandgap prediction in inorganic crystals.",
      "GPU-accelerated pipeline (RAPIDS cuDF) over ~200k Materials Project entries with a two-stage classifier–regressor achieving global MAE of 0.2336 eV and R² of 0.8945.",
      "Production deployment with Next.js (Netlify), FastAPI + ONNX inference (Render), MongoDB Atlas, and Upstash Redis rate limiting.",
    ],
    stack: [
      "Python",
      "XGBoost",
      "ONNX",
      "Next.js",
      "FastAPI",
      "MongoDB",
      "Redis",
    ],
    demo: "https://crystalogix.devanshtyagi.me",
    repo: "https://github.com/devanshtyagi26/CrystaLogiX",
    isML: true,
  },
  {
    name: "Delhi-NCR Air Quality Analysis",
    flagship: false,
    blurb:
      "Exploratory data analysis and time-series visualization of a decade of NASA Giovanni satellite data to track Delhi-NCR's shifting pollutant landscape.",
    points: [
      "Improved data consistency by 70% through advanced preprocessing on large-scale multi-year environmental datasets.",
      "Identified a 15% decrease in CO and 20% increase in NOx emissions via time-series forecasting across 10 years of satellite observations.",
      "Produced geospatial visualizations of pollutant distributions over the Delhi-NCR region using GeoPandas and Matplotlib.",
    ],
    stack: ["Python", "Pandas", "GeoPandas", "Matplotlib", "NASA Giovanni"],
    isML: false,
  },
  {
    name: "PopcornPick - Movie Recommendation System",
    flagship: false,
    blurb:
      "Full-stack movie recommendation platform powered by a custom ML model serving personalized picks in real time.",
    points: [
      "Built a custom ML recommendation model improving content relevance and personalization by 30%.",
      "Deployed RESTful APIs via FastAPI delivering real-time recommendations with sub-second response times.",
    ],
    stack: ["Python", "FastAPI", "Scikit-learn", "Next.js"],
    demo: "https://popcornpickapp.devanshtyagi.me/",
    repo: "https://github.com/devanshtyagi26/PopcornPick",
    isML: true,
  },
  {
    name: "PingDot",
    flagship: false,
    blurb:
      "Minimalist always-on-top Windows utility that pulses a single dot when a chosen WhatsApp contact messages you — no notifications, no popups.",
    points: [
      "Built a frameless, transparent, click-through Electron overlay that floats above all windows including fullscreen apps.",
      "Polled WhatsApp Web's DOM via a preload script every 2.5s to detect unread badges without Puppeteer or any external Chromium dependency.",
      "Shipped as a single portable .exe with a tray icon for runtime contact switching and a config.json for dot size, color, position, and polling interval.",
    ],
    stack: ["Electron", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/devanshtyagi26/PingDot",
    isML: false,
  },
  {
    name: "Perceptron Playground",
    flagship: false,
    blurb:
      "Interactive browser-based visualizer for a single-layer perceptron, demonstrating real-time weight updates and decision boundary convergence.",
    points: [
      "Visualized real-time weight updates and decision boundary shifts to build intuition around linear classifier convergence.",
      "Achieved 100% classification accuracy on linearly separable datasets with incremental perceptron training.",
      "Designed an interactive dashboard with sliders and input fields for learning rate, point count, and target line, cutting model tuning time by 20%.",
    ],
    stack: ["JavaScript", "HTML", "CSS"],
    demo: "https://perceptron-playground.vercel.app/",
    repo: "https://github.com/devanshtyagi26/Perceptron-Visualizer",
    isML: true,
  },

  {
    name: "MNISTic",
    flagship: false,
    blurb:
      "Handwritten digit predictor powered by a deep learning model trained on MNIST, with real-time canvas-based inference in the browser.",
    points: [
      "Trained a CNN on the MNIST dataset achieving 98%+ validation accuracy.",
      "Enabled real-time predictions from a freehand canvas input, making the classification process 70% faster.",
    ],
    stack: ["Python", "TensorFlow", "Keras", "JavaScript", "HTML", "CSS"],
    demo: "https://mnistic.devanshtyagi.me/",
    repo: "https://github.com/devanshtyagi26/MNISTic",
    isML: true,
  },

  {
    name: "Neuro XOR",
    flagship: false,
    blurb:
      "Interactive 2D and 3D visualization of an XOR neural network, with custom backpropagation built from scratch and real-time WebGL rendering.",
    points: [
      "Implemented a neural network with custom backpropagation and activation functions from scratch — no ML libraries.",
      "Rendered real-time 2D and 3D decision boundary visualizations using WebGL as the network trains.",
      "Exposed learning rate, epoch, and weight controls to let users interactively observe how non-linear XOR separation emerges.",
    ],
    stack: ["JavaScript", "WebGL", "HTML", "CSS"],
    demo: "https://neuro-xor.vercel.app/",
    repo: "https://github.com/devanshtyagi26/XOR-MultiLayer-Perceptron",
    ISML: true,
  },
  {
    name: "HappeningsNow",
    flagship: false,
    blurb:
      "Location-based event and movie discovery app with real-time listings fetched via SerpApi and OTP-gated access to event details.",
    points: [
      "Fetched and displayed real-time city-specific event listings using SerpApi with dynamic location-based filtering.",
      "Implemented OTP-based email verification to restrict access to full event details.",
      "Synced filter state to URL params via useSearchParams and managed global event data through a custom Context API.",
    ],
    stack: ["React", "Node.js", "SerpApi", "Vite", "CSS"],
    demo: "https://happenings-now.netlify.app/",
    repo: "https://github.com/devanshtyagi26/HappeningsNow",
    isML: false,
  },

  {
    name: "MoodLens",
    flagship: false,
    blurb:
      "Emotion detection and mood tracking platform with personalized emotional insights and a comprehensive SRS-backed design.",
    points: [
      "Conceptualized and authored full Software Requirements Specification (SRS) documentation prior to development.",
      "Built an intuitive mood tracking interface delivering personalized emotional insights to users.",
    ],
    stack: ["React", "Python", "FastAPI"],
    demo: "https://emotionrecognitionprototype.web.app/Picture%20Click/index.html",
    isML: true,
  },

  {
    name: "TixMojo",
    flagship: false,
    blurb:
      "Full-featured event ticketing platform built on the MERN stack with a modern, fully responsive UI.",
    points: [
      "Built end-to-end ticketing functionality including event browsing, seat selection, and booking management.",
      "Developed a RESTful backend with Express.js and MongoDB to handle events, users, and transactions.",
      "Designed a responsive React frontend for a seamless experience across desktop and mobile.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    demo: "https://tixmojo.com",
    isML: false,
  },

  {
    name: "TEDx Ramanujan College",
    flagship: false,
    blurb:
      "Official TEDx event website with dynamic content management and a fully integrated registration system.",
    points: [
      "Built and deployed a fully responsive event website with dynamic content management.",
      "Engineered a registration system backed by PHP and MySQL to handle attendee data and submissions.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    isML: false,
  },

  {
    name: "FurSure",
    flagship: false,
    blurb:
      "Full-stack CNN image classifier that predicts cats vs. dogs in real time from user uploads, with a FastAPI inference backend and Next.js frontend.",
    points: [
      "Trained a CNN on ~2,000 Kaggle images using TensorFlow/Keras with binary crossentropy, achieving high classification accuracy.",
      "Built a FastAPI backend serving real-time predictions from base64-encoded image uploads with CORS-safe Render deployment.",
      "Designed a clean Next.js + Tailwind CSS frontend with image preview and instant result display.",
    ],
    stack: ["Python", "TensorFlow", "FastAPI", "Next.js"],
    demo: "https://fursure.devanshtyagi.me",
    repo: "https://github.com/devanshtyagi26/FurSure/",
    isML: true,
  },
];

const projectLength = PROJECTS.length;
const mlLength = PROJECTS.filter((p) => p.isML).length;

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

export type SkillItem = { name: string; logo: string | null };
type SkillCategory = { group: string; items: SkillItem[] };

const SKILLS: SkillCategory[] = [
  {
    group: "Data & Analytics",
    items: [
      {
        name: "Pandas",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Matplotlib",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
      },
      {
        name: "Optimization",
        logo: null,
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Microsoft Excel",
        logo: "https://static.cdnlogo.com/logos/m/96/microsoft-excel.png",
      },
    ],
  },
  {
    group: "Development",
    items: [
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "GraphQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "REST APIs",
        logo: null,
      },
    ],
  },
  {
    group: "ML & Deep Learning",
    items: [
      {
        name: "PyTorch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "TensorFlow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "scikit-learn",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "CNNs",
        logo: null,
      },
      {
        name: "OpenCV",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },

      {
        name: "HuggingFace",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
      {
        name: "Keras",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
      },
      {
        name: "XGBoost",
        logo: null,
      },
    ],
  },
  {
    group: "MLOps & Cloud",
    items: [
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "MLflow",
        logo: null,
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
  {
    group: "Programming",
    items: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  // { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
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
    title: `${projectLength}+ projects shipped`,
    subtitle: `${mlLength} ML models in real-world usage`,
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

const EXPERIENCE = [
  {
    company: "LOUDER",
    role: "Full Stack Developer",
    duration: "Feb. 2025 – Apr. 2025",
    description: [
      "Rebuilt legacy ticketing systems end-to-end using the MERN stack.",
      "Reduced page load times significantly through targeted frontend optimization.",
      "Improved frontend rendering performance by restructuring component hierarchies and data fetching.",
      "Improved database efficiency through schema redesign and strategic indexing.",
    ],
  },
];

export type TagVariant = "info" | "warning" | "success";

export {
  TIMELINE,
  PROJECTS,
  RESEARCH_PIPELINE,
  SKILLS,
  NAV,
  ACHIEVEMENTS,
  EXPERIENCE,
};
