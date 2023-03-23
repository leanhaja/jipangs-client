import styled from '@emotion/native'
import { Image } from 'expo-image'

export const Screen = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const Logo = styled(Image)`
  height: 265px;
  width: 252px;
`

export const Text = styled.Text`
  font-family: 'Pretendard-Light';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`

export const Bold = styled.Text`
  font-family: 'Pretendard-Medium';
`

export const GapNarrow = styled.View`
  height: 18px;
`

export const GapMedium = styled.View`
  height: 24px;
`

export const GapWide = styled.View`
  height: 66px;
`
