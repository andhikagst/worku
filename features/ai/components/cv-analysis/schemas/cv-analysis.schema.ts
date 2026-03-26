import { z } from "zod";

export const cvAnalysisSchema = z.object({
  job_title: z.string().min(1, "Job title is required"),
  target_company: z.string().min(1, "Target company is required"),
  industry: z.string().min(1, "Industry is required"),

  work_experience: z.string().min(1, "Work experience is required"),
  highest_education: z.string().min(1, "Education is required"),
  employment_status: z.string().min(1, "Employment status is required"),

  primary_skill: z.string().min(1, "Primary skill is required"),
  tools: z.string().min(1, "Tools is required"),
  spoken_and_written_language: z.string().min(1, "Language is required"),

  primary_analysis_goals: z.string().min(1, "Goal is required"),
  job_applications_sent: z.string().min(1, "Applications sent is required"),
  biggest_concern: z.string().min(1, "Biggest concern is required"),

  additional_request: z.string().optional(),
});

export type CvAnalysisPayload = z.infer<typeof cvAnalysisSchema>;