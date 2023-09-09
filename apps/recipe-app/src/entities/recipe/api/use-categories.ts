import { getCategories } from '@shared/api'
import { useQuery } from 'react-query'

export type Category = {
  id: string
  title: string | null
  imageUrl: string | null
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    placeholderData: () => {
      return {
        categories: Array.from({ length: 6 }, (_, k) => ({
          idCategory: `${k}`,
          strCategory: null,
          strCategoryThumb: null,
        })),
      }
    },
    select: data => {
      return data.categories?.map(
        ({ idCategory, strCategory, strCategoryThumb }): Category => ({
          id: idCategory,
          title: strCategory,
          imageUrl: strCategoryThumb,
        }),
      )
    },
  })
}
