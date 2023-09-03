import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

type WelcomeContentProps = {
  title: string
  description: string
}

export const WelcomeContent: FC<WelcomeContentProps> = ({
  title,
  description,
}) => {
  return (
    <View className="flex items-center space-y-2">
      <Text
        style={{ fontSize: hp(7) }}
        className="font-bold text-white tracking-widest"
      >
        {title}
      </Text>
      <Text
        style={{ fontSize: hp(2) }}
        className="font-medium text-white tracking-widest"
      >
        {description}
      </Text>
    </View>
  )
}
