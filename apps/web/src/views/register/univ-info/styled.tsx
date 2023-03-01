import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 0 16px;
  width: var(--device-max-width);

  & > button + h1 {
    margin-top: 24px;
  }

  & > button:last-child {
    margin-top: 132px;
  }
`
