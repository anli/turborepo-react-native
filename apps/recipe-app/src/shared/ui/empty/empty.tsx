import React, { FC } from 'react'
import NoResultLottie from '@assets/lottie/no-results.json'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import LottieView from 'lottie-react-native'
import { Text } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

type EmptyProps = {
  title?: string
}

export const Empty: FC<EmptyProps> = ({ title }) => {
  const mappedTitles = title?.split('\\n')
  return (
    <Animated.View
      className="items-center"
      entering={FadeInDown.delay(100).duration(600).springify().damping(12)}
    >
      <LottieView
        source={NoResultLottie}
        autoPlay
        loop
        resizeMode="cover"
        style={{ width: hp(40), height: hp(20) }}
      />
      {!!mappedTitles &&
        mappedTitles.map(_title => (
          <Text
            key={_title}
            style={{ fontSize: hp(2) }}
            className="text-neutral-600"
          >
            {_title}
          </Text>
        ))}
    </Animated.View>
  )
}
