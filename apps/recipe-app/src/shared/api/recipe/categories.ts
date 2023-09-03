import axios from 'axios'
import { useQuery } from 'react-query'

type Category = {
  idCategory: string
  strCategory: string | null
  strCategoryThumb: string | null
}

type GetCategoriesResponse = { categories: Category[] }

const getCategories = (): Promise<GetCategoriesResponse> => {
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await axios.get<GetCategoriesResponse>(
        'https://themealdb.com/api/json/v1/1/categories.php',
      )

      resolve(response.data)
    }, 2000)
  })
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
      return data.categories.map(
        ({ idCategory, strCategory, strCategoryThumb }) => ({
          id: idCategory,
          title: strCategory,
          imageUrl: strCategoryThumb,
        }),
      )
    },
  })
}
