import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react'

import Label from '../../label'

import * as Styled from './styled'

interface TextInputProps {
  isInValid?: boolean
  isValid?: boolean
  max?: number | string
  maxLength?: number
  min?: number | string
  minLength?: number
  name: string
  onBlur: FocusEventHandler
  onChange: ChangeEventHandler
  pattern?: string
  placeholder?: string
  required?: boolean
  title?: string
  type?: 'text' | 'email' | 'password'
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      isInValid,
      isValid,
      max,
      maxLength,
      min,
      minLength,
      name,
      onBlur,
      onChange,
      pattern,
      placeholder,
      required,
      title,
      type = 'text',
    },
    ref
  ) => {
    const errorType = {
      birth: '생년월일',
      email: '이메일',
      name: '이름',
      nickname: '닉네임',
    }[name]

    return (
      <Styled.OuterContainer>
        {title && <Label>{title}</Label>}
        <Styled.InnerContainer>
          <Styled.TextInput
            ref={ref}
            isInValid={isInValid}
            isValid={isValid}
            max={max}
            maxLength={maxLength}
            min={min}
            minLength={minLength}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            pattern={pattern}
            placeholder={placeholder}
            required={required}
            type={type}
          />
        </Styled.InnerContainer>
        {isInValid && (
          <Styled.Error>형식에 맞지않는 {errorType}이에요!</Styled.Error>
        )}
      </Styled.OuterContainer>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput
