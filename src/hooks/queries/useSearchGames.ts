//Libary Imports
import { s } from "@/utils/api";
import { z } from "zod";
import { useQuery } from "@tanstack/vue-query";
import { platformSchema } from "@/schemas/platform";
import { env } from "@/utils/env";
import { type Ref } from "vue";


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
      released: z.string().nullable(),
      background_image: z.string(),
      rating: z.number(),
    })
  ),
  user_platforms: z.boolean(),
  
  tags: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      slug: z.string(),
      language: z.string(),
      games_count: z.number(),
      image_background: z.string(),
      
    
    
    })
  ).optional(),


  
});


//Function to fetch the games from the API, fetch games with a search query
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


//export the useQuery function to be used in the component
export function useSearchGames(search: Ref<string>) {
  console.log("useGames", search);
  return useQuery({
    queryKey: ["searchGames", search],
    queryFn: () => fetchGames(search),
    staleTime: 1000 * 60,
  });
}
