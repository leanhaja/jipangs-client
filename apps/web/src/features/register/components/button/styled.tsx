import styled from '@emotion/styled'

interface StyleProps {
  isSelected?: boolean
}

export const Button = styled.button<StyleProps>`
  ${({ theme }) => theme.typographies.p2};
  ${({ theme }) => theme.singlelineEllipsis};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.PRIMARY_BLUE : theme.colors.GREY1};
  border-radius: 8px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.WHITE : theme.colors.GREY4};
  height: 38px;
  line-height: 38px;
  max-width: 200px;
  padding: 0 16px;
`
