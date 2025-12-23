import { z } from "zod";
import { signUpSchema } from "@/lib/validators";
import { signInSchema } from "@/lib/validators";

export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
