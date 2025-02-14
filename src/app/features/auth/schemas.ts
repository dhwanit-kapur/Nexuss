import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(4, "Minimum of 4 characters"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum of 8 characters"),
});
