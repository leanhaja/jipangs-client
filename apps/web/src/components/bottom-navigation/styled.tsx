import styled from '@emotion/styled'

import IconButton from '@/components/icon-button'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: space-between;

  padding: 0 0 32.5px;
  box-shadow: 0px -2px 9px rgba(0, 0, 0, 0.1);

  & button:first-of-type {
    margin-left: 12px;
  }

  & button:last-of-type {
    margin-right: 12px;
  }
`

export const Button = styled(IconButton)`
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  & path:last-of-type {
    fill: #000;
  }

  & span {
    position: absolute;
    bottom: 25px;
    line-height: 1;
  }

  &.selected::after {
    bottom: 16px;
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #f0355b;
    border-radius: 50%;
  }
`
