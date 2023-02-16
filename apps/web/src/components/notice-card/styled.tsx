import styled from '@emotion/styled'

export const Button = styled.button<{ isNotChecked?: boolean }>`
  align-items: center;
  background-color: ${(props) =>
    props.isNotChecked
      ? props.theme.colors.PRIMARYCONTAINER_BLUE
      : 'transparent'};
  display: flex;
  height: 118px;
  justify-content: center;
  position: relative;
  width: 365px;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.btn1['font-size']};
  font-weight: ${(props) => props.theme.btn1['font-weight']};
  margin-bottom: 6px;
`

export const Description = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  font-size: ${(props) => props.theme.p4['font-size']};
  font-weight: ${(props) => props.theme.p4['font-weight']};
  overflow: hidden;
`

export const ProfileImage = styled.img`
  background-color: ${(props) => props.theme.colors.GREY2};
  border-radius: 28px;
  height: 56px;
  width: 56px;
`
export const Date = styled.time`
  bottom: 0;
  font-size: ${(props) => props.theme.p4['font-size']};
  font-weight: ${(props) => props.theme.p4['font-weight']};
  left: 0;
  position: absolute;
`
export const ContentContainer = styled.div`
  height: 82px;
  margin-left: 8px;
  position: relative;
  text-align: left;
  width: 266px;
`

export const RedDot = styled.div`
  background-color: ${(props) => props.theme.colors.POINT_RED};
  border-radius: 5px;
  height: 10px;
  left: 16px;
  position: absolute;
  top: 12px;
  width: 10px;
`
