import React from 'react'
import { Pressable } from 'react-native'
import { BellIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const UserNotification = () => {
  return (
    <Pressable className="active:opacity-50">
      <BellIcon size={hp(4)} color="gray" />
    </Pressable>
  )
}
