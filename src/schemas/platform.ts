import { z } from "zod";

export const platformSchema = z.object({
  name: z.string(),
  id: z.number(),
  slug: z.string(),
});

export type Platform = z.infer<typeof platformSchema>;