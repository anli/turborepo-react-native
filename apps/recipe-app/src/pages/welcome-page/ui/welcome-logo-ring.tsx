import React, { FC, PropsWithChildren } from 'react'
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

type WelcomeLogoRingProps = {
  delayMs?: number
  size?: number
}

export const WelcomeLogoRing: FC<PropsWithChildren<WelcomeLogoRingProps>> = ({
  delayMs = 100,
  size = 5,
  children,
}) => {
  const padding = useSharedValue(0)
  padding.value = withDelay(delayMs, withSpring(padding.value + hp(size)))

  return (
    <Animated.View className="rounded-full bg-white/20" style={{ padding }}>
      {children}
    </Animated.View>
  )
}
