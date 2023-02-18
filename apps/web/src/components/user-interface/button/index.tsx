import type { PropsWithChildren, MouseEvent } from 'react'

import { StyleProps } from './styled'
import * as Styled from './styled'

interface ButtonProps extends StyleProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  type?: 'submit' | 'button' | 'reset'
}

export default function Button({
  backgroundColor,
  borderRadius,
  children,
  color,
  disabled,
  height,
  onClick,
  type = 'button',
  width,
}: PropsWithChildren<ButtonProps>) {
  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      disabled={disabled}
      height={height}
      onClick={onClick}
      type={type}
      width={width}
    >
      {children}
    </Styled.Button>
  )
}
