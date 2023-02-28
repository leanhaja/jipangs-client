import styled from '@emotion/styled'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 375px;
  width: 100%;

  & > img:first-child {
    margin-bottom: 18px;
  }

  & > img:nth-child(2) {
    margin-bottom: 66px;
  }

  & > button:nth-child(3) {
    margin-bottom: 12px;
  }
`

export const ImageLogo = styled.img`
  height: 265px;
  object-fit: contain;
  object-position: center center;
  width: 252px;
`

export const TextLogo = styled.img`
  height: 51px;
  object-fit: contain;
  object-position: center center;
  width: 139px;
`
