import React, { FC } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { clsx } from 'clsx'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Recipe } from '../../api'

type PlaceholderItemProps = {
  index: number
}

export const PlaceholderItem: FC<PlaceholderItemProps> = ({ index }) => {
  const isEven = index % 2 === 0

  return (
    <Animated.View
      className={clsx('mb-4', isEven ? ' pl-4 pr-2' : 'pl-2 pr-4')}
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <SkeletonPlaceholder borderRadius={20}>
        <View style={styles.itemWrapper}>
          <View
            className="rounded-full"
            style={{
              height: index % 3 === 0 ? hp(25) : hp(35),
            }}
          />
          <Text style={{ fontSize: hp(1.5) }} className="ml-2" />
        </View>
      </SkeletonPlaceholder>
    </Animated.View>
  )
}

type ItemProps = {
  index: number
} & Recipe

export const Item: FC<ItemProps> = ({ index, title, imageUrl }) => {
  const isEven = index % 2 === 0

  return (
    <Animated.View
      className={isEven ? ' pl-4 pr-2' : 'pl-2 pr-4'}
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        className="flex justify-center mb-4"
        style={styles.itemWrapper}
      >
        <Image
          source={{ uri: imageUrl ?? '' }}
          style={[
            styles.imageWrapper,
            {
              height: index % 3 === 0 ? hp(25) : hp(35),
            },
          ]}
          className="bg-black/5"
        />
        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-semibold ml-2 text-neutral-600"
        >
          {title}
        </Text>
      </Pressable>
    </Animated.View>
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
