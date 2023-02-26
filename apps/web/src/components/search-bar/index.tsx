import { useState } from 'react'

import SearchInput, { type SearchInputProps } from './search-input'
import SearchTab, { type SearchTabProps } from './search-tab'

export interface SearchBarProps {
  className?: string
  onSearchInputChange?: SearchInputProps['onSearchInputChange']
  tabs: SearchTabProps['tabs']
}

function SearchBar({ className, onSearchInputChange, tabs }: SearchBarProps) {
  const [isSearching, setIsSearching] = useState(false)

  const onSearchButtonClick = () => {
    setIsSearching(true)
  }

  const onBackButtonClick = () => {
    setIsSearching(false)
  }

  return isSearching ? (
    <SearchInput
      onBackButtonClick={onBackButtonClick}
      onSearchInputChange={onSearchInputChange}
    />
  ) : (
    <SearchTab
      className={className}
      onSearchButtonClick={onSearchButtonClick}
      tabs={tabs}
    />
  )
}

export default SearchBar
