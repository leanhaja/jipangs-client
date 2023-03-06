import { PropsWithChildren } from 'react'

import * as Styled from './styled'

export default function Label({ children }: PropsWithChildren) {
  return <Styled.Label>{children}</Styled.Label>
}
