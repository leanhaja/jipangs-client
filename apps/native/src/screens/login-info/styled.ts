import styled from '@emotion/native'

export const Screen = styled.View`
  align-self: stretch;
  flex: 1;
  padding: 0 16px;
`

export const Label = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 14px;
`
export const IdWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.TRANSPARENT_GRAY};
  border-radius: 8px;
  height: 48px;
  width: 343px;
`

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: 56px;
  justify-content: center;
  padding: 0 32px;
  width: 100%;
`

export const Text = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 16px;
`
