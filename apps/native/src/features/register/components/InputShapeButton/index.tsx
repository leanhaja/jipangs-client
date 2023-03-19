import { PressableProps } from 'react-native'

import Title from '../Input/Title'

import * as Styled from './styled'

interface InputShapeButtonProps extends PressableProps {
  children: string
  title?: string
}

export default function InputShapeButton({
  children,
  title,
  ...pressableProps
}: InputShapeButtonProps) {
  return (
    <Styled.Container>
      {!!title && <Title>{title}</Title>}
      <Styled.Button {...pressableProps}>
        <Styled.Text>{children}</Styled.Text>
      </Styled.Button>
    </Styled.Container>
  )
}
