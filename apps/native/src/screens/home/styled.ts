import styled from '@emotion/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex: 1;
`

export const Header = styled.View<{ isSearching: boolean }>`
  border-bottom-color: ${({ theme }) => theme.colors.GREY1};
  border-bottom-width: ${({ isSearching }) => !isSearching && '2px'};
  padding: 38.33px 22px 0;
`

export const Main = styled.View`
  flex: 1;
  padding: 0 16px;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => theme.typographies.h2};
  padding-left: 8px;
`
