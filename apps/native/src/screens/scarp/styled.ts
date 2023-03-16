import styled from '@emotion/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
`

export const Header = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.GREY1};
  border-bottom-width: 2px;
  padding: 34.3px 27px 19px;
`

export const Title = styled.Text`
  ${({ theme }) => theme.typographies.h1};
`

export const Main = styled.View`
  flex: 1;
  padding: 0 16px;
`
