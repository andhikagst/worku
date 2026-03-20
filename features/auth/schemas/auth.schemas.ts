import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be 2 characters minimum"),
  email: z.email("Invalid email"),
  username: z.string().min(2, "Username must be 2 characters minimum"),
  password: z.string().min(8, "Password must be 8 characters minimum"),
});

export const loginSchema = z.object({
  username: z.string().min(2, "Username must be 2 characters minimum"),
  password: z.string().min(8, "Password must be 8 characters minimum"),
})

export type RegisterPayload = z.infer<typeof registerSchema>;
export type LoginPayload = z.infer<typeof loginSchema>;

