export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Teaching Assistant",
    organization: "Daffodil International University",
    location: "DSC, Dhaka",
    period: "January 2025 – December 2025",
    bullets: [
      "Facilitated lab sessions and tutorials for undergraduate networking and engineering courses.",
      "Evaluated assignments, lab reports, and quizzes while providing detailed written feedback.",
      "Held office hours mentoring students in lab troubleshooting, subnetting, and programming logic.",
      "Assisted senior faculty with course administration, exam supervision, and grading management.",
    ],
    tags: ["Lab Instruction", "Subnetting", "Assessment", "Mentorship"],
  },
  {
    role: "NOC Representative",
    organization: "Speed Net",
    location: "Ashulia, Dhaka",
    period: "November 2025 – April 2026",
    bullets: [
      "Monitored ISP network infrastructure and resolved routing and connectivity issues in MikroTik environments.",
      "Applied TCP/IP, bandwidth management, and routing protocols in a live operational setting.",
      "Translated industry troubleshooting experience into real-world examples for academic instruction.",
    ],
    tags: ["MikroTik RouterOS", "TCP/IP", "Bandwidth Management", "NOC"],
  },
];
