import styled from '@emotion/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const Screen = styled(KeyboardAwareScrollView)`
  align-items: center;
  align-self: stretch;
  flex: 1;
  justify-content: center;
  padding: 0 16px;
`
export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`

export const GapNarrow = styled.View`
  height: 24px;
`
export const GapWide = styled.View`
  height: 50px;
`
