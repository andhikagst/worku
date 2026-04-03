export interface Pricing {
  id: number;
  month: number;
  duration_days: number;
  price: number;
  feature: string[];
  variant: "popular" | "default";
}

export const pricingList: Pricing[] = [
  {
    id: 1,
    month: 1,
    duration_days: 30,
    price: 2.00,
    feature: ["Career Discovery", "Smart Roadmap", "WorkU AI", "Smart Job Match", "Video & Materials", "Course Tracker", "Validate Task", "Certifications"],
    variant: "default"
  },
  {
    id: 2,
    month: 6,
    duration_days: 180,
    price: 7.00,
    feature: ["Career Discovery", "Smart Roadmap", "WorkU AI", "Smart Job Match", "Video & Materials", "Course Tracker", "Validate Task", "Certifications"],
    variant: "popular"
  },
  {
    id: 3,
    month: 12,
    duration_days: 365,
    price: 12.00,
    feature: ["Career Discovery", "Smart Roadmap", "WorkU AI", "Smart Job Match", "Video & Materials", "Course Tracker", "Validate Task", "Certifications"],
    variant: "default"
  },
]