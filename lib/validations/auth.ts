import {z} from "zod";

export const registerSchema = z.object({
  email: z.email({message: "Invalid email"}),
  name: z.string().min(3, {message: "Name must be at least 3 characters"}),
  username: z.string().min(4, {message: "username must be at least 4 characters without spacing"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}),
})

export type RegisterFormValue = z.infer<typeof registerSchema>;