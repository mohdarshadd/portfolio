export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score?: string;
}

export const educationEntries: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Lucknow",
    location: "Lucknow, Uttar Pradesh",
    year: "2027",
  },
  {
    degree: "Class 12 (PCM, CBSE)",
    institution: "St. Aloysius College",
    location: "Pilibhit, Uttar Pradesh",
    year: "2022",
    score: "75.8%",
  },
  {
    degree: "Class 10 (CBSE)",
    institution: "St. Aloysius College",
    location: "Pilibhit, Uttar Pradesh",
    year: "2020",
    score: "72.6%",
  },
];
