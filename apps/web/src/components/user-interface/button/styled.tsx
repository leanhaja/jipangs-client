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
  align-items: center;
  background-color: ${(props) => {
    if (!props.backgroundColor) {
      return props.disabled
        ? props.theme.colors.DISABLED
        : props.theme.colors.PRIMARY_BLUE
    }
    return props.disabled ? props.theme.colors.DISABLED : props.backgroundColor
  }};
  border: 0;
  border-radius: ${(props) => props.borderRadius || '8px'};
  color: ${(props) => {
    if (!props.color) {
      return props.disabled
        ? props.theme.colors.BLACK
        : props.theme.colors.WHITE
    }
    return props.disabled ? props.theme.colors.BLACK : props.color
  }};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.theme.btn1['font-size']};
  font-weight: ${(props) => props.theme.btn1['font-weight']};
  height: ${(props) => props.height || '59px'};
  justify-content: center;
  width: ${(props) => props.width || '100%'};
`
