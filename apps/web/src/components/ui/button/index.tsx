import type { PropsWithChildren } from 'react'

import { StyleProps } from './styled'
import * as Styled from './styled'

interface ButtonProps extends StyleProps {
  onClick?: () => void
}

export default function Button({
  borderRadius,
  children,
  disabled,
  height,
  onClick,
  width,
}: PropsWithChildren<ButtonProps>) {
  return (
    <Styled.Button
      borderRadius={borderRadius}
      disabled={disabled}
      height={height}
      onClick={onClick}
      width={width}
    >
      {children}
    </Styled.Button>
  )
}
