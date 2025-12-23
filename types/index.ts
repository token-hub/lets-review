import { z } from "zod";
import { signUpSchema } from "@/lib/validators";
import { signInSchema } from "@/lib/validators";

export type SignUp = z.infer<typeof signUpSchema>;
export type SignIn = z.infer<typeof signInSchema>;
