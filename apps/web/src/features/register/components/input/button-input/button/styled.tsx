import styled from '@emotion/styled'

export interface StyleProps {
  borderRadius?: string
  height?: string
  selected?: boolean
  width?: string
}

export const Button = styled.button<StyleProps>`
  ${({ theme }) => theme.typographies.btn1};
  align-items: center;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.PRIMARY_BLUE : theme.colors.GREY1};
  border: 0;
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.WHITE : theme.colors.GREY4};
  cursor: pointer;
  display: flex;
  height: ${({ height }) => height || '44px'};
  justify-content: center;
  width: ${({ width }) => width || '164px'};
`
