import styled from '@emotion/native'

export const Container = styled.View`
  flex-direction: row;
  position: relative;
`

export const Button = styled.Pressable<{ isSelected?: boolean }>`
  --bottom-line-width: 2px;
  --padding-inline: 12px;
  /* TODO: CSS Variables 적용 */

  height: 44px;
  padding: 9.5px 12px;
  position: relative;
`

export const Text = styled.Text<{ isSelected?: boolean }>`
  ${({ theme }) => theme.typographies.h3};
  color: ${({ isSelected, theme: { colors } }) =>
    isSelected ? colors.GREY5 : colors.GREY3};
`

export const BottomBorder = styled.View`
  background-color: ${({ theme }) => theme.colors.GREY5};
  bottom: -2px;
  height: 2px;
  position: absolute;
`
