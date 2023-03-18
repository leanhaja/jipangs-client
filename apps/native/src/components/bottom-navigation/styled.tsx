import styled from '@emotion/native'

export const Nav = styled.View`
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.WHITE};
  bottom: 0;
  box-shadow: 0px -2px 9px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  height: ${({ theme }) => theme.bottomNavigationHeight};
  justify-content: space-between;
  padding: 17px 43px 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`

export const Text = styled.Text<{ selected?: boolean }>`
  color: ${({ selected, theme: { colors } }) =>
    selected ? colors.BLACK : colors.GREY3};
`
