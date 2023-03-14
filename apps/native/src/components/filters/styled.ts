import styled from '@emotion/native'

export const Container = styled.View`
  flex-direction: row;
`

// &:not(:last-of-type) span {
//   position: relative;

//   &::after {
//     background-color: ${({ theme }) => theme.colors.GREY3};
//     content: '';
//     height: 100%;
//     position: absolute;
//     right: calc(-1 * var(--padding-inline));
//     width: 1.5px;
//   }
// }
export const Button = styled.Pressable`
  --padding-inline: 12px;
  /* TODO: CSS Variables 적용 */
  height: 44px;
  padding: 9.5px 12px;
  position: relative;
`

export const Text = styled.Text<{ isSelected?: boolean }>`
  ${({ theme }) => theme.typographies.btn1};
  color: ${({ isSelected, theme: { colors } }) =>
    isSelected ? colors.GREY5 : colors.GREY3};
`

export const RightBorder = styled.View`
  background-color: ${({ theme }) => theme.colors.GREY3};
  height: 100%;
  position: absolute;
  right: -12px;
  width: 1.5px;
`
