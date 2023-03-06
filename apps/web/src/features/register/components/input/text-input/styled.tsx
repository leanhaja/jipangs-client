import styled from '@emotion/styled'

interface StyleProps {
  isInValid?: boolean
  isValid?: boolean
}

export const TextInput = styled.input<StyleProps>`
  border: 1px solid
    ${({ isInValid, isValid, theme }) => {
      if (isValid) {
        return theme.colors.PRIMARY_BLUE
      }
      return isInValid ? theme.colors.POINT_RED : theme.colors.GREY3
    }};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.GREY3};
  height: 48px;
  padding: 0 24px;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.colors.GREY3};
    font-weight: 400;
  }
`

export const OuterContainer = styled.div`
  width: 100%;
`

export const InnerContainer = styled.div`
  margin-top: 8px;
`

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.POINT_RED};
  font-size: 12px;
  margin-top: 8px;
  padding-left: 19px;
  width: 100%;
`
