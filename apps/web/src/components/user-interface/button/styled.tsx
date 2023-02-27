import styled from '@emotion/styled'

export interface StyleProps {
  backgroundColor?: string
  borderRadius?: string
  color?: string
  disabled?: boolean
  height?: string
  width?: string
}

export const Button = styled.button<StyleProps>`
  ${({ theme }) => theme.typographies.btn1};
  align-items: center;
  background-color: ${({ backgroundColor, disabled, theme }) => {
    if (!backgroundColor) {
      return disabled ? theme.colors.DISABLED : theme.colors.PRIMARY_BLUE
    }
    return disabled ? theme.colors.DISABLED : backgroundColor
  }};
  border: 0;
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  color: ${({ color, disabled, theme }) => {
    if (!color) {
      return disabled ? theme.colors.BLACK : theme.colors.WHITE
    }
    return disabled ? theme.colors.BLACK : color
  }};
  cursor: pointer;
  display: flex;
  height: ${({ height }) => height || '59px'};
  justify-content: center;
  width: ${({ width }) => width || '100%'};
`
