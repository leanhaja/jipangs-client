import { PropsWithChildren } from 'react'

import * as Styled from './styled'

import ProgressHeader from '@/features/register/components/progress-header'

interface RegisterLayoutProps extends PropsWithChildren {
  currentStep: number
  title: string
  totalStep: number
}

export default function RegisterLayout({
  children,
  currentStep,
  title,
  totalStep,
}: RegisterLayoutProps) {
  return (
    <>
      <ProgressHeader
        currentStep={currentStep}
        title={title}
        totalStep={totalStep}
      />
      <Styled.Layout>{children}</Styled.Layout>
    </>
  )
}
