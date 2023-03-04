import { useState } from 'react'

import { Step } from './enums'
import SelectMajorPage from './select-major'
import SelectRegionPage from './select-region'
import UnivInfoPage from './univ-info'
import UserInfoPage from './user-info'

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(Step.selectMajor)

  switch (step) {
    case Step.selectMajor:
      return <SelectMajorPage setStep={setStep} />
    case Step.selectRegion:
      return <SelectRegionPage setStep={setStep} />
    case Step.userInfo:
      return <UserInfoPage setStep={setStep} />
    case Step.univInfo:
      return <UnivInfoPage />
    default:
      return <SelectMajorPage setStep={setStep} />
  }
}
