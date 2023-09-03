import React from 'react'
import { FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PageHeader, RecipeSearchBar, UserGreeting } from '@entities'
import { UserAvatar, UserNotification } from '@features'

export const HomePage = () => {
  const insets = useSafeAreaInsets()

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <FlatList
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
          </View>
        }
        renderItem={() => null}
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
