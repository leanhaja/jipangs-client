import styled from '@emotion/native'
import { Pressable } from 'react-native'

export interface StyleProps {
  isSelected?: boolean
}

export const Button = styled(Pressable)<StyleProps>`
  align-items: center;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.PRIMARY_BLUE : theme.colors.GREY1};
  border-radius: 8px;
  height: 38px;
  justify-content: center;
  padding: 0 16px;
`
export const Text = styled.Text<StyleProps>`
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.WHITE : theme.colors.GREY4};
  font-family: 'Pretendard-SemiBold';
  font-size: 12px;
`
