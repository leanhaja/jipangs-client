import { TextInputProps } from 'react-native'

import type { StyleProps } from './styled'
import * as Styled from './styled'
import Title from './Title'

interface InputProps extends StyleProps, TextInputProps {
  errorMessage?: string
  isRequired?: boolean
  title?: string
}

export function Input({
  errorMessage,
  isInvalid,
  isRequired,
  isValid,
  title,
  ...textInputProps
}: InputProps) {
  return (
    <Styled.Container>
      {!!title && <Title isRequired={isRequired}>{title}</Title>}
      <Styled.Input
        {...textInputProps}
        isInvalid={isInvalid}
        isValid={isValid}
      />
      {isInvalid && <Styled.Error>{errorMessage}</Styled.Error>}
    </Styled.Container>
  )
}
