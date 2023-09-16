import React from 'react'
import { screen, waitFor } from '@testing-library/react-native'
import { WelcomePage } from './welcome-page'
import { renderPage } from '@shared/utils-testing'
import { useNavigation } from '@react-navigation/native'

describe('Given I am at Welcome Page', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('Then I should see correct UI, And I should see Home Page', async () => {
    const spyNavigate = jest.spyOn(useNavigation(), 'navigate')

    renderPage(<WelcomePage />)

    expect(await screen.findByText('Foody')).toBeDefined()
    expect(screen.getByText('Food is always right')).toBeDefined()

    jest.runOnlyPendingTimers()

    await waitFor(() => expect(spyNavigate).toBeCalledTimes(1))
    expect(spyNavigate).toBeCalledWith('HomePage')
  })
})
