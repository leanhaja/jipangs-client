import { PressableProps } from 'react-native'

import * as Styled from './styled'

interface ItemProps extends PressableProps {
  children: string
}

export default function Item({ children, ...pressableProps }: ItemProps) {
  return (
    <Styled.Item {...pressableProps}>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Item>
  )
}
