export interface Rating {
  id: number;
  desc: string;
  writer: string;
  job: string;
}

export const ratingList: Rating[] = [
  {
    id: 1,
    desc: "The Smart Career Path gave me a clear roadmap that turned my confusion into a professional career.",
    writer: "John Carter",
    job: "Web Designer",
  },
  {
    id: 2,
    desc: "Through Real-Task Execution, I built a portfolio with actual industry proof that got me hired.",
    writer: "Sophie Moore",
    job: "Head of Marketing",
  },
  {
    id: 3,
    desc: "The AI Career Lab and expert feedback ensured I was 100% ready for high-stakes technical interviews.",
    writer: "Matt Cannon",
    job: "Lead Developer",
  },
  {
    id: 4,
    desc: "The Aptitude Testing in the discovery phase finally gave me clarity on which career path actually suited my strengths.",
    writer: "Liam Chen",
    job: "Data Analyst",
  },
]


