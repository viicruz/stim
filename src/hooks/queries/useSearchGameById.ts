//Library Imports
import { s } from "@/utils/api";
import { z } from "zod";
import { useQuery } from "@tanstack/vue-query";
import { platformSchema } from "@/schemas/platform";
import { env } from "@/utils/env";
import { type Ref } from "vue";

const gameSchema = z.object({
  slug: z.string(),
  name: z.string(),
  playtime: z.number(),
  platforms: z.array(
    z.object({
      platform: platformSchema,
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
    )
    .nullable(),
  released: z.string(),
  background_image: z.string(),
  rating: z.number(),
});

async function fetchGames(id: Ref<string | string[]>) {
  try {
    console.log("fetching games");
    const response = await s.get({
      url: `/games/${id.value}?key=${env.VITE_API_KEY}&`,
      schema: gameSchema,
    });
    console.log("fetched games", response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function useSearchGameById(id: Ref<string | string[]>) {
  console.log("useGames", id);
  return useQuery({
    queryKey: ["searchGameById", id],
    queryFn: () => fetchGames(id),
    staleTime: 1000 * 60,
  });
}
