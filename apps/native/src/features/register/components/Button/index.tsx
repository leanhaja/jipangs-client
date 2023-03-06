import { PropsWithChildren } from 'react'

import * as Styled from './styled'

type ButtonProps = PropsWithChildren & Styled.StyleProps

export default function Button({ children, isSelected }: ButtonProps) {
  return (
    <Styled.Button isSelected={isSelected}>
      <Styled.Text isSelected={isSelected}>{children}</Styled.Text>
    </Styled.Button>
  )
}
