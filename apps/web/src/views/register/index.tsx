import { useState } from 'react'

import type { Step } from './register'
import SelectMajorPage from './select-major'
import SelectRegionPage from './select-region'
import UnivInfoPage from './univ-info'
import UserInfoPage from './user-info'

import RegisterLayout from '@/features/register/components/layout/layout'

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1)

  const page = {
    1: { component: <SelectMajorPage setStep={setStep} />, title: '전공 선택' },
    2: {
      component: <SelectRegionPage setStep={setStep} />,
      title: '관심 지역',
    },
    3: { component: <UserInfoPage setStep={setStep} />, title: '회원 정보' },
    4: { component: <UnivInfoPage />, title: '대학 정보' },
  }[step]

  return (
    <RegisterLayout currentStep={step} title={page.title} totalStep={4}>
      {page.component}
    </RegisterLayout>
  )
}
