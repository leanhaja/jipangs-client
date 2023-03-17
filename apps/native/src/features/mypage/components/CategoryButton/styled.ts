import styled from '@emotion/native'

export const Container = styled.Pressable`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  padding: 0 32px;
  width: 100%;
`

export const Text = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 16px;
`
