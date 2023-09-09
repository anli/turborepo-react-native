import React, { FC, ReactElement } from 'react'
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { Category, useCategories } from '../api'

type RecipeCategoryFilterProps = {
  renderItem: (category: Category) => ReactElement
}

export const RecipeCategoryFilter: FC<RecipeCategoryFilterProps> = ({
  renderItem,
}) => {
  const { data: categories, isPlaceholderData: isLoading } = useCategories()

  const handleRenderItem: ListRenderItem<Category> = ({ item }) => {
    if (isLoading) {
      return <CategorySkeleton />
    }

    return renderItem(item)
  }

  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <FlatList
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={handleRenderItem}
        keyExtractor={item => item.id}
      />
    </Animated.View>
  )
}

const CategorySkeleton = () => {
  const size = hp(6) + 6

  return (
    <SkeletonPlaceholder>
      <View className="flex items-center justify-center" style={styles.item}>
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

const styles = StyleSheet.create({
  list: { padding: 16, gap: 16 },
  item: { gap: 8 },
})
