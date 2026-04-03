import { z } from "zod";

export const updateDetailSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  nick_name: z.string().optional(),
  gender: z.string().optional(),
  date_of_birth: z.string().optional(),
  nationality: z.string().optional(),
  location: z.string().optional(),
});

export const updateContactSchema = z.object({
  email: z.email("Invalid email"),
  alternative_email: z.email("Invalid email").optional().or(z.literal("")),
  phone_number: z.string().optional(),
  whatsapp_number: z.string().optional(),
});

export type UpdateDetailPayload = z.infer<typeof updateDetailSchema>;
export type UpdateContactPayload = z.infer<typeof updateContactSchema>;