import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { TextInput, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useFilterRecipe } from '@entities'
import { useDebounce } from 'use-debounce'

export const RecipeSearchBar = ({ ...props }) => {
  const [searchText, setSearchText] = useState('')
  const { mutate } = useFilterRecipe()
  const [debouncedValue] = useDebounce(searchText, 1000)

  useEffect(() => {
    mutate(debouncedValue)
  }, [debouncedValue, mutate])

  return (
    <View className="mx-4 mt-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
      <TextInput
        accessibilityLabel="Search Recipe Input"
        placeholder="Search any recipe"
        placeholderTextColor={'gray'}
        style={{ fontSize: hp(1.7) }}
        className="flex-1 pl-3 tracking-wider"
        value={searchText}
        onChangeText={setSearchText}
        {...props}
      />
      <View className="rounded-full p-3">
        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
      </View>
    </View>
  )
}
