import { server } from './server'
import { queryClientMock } from '../render-page'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  server.resetHandlers()
  queryClientMock.clear()
})

afterAll(() => server.close())
