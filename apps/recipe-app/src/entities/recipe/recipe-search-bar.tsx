import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { TextInput, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const RecipeSearchBar = ({ ...props }) => {
  return (
    <View className="mx-4 mt-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
      <TextInput
        placeholder="Search any recipe"
        placeholderTextColor={'gray'}
        style={{ fontSize: hp(1.7) }}
        className="flex-1 pl-3 tracking-wider"
        {...props}
      />
      <View className="rounded-full p-3">
        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
      </View>
    </View>
  )
}
