import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(4, {
    message: "Input data required",
  }),
});
