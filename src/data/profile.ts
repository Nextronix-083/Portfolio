import cvAsset from "@/assets/cv.pdf.asset.json";
import photoAsset from "@/assets/photo.jpg.asset.json";

export const profile = {
  name: "Nazmul Hosen",
  fullName: "Md Nazmul Hosen Bondon",
  title: "Information & Communication Engineer",
  tagline: "Networks, Python, and teaching — engineered end to end.",
  location: "Uttara, Dhaka, Bangladesh",
  email: "mdnazmulhosenbondon@gmail.com",
  phone: "+8801782841067",
  photoUrl: photoAsset.url,
  cvUrl: cvAsset.url,
  cvFileName: "Nazmul_Hosen_CV.pdf",
  summary:
    "Information & Communication Engineering graduate with hands-on university Teaching Assistant experience and a practical network operations background. I guide undergraduate students through lab environments, simplify complex technical topics, and assess academic performance — backed by live ISP network experience on MikroTik RouterOS and applied machine learning in Python.",
  aboutParagraphs: [
    "I completed my BSc in Information and Communication Engineering at Daffodil International University with a CGPA of 3.77/4.00, spending my final year as a Teaching Assistant for networking and engineering courses.",
    "In parallel, I worked as a NOC Representative at an ISP, monitoring live network infrastructure and resolving routing and connectivity issues in MikroTik environments. That operational experience feeds directly back into how I teach — real incidents become classroom examples.",
    "My technical focus sits where networking meets data: RouterOS and TCP/IP on one side, Python, Pandas, and Scikit-Learn on the other. My research applies that combination to cardiovascular risk assessment.",
  ],
  socials: {
    // Replace with your live profile URLs
    linkedin: "https://www.linkedin.com/in/mnazmulhosen/",
    github: "https://github.com/Nextronix-083",
  },
  quickFacts: [
    { label: "Degree", value: "BSc in ICE", detail: "Daffodil International University" },
    { label: "CGPA", value: "3.77 / 4.00", detail: "2022 – 2025" },
    { label: "Certified", value: "MTCNA", detail: "MikroTik RouterOS" },
    { label: "Focus", value: "Networks + ML", detail: "Teaching & operations" },
  ],
};
