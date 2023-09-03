import React, { memo, useCallback, useState } from 'react'
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'
import clsx from 'clsx'
import { useCategories } from '@shared/api'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

export const RecipeCategoryFilter = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>()
  const { data: categories, isPlaceholderData: isLoading } = useCategories()

  const handlePress = useCallback(
    (id: string) => {
      setSelectedId(prevId => (prevId === id ? undefined : id))
    },
    [setSelectedId],
  )

  const renderItem: ListRenderItem<{
    id: string
    title: string
    imageUrl: string
  }> = ({ item }) => {
    if (isLoading) {
      return <CategorySkeletonMemo />
    }
    return (
      <CategoryMemo
        onPress={handlePress}
        selected={item.id === selectedId}
        {...item}
      />
    )
  }

  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <FlatList
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Animated.View>
  )
}

const Category = ({ id, title, imageUrl, onPress, selected }) => {
  return (
    <Pressable
      className="flex items-center justify-centeractive:opacity-50"
      onPress={() => onPress(id)}
      style={styles.item}
    >
      <View
        className={clsx(
          'rounded-full p-1.5',
          selected ? ' bg-amber-400' : ' bg-black/10',
        )}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: hp(6),
            height: hp(6),
          }}
          className="rounded-full"
        />
      </View>
      <Text
        className="text-neutral-600 text-center"
        numberOfLines={1}
        style={{ fontSize: hp(1.6), width: hp(6) }}
      >
        {title}
      </Text>
    </Pressable>
  )
}

const CategoryMemo = memo(Category)

const CategorySkeleton = () => {
  const size = hp(6) + 6

  return (
    <SkeletonPlaceholder>
      <View className="flex items-center justify-center " style={styles.item}>
        <Image
          source={{ uri: '' }}
          style={{
            width: size,
            height: size,
            borderRadius: size,
          }}
          className="rounded-full"
        />
        <Text numberOfLines={1} style={{ fontSize: hp(1.6), width: size }} />
      </View>
    </SkeletonPlaceholder>
  )
}

const CategorySkeletonMemo = memo(CategorySkeleton)

const styles = StyleSheet.create({
  list: { padding: 16, gap: 16 },
  item: { gap: 8 },
})
