import { z } from "zod";

export const studentSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(32, "Name must be at most 32 characters long"),
  email: z
    .string()
    .email("Invalid email")
    .min(3, "Email must be at least 3 characters long")
    .max(32, "Email must be at most 32 characters long"),
  phone: z
    .string()
    .min(11, "Phone number must be at least 11 characters long")
    .max(11, "Phone number must be at most 11 characters long"),
});
