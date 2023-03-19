import styled from '@emotion/native'

export interface StyleProps {
  checked: boolean
}

export const Button = styled.Pressable<StyleProps>`
  align-items: center;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.PRIMARY_BLUE : theme.colors.GREY2};
  border-radius: 12px;
  height: 24px;
  justify-content: center;
  width: 24px;
`
