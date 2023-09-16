import { rest } from 'msw'
import { categoriesResponse, filterResponse } from './responses'

export const handlers = [
  rest.get(
    'https://themealdb.com/api/json/v1/1/categories.php',
    (_, res, ctx) => {
      return res(ctx.json(categoriesResponse))
    },
  ),
  rest.get('https://themealdb.com/api/json/v1/1/filter.php', (_, res, ctx) => {
    return res(ctx.json(filterResponse))
  }),
]
