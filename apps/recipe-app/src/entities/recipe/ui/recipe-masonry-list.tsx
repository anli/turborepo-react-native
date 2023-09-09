import React, { FC, ReactNode } from 'react'
import { useRecipes } from '../api'
import MasonryList from '@react-native-seoul/masonry-list'
import { useFilterCategory } from '../model'
import {
  FlatListProps,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { clsx } from 'clsx'
import Animated, { FadeInDown } from 'react-native-reanimated'

type RecipeMasonryListProps = {
  ListHeaderComponent: ReactNode
} & Pick<FlatListProps<unknown>, 'contentContainerStyle'>

export const RecipeMasonryList: FC<RecipeMasonryListProps> = props => {
  const { data: category } = useFilterCategory()
  const { data: recipes = [], isPlaceholderData } = useRecipes(category)

  return (
    <MasonryList
      renderItem={({ item, i }: { item: any; i: number }) => {
        const isEven = i % 2 === 0

        if (isPlaceholderData) {
          return (
            <Animated.View
              className={clsx('mb-4', isEven ? ' pl-4 pr-2' : 'pl-2 pr-4')}
              entering={FadeInDown.delay(i * 100)
                .duration(600)
                .springify()
                .damping(12)}
            >
              <SkeletonPlaceholder borderRadius={20}>
                <View style={styles.itemWrapper}>
                  <View
                    className="rounded-full"
                    style={{
                      height: i % 3 === 0 ? hp(25) : hp(35),
                    }}
                  />
                  <Text
                    style={{ fontSize: hp(1.5) }}
                    className="font-semibold ml-2 text-neutral-600"
                  />
                </View>
              </SkeletonPlaceholder>
            </Animated.View>
          )
        }

        return (
          <View className={isEven ? ' pl-4 pr-2' : 'pl-2 pr-4'}>
            <Pressable
              className="flex justify-center mb-4"
              style={styles.itemWrapper}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={[
                  styles.imageWrapper,
                  {
                    height: i % 3 === 0 ? hp(25) : hp(35),
                  },
                ]}
                className="bg-black/5"
              />
              <Text
                style={{ fontSize: hp(1.5) }}
                className="font-semibold ml-2 text-neutral-600"
              >
                {item.title}
              </Text>
            </Pressable>
          </View>
        )
      }}
      data={recipes}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 20,
  },
  itemWrapper: {
    gap: 8,
  },
})
