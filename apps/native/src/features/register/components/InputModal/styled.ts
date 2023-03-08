import styled from '@emotion/native'
import { Animated } from 'react-native'

export const Backdrop = styled(Animated.View)`
  background-color: rgba(0, 0, 0, 0.25);
  bottom: 0;
  justify-content: flex-end;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`

export const Modal = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 16px 16px 0 0;
  bottom: 0;
  padding: 24px 24px 0 24px;
  width: 100%;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.GREY9};
  font-family: 'Pretendard-Medium';
  font-size: 14px;
`

export const GapWide = styled.View`
  height: 16px;
`

export const GapNarrow = styled.View`
  height: 8px;
`
