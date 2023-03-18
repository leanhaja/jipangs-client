import styled from '@emotion/native'

export const Screen = styled.View`
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
  padding: 0 16px;
`

export const Label = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 14px;
`
export const EmailWrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.TRANSPARENT_GRAY};
  border-radius: 8px;
  flex-direction: row;
  gap: 16px;
  height: 48px;
  padding: 0 16px;
  width: 343px;
`

export const Email = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 16px;
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

export const GapWide = styled.View`
  height: 51px;
`

export const GapMedium = styled.View`
  height: 16px;
`

export const GapNarrow = styled.View`
  height: 8px;
`
