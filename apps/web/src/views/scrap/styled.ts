import styled from '@emotion/styled'

export const Container = styled.div`
  padding-bottom: ${({ theme }) => theme.bottomNavigationHeight};
`

export const Header = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.GREY1};

  padding: 34.3px 27px 19px;

  & > h1 {
    ${({ theme }) => theme.h1};
  }
`

export const Main = styled.main`
  padding: 0 16px 148px;
`

export const CardList = styled.ul`
  display: grid;
  grid-gap: 25px 9px;
  grid-template-columns: 1fr 1fr;
`
