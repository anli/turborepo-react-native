import React from 'react'
import { HomePage, WelcomePage } from '@pages'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from 'react-query'

const Stack = createNativeStackNavigator()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: 0,
    },
  },
})

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomePage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
