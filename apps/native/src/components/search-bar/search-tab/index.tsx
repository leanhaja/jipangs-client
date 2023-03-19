import { StyleProp, ViewStyle } from 'react-native'

import Tabs, { TabsProps } from '../../tabs'

import * as Styled from './styled'

export interface SearchTabProps {
  onSearchButtonClick?: VoidFunction
  style?: StyleProp<ViewStyle>
  tabs: TabsProps
}

function SearchTab({ onSearchButtonClick, style, tabs }: SearchTabProps) {
  return (
    <Styled.SearchTabContainer style={style}>
      <Tabs {...tabs} />
      <Styled.SearchButton iconName="search" onClick={onSearchButtonClick} />
    </Styled.SearchTabContainer>
  )
}

export default SearchTab
