import * as Styled from './styled'

import Tabs, { TabsProps } from '@/components/tabs'

export interface SearchTabProps {
  className?: string
  onSearchButtonClick?: VoidFunction
  tabs: TabsProps
}

function SearchTab({ className, onSearchButtonClick, tabs }: SearchTabProps) {
  const { as, buttons, onTabChange } = tabs

  return (
    <Styled.SearchTabContainer className={className}>
      <Tabs as={as} buttons={buttons} onTabChange={onTabChange} />
      <Styled.SearchButton
        ariaLabel="검색 돋보기"
        iconName="search"
        onClick={onSearchButtonClick}
      />
    </Styled.SearchTabContainer>
  )
}

export default SearchTab
