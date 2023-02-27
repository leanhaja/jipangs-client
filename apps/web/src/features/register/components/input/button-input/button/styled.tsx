import styled from '@emotion/styled'

export interface StyleProps {
  borderRadius?: string
  height?: string
  selected?: boolean
  width?: string
}

export const Button = styled.button<StyleProps>`
  align-items: center;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.PRIMARY_BLUE
      : props.theme.colors.GREY1};
  border: 0;
  border-radius: ${(props) => props.borderRadius || '8px'};
  color: ${(props) =>
    props.selected ? props.theme.colors.WHITE : props.theme.colors.GREY4};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.theme.btn1.fontSize};
  font-weight: ${(props) => props.theme.btn1.fontWeight};
  height: ${(props) => props.height || '44px'};
  justify-content: center;
  width: ${(props) => props.width || '164px'};
`
