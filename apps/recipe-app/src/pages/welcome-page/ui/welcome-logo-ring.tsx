import React, { FC, PropsWithChildren, useEffect } from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
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
