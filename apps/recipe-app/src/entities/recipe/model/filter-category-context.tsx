import React, { createContext, useContext, useMemo, useState } from 'react'

type UseFilterCategory = {
  data: string
  mutate: React.Dispatch<React.SetStateAction<string>>
}

const FilterCategoryContext = createContext<UseFilterCategory | undefined>(
  undefined,
)

export const FilterCategoryProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState<string>('Beef')

  const value = useMemo(() => {
    return {
      data: categoryId,
      mutate: setCategoryId,
    }
  }, [categoryId])

  return (
    <FilterCategoryContext.Provider value={value}>
      {children}
    </FilterCategoryContext.Provider>
  )
}

export const useFilterCategory = () => {
  const context = useContext(FilterCategoryContext)

  if (context === undefined) {
    throw new Error(
      'useFilterCategory must be used within a FilterContextProvider',
    )
  }

  return context
}
