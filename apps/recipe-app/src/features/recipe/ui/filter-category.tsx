import React, { FC } from 'react'
import clsx from 'clsx'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Category } from '@entities'
import { useFilterCategory } from '../../../entities/recipe/model'

export const FilterCategory: FC<Category> = ({ title, imageUrl }) => {
  const { data: filterCategory, mutate: setFilterCategory } =
    useFilterCategory()
  const isSelected = title === filterCategory

  return (
    <Pressable
      className="flex items-center justify-center active:opacity-50"
      onPress={() => setFilterCategory(title ?? '')}
      style={styles.item}
    >
      <View
        className={clsx(
          'rounded-full p-1.5',
          isSelected ? ' bg-amber-400' : ' bg-black/10',
        )}
      >
        <Image
          source={{ uri: imageUrl ?? '' }}
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

const styles = StyleSheet.create({
  item: { gap: 8 },
})
