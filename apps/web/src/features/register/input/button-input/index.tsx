import type { UseControllerProps } from 'react-hook-form'

import Title from '../../title'

import Button from './button'
import * as Styled from './styled'

import { FormData } from '@/views/register/register'

interface ButtonInputProps extends UseControllerProps<FormData> {
  option1: string
  option2: string
  title?: string
}

export default function ButtonInput({
  option1,
  option2,
  title,
  ...controllerProps
}: ButtonInputProps) {
  return (
    <Styled.OuterContainer>
      {title && <Title>{title}</Title>}
      <Styled.InnerContainer>
        <Button {...controllerProps}>{option1}</Button>
        <Button {...controllerProps}>{option2}</Button>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  )
}
