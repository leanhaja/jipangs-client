import styled from '@emotion/native'
import { keyframes } from '@emotion/react'

export interface ProgressStyleProps {
  currentStep: number
  totalStep: number
}
const progress = (currentStep: number, totalStep: number) => keyframes`
0%{
  width: ${((currentStep - 1) / totalStep) * 100}%
}
100%{
    width: ${(currentStep + 1 / totalStep) * 100}%

}
`

export const ProgressBar = styled.View<ProgressStyleProps>`
  background-color: ${({ theme }) => theme.colors.GREY6};
  height: 2px;
  position: relative;
  transition: all 2s linear;
  width: 100%;

  &::after {
    animation: ${({ currentStep, totalStep }) =>
        progress(currentStep, totalStep)}
      1s linear;
    background-color: ${({ theme }) => theme.colors.PRIMARY_BLUE};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    width: ${({ currentStep, totalStep }) =>
      `${(currentStep / totalStep) * 100}%`};
  }
`
