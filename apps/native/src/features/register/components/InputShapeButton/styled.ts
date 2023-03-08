import styled from '@emotion/native'

export const Container = styled.View`
  width: 343px;
`

export const Button = styled.Pressable`
  border: 1px solid ${({ theme }) => theme.colors.GREY3};
  border-radius: 8px;
  height: 48px;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
`
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.GREY3};
  font-family: 'Pretendard-Medium';
  font-size: 16px;
`
