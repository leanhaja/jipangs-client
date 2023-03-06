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
  ${({ theme }) => theme.typographies.btn1};
  margin-bottom: 6px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typographies.p4};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
`

export const ProfileImage = styled.img`
  background-color: ${({ theme }) => theme.colors.GREY2};
  border-radius: 28px;
  height: 56px;
  width: 56px;
`
export const Date = styled.time`
  ${({ theme }) => theme.typographies.p4};
  bottom: 0;
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
  background-color: ${({ theme }) => theme.colors.POINT_RED};
  border-radius: 5px;
  height: 10px;
  left: 16px;
  position: absolute;
  top: 12px;
  width: 10px;
`
