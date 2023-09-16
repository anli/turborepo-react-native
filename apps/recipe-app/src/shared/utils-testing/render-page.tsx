import React from 'react'
import { render } from '@testing-library/react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export const queryClientMock = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: false,
    },
    mutations: {
      cacheTime: Infinity,
      retry: false,
    },
  },
})

const { Navigator, Screen } = createNativeStackNavigator()

export const renderPage = (
  Component: React.ReactElement,
  options?: { params?: Partial<object> },
) => {
  const PageComponent = () => <>{Component}</>

  return render(
    <QueryClientProvider client={queryClientMock}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen
            name="Screen"
            component={PageComponent}
            initialParams={options?.params}
          />
        </Navigator>
      </NavigationContainer>
    </QueryClientProvider>,
  )
}
