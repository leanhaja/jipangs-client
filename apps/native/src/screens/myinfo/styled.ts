import styled from '@emotion/native'

export const Screen = styled.View`
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
  padding: 0 16px;
`
export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`

export const GapNarrow = styled.View`
  height: 24px;
`
export const GapWide = styled.View`
  height: 50px;
`
