import styled from '@emotion/native'

import IconButton from '../icon-button'

export const Nav = styled.View`
  align-items: baseline;

  background-color: #fff;
  bottom: 0;
  box-shadow: 0px -2px 9px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  height: 88px;
  /* position: fixed; */
  justify-content: space-between;
  padding: 3px 11px 0;
  width: 100%;
  z-index: 1;
`

export const Button = styled(IconButton)`
  /* align-items: center; */
  /* color: #bdbdbd; */
  /* display: flex; */
  /* flex-direction: column; */

  &.selected {
    color: initial;
  }

  path {
    fill: #bdbdbd;
  }

  &.selected path {
    fill: initial;
  }
`
