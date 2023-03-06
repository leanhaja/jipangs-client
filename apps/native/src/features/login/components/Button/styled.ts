import styled from '@emotion/native'

export interface StyleProps {
  oauthProvider: 'kakao' | 'apple'
}

export const Button = styled.Pressable<StyleProps>`
  align-items: center;
  background-color: ${({ oauthProvider, theme }) =>
    oauthProvider === 'kakao' ? theme.colors.YELLOW_KAKAO : theme.colors.BLACK};
  border-radius: 8px;
  color: ${({ oauthProvider, theme }) =>
    oauthProvider === 'kakao' ? theme.colors.BLACK : theme.colors.WHITE};
  display: flex;
  flex-direction: row;
  height: 48px;
  justify-content: center;
  width: 343px;
`

export const Text = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  margin-left: 8px;
`
