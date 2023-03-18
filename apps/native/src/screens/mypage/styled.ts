import styled from '@emotion/native'

export const Screen = styled.ScrollView`
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
  height: 260px;
`

export const CardWrapper = styled.View`
  align-items: center;
  padding-top: 24px;
`
