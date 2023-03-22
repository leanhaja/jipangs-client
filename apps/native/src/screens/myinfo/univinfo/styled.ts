import styled from '@emotion/native'

export const Screen = styled.View`
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
`

export const GapNarrow = styled.View`
  height: 24px;
`

export const GapWide = styled.View`
  height: 100px;
`
