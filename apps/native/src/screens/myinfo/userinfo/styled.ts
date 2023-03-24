import styled from '@emotion/native'

export const Screen = styled.View`
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
  padding: 0 16px;
`
export const ButtonContainer = styled.View`
  flex-direction: row;
`

export const GapNarrow = styled.View`
  height: 24px;
`
export const GapWide = styled.View`
  height: 50px;
`
export const GapHoriziontal = styled.View`
  width: 15px;
`
