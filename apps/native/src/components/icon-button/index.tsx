import type { PropsWithChildren } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

import Icon, { type IconName } from '../icon'

import * as Styled from './styled'

export interface IconButtonProps {
  iconColor?: string
  iconName: IconName
  onClick?: VoidFunction
  scale?: number
  style?: StyleProp<ViewStyle>
}

function IconButton({
  children,
  iconColor = 'black',
  iconName,
  onClick,
  scale,
  style,
}: PropsWithChildren<IconButtonProps>) {
  const isStrokeIcon = iconName === 'before_arrow' || iconName === 'check'

  const iconColorProps = {
    fill: isStrokeIcon ? undefined : iconColor,
    stroke: isStrokeIcon ? iconColor : undefined,
  }

  return (
    <Styled.Button onPress={onClick} style={style}>
      <Icon
        iconName={iconName}
        scaleX={scale}
        scaleY={scale}
        {...iconColorProps}
      />
      {children}
    </Styled.Button>
  )
}

export default IconButton
