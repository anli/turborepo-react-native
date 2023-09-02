import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const WelcomePage = () => {
  return (
    <View style={styles.screen}>
      <Text>WelcomePage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
})
