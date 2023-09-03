import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PageHeader, RecipeSearchBar, UserGreeting } from '@entities'
import { RecipeCategoryFilter, UserAvatar, UserNotification } from '@features'

export const HomePage = () => {
  const insets = useSafeAreaInsets()

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <MasonryList
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
        ListHeaderComponent={
          <View style={styles.header}>
            <PageHeader
              StartComponent={<UserAvatar />}
              EndComponent={<UserNotification />}
            />
            <UserGreeting />
            <RecipeSearchBar />
            <RecipeCategoryFilter />
          </View>
        }
        renderItem={() => {
          return <Text>Item</Text>
        }}
        data={[]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    gap: 8,
  },
})
