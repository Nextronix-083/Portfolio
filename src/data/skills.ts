export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Networking & Protocols",
    description: "Live ISP operations and classroom-grade fundamentals.",
    items: ["RouterOS (MikroTik)", "TCP/IP", "Subnetting", "Routing Protocols", "Bandwidth Management"],
  },
  {
    category: "Data Science & Analytics",
    description: "From raw data to evaluated models.",
    items: ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Academic & Teaching",
    description: "Instruction, assessment, and student support.",
    items: [
      "Lab Instruction",
      "Student Mentorship",
      "Technical Communication",
      "Academic Assessment",
      "Curriculum Support",
    ],
  },
  {
    category: "Tools & Environment",
    description: "Day-to-day engineering workflow.",
    items: ["Git / GitHub", "Linux Basics", "Jupyter Notebooks", "Flutter & Dart", "Streamlit"],
  },
];
