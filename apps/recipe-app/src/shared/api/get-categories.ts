import axios from 'axios'

type Category = {
  idCategory: string
  strCategory: string | null
  strCategoryThumb: string | null
}

type GetCategoriesResponse = { categories: Category[] | null }

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  await new Promise(resolve =>
    setTimeout(() => {
      resolve(null)
    }, 3000),
  )
  const response = await axios.get<GetCategoriesResponse>(
    'https://themealdb.com/api/json/v1/1/categories.php',
  )
  return response.data
}
