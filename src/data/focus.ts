export type FocusTrack = {
  title: string;
  summary: string;
  points: string[];
};

export const focusTracks: FocusTrack[] = [
  {
    title: "Academic Instruction",
    summary: "Lecturer / Teaching Assistant roles in ICE, CSE, and EEE departments.",
    points: [
      "Lab-based networking and programming instruction",
      "Assessment design and structured student feedback",
      "Curriculum and course administration support",
    ],
  },
  {
    title: "Network Engineering",
    summary: "ISP and enterprise network operations built on RouterOS fundamentals.",
    points: [
      "MikroTik RouterOS configuration and maintenance",
      "Routing, subnetting, and bandwidth management",
      "24/7 NOC monitoring and incident resolution",
    ],
  },
  {
    title: "Applied Machine Learning",
    summary: "Data-driven prediction systems with a healthcare and forecasting focus.",
    points: [
      "Classification pipelines on clinical datasets",
      "Regression forecasting on financial indicators",
      "Deployment of models as usable applications",
    ],
  },
  {
    title: "Research",
    summary: "Publishing at the intersection of IoT monitoring and predictive analytics.",
    points: [
      "Cardiovascular risk assessment manuscript in preparation",
      "End-to-end monitoring framework design",
      "Collaboration under faculty supervision",
    ],
  },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
