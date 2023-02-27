import { PropsWithChildren } from 'react'

import * as Styled from './styled'

export default function Title({ children }: PropsWithChildren) {
  return <Styled.Title>{children}</Styled.Title>
}
