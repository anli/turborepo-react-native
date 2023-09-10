import React, { FC, ReactNode } from 'react'
import { Recipe, useRecipes } from '../../api'
import MasonryList from '@react-native-seoul/masonry-list'
import { useFilterCategory, useFilterRecipe } from '../../model'
import { FlatListProps } from 'react-native'
import { Empty } from '@shared/ui'
import { Item, PlaceholderItem } from './item'

type RecipeMasonryListProps = {
  ListHeaderComponent: ReactNode
} & Pick<FlatListProps<unknown>, 'contentContainerStyle'>

export const RecipeMasonryList: FC<RecipeMasonryListProps> = props => {
  const { data: category } = useFilterCategory()
  const { data: searchText } = useFilterRecipe()
  const { data: recipes = [], isPlaceholderData } = useRecipes(
    category,
    searchText,
  )

  return (
    <MasonryList
      renderItem={({ item, i }: { item: Recipe; i: number }) => {
        if (isPlaceholderData) {
          return <PlaceholderItem index={i} />
        }

        return <Item index={i} {...item} />
      }}
      data={recipes}
      ListEmptyComponent={
        <Empty title="Sorry, that search has no results.\nPlease try a different criteria." />
      }
      {...props}
    />
  )
}
