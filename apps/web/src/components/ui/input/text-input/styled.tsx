import styled from '@emotion/styled'

export const TextInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.GREY3};
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
  width: 100%;
`

export const InnerContainer = styled.div`
  margin-top: 8px;
`
