import React from 'react'
import { Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const UserGreeting = () => {
  const userName = 'Noman'

  return (
    <View className="mx-4 space-y-2">
      <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
        Hello, {userName}!
      </Text>
      <View>
        <Text
          style={{ fontSize: hp(3.8) }}
          className="font-semibold text-neutral-600"
        >
          Make your own food,
        </Text>
      </View>
      <Text
        style={{ fontSize: hp(3.8) }}
        className="font-semibold text-neutral-600"
      >
        stay at <Text className="text-amber-400">home</Text>
      </Text>
    </View>
  )
}
