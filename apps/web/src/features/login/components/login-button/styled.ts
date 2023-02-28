import styled from '@emotion/styled'

export interface StyleProps {
  OAuthProvider: 'kakao' | 'apple'
}

export const Button = styled.button<StyleProps>`
  align-items: center;
  background-color: ${({ OAuthProvider, theme }) => {
    if (OAuthProvider === 'kakao') return theme.colors.YELLOW_KAKAO
    return theme.colors.BLACK
  }};
  border-radius: 8px;
  color: ${({ OAuthProvider, theme }) => {
    if (OAuthProvider === 'kakao') return theme.colors.BLACK
    return theme.colors.WHITE
  }};
  display: flex;
  height: 48px;
  justify-content: center;
  width: 343px;
`

export const Text = styled.span`
  font-size: 16;
  font-weight: 500;
  margin-left: 8px;
`
