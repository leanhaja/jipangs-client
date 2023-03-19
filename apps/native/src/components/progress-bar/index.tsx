import * as Styled from './styled'
import { ProgressStyleProps } from './styled'

type ProgressBarProps = ProgressStyleProps

export default function ProgressBar({
  currentStep,
  totalStep,
}: ProgressBarProps) {
  return <Styled.ProgressBar currentStep={currentStep} totalStep={totalStep} />
}
