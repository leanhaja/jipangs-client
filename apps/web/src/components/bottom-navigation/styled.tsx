import styled from '@emotion/styled'

import IconButton from '@/components/icon-button'

export const Nav = styled.nav`
  align-items: baseline;
  bottom: 0;
  box-shadow: 0px -2px 9px rgba(0, 0, 0, 0.1);
  display: flex;
  height: ${({ theme }) => theme.bottomNavigationHeight};
  justify-content: space-between;
  padding: 3px 11px 0;
  position: fixed;
  width: 100%;
`

export const Button = styled(IconButton)`
  align-items: center;
  color: ${({ theme }) => theme.colors.GREY3};
  display: flex;
  flex-direction: column;

  &.selected {
    color: initial;
  }

  path {
    fill: ${({ theme }) => theme.colors.GREY3};
  }

  &.selected path {
    fill: initial;
  }
`
