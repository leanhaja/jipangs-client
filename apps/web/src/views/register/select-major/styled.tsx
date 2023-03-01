import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 0 16px;
  width: var(--device-max-width);

  & > h1 {
    margin-bottom: 11px;
  }

  & > p {
    margin-bottom: 43px;
  }

  & > div {
    margin-bottom: 162px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 10px;
  width: 100%;
`
