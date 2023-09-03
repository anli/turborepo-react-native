import React, { FC, PropsWithChildren, useEffect } from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const WelcomePage = () => {
  return (
    <View className="flex-1 justify-center items-center bg-amber-500 space-y-10">
      <StatusBar barStyle="light-content" />

      <WelcomeLogoRing>
        <WelcomeLogoRing delayMs={300} size={5.5}>
          <Image
            source={require('@assets/images/welcome.png')}
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
  delayMs?: number
  size?: number
}
const WelcomeLogoRing: FC<PropsWithChildren<WelcomeLogoRingProps>> = ({
  delayMs = 100,
  size = 5,
  children,
}) => {
  const padding = useSharedValue(0)

  useEffect(() => {
    padding.value = 0
    const timeout = setTimeout(
      () => (padding.value = withSpring(padding.value + hp(size))),
      delayMs,
    )
    return () => {
      clearTimeout(timeout)
    }
  }, [delayMs, padding, size])

  return (
    <Animated.View className="rounded-full bg-white/20" style={{ padding }}>
      {children}
    </Animated.View>
  )
}
