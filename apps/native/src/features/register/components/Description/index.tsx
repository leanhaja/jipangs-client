import { PropsWithChildren } from 'react'

import * as Styled from './styled'

export default function Description({ children }: PropsWithChildren) {
  return <Styled.Description>{children}</Styled.Description>
}
