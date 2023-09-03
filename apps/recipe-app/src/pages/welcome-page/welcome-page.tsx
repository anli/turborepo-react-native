import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { WelcomeContent, WelcomeLogoRing } from './ui'
import { useNavigation } from '@react-navigation/native'

const welcomeImage = require('@assets/images/welcome.png')

export const WelcomePage = () => {
  const { navigate } = useNavigation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('HomePage')
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [navigate])

  return (
    <View
      className="flex-1 justify-center items-center bg-amber-500"
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <WelcomeLogoRing>
        <WelcomeLogoRing delayMs={300} size={5.5}>
          <Image
            source={welcomeImage}
            style={{ width: hp(20), height: hp(20) }}
          />
        </WelcomeLogoRing>
      </WelcomeLogoRing>

      <WelcomeContent title="Foody" description="Food is always right" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
})
