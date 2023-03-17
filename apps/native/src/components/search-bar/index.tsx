import { useState } from 'react'

import SearchInput, { type SearchInputProps } from './search-input'
import SearchTab, { type SearchTabProps } from './search-tab'

export interface SearchBarProps {
  onBackButtonClick?: SearchInputProps['onBackButtonClick']
  onCancelButtonClick?: SearchInputProps['onCancelButtonClick']
  onModeChange?: (isSearchMode: boolean) => void
  onSearchButtonClick?: SearchTabProps['onSearchButtonClick']
  onSearchInputChange?: SearchInputProps['onSearchInputChange']
  onSubmitEditing?: SearchInputProps['onSubmitEditing']
  tabs: SearchTabProps['tabs']
}

function SearchBar({
  onBackButtonClick,
  onCancelButtonClick,
  onModeChange,
  onSearchButtonClick,
  onSearchInputChange,
  onSubmitEditing,
  tabs,
}: SearchBarProps) {
  const [isSearching, setIsSearching] = useState(false)

  const handleSearchButtonClick = () => {
    setIsSearching(true)
    onModeChange?.(true)
    onSearchButtonClick?.()
  }

  const handleBackButtonClick = () => {
    setIsSearching(false)
    onModeChange?.(false)
    onBackButtonClick?.()
  }

  return isSearching ? (
    <SearchInput
      onBackButtonClick={handleBackButtonClick}
      onCancelButtonClick={onCancelButtonClick}
      onSearchInputChange={onSearchInputChange}
      onSubmitEditing={onSubmitEditing}
    />
  ) : (
    <SearchTab onSearchButtonClick={handleSearchButtonClick} tabs={tabs} />
  )
}

export default SearchBar
