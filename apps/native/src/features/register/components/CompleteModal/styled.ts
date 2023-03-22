import styled from '@emotion/native'
import { Image } from 'expo-image'

export const Modal = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 16px;
  height: 409px;
  padding: 41px 0 25px 0;
  width: 314px;
`

export const BackDrop = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BLACK}0C;
  bottom: 0;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
`

export const Logo = styled(Image)`
  height: 234px;
  object-fit: cover;
  object-position: center center;
  user-select: none;
  width: 250px;
`

export const Title = styled.Text`
  font-family: 'Pretendard-SemiBold';
  font-size: 18px;
  margin-bottom: 12px;
`
export const Description = styled.Text`
  color: ${(props) => props.theme.colors.SCRIM};
  font-family: 'Pretendard-Medium';
  font-size: 14px;
`
