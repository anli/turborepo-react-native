import React, { createContext, useContext, useMemo, useState } from 'react'

type UseFilterRecipe = {
  data: string
  mutate: React.Dispatch<React.SetStateAction<string>>
}

const FilterRecipeContext = createContext<UseFilterRecipe | undefined>(
  undefined,
)

export const FilterRecipeProvider = ({ children }) => {
  const [searchText, setSearchText] = useState<string>('')

  const value = useMemo(() => {
    return {
      data: searchText,
      mutate: setSearchText,
    }
  }, [searchText])

  return (
    <FilterRecipeContext.Provider value={value}>
      {children}
    </FilterRecipeContext.Provider>
  )
}

export const useFilterRecipe = () => {
  const context = useContext(FilterRecipeContext)

  if (context === undefined) {
    throw new Error(
      'useFilterRecipe must be used within a FilterContextProvider',
    )
  }

  return context
}
