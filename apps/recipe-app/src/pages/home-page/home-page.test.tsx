import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react-native'
import { HomePage } from './home-page'
import { actWait, renderPage } from '@shared/utils-testing'

describe('Given I am at Home Page', () => {
  it('Then I should see correct UI', async () => {
    renderPage(<HomePage />)
    await waitFor(() => expect(screen.getByText('Beef')).toBeDefined())
    await waitFor(() =>
      expect(screen.getByText('Beef and Mustard Pie')).toBeDefined(),
    )

    expect(screen.getByText('Hello, Noman!')).toBeDefined()
    expect(screen.getByText('Make your own food,')).toBeDefined()
    expect(screen.getByText('stay at home')).toBeDefined()
    expect(screen.getByPlaceholderText('Search any recipe')).toBeDefined()
    expect(screen.getByText('Recipes')).toBeDefined()
    expect(screen.getByLabelText('Search Recipe Input')).toBeDefined()
  })

  it('When I search nothing, Then I should see no search result UI', async () => {
    renderPage(<HomePage />)
    await waitFor(() => expect(screen.getByText('Beef')).toBeDefined())
    await waitFor(() =>
      expect(screen.getByText('Beef and Mustard Pie')).toBeDefined(),
    )
    expect(screen.queryByText('Sorry, that search has no results.')).toBeNull()

    fireEvent(
      screen.getByLabelText('Search Recipe Input'),
      'onChangeText',
      'nothing',
    )
    await actWait(500)

    expect(
      await screen.findByText('Sorry, that search has no results.'),
    ).toBeDefined()
    expect(screen.getByText('Please try a different criteria.')).toBeDefined()
  })

  it('When I search Szechuan Beef, Then I should see 1 search result', async () => {
    renderPage(<HomePage />)
    await waitFor(() => expect(screen.getByText('Beef')).toBeDefined())
    await waitFor(() =>
      expect(screen.getByText('Beef and Mustard Pie')).toBeDefined(),
    )

    fireEvent(
      screen.getByLabelText('Search Recipe Input'),
      'onChangeText',
      'Szechuan Beef',
    )
    await actWait(500)

    await waitFor(() =>
      expect(screen.getAllByLabelText('Recipe Item')).toHaveLength(1),
    )
    expect(screen.queryByText('Beef and Mustard Pie')).toBeNull()
  })
})
