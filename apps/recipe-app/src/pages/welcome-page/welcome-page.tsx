import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { WelcomeContent, WelcomeLogoRing } from './ui'

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
