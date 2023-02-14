import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react'

import Title from '../../title'

import * as Styled from './styled'

interface TextInputProps {
  name: string
  onBlur: FocusEventHandler
  onChange: ChangeEventHandler
  placeholder?: string
  title?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, onBlur, onChange, placeholder, title }, ref) => (
    <Styled.OuterContainer>
      {title && <Title>{title}</Title>}
      <Styled.InnerContainer>
        <Styled.TextInput
          ref={ref}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
        />
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  )
)

TextInput.displayName = 'TextInput'

export default TextInput
