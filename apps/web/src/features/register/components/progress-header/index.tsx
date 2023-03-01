import * as Styled from './styled'
import type { ProgressStyleProps } from './styled'

import IconButton from '@/components/icon-button'

interface ProgressHeaderProps extends ProgressStyleProps {
  onClickBack?: () => void
  title: string
}

export default function ProgressHeader({
  currentStep,
  onClickBack,
  title,
  totalStep,
}: ProgressHeaderProps) {
  return (
    <Styled.ProgressHeader>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        <IconButton
          ariaLabel="before"
          iconName="before_arrow"
          onClick={onClickBack}
          style={{ left: 0, position: 'absolute' }}
        />
      </Styled.Header>
      <Styled.ProgressBar currentStep={currentStep} totalStep={totalStep} />
    </Styled.ProgressHeader>
  )
}
