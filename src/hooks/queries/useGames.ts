//Libary Imports
import { s } from "@/utils/api";
import { z } from "zod";
import { useQuery } from "@tanstack/vue-query";
import { platformSchema } from "@/schemas/platform";
import { env } from "@/utils/env";


//Zod Schema for the game object validation
const gameSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      id:z.number(),
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
    })
  ),
  user_platforms: z.boolean(),
  
});

//Function to fetch the games from the API, get action games with a page size of 18
async function fetchGames() {
  try {
    console.log("fetching games");
    const response = await s.get({
      url: `/games?key=${env.VITE_API_KEY}&genres=action&page_size=18`,
      schema: gameSchema,
    });
    console.log("fetched games", response);
    return response;
  } catch (error) {
    console.log(error);
  }
}


//export the useQuery function to be used in the component
export function useGames() {
  console.log("useGames");
  return useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    staleTime: 1000 * 60,
  });
}
