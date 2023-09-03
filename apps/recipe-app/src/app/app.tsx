import React from 'react'
import { WelcomePage } from '@pages'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
