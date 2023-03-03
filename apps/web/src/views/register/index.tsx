import { useState } from 'react'

import SelectMajorPage from './select-major'
import SelectRegionPage from './select-region'
import UnivInfoPage from './univ-info'
import UserInfoPage from './user-info'

export enum Step {
  'selectMajor',
  'selectRegion',
  'userInfo',
  'univInfo',
}

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(Step.selectMajor)

  switch (step) {
    case Step.selectMajor:
      return <SelectMajorPage />
    case Step.selectRegion:
      return <SelectRegionPage />
    case Step.userInfo:
      return <UserInfoPage />
    case Step.univInfo:
      return <UnivInfoPage />
    default:
      return <SelectMajorPage />
  }
}
