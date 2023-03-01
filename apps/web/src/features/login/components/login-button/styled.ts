import styled from '@emotion/styled'

export interface StyleProps {
  oauthProvider: 'kakao' | 'apple'
}

export const Button = styled.button<StyleProps>`
  align-items: center;
  background-color: ${({ oauthProvider, theme }) =>
    oauthProvider === 'kakao' ? theme.colors.YELLOW_KAKAO : theme.colors.BLACK};
  border-radius: 8px;
  color: ${({ oauthProvider, theme }) =>
    oauthProvider === 'kakao' ? theme.colors.BLACK : theme.colors.WHITE};
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
