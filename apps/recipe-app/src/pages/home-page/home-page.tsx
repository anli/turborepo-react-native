import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {
  FilterCategoryProvider,
  PageHeader,
  RecipeCategoryFilter,
  RecipeMasonryList,
  UserAvatar,
  UserGreeting,
  UserNotification,
} from '@entities'
import { FilterCategory, RecipeSearchBar } from '@features'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const HomePage = () => {
  const insets = useSafeAreaInsets()

  return (
    <FilterCategoryProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <RecipeMasonryList
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
            <RecipeCategoryFilter
              renderItem={category => <FilterCategory {...category} />}
            />
            <Text
              style={{ fontSize: hp(3) }}
              className="font-semibold text-neutral-600 mx-4 mb-4"
            >
              Recipes
            </Text>
          </View>
        }
      />
    </FilterCategoryProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    gap: 8,
  },
})
