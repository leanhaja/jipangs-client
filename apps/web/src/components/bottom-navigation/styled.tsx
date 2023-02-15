import styled from '@emotion/styled'

import IconButton from '@/components/icon-button'

export const Nav = styled.nav`
  bottom: 0;
  box-shadow: 0px -2px 9px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0 0 32.5px;

  position: fixed;
  width: 100%;

  & button:first-of-type {
    margin-left: 12px;
  }

  & button:last-of-type {
    margin-right: 12px;
  }
`

export const Button = styled(IconButton)`
  align-items: center;
  display: flex;
  height: 58px;
  justify-content: center;
  padding: 16px;
  width: 58px;

  & path:last-of-type {
    fill: #000;
  }

  & span {
    bottom: 25px;
    line-height: 1;
    position: absolute;
  }

  &.selected::after {
    background-color: #f0355b;
    border-radius: 50%;
    bottom: 16px;
    content: '';
    height: 4px;
    position: absolute;
    width: 4px;
  }
`
