import { StyleProp, ViewStyle, View } from 'react-native'

import * as Styled from './styled'

export interface FilterButton {
  key: string
  label: string
  onClick?: VoidFunction
}

export interface FiltersProps<T extends FilterButton> {
  buttons: T[]
  onFilterChange?: (key: T['key']) => void
  selectedFilterKey?: T['key']
  style?: StyleProp<ViewStyle>
}

function Filters<T extends FilterButton>({
  buttons,
  onFilterChange,
  selectedFilterKey,
  style,
}: FiltersProps<T>) {
  const onFilterClick = (key: string, onClick?: VoidFunction) => {
    onClick?.()
    onFilterChange?.(key)
  }

  const getIsLastButton = (index: number) => index + 1 === buttons.length

  return (
    <Styled.Container style={style}>
      {buttons.map(({ key, label, onClick }, index) => (
        <Styled.Button
          key={`${label}-${index + 1}`}
          onPress={() => {
            onFilterClick(key, onClick)
          }}
        >
          <View>
            <Styled.Text isSelected={selectedFilterKey === key}>
              {label}
            </Styled.Text>
            {!getIsLastButton(index) && <Styled.RightBorder />}
          </View>
        </Styled.Button>
      ))}
    </Styled.Container>
  )
}

export default Filters
