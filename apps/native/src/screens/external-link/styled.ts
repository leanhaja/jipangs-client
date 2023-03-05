import styled from '@emotion/native'
import { Pressable } from 'react-native'

export const Container = styled.View`
  align-items: stretch;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`

export const Header = styled.View`
  align-items: center;
  background-color: pink;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  /* width: 100%; */
  /* flex-basis: 0; */

  /* overflow: hidden; */
  /* font-size: 18px; */
  /* width: 100%; */
  /* text-align: center; */
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  /* background-color: pink;
  width: 100%; */
`

export const Button = styled(Pressable)`
  align-items: center;
  background-color: blue;
  height: 44px;
  justify-content: center;
  width: 44px;
`
