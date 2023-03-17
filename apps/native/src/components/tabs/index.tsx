import { useState } from 'react'
import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native'

import * as Styled from './styled'

export interface TabButton {
  label: string
  onClick?: VoidFunction
}

export interface TabsProps {
  buttons: TabButton[]
  onTabChange?: (index: number) => void
  selectedTabIndex?: number
  style?: StyleProp<ViewStyle>
}

function Tabs({
  buttons,
  onTabChange,
  selectedTabIndex = 0,
  style,
}: TabsProps) {
  const onTabClick = (index: number, onClick?: VoidFunction) => {
    onClick?.()
    onTabChange?.(index)
  }
  const [parentWidth, setParentWidth] = useState<Record<string, string>>({})

  const onLayout = (event: LayoutChangeEvent, index: number) => {
    const { width } = event.nativeEvent.layout
    setParentWidth((prevParentWidth) => ({
      ...prevParentWidth,
      [index]: width,
    }))
  }

  return (
    <Styled.Container style={style}>
      {buttons.map(({ label, onClick }, index) => (
        <Styled.Button
          key={`${label}-${index + 1}`}
          onLayout={(event) => {
            onLayout(event, index)
          }}
          onPress={() => {
            onTabClick(index, onClick)
          }}
          isSelected={selectedTabIndex === index}
        >
          <Styled.Text isSelected={selectedTabIndex === index}>
            {label}
          </Styled.Text>
          {selectedTabIndex === index && (
            <Styled.BottomBorder style={{ width: parentWidth[index] }} />
          )}
        </Styled.Button>
      ))}
    </Styled.Container>
  )
}

export default Tabs
