import React, { FC, PropsWithChildren, useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const WelcomePage = () => {
  return (
    <View className="flex-1 justify-center items-center bg-amber-500 space-y-10">
      <WelcomeLogoRing>
        <WelcomeLogoRing delayMs={300} paddingChange={5.5}>
          <Image
            source={require('../../../assets/images/welcome.png')}
            style={{ width: hp(20), height: hp(20) }}
          />
        </WelcomeLogoRing>
      </WelcomeLogoRing>

      <View>
        <WelcomeContent title="Foody" description="Food is always right" />
      </View>
    </View>
  )
}

// entities for welcome content
type WelcomeContentProps = {
  title: string
  description: string
}
const WelcomeContent: FC<WelcomeContentProps> = ({ title, description }) => {
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

// entities for welcome logo ring
type WelcomeLogoRingProps = {
  size?: number
  delayMs?: number
  paddingChange?: number
}
const WelcomeLogoRing: FC<PropsWithChildren<WelcomeLogoRingProps>> = ({
  size = 20,
  delayMs = 100,
  paddingChange = 5,
  children,
}) => {
  const padding = useSharedValue(0)
  const containerClassName = `bg-white/${size} rounded-full`

  useEffect(() => {
    padding.value = 0
    setTimeout(
      () => (padding.value = withSpring(padding.value + hp(paddingChange))),
      delayMs,
    )
  }, [delayMs, padding, paddingChange])

  return (
    <Animated.View className={containerClassName} style={{ padding }}>
      {children}
    </Animated.View>
  )
}
