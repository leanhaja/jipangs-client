import type { PropsWithChildren } from 'react'

import { StyleProps } from './styled'
import * as Styled from './styled'

interface ButtonProps extends StyleProps {
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
}

export default function Button({
  borderRadius,
  children,
  disabled,
  height,
  onClick,
  type = 'button',
  width,
}: PropsWithChildren<ButtonProps>) {
  return (
    <Styled.Button
      borderRadius={borderRadius}
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
