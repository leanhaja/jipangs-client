import styled from '@emotion/styled'

export interface ProgressStyleProps {
  currentStep: number
  totalStep: number
}

export const ProgressHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 74px;
  justify-content: end;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.levels.FOREGROUND};
`
export const Header = styled.div`
  align-items: center;
  display: flex;
  height: 44px;
  justify-content: center;
  position: relative;
  width: 100%;
`

export const Title = styled.h1`
  ${({ theme }) => theme.h4}
`

export const ProgressBar = styled.div<ProgressStyleProps>`
  background-color: ${({ theme }) => theme.colors.GREY6};
  height: 2px;
  margin-top: 10px;
  position: relative;
  transition: all 2s linear;
  width: 100%;

  &::after {
    background-color: ${({ theme }) => theme.colors.PRIMARY_BLUE};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    transition: width 1s ease-in-out;
    width: ${({ currentStep, totalStep }) =>
      `${(currentStep / totalStep) * 100}%`};
  }
`
