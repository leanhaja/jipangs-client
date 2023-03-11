import type { StyleProp, TextStyle, ViewStyle } from 'react-native'

import type { StyleProps } from './styled'
import * as Styled from './styled'

interface ButtonProps<T> extends StyleProps {
  children: T
  onPress: (value: T) => void
  textStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
}

export default function Button<T extends string>({
  children,
  isSelected,
  onPress,
  textStyle,
  viewStyle,
}: ButtonProps<T>) {
  const handlePress = () => {
    onPress(children)
  }
  return (
    <Styled.Button
      isSelected={isSelected}
      onPress={handlePress}
      style={viewStyle}
    >
      <Styled.Text isSelected={isSelected} style={textStyle}>
        {children}
      </Styled.Text>
    </Styled.Button>
  )
}
