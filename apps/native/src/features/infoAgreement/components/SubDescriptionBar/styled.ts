import styled from '@emotion/native'

export const MainDescriptionBar = styled.View`
  align-items: center;
  flex-direction: row;
  height: 28px;
  justify-content: space-between;
  width: 100%;
`

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 12px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.SCRIM};
  font-family: 'Pretendard-Regular';
  font-size: 13px;
`

export const Button = styled.Pressable``
