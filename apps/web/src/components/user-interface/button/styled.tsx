import styled from '@emotion/styled'

export interface StyleProps {
  borderRadius?: string
  disabled?: boolean
  height?: string
  width?: string
}

export const Button = styled.button<StyleProps>`
  align-items: center;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.DISABLED
      : props.theme.colors.PRIMARY_BLUE};
  border: 0;
  border-radius: ${(props) => props.borderRadius || '8px'};
  color: ${(props) =>
    props.disabled ? props.theme.colors.BLACK : props.theme.colors.WHITE};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.theme.btn1['font-size']};
  font-weight: ${(props) => props.theme.btn1['font-weight']};
  height: ${(props) => props.height || '59px'};
  justify-content: center;
  width: ${(props) => props.width || '100%'};
`
