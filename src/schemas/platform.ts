import { z } from "zod";

//Zod Schema for the platform object validation
export const platformSchema = z.object({
  name: z.string(),
  id: z.number(),
  slug: z.string(),
});

export type Platform = z.infer<typeof platformSchema>;