export type Certification = {
  name: string;
  issuer: string;
  date: string;
  bullets: string[];
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "MTCNA — MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "23 November 2024",
    bullets: [
      "Validated proficiency in MikroTik RouterOS and RouterBOARD setup, configuration, and maintenance.",
      "Applied practical concepts directly in production ISP environment operations.",
    ],
    credentialUrl:
      "https://www.linkedin.com/in/mnazmulhosen/details/certifications/",
  },
  {
    name: "Data Science and Machine Learning with Python",
    issuer: "OSTAD",
    date: "2024",
    bullets: [
      "Practical training on Python data structures, Object-Oriented Programming, and algorithmic problem-solving.",
      "Developed and deployed hands-on projects with version control and code quality maintained via GitHub.",
    ],
    credentialUrl:
      "https://www.linkedin.com/in/mnazmulhosen/details/certifications/",
  },
];
