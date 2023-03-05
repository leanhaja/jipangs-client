import styled from '@emotion/native'

import IconButton from '../../components/icon-button'

export const Container = styled.View`
  align-items: stretch;
  background-color: #fff;
  flex: 1;
`

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled(IconButton)`
  height: 44px;
  width: 44px;
`

export const Title = styled.Text`
  flex-shrink: 1;
  font-size: 18px;
`
