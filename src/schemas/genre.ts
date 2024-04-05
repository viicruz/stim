import { z } from "zod";

//Zod Schema for the genre object validation
export const genreSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    games_count: z.number(),
    image_background: z.string(),
});

export type Genre = z.infer<typeof genreSchema>;