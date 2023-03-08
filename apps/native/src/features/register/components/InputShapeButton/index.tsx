import Title from '../Input/Title'

import * as Styled from './styled'

interface InputShapeButtonProps {
  children: string
  title?: string
}

export default function InputShapeButton({
  children,
  title,
}: InputShapeButtonProps) {
  return (
    <Styled.Container>
      {!!title && <Title>{title}</Title>}
      <Styled.Button>
        <Styled.Text>{children}</Styled.Text>
      </Styled.Button>
    </Styled.Container>
  )
}
