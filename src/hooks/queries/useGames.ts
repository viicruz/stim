import { s } from "@/utils/api";
import { z } from "zod";
import { useQuery, type UseQueryReturnType } from "@tanstack/vue-query";

const gameSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      playtime: z.number(),
      platforms: z.array(
        z.object({
          platform: z.object({
            name: z.string(),
            id: z.number(),
            slug: z.string(),
          }),
        })
      ),
      stores: z
        .array(
          z.object({
            store: z.object({
              name: z.string(),
              id: z.number(),
              slug: z.string(),
            }),
          })
        ).nullable(),
      released: z.string(),
      background_image: z.string(),
      
    })
  ),
  user_platforms: z.boolean(),
});

async function fetchGames() {
  try {
    console.log("fetching games");
    const response = await s.get({
      url: "/games?key=9009824dbc2f4ccbb965bad2a3a6e447&genres=action&",
      schema: gameSchema,
    });
    console.log("fetched games", response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function useGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });
}
