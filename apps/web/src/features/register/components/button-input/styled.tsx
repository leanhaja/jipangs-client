import styled from '@emotion/styled'

export const ButtonInput = styled.button`
  ${({ theme }) => theme.typographies.p1};
  border: 1px solid ${({ theme }) => theme.colors.GREY3};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.GREY3};
  height: 48px;
  margin-top: 8px;
  padding: 0 24px;
  text-align: left;
  width: 100%;
`
