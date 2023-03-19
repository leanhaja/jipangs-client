import styled from '@emotion/native'

export interface StyleProps {
  isInvalid?: boolean
  isValid?: boolean
}

export const Container = styled.View`
  height: 96px;
  width: 343px;
`

export const Input = styled.TextInput<StyleProps>`
  align-self: stretch;
  border-color: ${({ isInvalid, isValid, theme }) => {
    if (isInvalid) return theme.colors.POINT_RED
    if (isValid) return theme.colors.PRIMARY_BLUE
    return theme.colors.GREY3
  }};
  border-radius: 6px;
  border-width: 1px;
  font-size: 16px;
  height: 48px;
  padding: 0 16px;
  width: 100%;

  &::placeholder {
    font-family: 'Pretendard-Bold';
    font-size: 16px;
  }
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.POINT_RED};
  font-size: 12px;
  margin-top: 8px;
  padding-left: 16px;
`
