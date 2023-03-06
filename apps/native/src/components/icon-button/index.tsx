import type { PropsWithChildren } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

import Icon, { type IconName } from '../icon'

import * as Styled from './styled'

export interface IconButtonProps {
  iconName: IconName
  onClick?: VoidFunction
  style?: StyleProp<ViewStyle>
}

function IconButton({
  children,
  iconName,
  onClick,
  style,
}: PropsWithChildren<IconButtonProps>) {
  return (
    <Styled.Button onPress={onClick} style={style}>
      <Icon iconName={iconName} />
      {children}
    </Styled.Button>
  )
}

export default IconButton
