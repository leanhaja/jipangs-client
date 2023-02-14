import styled from '@emotion/styled'

interface StyleProps {
  isInValid?: boolean
  isValid?: boolean
}

export const TextInput = styled.input<StyleProps>`
  border: 1px solid
    ${(props) => {
      if (props.isValid) {
        return props.theme.colors.PRIMARY_BLUE
      }
      return props.isInValid
        ? props.theme.colors.POINT_RED
        : props.theme.colors.GREY3
    }};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.GREY3};
  height: 48px;
  padding: 0 24px;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.colors.GREY3};
    font-weight: 400;
  }
`

export const OuterContainer = styled.div`
  height: 96px;
  width: 100%;
`

export const InnerContainer = styled.div`
  margin: 8px 0 8px 0;
`

export const Error = styled.p`
  color: ${(props) => props.theme.colors.POINT_RED};
  font-size: 12px;
  padding-left: 19px;
  width: 100%;
`
