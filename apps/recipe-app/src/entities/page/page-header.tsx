import React, { FC, ReactElement } from 'react'
import { View } from 'react-native'

type PageHeaderProps = {
  StartComponent: ReactElement
  EndComponent: ReactElement
}

export const PageHeader: FC<PageHeaderProps> = ({
  StartComponent,
  EndComponent,
}) => {
  return (
    <View className="mx-4 flex-row justify-between items-center my-2">
      {StartComponent}
      {EndComponent}
    </View>
  )
}
