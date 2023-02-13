import Title from '../../title'

import * as Styled from './styled'

interface TextInputProps {
  placeholder?: string
  title?: string
}

export default function TextInput({ placeholder, title }: TextInputProps) {
  return (
    <Styled.OuterContainer>
      {title && <Title>{title}</Title>}
      <Styled.InnerContainer>
        <Styled.TextInput placeholder={placeholder} type="text" />
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  )
}
