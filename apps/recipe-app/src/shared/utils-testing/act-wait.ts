import { act } from '@testing-library/react-native'

export const actWait = async (timeMs = 50) => {
  return act(() => wait(timeMs))
}

const wait = (milliseconds: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, milliseconds)
  })
}
