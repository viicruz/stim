import { s } from "@/utils/api";
import { z } from "zod";
import { useQuery } from "@tanstack/vue-query";
import { platformSchema } from "@/schemas/platform";
import { env } from "@/utils/env";
import { type Ref } from "vue";

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
    })
  ),
  user_platforms: z.boolean(),
});

async function fetchGames(search: Ref<string>) {
  try {
    console.log("fetching games");
    const response = await s.get({
      url: `/games?key=${env.VITE_API_KEY}&genres=action&search=${search.value}&page_size=10`,
      schema: gameSchema,
    });
    console.log("fetched games", response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function useSearchGames(search: Ref<string>) {
  console.log("useGames", search);
  return useQuery({
    queryKey: ["searchGames", search],
    queryFn: () => fetchGames(search),
    staleTime: 1000 * 60,
  });
}
