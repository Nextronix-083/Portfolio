export type Education = {
  institution: string;
  credential: string;
  detail: string;
  period: string;
  result: string;
};

export const education: Education[] = [
  {
    institution: "Daffodil International University",
    credential: "BSc in Information and Communication Engineering",
    detail: "Faculty of Engineering",
    period: "January 2022 – December 2025",
    result: "CGPA 3.77 / 4.00",
  },
  {
    institution: "Rajshahi Shikkha Board Govt. Model School and College",
    credential: "Higher Secondary School Certificate",
    detail: "Science",
    period: "Session 2017 – 2018",
    result: "GPA 4.67 / 5.00",
  },
  {
    institution: "Rajshahi Govt. Model School and College",
    credential: "Secondary School Certificate",
    detail: "Science",
    period: "Session 2015 – 2016",
    result: "GPA 5.00 / 5.00",
  },
  {
    institution: "Rajshahi Govt. Model School and College",
    credential: "Junior School Certificate",
    detail: "",
    period: "Session 2014",
    result: "GPA 5.00 / 5.00",
  },
];
