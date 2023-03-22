import styled from '@emotion/native'
import { Image } from 'expo-image'

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.PRIMARYCONTAINER_BLUE};
  border-radius: 16px;
  height: 188px;
  justify-content: center;
  padding: 0 18px;
  width: 343px;
`

export const Profile = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`

export const ProfileImage = styled(Image)`
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 2px solid ${({ theme }) => theme.colors.PRIMARY_BLUE};
  border-radius: 38px;
  height: 76px;
  margin-right: 16px;
  width: 76px;
`

export const ProfileText = styled.View`
  align-items: flex-start;
  height: 76px;
  justify-content: center;
`

export const Name = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 24px;
  margin-bottom: 12px;
`

export const Detail = styled.Text`
  font-family: 'Pretendard-Regular';
  font-size: 12px;
`
export const Box = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.PRIMARY_BLUE};
  border-radius: 9px;
  flex-direction: row;
  height: 49px;
  padding: 0 14px;
  width: 307px;
`

export const CheckBox = styled.View`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.GREY3};
  border-radius: 8px;
  height: 32px;
  justify-content: center;
  margin-right: 12px;
  width: 32px;

  & path {
    fill: ${({ theme }) => theme.colors.PRIMARY_BLUE};
  }
`

export const BoxText = styled.Text`
  color: ${({ theme }) => theme.colors.SCRIM};
  font-size: 12px;
`
