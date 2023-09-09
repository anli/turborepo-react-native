import React from 'react'
import { Image, Pressable } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const avatarImage = require('@assets/images/avatar.png')

export const UserAvatar = () => {
  return (
    <Pressable className="active:opacity-50">
      <Image source={avatarImage} style={{ height: hp(5), width: hp(5.5) }} />
    </Pressable>
  )
}
