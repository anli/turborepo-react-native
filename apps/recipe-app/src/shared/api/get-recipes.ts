import axios from 'axios'

type Recipe = {
  idMeal: string
  strMeal: string | null
  strMealThumb: string | null
}

type GetRecipesResponse = { meals: Recipe[] | null }

export const getRecipes = async (
  category: string,
): Promise<GetRecipesResponse> => {
  await new Promise(resolve =>
    setTimeout(() => {
      resolve(null)
    }, 3000),
  )
  const response = await axios.get<GetRecipesResponse>(
    `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  )
  return response.data
}
