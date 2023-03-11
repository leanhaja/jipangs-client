import styled from '@emotion/native'

export const Container = styled.View`
  align-items: center;
  align-self: flex-start;
  flex-direction: row;
  margin-bottom: 8px;
`
export const Star = styled.Text`
  color: ${({ theme }) => theme.colors.POINT_RED};
`
export const Text = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 12px;
  margin-top: 8px;
`
