import { Dispatch, SetStateAction } from 'react'

import Title from '../../title'

import Button from './button'
import * as Styled from './styled'

interface ButtonInputProps {
  option1: string
  option2: string
  setValue: Dispatch<SetStateAction<string>>
  title?: string
  value: string
}

export default function ButtonInput({
  option1,
  option2,
  setValue,
  title,
  value,
}: ButtonInputProps) {
  return (
    <Styled.OuterContainer>
      {title && <Title>{title}</Title>}
      <Styled.InnerContainer>
        <Button setValue={setValue} value={value}>
          {option1}
        </Button>
        <Button setValue={setValue} value={value}>
          {option2}
        </Button>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  )
}
