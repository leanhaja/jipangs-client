import styled from '@emotion/styled'

export const Modal = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  height: 409px;
  padding: 41px 0 25px 0;
  width: 314px;
`

export const BackDrop = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BLACK}0C;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 8px;
`

export const Image = styled.img`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  height: 234px;
  object-fit: cover;
  object-position: center center;
  user-select: none;
  width: 250px;
`

export const Title = styled.h1`
  ${({ theme }) => theme.typographies.h3}
  margin-bottom:12px;
`
export const Description = styled.h2`
  ${({ theme }) => theme.typographies.p2}
  color:${({ theme }) => theme.colors.SCRIM};
`
