import styled from '@emotion/styled'

export const BackDrop = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.BLACK}0C;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const Modal = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.WHITE};
  border-radius: 16px;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.BLACK}19;
  display: flex;
  flex-direction: column;
  height: 161px;
  justify-content: space-between;
  padding: 35px 0 25px 0;
  width: 314px;
`
export const Message = styled.p`
  ${(props) => props.theme.h4}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`
