import { z } from "zod";

export const sessionSetupSchema = z.object({
  job_role: z.string().min(1, "Job role is required"),
  interview_type: z.string().min(1, "Interview type is required"),
  difficulty: z.string().min(1, "Difficulty is required"),
});

export type SessionSetupPayload = z.infer<typeof sessionSetupSchema>;

export interface InterviewMessage {
  role: "user" | "ai";
  content: string;
}

export interface InterviewSession {
  previous_response_id: string;
  messages: InterviewMessage[];
  setup: SessionSetupPayload;
}