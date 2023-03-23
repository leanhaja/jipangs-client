import { PressableProps } from 'react-native'

import * as Styled from './styled'

interface TextButtonProps extends PressableProps {
  children: string
}
export default function TextButton({
  children,
  ...pressableProps
}: TextButtonProps) {
  return (
    <Styled.Button {...pressableProps}>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Button>
  )
}
