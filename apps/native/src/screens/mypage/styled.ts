import styled from '@emotion/native'

export const Screen = styled.ScrollView`
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
`

export const CardWrapper = styled.View`
  align-items: center;
  height: 260px;
  padding-top: 24px;
`
