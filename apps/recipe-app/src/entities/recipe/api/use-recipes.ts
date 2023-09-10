import { getRecipes } from '@shared/api'
import { useQuery } from 'react-query'

export type Recipe = {
  id: string
  title: string | null
  imageUrl: string | null
}

export const useRecipes = (category: string, searchText?: string) => {
  return useQuery({
    queryKey: ['recipes', category],
    queryFn: () => getRecipes(category),
    placeholderData: () => {
      return {
        meals: Array.from({ length: 6 }, (_, k) => ({
          idMeal: `${k}`,
          strMeal: null,
          strMealThumb: null,
        })),
      }
    },
    select: data => {
      const mappedData = data.meals?.map(
        ({ idMeal, strMeal, strMealThumb }): Recipe => ({
          id: idMeal,
          title: strMeal,
          imageUrl: strMealThumb,
        }),
      )
      return searchText
        ? mappedData?.filter(_item => _item.title?.includes(searchText))
        : mappedData
    },
  })
}
