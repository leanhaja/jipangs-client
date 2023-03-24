import styled from '@emotion/native'

export const InputContainer = styled.View`
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.GREY1};
  border-radius: 16px;
  flex-direction: row;
  height: 57px;
  margin: 0 16px;
`
export const Input = styled.TextInput`
  font-family: 'Pretendard-Medium';
  padding: 0 40px 0 50px;
  width: 100%;
`
export const IconWrapperLeft = styled.View`
  left: 15px;
  position: absolute;
  width: 50px;
`
export const IconWrapperRight = styled.View`
  position: absolute;
  right: 4px;
`
