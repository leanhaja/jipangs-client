import styled from '@emotion/native'

export const Screen = styled.View`
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
  padding: 50px 32px 0;
`
export const Text = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 16px;
`

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
`
