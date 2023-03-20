import styled from '@emotion/native'

export interface StyleProps {
  checked: boolean
}

export const Button = styled.Pressable<StyleProps>`
  align-items: center;
  border-radius: 12px;
  height: 28px;
  justify-content: center;
  width: 28px;
`
